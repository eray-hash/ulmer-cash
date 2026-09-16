import SectionHeading from '../SectionHeading'

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

function barX(i: number) {
  const totalW = ROWS.length * BAR_W + (ROWS.length - 1) * GAP
  const startX = (CHART_W - totalW) / 2
  return startX + i * (BAR_W + GAP)
}

export default function ReturnPath() {
  return (
    <section id="renditepfad" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading kicker="Der Weg zur Zielrendite" title="Renditepfad über 10 Jahre" />

        <div className="mt-14 grid gap-12 lg:grid-cols-5 lg:gap-16">
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
                return (
                  <g key={row.period}>
                    <rect x={x} y={y} width={BAR_W} height={h} fill="#C9A24B" rx={2} />
                    <text
                      x={x + BAR_W / 2}
                      y={y - 10}
                      textAnchor="middle"
                      fontSize="13"
                      fontWeight={700}
                      fill="#0F172A"
                      fontFamily="Sora, sans-serif"
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

            <div className="mt-8 border-t border-navy-100 pt-6">
              <p className="font-display text-lg font-bold text-navy-800">
                Beispielrechnung: Aus 100.000&nbsp;€ werden rechnerisch{' '}
                <span className="text-gold-600">rund 212.000&nbsp;€ nach 10 Jahren.</span>
              </p>
              <p className="mt-2 text-xs text-navy-400">
                Zielrendite. Keine Garantie. Abweichungen möglich.
              </p>
            </div>
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
