import { useEffect, useRef, useState } from 'react'
import SectionHeading from '../SectionHeading'
import { ArrowRight } from 'lucide-react'

const ROWS = [
  { period: 'Jahr 1', value: 4, note: 'Aufbau, gründliche Prüfung, Liquiditätsreserve' },
  { period: 'Jahr 2', value: 6, note: 'Erste Verkäufe, mehr Projekte in Vorbereitung' },
  { period: 'Jahr 3', value: 7, note: 'Mehr Immobiliengeschäfte' },
  { period: 'Jahr 4–7', value: 8, note: 'Kapital ist auf alle sechs Säulen verteilt' },
  { period: 'Jahr 8', value: 9, note: 'Wiederanlage, das Geschäft wird immer effizienter' },
  { period: 'Jahr 9–10', value: 10, note: 'Reife Portfoliostruktur' },
]

const CHART_W = 620
const CHART_H = 260
const BASE_Y = 210
const TOP_Y = 20
const MAX_VAL = 10
const BAR_W = 62
const GAP = 32
const START_CAPITAL = 100000
const END_CAPITAL = 212000

const SPARBUCH_CAPITAL = 116000
const INFLATION_CAPITAL = 128000

const COMPARE_ROWS = [
  {
    label: 'Klassisches Sparbuch (ca. 1,5 % p.a.)',
    value: SPARBUCH_CAPITAL,
    textColor: 'text-navy-500',
    barColor: 'bg-navy-300',
    note: 'Nominal etwas mehr. Real, nach Inflation, kaum spürbar.',
  },
  {
    label: 'Kaufkrafterhalt bei Inflation (ca. 2,5 % p.a.)',
    value: INFLATION_CAPITAL,
    textColor: 'text-navy-600',
    barColor: 'bg-navy-400',
    note: 'So viel bräuchtest du nur, um die heutige Kaufkraft zu halten.',
  },
  {
    label: 'Ulmer Cash – erwarteter Verlauf',
    value: END_CAPITAL,
    textColor: 'text-gold-700',
    barColor: 'bg-gold-500',
    note: 'Zielrendite. Keine Garantie. Abweichungen möglich.',
  },
]

function barX(i: number) {
  const totalW = ROWS.length * BAR_W + (ROWS.length - 1) * GAP
  const startX = (CHART_W - totalW) / 2
  return startX + i * (BAR_W + GAP)
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3)
}

function fmtEUR(n: number) {
  return Math.round(n).toLocaleString('de-DE') + ' €'
}

export default function ReturnPath() {
  const chartRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const el = chartRef.current
        if (el) {
          const rect = el.getBoundingClientRect()
          const start = window.innerHeight * 0.9
          const end = window.innerHeight * 0.45
          const raw = (start - rect.top) / (start - end)
          setProgress(Math.min(1, Math.max(0, raw)))
        }
        ticking = false
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const eased = easeOutCubic(progress)
  const currentValue = START_CAPITAL + (END_CAPITAL - START_CAPITAL) * eased

  return (
    <section id="renditepfad" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading kicker="Der Weg zur Zielrendite" title="Renditepfad über 10 Jahre" />

        <div ref={chartRef} className="mt-14 border-y border-navy-100 py-10 md:py-14">
          <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-gold-600">
            Beispielrechnung
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-4 sm:gap-6">
            <span className="font-display text-2xl text-navy-300 sm:text-3xl">100.000&nbsp;€</span>
            <ArrowRight size={28} className="text-gold-500" />
            <span className="font-display text-5xl font-bold tabular-nums text-navy-900 sm:text-6xl md:text-7xl">
              {fmtEUR(currentValue)}
            </span>
          </div>
          <p className="mt-3 text-sm text-navy-500">
            Rechnerischer Kapitalrückfluss nach 10 Jahren entlang des Zielrenditepfads.
          </p>
          <p className="mt-1 text-xs text-navy-400">
            Zielrendite. Keine Garantie. Abweichungen möglich.
          </p>
        </div>

        <div className="border-b border-navy-100 py-10 md:py-14">
          <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-gold-600">
            Warum nicht einfach das Sparbuch?
          </p>
          <h3 className="mt-2 max-w-xl font-display text-xl font-bold text-navy-800 sm:text-2xl">
            Inflation und Sparbuch lassen dein Geld kaum wachsen
          </h3>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-navy-500">
            Aus 100.000&nbsp;€ nach 10 Jahren, je nach Weg, gerechnet mit den jeweiligen
            Beispielzinsen.
          </p>

          <div className="mt-8 space-y-6">
            {COMPARE_ROWS.map((row) => (
              <div key={row.label}>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-sm font-semibold text-navy-700">{row.label}</span>
                  <span className={`font-display text-lg font-bold ${row.textColor}`}>
                    {fmtEUR(row.value)}
                  </span>
                </div>
                <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-navy-50">
                  <div
                    className={`h-full rounded-full ${row.barColor}`}
                    style={{ width: `${(row.value / END_CAPITAL) * 100 * eased}%` }}
                  />
                </div>
                <p className="mt-1 text-xs text-navy-400">{row.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3">
            <svg viewBox={`0 0 ${CHART_W} ${CHART_H}`} className="w-full" role="img" aria-label="Balkendiagramm Renditepfad">
              {[2, 4, 6, 8, 10].map((g) => {
                const y = BASE_Y - (g / MAX_VAL) * (BASE_Y - TOP_Y)
                return (
                  <g key={g}>
                    <line x1={30} x2={CHART_W - 10} y1={y} y2={y} stroke="#DCE2EE" strokeWidth={1} />
                    <text x={0} y={y + 4} fontSize="11" fill="#4C5E82" fontFamily="Work Sans, sans-serif">
                      {g}%
                    </text>
                  </g>
                )
              })}

              {ROWS.map((row, i) => {
                const h = (row.value / MAX_VAL) * (BASE_Y - TOP_Y)
                const x = barX(i)
                const y = BASE_Y - h
                const stagger = i * 0.09
                const barProgress = Math.min(1, Math.max(0, (progress - stagger) / (1 - 5 * 0.09)))
                const barEased = easeOutCubic(barProgress)
                return (
                  <g key={row.period}>
                    <rect
                      x={x}
                      y={y}
                      width={BAR_W}
                      height={h}
                      fill="#C9A24B"
                      rx={2}
                      style={{
                        transform: `scaleY(${barEased})`,
                        transformOrigin: `${x + BAR_W / 2}px ${BASE_Y}px`,
                        transition: 'transform 0.05s linear',
                      }}
                    />
                    <text
                      x={x + BAR_W / 2}
                      y={y - 10}
                      textAnchor="middle"
                      fontSize="13"
                      fontWeight={700}
                      fill="#0F172A"
                      fontFamily="Fraunces, serif"
                      style={{ opacity: barEased }}
                    >
                      {row.value}%
                    </text>
                    <text
                      x={x + BAR_W / 2}
                      y={BASE_Y + 22}
                      textAnchor="middle"
                      fontSize="11"
                      fill="#4C5E82"
                      fontFamily="Work Sans, sans-serif"
                    >
                      {row.period}
                    </text>
                  </g>
                )
              })}

              <line x1={30} x2={CHART_W - 10} y1={BASE_Y} y2={BASE_Y} stroke="#B4C0D9" strokeWidth={1.5} />
            </svg>
          </div>

          <div className="lg:col-span-2">
            <ul className="divide-y divide-navy-100">
              {ROWS.map((row) => (
                <li key={row.period} className="flex items-start justify-between gap-4 py-4">
                  <div>
                    <p className="font-display text-sm font-bold uppercase tracking-wide text-navy-800">
                      {row.period}
                    </p>
                    <p className="mt-1 text-sm text-navy-500">{row.note}</p>
                  </div>
                  <span className="shrink-0 font-display text-lg font-bold text-gold-600">
                    {row.value}&nbsp;% p.a.
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
