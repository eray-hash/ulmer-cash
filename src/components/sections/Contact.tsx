import SectionHeading from '../SectionHeading'
import Reveal from '../Reveal'
import { Phone, Mail, MapPin } from 'lucide-react'
import interiorImage from '../../assets/ulm-muenster-interior.jpg'

export default function Contact() {
  return (
    <section id="kontakt" className="bg-white py-16 md:py-24">
      <Reveal className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading kicker="Kontakt" title="Sprechen Sie mit uns" />

        <div className="mt-14 grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-16">
          <div className="grid gap-10 sm:grid-cols-[1fr_1px_auto] sm:items-center sm:gap-10">
            <div>
              <p className="font-display text-2xl font-bold text-navy-800">Joachim Schmidt</p>
              <p className="mt-1 text-sm uppercase tracking-[0.14em] text-gold-600">
                Repräsentant
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href="tel:+491788082426"
                  className="flex items-center gap-3 text-[15px] text-navy-700 hover:text-gold-600"
                >
                  <Phone size={18} className="text-gold-600" />
                  +49 178 8082426
                </a>
                <a
                  href="mailto:info@amayer-holding.com"
                  className="flex items-center gap-3 text-[15px] text-navy-700 hover:text-gold-600"
                >
                  <Mail size={18} className="text-gold-600" />
                  info@amayer-holding.com
                </a>
                <div className="flex items-start gap-3 text-[15px] text-navy-700">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-gold-600" />
                  <span>
                    Schwabstraße 3
                    <br />
                    89075 Ulm
                  </span>
                </div>
              </div>
            </div>

            <div className="h-px w-full bg-navy-100 sm:h-32 sm:w-px" />

            <a
              href="mailto:info@amayer-holding.com"
              className="inline-flex items-center justify-center whitespace-nowrap border border-gold-500 bg-gold-500 px-8 py-4 font-display text-sm font-semibold uppercase tracking-[0.12em] text-navy-900 transition-colors hover:bg-white hover:text-gold-600"
            >
              E-Mail schreiben
            </a>
          </div>

          <div className="mx-auto w-full max-w-sm overflow-hidden rounded-sm border border-gold-300/60 bg-white p-2 shadow-[0_20px_50px_-25px_rgba(15,23,42,0.25)] lg:max-w-none">
            <img
              src={interiorImage}
              alt="Innenraum des Ulmer Münsters"
              className="h-56 w-full rounded-[2px] object-cover md:h-64"
            />
            <p className="px-2 pt-2 text-center text-[11px] uppercase tracking-[0.14em] text-navy-300">
              Vor Ort in Ulm zuhause
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
