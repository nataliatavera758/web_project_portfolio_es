import profilePhoto from '../imports/WhatsApp_Image_2026-03-05_at_7.29.53_PM.jpeg'

export default function Hero() {
  return (
    <section
      id="inicio"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '80px',
      }}
    >
      {/* Radial glow background */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '800px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(232,71,95,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Grid texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(240,237,232,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(240,237,232,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center',
          position: 'relative',
        }}
        className="hero-grid"
      >
        {/* Text content */}
        <div style={{ animation: 'fadeUp 0.8s ease both' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(232, 71, 95, 0.1)',
              border: '1px solid rgba(232, 71, 95, 0.25)',
              borderRadius: '100px',
              padding: '0.375rem 1rem',
              marginBottom: '2rem',
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#e8475f',
                animation: 'pulse-ring 2s infinite',
                display: 'inline-block',
              }}
            />
            <span
              style={{
                color: '#e8475f',
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              Disponible para proyectos
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              marginBottom: '1.25rem',
              color: '#f0ede8',
            }}
          >
            Hola, soy{' '}
            <span
              style={{
                fontStyle: 'italic',
                background: 'linear-gradient(135deg, #e8475f, #ff8fa3)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Natalia
            </span>
            <br />
            Tavera
          </h1>

          <p
            style={{
              color: 'rgba(240, 237, 232, 0.55)',
              fontSize: 'clamp(1rem, 2vw, 1.15rem)',
              lineHeight: 1.7,
              marginBottom: '2.5rem',
              maxWidth: '460px',
              fontWeight: 300,
            }}
          >
            Desarrolladora web especializada en frontend y backend. Transformo ideas en experiencias digitales funcionales e innovadoras.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="#proyectos"
              style={{
                background: '#e8475f',
                color: '#f0ede8',
                padding: '0.875rem 2rem',
                borderRadius: '0.5rem',
                fontWeight: 600,
                fontSize: '0.95rem',
                textDecoration: 'none',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                display: 'inline-block',
                letterSpacing: '0.01em',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(232,71,95,0.35)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              Ver proyectos
            </a>
            <a
              href="#contacto"
              style={{
                background: 'transparent',
                color: '#f0ede8',
                padding: '0.875rem 2rem',
                borderRadius: '0.5rem',
                fontWeight: 500,
                fontSize: '0.95rem',
                textDecoration: 'none',
                border: '1px solid rgba(240,237,232,0.18)',
                transition: 'border-color 0.2s ease, background 0.2s ease',
                display: 'inline-block',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(240,237,232,0.4)'
                e.currentTarget.style.background = 'rgba(240,237,232,0.04)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(240,237,232,0.18)'
                e.currentTarget.style.background = 'transparent'
              }}
            >
              Contáctame
            </a>
          </div>
        </div>

        {/* Visual card */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            animation: 'fadeUp 0.8s 0.2s ease both',
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '400px',
              height: '520px',
            }}
          >
            {/* Decorative rotated border */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '1.75rem',
                border: '1px solid rgba(232, 71, 95, 0.35)',
                transform: 'rotate(3deg)',
              }}
            />
            {/* Photo card */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '1.75rem',
                border: '1px solid rgba(240,237,232,0.1)',
                overflow: 'hidden',
                background: '#111118',
              }}
            >
              <img
                src={profilePhoto}
                alt="Foto de perfil de Natalia Tavera"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  display: 'block',
                }}
              />
              {/* Bottom name overlay */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(to top, rgba(8,8,12,0.92) 0%, transparent 100%)',
                  padding: '2rem 1.5rem 1.5rem',
                }}
              >
                <div
                  style={{
                    fontFamily: "'Fraunces', serif",
                    fontSize: '1.3rem',
                    fontWeight: 600,
                    color: '#f0ede8',
                    letterSpacing: '-0.02em',
                    marginBottom: '0.25rem',
                  }}
                >
                  Natalia Tavera
                </div>
                <div
                  style={{
                    color: '#e8475f',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  Full-Stack Developer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
            text-align: center;
          }
          .hero-grid > div:first-child p {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-grid > div:first-child > div:last-child {
            justify-content: center;
          }
          .hero-grid > div:last-child {
            display: flex;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  )
}
