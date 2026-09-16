import heroImage from '../../assets/hero.jpg'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy-900">
      <img
        src={heroImage}
        alt="Skyline bei Sonnenuntergang"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/90 via-navy-900/75 to-navy-900/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900/60 via-transparent to-navy-900/40" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-28 pb-20 md:px-8">
        <p className="kicker text-gold-400">Andreas Mayer Holding</p>
        <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.08] text-white sm:text-5xl md:text-6xl">
          Diversifizierter Investitionsfonds 2026
        </h1>

        <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-4">
          <span className="font-display text-lg font-semibold text-gold-400 sm:text-xl">
            Zielrendite:
          </span>
          <span className="text-lg text-white/90 sm:text-xl">
            gestaffelt über 10 Jahre (4&nbsp;% bis 10&nbsp;% p.a.)
          </span>
        </div>

        <p className="mt-6 max-w-xl text-sm italic text-navy-200 sm:text-base">
          Keine Garantie. Kein Versprechen. Nur ein Plan.
        </p>

        <button
          onClick={scrollToContact}
          className="mt-10 inline-flex items-center gap-3 border border-gold-500 bg-gold-500 px-8 py-4 font-display text-sm font-semibold uppercase tracking-[0.12em] text-navy-900 transition-colors hover:bg-transparent hover:text-gold-400"
        >
          Kontakt aufnehmen
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-navy-300 md:flex">
        <ArrowDown size={18} className="animate-bounce" />
      </div>
    </section>
  )
}
