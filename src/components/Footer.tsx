import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function Footer() {
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  const goToRisiko = () => {
    if (isHome) {
      document.getElementById('risiko')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/')
      window.setTimeout(() => {
        document.getElementById('risiko')?.scrollIntoView({ behavior: 'smooth' })
      }, 80)
    }
  }

  return (
    <footer className="border-t border-navy-100 bg-white text-navy-500">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <p className="font-display text-[11px] font-bold uppercase tracking-[0.14em] text-navy-500">
          Risikohinweis
        </p>
        <p className="mt-2 max-w-3xl text-xs leading-relaxed text-navy-400">
          Dieses Dokument/diese Website dient ausschließlich Informationszwecken. Sie ist keine
          Anlageberatung, keine Kaufempfehlung und keine Zusage einer bestimmten Rendite. Jede
          Investition ist mit Risiken bis zum vollständigen Kapitalverlust verbunden.{' '}
          <button
            type="button"
            onClick={goToRisiko}
            className="underline decoration-gold-400 underline-offset-2 hover:text-gold-600"
          >
            Mehr zum Risikomanagement
          </button>
          .
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
