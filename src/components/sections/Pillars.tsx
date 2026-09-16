import SectionHeading from '../SectionHeading'
import { Building2, Clock3, Layers3, Cpu, Rocket, ReceiptText } from 'lucide-react'

const PILLARS = [
  {
    icon: Building2,
    title: 'Immobilien',
    text: 'Aufwerten und verkaufen. Oder: Grundstück sichern, projektieren, Baugenehmigung holen, weiterverkaufen.',
  },
  {
    icon: Clock3,
    title: 'Zwischenfinanzierung',
    text: 'Kurzfristige Finanzierung (6–18 Monate) für Entwickler und Unternehmen in der Kreditlücke, abgesichert durch Sicherheiten.',
  },
  {
    icon: Layers3,
    title: 'Nachrangkapital',
    text: 'Nachrangige Darlehen für Wachstumsvorhaben. Höhere Zinsen plus Gewinnbeteiligung möglich.',
  },
  {
    icon: Cpu,
    title: 'KI-Projekte / Firmen',
    text: 'Beteiligungen an konkreten Anwendungen, z. B. Automatisierung, Cybersicherheit und Immobilientechnologie.',
  },
  {
    icon: Rocket,
    title: 'Jungunternehmen / Start-ups',
    text: 'Frühphasenfinanzierung im deutschsprachigen Raum. Ausstieg über Verkauf oder Folgefinanzierung.',
  },
  {
    icon: ReceiptText,
    title: 'Forderungsankauf / Rechnungszwischenfinanzierung',
    text: 'Ankauf von B2B-Rechnungen mit Abschlag. Schnell drehend, kurzfristig, planbar und sicher.',
  },
]

export default function Pillars() {
  return (
    <section id="saeulen" className="bg-[#FAF9F6] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading kicker="Die Strategie" title="Sechs Säulen, eine Zielrendite" />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.title}
                className="group relative border border-navy-100 bg-white p-8 transition-all hover:border-gold-400 hover:shadow-[0_8px_30px_-12px_rgba(15,23,42,0.15)]"
              >
                <span className="font-display text-xs font-bold text-navy-200 transition-colors group-hover:text-gold-500">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="mt-4 flex h-11 w-11 items-center justify-center rounded-full border border-navy-100 bg-navy-50 text-navy-800">
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-navy-800">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-500">{pillar.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
