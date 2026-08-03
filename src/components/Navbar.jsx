import { useEffect, useState } from 'react'
import './navbar.css'

const LINKS = [
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#contacto', label: 'Contacto' },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const [activeHash, setActiveHash] = useState('')

  useEffect(() => {
    document.body.classList.toggle('nav-open', open)
    return () => document.body.classList.remove('nav-open')
  }, [open])

  useEffect(() => {
    const sections = LINKS.map((link) => document.querySelector(link.href)).filter(Boolean)
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting)
        if (visible.length === 0) return
        const topMost = visible.reduce((a, b) => (a.boundingClientRect.top <= b.boundingClientRect.top ? a : b))
        setActiveHash(`#${topMost.target.id}`)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="navbar">
      <nav className="navbar__inner">
        <p className="navbar__school">Universidad Simón Bolívar</p>

        <a className="navbar__brand" href="#top" onClick={() => setOpen(false)}>
          ✶
        </a>

        <div className="navbar__actions">
          <button
            type="button"
            className={`navbar__toggle ${open ? 'navbar__toggle--open' : ''}`}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>

          <ul className={`navbar__links ${open ? 'navbar__links--open' : ''}`}>
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  className={`u-link ${activeHash === link.href ? 'is-active' : ''}`}
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div
        className={`navbar__scrim ${open ? 'navbar__scrim--visible' : ''}`}
        aria-hidden="true"
        onClick={() => setOpen(false)}
      />
    </header>
  )
}

export default Navbar
