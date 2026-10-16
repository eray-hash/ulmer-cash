import { useState } from 'react'
import SectionHeading from '../SectionHeading'
import Reveal from '../Reveal'
import saeulenTempel from '../../assets/saeulen-tempel.png'
import pillarImmobilien from '../../assets/pillar-immobilien.png'
import pillarZwischenfinanzierung from '../../assets/pillar-zwischenfinanzierung.png'
import pillarNachrangkapital from '../../assets/pillar-nachrangkapital.png'
import pillarKiProjekte from '../../assets/pillar-ki-projekte.png'
import pillarJungunternehmen from '../../assets/pillar-jungunternehmen.png'
import pillarForderungsankauf from '../../assets/pillar-forderungsankauf.png'

const PILLARS = [
  {
    image: pillarImmobilien,
    title: 'Immobilien',
    text: 'Aufwerten und verkaufen. Oder: Grundstück sichern, projektieren, Baugenehmigung holen, weiterverkaufen.',
  },
  {
    image: pillarZwischenfinanzierung,
    title: 'Zwischenfinanzierung',
    text: 'Kurzfristige Finanzierung (6–18 Monate) für Entwickler und Unternehmen in der Kreditlücke, abgesichert durch Sicherheiten.',
  },
  {
    image: pillarNachrangkapital,
    title: 'Nachrangkapital',
    text: 'Nachrangige Darlehen für Wachstumsvorhaben. Höhere Zinsen plus Gewinnbeteiligung möglich.',
  },
  {
    image: pillarKiProjekte,
    title: 'KI-Projekte / Firmen',
    text: 'Beteiligungen an konkreten Anwendungen, z. B. Automatisierung, Cybersicherheit und Immobilientechnologie.',
  },
  {
    image: pillarJungunternehmen,
    title: 'Jungunternehmen / Start-ups',
    text: 'Frühphasenfinanzierung im deutschsprachigen Raum. Ausstieg über Verkauf oder Folgefinanzierung.',
  },
  {
    image: pillarForderungsankauf,
    title: 'Forderungsankauf / Rechnungszwischenfinanzierung',
    text: 'Ankauf von B2B-Rechnungen mit Abschlag. Schnell drehend, kurzfristig, planbar und sicher.',
  },
]

export default function Pillars() {
  const [flipped, setFlipped] = useState<boolean[]>(() => PILLARS.map(() => false))

  const toggleFlip = (i: number) => {
    setFlipped((prev) => prev.map((v, idx) => (idx === i ? !v : v)))
  }

  return (
    <section id="saeulen" className="bg-[#FAF9F6] py-24 md:py-32">
      <Reveal className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading kicker="Die Strategie" title="Sechs Säulen, eine Zielrendite" />
          <img
            src={saeulenTempel}
            alt="Sinnbild der sechs Säulen: Tempel mit sechs Säulen"
            className="h-24 w-auto shrink-0 object-contain sm:h-28"
          />
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((pillar, i) => (
            <div key={pillar.title} className="group relative h-[360px] [perspective:1200px]">
              <button
                type="button"
                onClick={() => toggleFlip(i)}
                aria-pressed={flipped[i]}
                aria-label={`${pillar.title} – Details ${flipped[i] ? 'ausblenden' : 'anzeigen'}`}
                className="relative block h-full w-full cursor-pointer text-left [transform-style:preserve-3d] transition-transform duration-500 ease-out"
                style={{ transform: flipped[i] ? 'rotateY(180deg)' : undefined }}
              >
                <div className="absolute inset-0 flex h-full flex-col border border-navy-100 bg-white p-8 [backface-visibility:hidden] transition-colors group-hover:border-gold-400 group-hover:shadow-[0_8px_30px_-12px_rgba(15,23,42,0.15)]">
                  <span className="font-display text-xs font-bold text-navy-200 transition-colors group-hover:text-gold-500">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <img
                    src={pillar.image}
                    alt={`Sinnbild für ${pillar.title}`}
                    className="mx-auto my-5 h-24 w-auto object-contain"
                  />
                  <h3 className="font-display text-lg font-bold text-navy-800">{pillar.title}</h3>
                  <span className="mt-auto pt-4 text-xs font-semibold uppercase tracking-[0.1em] text-gold-600">
                    Details ansehen →
                  </span>
                </div>

                <div className="absolute inset-0 flex h-full flex-col border border-gold-400 bg-white p-8 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <span className="font-display text-xs font-bold text-navy-200">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-navy-800">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-500">{pillar.text}</p>
                  <span className="mt-auto pt-4 text-xs font-semibold uppercase tracking-[0.1em] text-navy-400">
                    ← Zurück
                  </span>
                </div>
              </button>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
