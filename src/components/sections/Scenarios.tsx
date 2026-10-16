import SectionHeading from '../SectionHeading'
import Reveal from '../Reveal'
import euroBanknoten from '../../assets/euro-banknoten.jpg'

const SCENARIOS = [
  {
    name: 'Schwacher Verlauf',
    probability: 'ca. 10 %',
    returnPa: '3,0 % p.a.',
    payout: 'Aus 100 € werden 134 €',
    accent: 'text-navy-500',
    bar: 'bg-navy-300',
    imageFilter: 'grayscale(60%) brightness(0.95)',
    imageOpacity: 'opacity-20',
  },
  {
    name: 'Erwarteter Verlauf',
    probability: 'ca. 60 %',
    returnPa: '7,0 % p.a.',
    payout: 'Aus 100 € werden 196 €',
    accent: 'text-navy-800',
    bar: 'bg-gold-500',
    imageFilter: 'saturate(1.05)',
    imageOpacity: 'opacity-30',
  },
  {
    name: 'Starker Verlauf',
    probability: 'ca. 30 %',
    returnPa: '14,0 % p.a.',
    payout: 'Aus 100 € werden 356 €',
    accent: 'text-navy-800',
    bar: 'bg-gold-700',
    imageFilter: 'saturate(1.4) brightness(1.05)',
    imageOpacity: 'opacity-40',
  },
]

export default function Scenarios() {
  return (
    <section id="szenarien" className="bg-[#FAF9F6] py-16 md:py-24">
      <Reveal className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading kicker="Modellrechnung" title="Szenarien" />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {SCENARIOS.map((s) => (
            <div
              key={s.name}
              className="relative overflow-hidden rounded-sm border border-navy-100 bg-white"
            >
              <img
                src={euroBanknoten}
                alt=""
                aria-hidden="true"
                className={`absolute inset-0 h-full w-full object-cover ${s.imageOpacity}`}
                style={{ filter: s.imageFilter }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-white/85 to-white" />

              <div className="relative p-8">
                <span className={`font-display text-lg font-bold ${s.accent}`}>{s.name}</span>
                <span className={`mt-2 block h-1 w-10 rounded-full ${s.bar}`} />

                <dl className="mt-6 space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <dt className="text-navy-400">Wahrscheinlichkeit</dt>
                    <dd className="font-semibold text-navy-700">{s.probability}</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-navy-400">Zielrendite</dt>
                    <dd className="font-semibold text-navy-800">{s.returnPa}</dd>
                  </div>
                  <div className="flex items-center justify-between border-t border-navy-100 pt-3">
                    <dt className="text-navy-400">Nach 10 Jahren</dt>
                    <dd className="font-display text-base font-bold text-gold-700">{s.payout}</dd>
                  </div>
                </dl>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-navy-400">
          Alle Werte Modellrechnungen auf Basis von Marktannahmen. Keine Zusicherung. Keine
          Garantie.
        </p>
      </Reveal>
    </section>
  )
}
