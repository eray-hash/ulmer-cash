// Stilisierte, beispielhafte Darstellung des echten Investoren-Portals (keine echten Kundendaten).
const CHART_POINTS = [100, 104, 111, 119, 128, 141, 158, 178]

function buildPath(points: number[], width: number, height: number) {
  const max = Math.max(...points)
  const min = Math.min(...points)
  const span = max - min || 1
  const step = width / (points.length - 1)
  return points
    .map((p, i) => {
      const x = i * step
      const y = height - ((p - min) / span) * height
      return `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`
    })
    .join(' ')
}

export default function PortalMockup() {
  const linePath = buildPath(CHART_POINTS, 280, 72)
  const areaPath = `${linePath} L 280 72 L 0 72 Z`

  return (
    <div className="mx-auto w-full max-w-md overflow-hidden rounded-sm border border-navy-100 bg-white shadow-[0_30px_60px_-30px_rgba(15,23,42,0.35)]">
      <div className="flex items-center gap-1.5 border-b border-navy-100 bg-navy-50 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-navy-200" />
        <span className="h-2.5 w-2.5 rounded-full bg-navy-200" />
        <span className="h-2.5 w-2.5 rounded-full bg-navy-200" />
        <span className="ml-3 font-display text-[11px] font-semibold uppercase tracking-[0.12em] text-navy-500">
          Ulmer Cash · Investoren-Portal
        </span>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.1em] text-navy-400">
              Eingezahltes Kapital
            </p>
            <p className="mt-1 font-display text-xl font-bold text-navy-800">250.000&nbsp;€</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.1em] text-navy-400">Aktueller Wert</p>
            <p className="mt-1 font-display text-xl font-bold text-navy-800">
              268.400&nbsp;€
              <span className="ml-2 text-sm font-semibold text-gold-600">+7,4&nbsp;%</span>
            </p>
          </div>
        </div>

        <svg viewBox="0 0 280 72" className="mt-6 w-full" role="img" aria-label="Beispielhafte Wertentwicklung">
          <path d={areaPath} fill="#FBF6EB" />
          <path d={linePath} fill="none" stroke="#C9A24B" strokeWidth={2} />
        </svg>

        <div className="mt-4 flex items-center justify-between text-[11px] text-navy-400">
          <span>Jahr 1</span>
          <span>Jahr 10</span>
        </div>
      </div>

      <p className="border-t border-navy-100 bg-navy-50 px-4 py-2.5 text-center text-[11px] text-navy-400">
        Beispielhafte Darstellung · keine echten Kundendaten · keine Garantie
      </p>
    </div>
  )
}
