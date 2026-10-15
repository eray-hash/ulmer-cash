import SectionHeading from '../SectionHeading'
import Reveal from '../Reveal'
import { ShieldCheck, SlidersHorizontal, Scale } from 'lucide-react'

const COLUMNS = [
  {
    icon: ShieldCheck,
    title: 'Sicherungen',
    items: [
      'Immobilien: Grundschulden, Sicherungsübereignung',
      'Zwischenfinanzierung/Nachrangkapital: Sicherheiten, Bürgschaften',
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
      'Gründliche Prüfung über eine Anwaltsgesellschaft mbH',
      'Einhaltung von WpHG, KAGB und DSGVO',
    ],
  },
]

export default function RiskManagement() {
  return (
    <section id="risiko" className="bg-white py-24 md:py-32">
      <Reveal className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading kicker="Verantwortung" title="Risikomanagement" />

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {COLUMNS.map((col) => {
            const Icon = col.icon
            return (
              <div key={col.title}>
                <div className="flex items-center gap-3">
                  <Icon size={20} className="text-gold-600" strokeWidth={1.75} />
                  <h3 className="font-display text-base font-bold uppercase tracking-[0.1em] text-navy-800">
                    {col.title}
                  </h3>
                </div>
                <ul className="mt-5 space-y-3 border-l-2 border-navy-100 pl-5">
                  {col.items.map((item) => (
                    <li key={item} className="text-sm leading-relaxed text-navy-600">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </Reveal>
    </section>
  )
}
