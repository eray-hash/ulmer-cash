import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const NAV_ITEMS = [
  { id: 'fonds', label: 'Fonds' },
  { id: 'saeulen', label: 'Säulen' },
  { id: 'renditepfad', label: 'Renditepfad' },
  { id: 'szenarien', label: 'Szenarien' },
  { id: 'risiko', label: 'Risiko' },
  { id: 'ablauf', label: 'Ablauf' },
  { id: 'kontakt', label: 'Kontakt' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goToSection = (id: string) => {
    setMenuOpen(false)
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/')
      window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 80)
    }
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b bg-white/95 backdrop-blur-sm transition-all duration-300 ${
        scrolled || !isHome
          ? 'border-navy-100 shadow-[0_1px_12px_-4px_rgba(15,23,42,0.12)]'
          : 'border-navy-100/60'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="group flex items-center gap-2.5"
        >
          <span className="h-7 w-[3px] bg-gold-500 transition-all group-hover:h-8" />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-[13px] md:text-sm font-bold uppercase tracking-[0.22em] text-navy-800">
              Ulmer Cash
            </span>
            <span className="text-[9px] uppercase tracking-[0.18em] text-navy-400">
              von Andreas Mayer Holding
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => goToSection(item.id)}
              className="whitespace-nowrap font-display text-[12px] font-medium uppercase tracking-[0.06em] text-navy-600 transition-colors hover:text-gold-600 xl:text-[13px] xl:tracking-[0.08em]"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center text-navy-800 lg:hidden"
          aria-label="Menü öffnen"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-navy-100 bg-white px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => goToSection(item.id)}
                className="rounded-md px-2 py-2.5 text-left font-display text-sm font-medium uppercase tracking-wide text-navy-700 hover:bg-navy-50 hover:text-gold-600"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
