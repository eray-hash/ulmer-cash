import SectionHeading from '../SectionHeading'

const STEPS = [
  'Erstgespräch und Zieldefinition',
  'Due Diligence und Zeichnungsvereinbarung',
  'Kapitalbereitstellung auf Treuhandkonto',
  'Allokation nach Phasenplan',
  'Quartalsreporting',
  'Halbjährliche oder jährliche Ausschüttung',
]

export default function InvestmentProcess() {
  return (
    <section id="prozess" className="bg-[#FAF9F6] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading kicker="Ablauf" title="Investmentprozess" />

        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step, i) => (
            <li key={step} className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-500 font-display text-sm font-bold text-gold-600">
                {i + 1}
              </span>
              <span className="pt-2 text-[15px] leading-snug text-navy-700">{step}</span>
            </li>
          ))}
        </ol>

        <div className="mt-14 flex flex-col gap-4 border-t border-navy-100 pt-8 sm:flex-row sm:items-center sm:gap-10">
          <div>
            <span className="font-display text-xs font-bold uppercase tracking-[0.14em] text-gold-600">
              Mindestzeichnung
            </span>
            <p className="mt-1 font-display text-xl font-bold text-navy-800">50.000 EUR</p>
          </div>
          <div className="hidden h-10 w-px bg-navy-100 sm:block" />
          <div>
            <span className="font-display text-xs font-bold uppercase tracking-[0.14em] text-gold-600">
              Laufzeit
            </span>
            <p className="mt-1 font-display text-xl font-bold text-navy-800">
              3 bis 10 Jahre, verlängerbar
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
