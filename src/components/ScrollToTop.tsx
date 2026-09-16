import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Scrolls to top on route change, but leaves in-page hash jumps (on "/") alone. */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (pathname === '/' && hash) return
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
