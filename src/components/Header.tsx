import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const NAV_ITEMS = [
  { id: 'fonds', label: 'Fonds' },
  { id: 'saeulen', label: 'Säulen' },
  { id: 'renditepfad', label: 'Renditepfad' },
  { id: 'szenarien', label: 'Szenarien' },
  { id: 'risiko', label: 'Risiko' },
  { id: 'prozess', label: 'Prozess' },
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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? 'bg-navy-800/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(201,162,75,0.25)]'
          : 'bg-gradient-to-b from-navy-900/70 to-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="group flex items-center gap-2.5"
        >
          <span className="h-7 w-[3px] bg-gold-500 transition-all group-hover:h-8" />
          <span className="font-display text-[13px] md:text-sm font-bold uppercase tracking-[0.22em] text-white">
            Andreas Mayer Holding
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => goToSection(item.id)}
              className="whitespace-nowrap font-display text-[12px] font-medium uppercase tracking-[0.06em] text-navy-100/85 transition-colors hover:text-gold-400 xl:text-[13px] xl:tracking-[0.08em]"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center text-white lg:hidden"
          aria-label="Menü öffnen"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-navy-800 px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => goToSection(item.id)}
                className="rounded-md px-2 py-2.5 text-left font-display text-sm font-medium uppercase tracking-wide text-navy-100 hover:bg-white/5 hover:text-gold-400"
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
