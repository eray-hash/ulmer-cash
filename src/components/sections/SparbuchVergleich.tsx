import { Coins, TrendingDown, TrendingUp, Scale } from 'lucide-react'
import Reveal from '../Reveal'

function compoundSeries(rate: number, steps = 10, start = 100000) {
  const arr = [start]
  for (let i = 0; i < steps; i++) arr.push(arr[arr.length - 1] * (1 + rate))
  return arr
}

function decaySeries(rate: number, steps = 10, start = 100000) {
  const arr = [start]
  for (let i = 0; i < steps; i++) arr.push(arr[arr.length - 1] / (1 + rate))
  return arr
}

function stagedSeries(rates: number[], start = 100000) {
  const arr = [start]
  for (const r of rates) arr.push(arr[arr.length - 1] * (1 + r))
  return arr
}

// Dieselbe gestaffelte Rendite wie im Renditepfad oben (4→10 % p.a.), damit beide
// Visualisierungen auf dieselben 100.000 € → ca. 212.000 € hinauslaufen.
const VERMOEGEN = stagedSeries([0.04, 0.06, 0.07, 0.08, 0.08, 0.08, 0.08, 0.09, 0.1, 0.1])
const SPARBUCH = compoundSeries(0.015)
const INFLATION = decaySeries(0.025)

const CHART_W = 640
const CHART_H = 300
const PAD_L = 52
const PAD_R = 16
const PAD_T = 16
const PAD_B = 26
const MIN_V = 60000
const MAX_V = 220000
const GRIDLINES = [60000, 100000, 140000, 180000, 220000]
const YEAR_LABELS = ['Start', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10 Jahre']

function xAt(i: number) {
  return PAD_L + (i / 10) * (CHART_W - PAD_L - PAD_R)
}
function yAt(v: number) {
  return PAD_T + (1 - (v - MIN_V) / (MAX_V - MIN_V)) * (CHART_H - PAD_T - PAD_B)
}
function pathFor(series: number[]) {
  return series.map((v, i) => `${i === 0 ? 'M' : 'L'} ${xAt(i).toFixed(1)} ${yAt(v).toFixed(1)}`).join(' ')
}
function fmtEUR(n: number) {
  return Math.round(n).toLocaleString('de-DE') + ' €'
}

const LEGEND = [
  {
    label: 'Vermögensanlage (4–10 % p.a.)',
    note: 'Kann Inflation übertreffen',
    value: VERMOEGEN[10],
    dot: 'bg-gold-500',
  },
  {
    label: 'Sparbuch (1,5 % p.a.)',
    note: 'Realer Wertverlust',
    value: SPARBUCH[10],
    dot: 'bg-navy-500',
  },
  {
    label: 'Inflation (2,5 % p.a.)',
    note: 'Sinkende Kaufkraft',
    value: INFLATION[10],
    dot: 'bg-[#B5543C]',
  },
]

export default function SparbuchVergleich() {
  return (
    <section className="bg-[#FAF9F6] py-24 md:py-32">
      <Reveal className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <p className="kicker text-gold-600">Kaufkraft erhalten</p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-navy-900 md:text-4xl">
              Sparbuch vs. Inflation
            </h2>
            <p className="mt-3 font-display text-lg italic text-navy-500">
              Warum Geld auf dem Sparbuch real an Wert verlieren kann
            </p>
            <p className="mt-5 text-[15px] leading-relaxed text-navy-600">
              Bei 2,5&nbsp;% Inflation verliert Geld auf dem Sparbuch Jahr für Jahr an
              Kaufkraft. Eine breit gestreute Vermögensanlage kann helfen, der Inflation
              entgegenzuwirken und Vermögen langfristig aufzubauen.
            </p>

            <ul className="mt-8 space-y-6">
              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-400/40 bg-white text-gold-600">
                  <Coins size={18} strokeWidth={1.75} />
                </span>
                <div>
                  <p className="font-display text-sm font-bold text-navy-800">Sparbuch</p>
                  <p className="text-sm text-navy-500">geringe Verzinsung, ca. 1,5&nbsp;% p.a.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-400/40 bg-white text-gold-600">
                  <TrendingDown size={18} strokeWidth={1.75} />
                </span>
                <div>
                  <p className="font-display text-sm font-bold text-navy-800">Inflation</p>
                  <p className="text-sm text-navy-500">ca. 2,5&nbsp;% pro Jahr</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-400/40 bg-white text-gold-600">
                  <TrendingUp size={18} strokeWidth={1.75} />
                </span>
                <div>
                  <p className="font-display text-sm font-bold text-navy-800">Vermögensanlagen</p>
                  <p className="text-sm text-navy-500">Zielrendite 4–10&nbsp;% p.a., gestaffelt</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-sm border border-navy-100 bg-white p-6 md:p-8">
              <h3 className="font-display text-xl font-bold text-navy-900">Beispiel über 10 Jahre</h3>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-navy-400">
                Entwicklung von 100.000&nbsp;€ (indexiert)
              </p>

              <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-stretch lg:gap-5">
              <div className="relative min-w-0 flex-1" style={{ aspectRatio: `${CHART_W} / ${CHART_H}` }}>
                <svg
                  viewBox={`0 0 ${CHART_W} ${CHART_H}`}
                  className="absolute inset-0 h-full w-full"
                  role="img"
                  aria-label="Liniendiagramm: Vermögensanlage, Sparbuch und Inflation über 10 Jahre"
                >
                  <defs>
                    <linearGradient id="vermoegenFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#C9A24B" stopOpacity="0.22" />
                      <stop offset="100%" stopColor="#C9A24B" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {GRIDLINES.map((g) => (
                    <g key={g}>
                      <line
                        x1={PAD_L}
                        x2={CHART_W - PAD_R}
                        y1={yAt(g)}
                        y2={yAt(g)}
                        stroke="#E7E1D4"
                        strokeWidth={1}
                      />
                      <text
                        x={PAD_L - 8}
                        y={yAt(g) + 4}
                        textAnchor="end"
                        fontSize="10"
                        fill="#8A93A8"
                        fontFamily="Work Sans, sans-serif"
                      >
                        {g / 1000}k&nbsp;€
                      </text>
                    </g>
                  ))}

                  <path
                    d={`${pathFor(VERMOEGEN)} L ${xAt(10)} ${yAt(MIN_V)} L ${xAt(0)} ${yAt(MIN_V)} Z`}
                    fill="url(#vermoegenFill)"
                    stroke="none"
                  />

                  <path d={pathFor(SPARBUCH)} fill="none" stroke="#243352" strokeWidth={2} />
                  <path d={pathFor(INFLATION)} fill="none" stroke="#B5543C" strokeWidth={2} />
                  <path d={pathFor(VERMOEGEN)} fill="none" stroke="#C9A24B" strokeWidth={2.75} />

                  {SPARBUCH.map((v, i) => (
                    <circle key={`s${i}`} cx={xAt(i)} cy={yAt(v)} r={2} fill="#243352" />
                  ))}
                  {INFLATION.map((v, i) => (
                    <circle key={`i${i}`} cx={xAt(i)} cy={yAt(v)} r={2} fill="#B5543C" />
                  ))}
                  {VERMOEGEN.map((v, i) => (
                    <circle key={`v${i}`} cx={xAt(i)} cy={yAt(v)} r={2.75} fill="#C9A24B" />
                  ))}

                  {YEAR_LABELS.map((label, i) => (
                    <text
                      key={label}
                      x={xAt(i)}
                      y={CHART_H - 6}
                      textAnchor="middle"
                      fontSize="10"
                      fill="#8A93A8"
                      fontFamily="Work Sans, sans-serif"
                    >
                      {label}
                    </text>
                  ))}
                </svg>
              </div>

              <div className="hidden w-44 shrink-0 flex-col justify-between gap-3 lg:flex">
                <div className="rounded-sm border border-gold-400/50 bg-[#FBF3E1] px-3 py-2">
                  <p className="text-[11px] font-bold leading-tight text-navy-800">
                    Vermögensanlage (4–10&nbsp;% p.a.)
                  </p>
                  <p className="mt-0.5 text-[10px] text-navy-500">Kann Inflation übertreffen</p>
                </div>

                <div className="rounded-sm border border-navy-200 bg-[#F3F5F9] px-3 py-2">
                  <p className="text-[11px] font-bold leading-tight text-navy-800">Sparbuch (1,5&nbsp;% p.a.)</p>
                  <p className="mt-0.5 text-[10px] text-navy-500">Realer Wertverlust</p>
                </div>

                <div className="rounded-sm border border-[#E3C3B6] bg-[#FAEFEA] px-3 py-2">
                  <p className="text-[11px] font-bold leading-tight text-navy-800">Inflation (2,5&nbsp;% p.a.)</p>
                  <p className="mt-0.5 text-[10px] text-navy-500">Sinkende Kaufkraft</p>
                </div>
              </div>
              </div>

              <ul className="mt-6 space-y-2 lg:hidden">
                {LEGEND.map((item) => (
                  <li key={item.label} className="flex items-center justify-between gap-3 text-sm">
                    <span className="flex items-center gap-2">
                      <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${item.dot}`} />
                      <span className="text-navy-700">{item.label}</span>
                    </span>
                    <span className="shrink-0 font-display font-bold text-navy-800">{fmtEUR(item.value)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-start gap-4 border-l-4 border-gold-500 bg-[#FBF3E1] px-6 py-5">
          <Scale size={22} className="mt-0.5 shrink-0 text-gold-600" />
          <p className="font-display text-base font-bold text-navy-900 sm:text-lg">
            Wer Geld nur auf dem Sparbuch parkt, verliert oft mehr Kaufkraft, als er an Zinsen
            gewinnt.
          </p>
        </div>

        <p className="mt-4 text-xs italic text-navy-400">
          Beispielhafte Darstellung. Keine Garantie. Vermögensanlagen sind mit Risiken verbunden.
        </p>
      </Reveal>
    </section>
  )
}
