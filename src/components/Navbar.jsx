import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/features', label: 'Features' },
  { to: '/courses', label: 'Courses' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 glass border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand to-brand-2 flex items-center justify-center font-display font-bold text-white">N</span>
          <span className="font-display text-xl font-bold">Nexora<span className="text-brand-2">LMS</span></span>
        </Link>
        <ul className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <li key={l.to}>
              <NavLink to={l.to} end={l.to === '/'} className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm font-medium transition ${isActive ? 'bg-white/10 text-white' : 'text-white/70 hover:text-white hover:bg-white/5'}`
              }>{l.label}</NavLink>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex items-center gap-2">
          <Link to="/contact" className="px-4 py-2 text-sm text-white/80 hover:text-white">Sign In</Link>
          <Link to="/courses" className="px-4 py-2 rounded-lg bg-brand text-white text-sm font-semibold hover:bg-brand/80 transition">Get Started</Link>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-white" aria-label="Toggle menu">
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><path d={open ? 'M6 6l12 12M6 18L18 6' : 'M4 6h16M4 12h16M4 18h16'} /></svg>
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-ink-900/95">
          <ul className="px-4 py-3 flex flex-col gap-1">
            {links.map(l => (
              <li key={l.to}>
                <NavLink to={l.to} end={l.to === '/'} onClick={() => setOpen(false)} className={({ isActive }) =>
                  `block px-3 py-2 rounded-lg text-sm font-medium ${isActive ? 'bg-white/10 text-white' : 'text-white/70'}`
                }>{l.label}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}