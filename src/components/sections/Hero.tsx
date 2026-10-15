import { useEffect, useRef } from 'react'
import heroImage from '../../assets/ulm-muenster.jpg'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        if (imgRef.current) {
          const offset = Math.min(window.scrollY, 900) * 0.22
          const scale = 1.12 + Math.min(window.scrollY, 900) * 0.00018
          imgRef.current.style.transform = `translateY(${offset}px) scale(${scale})`
        }
        ticking = false
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToContact = () => {
    document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToNext = () => {
    document.getElementById('anlage')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="bg-[#FAF8F3]">
      <div className="h-[80vh] w-full overflow-hidden sm:h-[88vh] md:h-[92vh]">
        <img
          ref={imgRef}
          src={heroImage}
          alt="Ulmer Münster am Münsterplatz in Ulm"
          className="h-full w-full scale-[1.12] object-cover object-[center_8%] will-change-transform"
        />
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-20 pt-12 md:px-8 md:pt-16">
        <p className="kicker text-gold-600">Andreas Mayer Holding</p>
        <h1 className="mt-5 max-w-3xl font-display text-5xl font-semibold leading-[0.98] text-navy-900 sm:text-6xl md:text-7xl">
          Ulmer Cash
        </h1>
        <p className="mt-4 max-w-xl font-display text-lg font-medium italic text-navy-600 sm:text-xl">
          Breit gestreute Vermögensanlage 2026
        </p>

        <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-4">
          <span className="font-display text-lg font-semibold text-gold-600 sm:text-xl">
            Zielrendite:
          </span>
          <span className="text-lg text-navy-700 sm:text-xl">
            gestaffelt über 10 Jahre (4&nbsp;% bis 10&nbsp;% p.a.)
          </span>
        </div>

        <p className="mt-4 max-w-xl text-sm italic text-navy-400 sm:text-base">
          Keine Garantie. Kein Versprechen. Nur ein Plan.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-3 border border-gold-500 bg-gold-500 px-8 py-4 font-display text-sm font-semibold uppercase tracking-[0.12em] text-navy-900 transition-colors hover:bg-navy-900 hover:border-navy-900 hover:text-white"
          >
            Kontakt aufnehmen
          </button>

          <button onClick={scrollToNext} className="flex items-center gap-2 text-navy-500 hover:text-gold-600">
            <ArrowDown size={16} className="animate-bounce" />
            <span className="text-xs uppercase tracking-[0.14em]">Mehr erfahren</span>
          </button>
        </div>
      </div>
    </section>
  )
}
