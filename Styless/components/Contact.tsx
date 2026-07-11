import { useState, type FormEvent } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  const inputStyle = {
    width: '100%',
    background: 'rgba(240,237,232,0.04)',
    border: '1px solid rgba(240,237,232,0.1)',
    borderRadius: '0.625rem',
    padding: '0.875rem 1.125rem',
    color: '#f0ede8',
    fontSize: '0.95rem',
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 400,
    outline: 'none',
    transition: 'border-color 0.2s ease',
    boxSizing: 'border-box' as const,
  }

  const contactItems = [
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      label: 'Email',
      value: 'nataliatavera758@email.com',
      href: 'mailto:nataliatavera758@email.com',
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.76a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.03z" />
        </svg>
      ),
      label: 'Teléfono',
      value: '+57 310 211 3007',
      href: 'tel:+573102113007',
    },
  ]

  const socialLinks = [
    {
      label: 'GitHub',
      href: 'https://github.com/nataliatavera758',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      href: '#',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: 'Twitter',
      href: '#',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
  ]

  return (
    <section
      id="contacto"
      style={{
        padding: '8rem 2rem',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(232,71,95,0.3), transparent)',
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '4rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '1.25rem',
            }}
          >
            <div style={{ width: 24, height: 1, background: '#e8475f' }} />
            <span
              style={{
                color: '#e8475f',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              Contacto
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 600,
              color: '#f0ede8',
              letterSpacing: '-0.025em',
              lineHeight: 1.15,
              maxWidth: '520px',
            }}
          >
            ¿Tienes un proyecto en{' '}
            <span style={{ fontStyle: 'italic', color: '#e8475f' }}>mente</span>?
          </h2>
        </div>

        {/* Content */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '3fr 2fr',
            gap: '4rem',
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* Form */}
          {!sent ? (
            <form
              onSubmit={handleSubmit}
              style={{
                background: '#111118',
                border: '1px solid rgba(240,237,232,0.08)',
                borderRadius: '1.5rem',
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
                <div>
                  <label style={{ display: 'block', color: 'rgba(240,237,232,0.5)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    Nombre
                  </label>
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    style={inputStyle}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(232,71,95,0.5)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(240,237,232,0.1)')}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', color: 'rgba(240,237,232,0.5)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    style={inputStyle}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(232,71,95,0.5)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(240,237,232,0.1)')}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', color: 'rgba(240,237,232,0.5)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  Mensaje
                </label>
                <textarea
                  placeholder="Cuéntame sobre tu proyecto..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  rows={5}
                  style={{ ...inputStyle, resize: 'vertical', minHeight: '140px' }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(232,71,95,0.5)')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(240,237,232,0.1)')}
                />
              </div>

              <button
                type="submit"
                style={{
                  background: '#e8475f',
                  color: '#f0ede8',
                  border: 'none',
                  borderRadius: '0.625rem',
                  padding: '1rem 2rem',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  fontFamily: "'DM Sans', sans-serif",
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  letterSpacing: '0.01em',
                  alignSelf: 'flex-start',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(232,71,95,0.4)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                Enviar mensaje →
              </button>
            </form>
          ) : (
            <div
              style={{
                background: '#111118',
                border: '1px solid rgba(232,71,95,0.3)',
                borderRadius: '1.5rem',
                padding: '3rem 2.5rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                gap: '1rem',
                minHeight: '300px',
              }}
            >
              <div style={{ fontSize: '3rem' }}>✨</div>
              <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: '1.5rem', color: '#f0ede8', fontWeight: 600 }}>
                ¡Mensaje enviado!
              </h3>
              <p style={{ color: 'rgba(240,237,232,0.55)', fontWeight: 300 }}>
                Gracias por escribirme. Te responderé pronto.
              </p>
              <button
                onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }) }}
                style={{ color: '#e8475f', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.9rem', fontWeight: 600, fontFamily: "'DM Sans', sans-serif" }}
              >
                Enviar otro mensaje
              </button>
            </div>
          )}

          {/* Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <p style={{ color: 'rgba(240,237,232,0.55)', lineHeight: 1.8, fontWeight: 300, fontSize: '0.95rem' }}>
                Estoy disponible para proyectos freelance, colaboraciones y nuevas oportunidades. ¡No dudes en escribirme!
              </p>
            </div>

            {/* Contact items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    background: '#111118',
                    border: '1px solid rgba(240,237,232,0.07)',
                    borderRadius: '0.875rem',
                    padding: '1rem 1.25rem',
                    textDecoration: 'none',
                    transition: 'border-color 0.2s, transform 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(232,71,95,0.3)'
                    e.currentTarget.style.transform = 'translateX(4px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(240,237,232,0.07)'
                    e.currentTarget.style.transform = 'translateX(0)'
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      background: 'rgba(232,71,95,0.1)',
                      borderRadius: '0.625rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#e8475f',
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ color: 'rgba(240,237,232,0.4)', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                      {item.label}
                    </div>
                    <div style={{ color: '#f0ede8', fontSize: '0.875rem', fontWeight: 500 }}>
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Socials */}
            <div>
              <div style={{ color: 'rgba(240,237,232,0.35)', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                Redes sociales
              </div>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    style={{
                      width: 44,
                      height: 44,
                      background: '#111118',
                      border: '1px solid rgba(240,237,232,0.08)',
                      borderRadius: '0.625rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'rgba(240,237,232,0.5)',
                      textDecoration: 'none',
                      transition: 'color 0.2s, border-color 0.2s, transform 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#e8475f'
                      e.currentTarget.style.borderColor = 'rgba(232,71,95,0.35)'
                      e.currentTarget.style.transform = 'translateY(-2px)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(240,237,232,0.5)'
                      e.currentTarget.style.borderColor = 'rgba(240,237,232,0.08)'
                      e.currentTarget.style.transform = 'translateY(0)'
                    }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
