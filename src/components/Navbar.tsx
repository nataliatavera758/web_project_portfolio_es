import { useState, useEffect } from 'react'

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'background 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease',
        background: scrolled ? 'rgba(8, 8, 12, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(240, 237, 232, 0.07)' : '1px solid transparent',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <a
          href="#inicio"
          style={{
            fontFamily: "'Fraunces', serif",
            fontSize: '1.2rem',
            fontWeight: 600,
            color: '#f0ede8',
            textDecoration: 'none',
            letterSpacing: '-0.02em',
          }}
        >
          NT<span style={{ color: '#e8475f' }}>.</span>
        </a>

        {/* Desktop links */}
        <ul
          style={{
            display: 'flex',
            gap: '2.5rem',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}
          className="hidden md:flex"
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{
                  color: 'rgba(240, 237, 232, 0.6)',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  letterSpacing: '0.02em',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#f0ede8')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(240, 237, 232, 0.6)')}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contacto"
          style={{
            background: '#e8475f',
            color: '#f0ede8',
            padding: '0.5rem 1.25rem',
            borderRadius: '0.375rem',
            fontSize: '0.85rem',
            fontWeight: 600,
            textDecoration: 'none',
            transition: 'opacity 0.2s ease',
            letterSpacing: '0.01em',
          }}
          className="hidden md:block"
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          Hablemos
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#f0ede8',
            padding: '0.5rem',
          }}
          aria-label="Menú"
        >
          <div style={{ width: 22, display: 'flex', flexDirection: 'column', gap: 5 }}>
            <span style={{ height: 2, background: '#f0ede8', borderRadius: 1, display: 'block', transition: 'transform 0.2s', transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none' }} />
            <span style={{ height: 2, background: '#f0ede8', borderRadius: 1, display: 'block', opacity: menuOpen ? 0 : 1, transition: 'opacity 0.2s' }} />
            <span style={{ height: 2, background: '#f0ede8', borderRadius: 1, display: 'block', transition: 'transform 0.2s', transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: 'rgba(8, 8, 12, 0.97)',
            borderTop: '1px solid rgba(240, 237, 232, 0.07)',
            padding: '1.5rem 2rem',
          }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                color: 'rgba(240, 237, 232, 0.7)',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 500,
                padding: '0.75rem 0',
                borderBottom: '1px solid rgba(240, 237, 232, 0.06)',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
