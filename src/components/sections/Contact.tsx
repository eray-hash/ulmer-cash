import SectionHeading from '../SectionHeading'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="kontakt" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading kicker="Kontakt" title="Sprechen Sie mit uns" />

        <div className="mt-14 grid gap-10 md:grid-cols-[1fr_1px_auto] md:items-center md:gap-16">
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

          <div className="h-px w-full bg-navy-100 md:h-32 md:w-px" />

          <a
            href="mailto:info@amayer-holding.com"
            className="inline-flex items-center justify-center whitespace-nowrap border border-gold-500 bg-gold-500 px-8 py-4 font-display text-sm font-semibold uppercase tracking-[0.12em] text-navy-900 transition-colors hover:bg-white hover:text-gold-600"
          >
            E-Mail schreiben
          </a>
        </div>
      </div>
    </section>
  )
}
