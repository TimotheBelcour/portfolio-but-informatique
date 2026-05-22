import { useState, useEffect, useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { competences } from '../../data/competences'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [competencesOpen, setCompetencesOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setCompetencesOpen(false)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-200 ${
      isActive ? 'text-violet-400' : 'text-slate-400 hover:text-slate-100'
    }`

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="font-bold text-lg text-slate-100 hover:text-violet-400 transition-colors duration-200"
        >
          TB<span className="text-violet-400">.</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={navLinkClass} end>
            Accueil
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            À propos
          </NavLink>
          <NavLink to="/projects" className={navLinkClass}>
            Projets
          </NavLink>

          {/* Dropdown compétences */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setCompetencesOpen((o) => !o)}
              className="flex items-center gap-1 text-sm font-medium text-slate-400 hover:text-slate-100 transition-colors duration-200"
            >
              Compétences
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${competencesOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {competencesOpen && (
              <div className="dropdown-enter absolute top-8 right-0 w-56 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl py-2 z-50">
                {competences.map((c) => (
                  <NavLink
                    key={c.slug}
                    to={`/competences/${c.slug}`}
                    className={({ isActive }) =>
                      `flex items-center gap-2 px-4 py-2 text-sm transition-colors duration-150 ${
                        isActive
                          ? 'text-violet-400 bg-slate-800'
                          : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800'
                      }`
                    }
                    onClick={() => setCompetencesOpen(false)}
                  >
                    <span className="text-xs font-mono text-slate-600">{String(c.id).padStart(2, '0')}</span>
                    {c.title}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-slate-400 hover:text-slate-100 transition-colors"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="mobile-menu-enter md:hidden bg-slate-950 border-t border-slate-800 px-6 py-5 flex flex-col gap-4">
          <NavLink to="/" className={navLinkClass} end onClick={() => setMobileOpen(false)}>
            Accueil
          </NavLink>
          <NavLink to="/about" className={navLinkClass} onClick={() => setMobileOpen(false)}>
            À propos
          </NavLink>
          <NavLink to="/projects" className={navLinkClass} onClick={() => setMobileOpen(false)}>
            Projets
          </NavLink>

          <div className="border-t border-slate-800 pt-4 space-y-1">
            <p className="text-xs text-slate-600 uppercase tracking-widest mb-3">Compétences</p>
            {competences.map((c) => (
              <NavLink
                key={c.slug}
                to={`/competences/${c.slug}`}
                className={({ isActive }) =>
                  `flex items-center gap-2 py-1.5 text-sm transition-colors ${
                    isActive ? 'text-violet-400' : 'text-slate-400 hover:text-slate-100'
                  }`
                }
                onClick={() => setMobileOpen(false)}
              >
                <span className="text-xs font-mono text-slate-600">{String(c.id).padStart(2, '0')}</span>
                {c.title}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
