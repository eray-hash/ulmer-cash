import heroImage from '../../assets/hero.jpg'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative bg-[#FAF8F3] pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <p className="kicker text-gold-600">Andreas Mayer Holding</p>
          <h1 className="mt-5 max-w-2xl font-display text-4xl font-bold leading-[1.08] text-navy-900 sm:text-5xl md:text-6xl">
            Breit gestreuter Investitionsfonds 2026
          </h1>

          <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-4">
            <span className="font-display text-lg font-semibold text-gold-600 sm:text-xl">
              Zielrendite:
            </span>
            <span className="text-lg text-navy-700 sm:text-xl">
              gestaffelt über 10 Jahre (4&nbsp;% bis 10&nbsp;% p.a.)
            </span>
          </div>

          <p className="mt-6 max-w-xl text-sm italic text-navy-400 sm:text-base">
            Keine Garantie. Kein Versprechen. Nur ein Plan.
          </p>

          <button
            onClick={scrollToContact}
            className="mt-10 inline-flex items-center gap-3 border border-gold-500 bg-gold-500 px-8 py-4 font-display text-sm font-semibold uppercase tracking-[0.12em] text-navy-900 transition-colors hover:bg-white hover:text-gold-600"
          >
            Kontakt aufnehmen
          </button>

          <div className="mt-12 hidden items-center gap-2 text-navy-300 md:flex">
            <ArrowDown size={16} className="animate-bounce" />
            <span className="text-xs uppercase tracking-[0.14em]">Mehr erfahren</span>
          </div>
        </div>

        <div className="mx-auto w-full max-w-sm overflow-hidden rounded-sm border border-gold-300/60 bg-white p-2 shadow-[0_20px_50px_-25px_rgba(15,23,42,0.25)] lg:max-w-none">
          <img
            src={heroImage}
            alt="Skyline bei Sonnenuntergang"
            className="h-64 w-full rounded-[2px] object-cover md:h-80 lg:h-[420px]"
          />
        </div>
      </div>
    </section>
  )
}
