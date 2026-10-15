import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-navy-100 bg-white text-navy-500">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <p className="max-w-3xl text-xs leading-relaxed text-navy-400">
          Dieses Dokument/diese Website dient ausschließlich Informationszwecken. Sie ist keine
          Anlageberatung, keine Kaufempfehlung und keine Zusage einer bestimmten Rendite. Jede
          Investition ist mit Risiken bis zum vollständigen Kapitalverlust verbunden.
        </p>

        <div className="mt-8 flex flex-col gap-4 border-t border-navy-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2.5">
            <span className="h-5 w-[2px] bg-gold-500" />
            <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-navy-700">
              Ulmer Cash
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs">
            <Link to="/impressum" className="text-navy-400 hover:text-gold-600">
              Impressum
            </Link>
            <Link to="/datenschutz" className="text-navy-400 hover:text-gold-600">
              Datenschutz
            </Link>
            <span className="text-navy-400">
              &copy; {new Date().getFullYear()} Andreas Mayer Holding UG (haftungsbeschränkt)
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
