import SectionHeading from '../SectionHeading'
import { XCircle, CheckCircle2 } from 'lucide-react'

const SITUATION = [
  'Tagesgeld und Anleihen liefern keine zweistelligen Renditen.',
  'Reine Aktienanlagen sind volatil und emotionsgetrieben.',
  'Reine Immobilien sind träge und kapitalbindend.',
]

const ZIELGRUPPEN = ['Family Offices', 'Business Angels', 'Privatinvestoren', 'KMU-Gesellschafter']

export default function MarketOpportunity() {
  return (
    <section id="marktchance" className="bg-navy-900 py-24 text-white md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading kicker="Marktchance" title="Warum ein Fonds mit sechs Säulen" dark />

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-navy-300">
              Die Situation
            </h3>
            <ul className="mt-5 space-y-4">
              {SITUATION.map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <XCircle size={18} className="mt-0.5 shrink-0 text-navy-400" />
                  <span className="text-[15px] leading-relaxed text-navy-100">{line}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-gold-400">
              Die Lösung
            </h3>
            <div className="mt-5 flex items-start gap-3">
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-gold-400" />
              <p className="text-[15px] leading-relaxed text-navy-100">
                Ein Fonds mit stufenweisem Aufbau: ertragsstarke Anlagen am Anfang,
                wachstumsstarke Anlagen am Ende.
              </p>
            </div>
          </div>
        </div>

        <div id="zielgruppe" className="mt-16 border-t border-white/10 pt-12">
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-navy-300">
            Zielgruppe
          </h3>
          <div className="mt-6 flex flex-wrap gap-3">
            {ZIELGRUPPEN.map((z) => (
              <span
                key={z}
                className="rounded-full border border-gold-500/40 bg-white/5 px-5 py-2 text-sm text-navy-100"
              >
                {z}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
