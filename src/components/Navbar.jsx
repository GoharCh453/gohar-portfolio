import { useEffect, useState } from 'react'
import './Navbar.css'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = () => setOpen(false)

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#top" className="navbar__logo" aria-label="Gohar Fatima — home">
          <svg width="26" height="26" viewBox="0 0 64 64" fill="none">
            <path d="M32 10 C 20 18, 16 30, 32 54 C 48 30, 44 18, 32 10 Z" stroke="var(--accent-leaf)" strokeWidth="3"/>
            <path d="M32 16 L32 48 M32 24 L24 30 M32 24 L40 30" stroke="var(--accent-data)" strokeWidth="1.6" strokeLinecap="round"/>
          </svg>
          <span>Gohar<span className="navbar__logo-dot">.</span>Fatima</span>
        </a>

        <nav className={`navbar__links ${open ? 'navbar__links--open' : ''}`}>
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={handleLinkClick}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="navbar__cta" onClick={handleLinkClick}>
            Let's talk
          </a>
        </nav>

        <button
          className={`navbar__toggle ${open ? 'navbar__toggle--open' : ''}`}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  )
}
