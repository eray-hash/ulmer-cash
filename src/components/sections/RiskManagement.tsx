import SectionHeading from '../SectionHeading'
import { ShieldCheck, SlidersHorizontal, Scale } from 'lucide-react'

const COLUMNS = [
  {
    icon: ShieldCheck,
    title: 'Sicherungen',
    items: [
      'Immobilien: Grundschulden, Sicherungsübereignung',
      'Zwischenfinanzierung/Nachrangkapital: Sicherheiten, Bürgschaften, Geschäftsführerhaftung',
      'Forderungsankauf: Bonitätsprüfung der Schuldner, Rückgriffsrechte',
    ],
  },
  {
    icon: SlidersHorizontal,
    title: 'Steuerung',
    items: [
      'Keine Einzelposition über 30 % des Portfolios',
      'Stufenweise Kapitalauszahlung nach Projektfortschritt',
      'Laufende Überwachung, quartalsweise Berichterstattung',
    ],
  },
  {
    icon: Scale,
    title: 'Rechtlich',
    items: [
      'Due Diligence über eine Anwaltsgesellschaft mbH',
      'Einhaltung von WpHG, KAGB und DSGVO',
    ],
  },
]

export default function RiskManagement() {
  return (
    <section id="risiko" className="bg-navy-900 py-24 text-white md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading kicker="Verantwortung" title="Risikomanagement" dark />

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {COLUMNS.map((col) => {
            const Icon = col.icon
            return (
              <div key={col.title}>
                <div className="flex items-center gap-3">
                  <Icon size={20} className="text-gold-400" strokeWidth={1.75} />
                  <h3 className="font-display text-base font-bold uppercase tracking-[0.1em] text-white">
                    {col.title}
                  </h3>
                </div>
                <ul className="mt-5 space-y-3 border-l border-white/10 pl-5">
                  {col.items.map((item) => (
                    <li key={item} className="text-sm leading-relaxed text-navy-200">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
