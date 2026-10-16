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

// Dieselbe gestaffelte Rendite wie im Renditepfad (4→10 % p.a.), damit beide
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
  { label: 'Vermögensanlage (4–10 % p.a.)', value: VERMOEGEN[10], dot: 'bg-gold-500' },
  { label: 'Sparbuch (1,5 % p.a.)', value: SPARBUCH[10], dot: 'bg-navy-500' },
  { label: 'Inflation (2,5 % p.a.)', value: INFLATION[10], dot: 'bg-[#B5543C]' },
]

export default function SparbuchChart() {
  return (
    <div className="rounded-sm border border-navy-100 bg-white p-5 md:p-6">
      <h3 className="font-display text-base font-bold text-navy-900 md:text-lg">
        Beispiel über 10 Jahre
      </h3>
      <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.12em] text-navy-400">
        Entwicklung von 100.000&nbsp;€ (indexiert)
      </p>

      <div className="relative mt-4" style={{ aspectRatio: `${CHART_W} / ${CHART_H}` }}>
        <svg
          viewBox={`0 0 ${CHART_W} ${CHART_H}`}
          className="absolute inset-0 h-full w-full"
          role="img"
          aria-label="Liniendiagramm: Vermögensanlage, Sparbuch und Inflation über 10 Jahre"
        >
          <defs>
            <linearGradient id="vermoegenFillHero" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#C9A24B" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#C9A24B" stopOpacity="0" />
            </linearGradient>
          </defs>

          {GRIDLINES.map((g) => (
            <g key={g}>
              <line x1={PAD_L} x2={CHART_W - PAD_R} y1={yAt(g)} y2={yAt(g)} stroke="#E7E1D4" strokeWidth={1} />
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
            fill="url(#vermoegenFillHero)"
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

      <ul className="mt-4 space-y-1.5">
        {LEGEND.map((item) => (
          <li key={item.label} className="flex items-center justify-between gap-3 text-xs">
            <span className="flex items-center gap-2">
              <span className={`h-2 w-2 shrink-0 rounded-full ${item.dot}`} />
              <span className="text-navy-600">{item.label}</span>
            </span>
            <span className="shrink-0 font-display font-bold text-navy-800">{fmtEUR(item.value)}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
