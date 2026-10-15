import SectionHeading from '../SectionHeading'
import Reveal from '../Reveal'
import { XCircle, CheckCircle2 } from 'lucide-react'

const SITUATION = [
  'Tagesgeld und Anleihen liefern keine zweistelligen Renditen.',
  'Reine Aktienanlagen schwanken stark und werden oft von Gefühlen getrieben.',
  'Reine Immobilien sind träge und kapitalbindend.',
]

const ZIELGRUPPEN = [
  'Vermögensverwalter für Familien',
  'Kapitalgeber für Gründer',
  'Privatinvestoren',
  'KMU-Gesellschafter',
]

export default function MarketOpportunity() {
  return (
    <section id="marktchance" className="bg-white py-24 md:py-32">
      <Reveal className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading kicker="Marktchance" title="Warum eine Vermögensanlage mit sechs Säulen" />

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-navy-400">
              Die Situation
            </h3>
            <ul className="mt-5 space-y-4">
              {SITUATION.map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <XCircle size={18} className="mt-0.5 shrink-0 text-navy-300" />
                  <span className="text-[15px] leading-relaxed text-navy-600">{line}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-gold-600">
              Die Lösung
            </h3>
            <div className="mt-5 flex items-start gap-3">
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-gold-600" />
              <p className="text-[15px] leading-relaxed text-navy-600">
                Eine Vermögensanlage mit stufenweisem Aufbau: ertragsstarke Anlagen am Anfang,
                wachstumsstarke Anlagen am Ende.
              </p>
            </div>
          </div>
        </div>

        <div id="zielgruppe" className="mt-16 border-t border-navy-100 pt-12">
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-navy-400">
            Zielgruppe
          </h3>
          <div className="mt-6 flex flex-wrap gap-3">
            {ZIELGRUPPEN.map((z) => (
              <span
                key={z}
                className="rounded-full border border-gold-400/50 bg-[#FAF8F3] px-5 py-2 text-sm text-navy-700"
              >
                {z}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
