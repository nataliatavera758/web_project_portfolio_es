const SectionLabel = ({ children }: { children: string }) => (
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
      {children}
    </span>
  </div>
)

export default function About() {
  const traits = [
    { icon: '⚡', label: 'Aprendizaje continuo', desc: 'Siempre explorando nuevas tecnologías y metodologías.' },
    { icon: '🎯', label: 'Orientada a resultados', desc: 'Enfoque en soluciones que generan valor real.' },
    { icon: '🤝', label: 'Colaboración', desc: 'Trabajo en equipo y comunicación efectiva en cada proyecto.' },
  ]

  return (
    <section
      id="sobre-mi"
      style={{
        padding: '8rem 2rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle divider glow */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(232,71,95,0.4), transparent)',
        }}
      />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '6rem',
          alignItems: 'start',
        }}
        className="about-grid"
      >
        {/* Left: text */}
        <div>
          <SectionLabel>Sobre mí</SectionLabel>
          <h2
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 600,
              color: '#f0ede8',
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
              marginBottom: '2rem',
            }}
          >
            Creando el futuro,{' '}
            <span style={{ fontStyle: 'italic', color: '#e8475f' }}>una línea</span> a la vez
          </h2>

          <p
            style={{
              color: 'rgba(240, 237, 232, 0.62)',
              lineHeight: 1.85,
              fontSize: '1rem',
              marginBottom: '1.5rem',
              fontWeight: 300,
            }}
          >
            Soy una desarrolladora web apasionada por crear soluciones digitales innovadoras. Con experiencia en desarrollo frontend y backend, me dedico a transformar ideas en aplicaciones que aporten valor y una excelente experiencia de usuario.
          </p>

          <p
            style={{
              color: 'rgba(240, 237, 232, 0.62)',
              lineHeight: 1.85,
              fontSize: '1rem',
              fontWeight: 300,
            }}
          >
            Mi objetivo es seguir aprendiendo y crecer profesionalmente, contribuyendo a proyectos que impacten positivamente en las personas.
          </p>

          <div
            style={{
              marginTop: '2.5rem',
              display: 'flex',
              gap: '1.25rem',
            }}
          >
            <a
              href="https://github.com/nataliatavera758"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'rgba(240,237,232,0.6)',
                fontSize: '0.875rem',
                fontWeight: 500,
                textDecoration: 'none',
                padding: '0.625rem 1.25rem',
                border: '1px solid rgba(240,237,232,0.12)',
                borderRadius: '0.5rem',
                transition: 'color 0.2s, border-color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#f0ede8'
                e.currentTarget.style.borderColor = 'rgba(240,237,232,0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(240,237,232,0.6)'
                e.currentTarget.style.borderColor = 'rgba(240,237,232,0.12)'
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href="#contacto"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#e8475f',
                fontSize: '0.875rem',
                fontWeight: 600,
                textDecoration: 'none',
                padding: '0.625rem 1.25rem',
                border: '1px solid rgba(232,71,95,0.35)',
                borderRadius: '0.5rem',
                transition: 'background 0.2s, border-color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(232,71,95,0.08)'
                e.currentTarget.style.borderColor = 'rgba(232,71,95,0.5)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.borderColor = 'rgba(232,71,95,0.35)'
              }}
            >
              Contactar ↗
            </a>
          </div>
        </div>

        {/* Right: trait cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {traits.map((t, i) => (
            <div
              key={i}
              style={{
                background: '#111118',
                border: '1px solid rgba(240,237,232,0.07)',
                borderRadius: '1rem',
                padding: '1.5rem',
                display: 'flex',
                gap: '1.25rem',
                alignItems: 'flex-start',
                transition: 'border-color 0.2s, transform 0.2s',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(232,71,95,0.25)'
                e.currentTarget.style.transform = 'translateX(4px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(240,237,232,0.07)'
                e.currentTarget.style.transform = 'translateX(0)'
              }}
            >
              <div
                style={{
                  fontSize: '1.5rem',
                  width: 48,
                  height: 48,
                  background: 'rgba(232,71,95,0.08)',
                  borderRadius: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {t.icon}
              </div>
              <div>
                <div
                  style={{
                    fontWeight: 600,
                    color: '#f0ede8',
                    fontSize: '0.95rem',
                    marginBottom: '0.375rem',
                  }}
                >
                  {t.label}
                </div>
                <div
                  style={{
                    color: 'rgba(240,237,232,0.5)',
                    fontSize: '0.875rem',
                    lineHeight: 1.6,
                    fontWeight: 300,
                  }}
                >
                  {t.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  )
}
