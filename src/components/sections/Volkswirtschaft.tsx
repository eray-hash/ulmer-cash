import SectionHeading from '../SectionHeading'
import Reveal from '../Reveal'
import { PiggyBank, Factory, Landmark } from 'lucide-react'

// Gedanke von Andreas Mayer (24.11.2026): nicht nur über Prozente reden wie Banken, Versicherungen und
// ETF-Anbieter, sondern volkswirtschaftlich — mit Inflation und echten Investitionen in Unternehmen.
// Wichtig: Die Zahl „um die 30 %“ gilt für Unternehmen, NICHT für Anleger. Für Anleger steht direkt daneben
// die Zielrendite und der Risikohinweis.

const KARTEN = [
  {
    icon: PiggyBank,
    titel: 'Sparbuch nach Inflation',
    zahl: 'rund −1 % pro Jahr',
    text: '1,5 % Zinsen bei 2,5 % Inflation: Das Geld wird jedes Jahr weniger wert, auch wenn der Kontostand steigt.',
  },
  {
    icon: Factory,
    titel: 'Kapital in Unternehmen',
    zahl: 'oft zweistellig',
    text: 'Unternehmen erwirtschaften auf eingesetztes Kapital oft deutlich zweistellige Erträge, in guten Jahren auch um die 30 %.',
  },
  {
    icon: Landmark,
    titel: 'Diese Vermögensanlage',
    zahl: '4–10 % pro Jahr Ziel',
    text: 'Sie stellt Kapital für Investitionen in der echten Wirtschaft bereit. Die Zielrendite für Anleger ist nicht garantiert.',
  },
]

export default function Volkswirtschaft() {
  return (
    <section id="volkswirtschaft" className="bg-[#FAF8F3] py-16 md:py-24">
      <Reveal className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading kicker="Unser Blick" title="Volkswirtschaftlich gedacht statt nur Prozente vergleichen" />

        <p className="mx-auto mt-8 max-w-3xl text-center text-[16px] leading-relaxed text-navy-600">
          Banken, Versicherungen und Fondsanbieter sprechen meist nur über die Rendite. Wir rechnen weiter: Was bleibt
          nach der Inflation übrig, und wo arbeitet das Geld wirklich?
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {KARTEN.map(({ icon: Icon, titel, zahl, text }) => (
            <div key={titel} className="rounded-2xl border border-gold-400/40 bg-white p-6 shadow-sm">
              <Icon size={26} className="text-gold-600" />
              <h3 className="mt-4 font-display text-lg font-semibold text-navy-800">{titel}</h3>
              <p className="mt-1 font-display text-2xl font-bold text-gold-600">{zahl}</p>
              <p className="mt-3 text-[15px] leading-relaxed text-navy-600">{text}</p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-[15px] leading-relaxed text-navy-600">
          Genau dort setzt diese Vermögensanlage an: Sie stellt Kapital für Investitionen in der echten Wirtschaft bereit.
        </p>
        <p className="mx-auto mt-4 max-w-3xl rounded-xl border border-navy-100 bg-white px-5 py-4 text-center text-sm leading-relaxed text-navy-500">
          Für Sie als Anleger gilt die Zielrendite von 4 bis 10 % pro Jahr. Sie ist nicht garantiert, ein Verlust bis zum
          Totalverlust ist möglich. Die Erträge von Unternehmen sind keine Zusage für Ihre Anlage.
        </p>
      </Reveal>
    </section>
  )
}
