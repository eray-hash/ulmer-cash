import { ArrowUpRight } from 'lucide-react'
import PortalMockup from './PortalMockup'
import Reveal from '../Reveal'

export default function InvestorPortalCTA() {
  return (
    <section className="bg-[#FAF8F3] py-14 md:py-20">
      <Reveal className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <p className="kicker text-gold-600">Für Investoren</p>
          <h2 className="mt-4 max-w-md font-display text-2xl font-bold leading-tight text-navy-900 sm:text-3xl">
            Ihre Zeichnung, Ihre Rendite, jederzeit im Blick
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-navy-500">
            Im persönlichen Investoren-Portal sehen Sie, was Sie eingezahlt haben, wie sich Ihr
            Kapital entlang des Zielrenditepfads entwickelt und wann die nächste Ausschüttung
            ansteht.
          </p>
          <a
            href="https://eray-hash.github.io/mayer-holding-crm/#/portal/login"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex shrink-0 items-center gap-2 border border-navy-800 px-6 py-3 font-display text-xs font-semibold uppercase tracking-[0.1em] text-navy-800 transition-colors hover:bg-navy-800 hover:text-white"
          >
            Zum Investoren-Portal
            <ArrowUpRight size={16} />
          </a>
        </div>

        <PortalMockup />
      </Reveal>
    </section>
  )
}
