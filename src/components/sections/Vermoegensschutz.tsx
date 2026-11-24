import SectionHeading from '../SectionHeading'
import Reveal from '../Reveal'
import { ShieldCheck, TrendingDown, Euro } from 'lucide-react'

// Gedanke von Andreas Mayer (24.11.2026): Für viele Anleger zählt nicht die Rendite, sondern der
// Vermögensschutz — besonders bei Bezug zu Ländern mit hoher Inflation (z. B. Türkei).
// Bewusst OHNE „garantierter Werterhalt“: Eine Vermögensanlage kann keinen Werterhalt garantieren.

const PUNKTE = [
  {
    icon: TrendingDown,
    titel: 'Hohe Inflation frisst Ersparnisse',
    text: 'In der Türkei lag die Inflation zuletzt zeitweise bei rund 50 % im Jahr. Wer dort spart, verliert Jahr für Jahr einen großen Teil seiner Kaufkraft.',
  },
  {
    icon: Euro,
    titel: 'Euro und Sachwerte statt Heimatwährung',
    text: 'Wer sein Erspartes in Euro und in Werte der echten Wirtschaft legt, schützt es vor diesem Kaufkraftverlust deutlich besser als ein Konto in der heimischen Währung.',
  },
  {
    icon: ShieldCheck,
    titel: 'Erst schützen, dann vermehren',
    text: 'Für viele Familien ist der Erhalt des Vermögens das wichtigste Ziel. Die Rendite kommt danach.',
  },
]

export default function Vermoegensschutz() {
  return (
    <section id="vermoegensschutz" className="bg-white py-16 md:py-24">
      <Reveal className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading kicker="Vermögensschutz" title="Vermögen schützen, wo Geld schnell an Wert verliert" />

        <p className="mx-auto mt-8 max-w-3xl text-center text-[16px] leading-relaxed text-navy-600">
          Für viele Anleger zählt nicht zuerst die Rendite, sondern dass ihr Vermögen seinen Wert behält. Wer in einem
          Land mit hoher Inflation lebt oder dort Familie hat, kennt das aus eigener Erfahrung.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PUNKTE.map(({ icon: Icon, titel, text }) => (
            <div key={titel} className="rounded-2xl border border-navy-100 bg-[#FAF8F3] p-6">
              <Icon size={26} className="text-gold-600" />
              <h3 className="mt-4 font-display text-lg font-semibold text-navy-800">{titel}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-navy-600">{text}</p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl rounded-xl border border-navy-100 bg-white px-5 py-4 text-center text-sm leading-relaxed text-navy-500">
          Hinweis: Auch diese Vermögensanlage kann keinen Werterhalt garantieren. Ein Verlust bis zum Totalverlust ist
          möglich. Wechselkurse können sich zu Ihren Gunsten wie zu Ihren Lasten entwickeln.
        </p>
      </Reveal>
    </section>
  )
}
