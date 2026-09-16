import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-navy-200">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold-500/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <p className="max-w-3xl text-xs leading-relaxed text-navy-300">
          Dieses Dokument/diese Website dient ausschließlich Informationszwecken. Sie ist keine
          Anlageberatung, keine Kaufempfehlung und keine Zusage einer bestimmten Rendite. Jede
          Investition ist mit Risiken bis zum vollständigen Kapitalverlust verbunden.
        </p>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2.5">
            <span className="h-5 w-[2px] bg-gold-500" />
            <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
              Andreas Mayer Holding
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs">
            <Link to="/impressum" className="text-navy-300 hover:text-gold-400">
              Impressum
            </Link>
            <Link to="/datenschutz" className="text-navy-300 hover:text-gold-400">
              Datenschutz
            </Link>
            <span className="text-navy-500">
              &copy; {new Date().getFullYear()} Andreas Mayer Holding UG (haftungsbeschränkt)
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
