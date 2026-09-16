import SectionHeading from '../SectionHeading'

const SCENARIOS = [
  {
    name: 'Worst Case',
    probability: 'ca. 10 %',
    returnPa: '3,0 % p.a.',
    payout: '134 von 100',
    accent: 'text-navy-500',
    bar: 'bg-navy-300',
  },
  {
    name: 'Base Case',
    probability: 'ca. 60 %',
    returnPa: '7,0 % p.a.',
    payout: '196 von 100',
    accent: 'text-navy-800',
    bar: 'bg-gold-500',
  },
  {
    name: 'Best Case',
    probability: 'ca. 30 %',
    returnPa: '14,0 % p.a.',
    payout: '356 von 100',
    accent: 'text-navy-800',
    bar: 'bg-navy-800',
  },
]

export default function Scenarios() {
  return (
    <section id="szenarien" className="bg-navy-50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading kicker="Modellrechnung" title="Szenarien" />

        <div className="mt-14 overflow-hidden rounded-sm border border-navy-100 bg-white">
          <div className="hidden grid-cols-4 bg-navy-800 px-8 py-4 md:grid">
            <span className="font-display text-xs font-bold uppercase tracking-[0.14em] text-white">
              Szenario
            </span>
            <span className="font-display text-xs font-bold uppercase tracking-[0.14em] text-white">
              Wahrscheinlichkeit
            </span>
            <span className="font-display text-xs font-bold uppercase tracking-[0.14em] text-white">
              Zielrendite
            </span>
            <span className="font-display text-xs font-bold uppercase tracking-[0.14em] text-white">
              Kapitalrückfluss nach 10 Jahren
            </span>
          </div>

          {SCENARIOS.map((s) => (
            <div
              key={s.name}
              className="grid grid-cols-2 gap-y-3 border-t border-navy-100 px-8 py-6 first:border-t-0 md:grid-cols-4 md:items-center md:gap-y-0"
            >
              <div>
                <span className={`font-display text-base font-bold ${s.accent}`}>{s.name}</span>
                <span className={`mt-1 block h-1 w-10 rounded-full ${s.bar}`} />
              </div>
              <div className="text-sm text-navy-600 md:text-[15px]">{s.probability}</div>
              <div className="text-sm font-semibold text-navy-800 md:text-[15px]">
                {s.returnPa}
              </div>
              <div className="text-sm font-semibold text-navy-800 md:text-[15px]">
                {s.payout}
                <span className="ml-1 text-xs font-normal text-navy-400">EUR</span>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-navy-400">
          Alle Werte Modellrechnungen auf Basis von Marktannahmen. Keine Zusicherung. Keine
          Garantie.
        </p>
      </div>
    </section>
  )
}
