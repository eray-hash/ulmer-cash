import SectionHeading from '../SectionHeading'
import Reveal from '../Reveal'

const CARDS = [
  {
    label: 'Was wir tun',
    text: 'Eine Kapitalanlage, die sechs Anlageklassen kombiniert, um eine Zielrendite von 10 % p.a. über 10 Jahre zu erreichen.',
  },
  {
    label: 'Wie wir es tun',
    text: 'Nicht über ein einzelnes Risiko. Sondern über sechs Säulen, die sich in Risiko, Laufzeit und Zahlungsfluss ergänzen.',
  },
  {
    label: 'Wer wir sind',
    text: 'Andreas Mayer Holding, Ulm. Netzwerk in Immobilien, Finanzierung und Mittelstand. Rechtliche Begleitung über eine Anwaltsgesellschaft mbH.',
  },
]

export default function FundOverview() {
  return (
    <section id="fonds" className="bg-white py-24 md:py-32">
      <Reveal className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading kicker="Der Fonds" title="Das Wichtigste in Kürze" />

        <div className="mt-14 grid gap-px overflow-hidden rounded-sm bg-navy-100 md:grid-cols-3">
          {CARDS.map((card) => (
            <div key={card.label} className="bg-white p-8 md:p-10">
              <span className="font-display text-xs font-bold uppercase tracking-[0.18em] text-gold-600">
                {card.label}
              </span>
              <p className="mt-4 text-[15px] leading-relaxed text-navy-600">{card.text}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
