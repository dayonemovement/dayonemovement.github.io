import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'
import logoDark from '../assets/dayone-dark.png'
import logoWhite from '../assets/dayone-white.png'

const links = [
  { to: '/#hero', label: 'Home' },
  // { to: '/media', label: 'Media' },
  // { to: '/events', label: 'Events' },
  // { to: '/resources', label: 'Resources' },  
  { to: '/bill-of-essential-rights', label: 'Bill of Essential Rights' },
  { to: '/video-guide', label: 'Video Guide' },
]

function ThemeToggle() {
  const { theme, toggle } = useTheme()

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="grid place-items-center h-9 w-9 rounded-full text-muted hover:text-text hover:bg-text/5 transition-colors"
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const navLinks = links.filter(l => l.to !== '/')

  useEffect(() => { setOpen(false) }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20)
          ticking = false
        })
        ticking = true
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = ({ isActive }) =>
    `font-mono text-[0.7rem] uppercase tracking-[0.2em] transition-colors ${isActive ? 'text-accent' : 'text-muted hover:text-text'
    }`

  return (
    <nav className="fixed inset-x-0 top-0 z-50 h-16 border-b border-border bg-bg/80 backdrop-blur-md">
      <div className="container flex h-full items-center justify-between">
        <NavLink
          to="/#hero"
          className="flex items-center"
          onClick={() => setOpen(false)}
        >
          <img
            src={logoDark}
            alt="Day One Movement"
            className="block dark:hidden h-15 w-auto"
            decoding="async"
          />
          <img
            src={logoWhite}
            alt="Day One Movement"
            className="hidden dark:block h-15 w-auto"
            decoding="async"
          />
        </NavLink>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-8">
            {navLinks.map(l => (
              <li key={l.to}>
                <NavLink to={l.to} className={linkClass}>{l.label}</NavLink>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen(o => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid h-9 w-9 place-items-center text-text transition-colors"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute inset-x-0 top-16 flex flex-col gap-5 border-b border-border bg-bg/98 px-6 py-7 backdrop-blur-md md:hidden"
          >
            {links.map(l => (
              <NavLink
                key={l.to}
                to={l.to}
                className="font-display text-3xl font-extrabold uppercase"
              >
                {l.label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}