import heroImage from '../../assets/ulm-muenster.jpg'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToNext = () => {
    document.getElementById('fonds')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative flex h-screen min-h-[680px] w-full items-end overflow-hidden">
      <img
        src={heroImage}
        alt="Ulmer Münster am Münsterplatz in Ulm"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F3] via-[#FAF8F3]/55 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900/25 via-transparent to-transparent" />

      <div className="relative z-10 w-full px-5 pb-16 pt-32 md:px-8 md:pb-20">
        <div className="mx-auto max-w-7xl">
          <p className="kicker !text-white [text-shadow:0_1px_8px_rgba(15,23,42,0.45)]">
            Andreas Mayer Holding
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-6xl font-semibold leading-[0.98] text-navy-900 sm:text-7xl md:text-8xl">
            Ulmer Cash
          </h1>
          <p className="mt-4 max-w-xl font-display text-xl font-medium italic text-navy-700 sm:text-2xl">
            Breit gestreuter Investitionsfonds 2026
          </p>

          <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-4">
            <span className="font-display text-lg font-semibold text-gold-700 sm:text-xl">
              Zielrendite:
            </span>
            <span className="text-lg text-navy-800 sm:text-xl">
              gestaffelt über 10 Jahre (4&nbsp;% bis 10&nbsp;% p.a.)
            </span>
          </div>

          <p className="mt-4 max-w-xl text-sm italic text-navy-500 sm:text-base">
            Keine Garantie. Kein Versprechen. Nur ein Plan.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-3 border border-gold-500 bg-gold-500 px-8 py-4 font-display text-sm font-semibold uppercase tracking-[0.12em] text-navy-900 transition-colors hover:bg-navy-900 hover:border-navy-900 hover:text-white"
            >
              Kontakt aufnehmen
            </button>

            <button
              onClick={scrollToNext}
              className="flex items-center gap-2 text-navy-600 hover:text-gold-700"
            >
              <ArrowDown size={16} className="animate-bounce" />
              <span className="text-xs uppercase tracking-[0.14em]">Mehr erfahren</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
