import { ArrowUpRight } from 'lucide-react'

export default function InvestorPortalCTA() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-start justify-between gap-5 rounded-sm border border-navy-100 bg-navy-50 px-8 py-8 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-[0.1em] text-navy-800">
              Sie sind bereits Investor?
            </p>
            <p className="mt-1 text-sm text-navy-500">Zu Ihrer persönlichen Übersicht</p>
          </div>
          <a
            href="https://eray-hash.github.io/mayer-holding-crm/#/portal/login"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 border border-navy-800 px-6 py-3 font-display text-xs font-semibold uppercase tracking-[0.1em] text-navy-800 transition-colors hover:bg-navy-800 hover:text-white"
          >
            Investoren-Portal
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
