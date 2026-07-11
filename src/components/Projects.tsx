import cafeteriaImg from '../imports/Pagina_Web_Cafeteria.png'

const projects = [
  {
    emoji: '☕',
    title: 'Página web de una cafetería',
    description:
      'Landing page responsiva para una cafetería siguiendo un brief de diseño. Estructura semántica, maquetación con Flexbox y formulario de contacto funcional.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    demo: 'https://raw.githack.com/nataliatavera758/automatic-invention/main/index.html',
    repo: 'https://github.com/nataliatavera758/automatic-invention',
    featured: true,
    image: cafeteriaImg,
  },
  {
    emoji: '💻',
    image: undefined,
    title: 'Proyecto 2',
    description: 'Descripción de tu segundo proyecto y las tecnologías utilizadas para resolverlo.',
    tags: ['React', 'Node.js'],
    demo: '#',
    repo: '#',
    featured: false,
  },
]

const tagColors: Record<string, string> = {
  HTML: '#e34f26',
  CSS: '#1572b6',
  JavaScript: '#f7df1e',
  React: '#61dafb',
  'Node.js': '#68a063',
  Python: '#3572a5',
  Django: '#092e20',
}

export default function Projects() {
  return (
    <section
      id="proyectos"
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
          background: 'linear-gradient(90deg, transparent, rgba(240,237,232,0.08), transparent)',
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
              Proyectos
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
              maxWidth: '480px',
            }}
          >
            Trabajo que{' '}
            <span style={{ fontStyle: 'italic', color: '#e8475f' }}>habla</span> por sí solo
          </h2>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {projects.map((project, i) => (
            <div
              key={i}
              style={{
                background: '#111118',
                border: project.featured
                  ? '1px solid rgba(232,71,95,0.25)'
                  : '1px solid rgba(240,237,232,0.07)',
                borderRadius: '1.25rem',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.borderColor = 'rgba(232,71,95,0.4)'
                e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.4), 0 0 0 1px rgba(232,71,95,0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = project.featured
                  ? 'rgba(232,71,95,0.25)'
                  : 'rgba(240,237,232,0.07)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {project.featured && (
                <div
                  style={{
                    position: 'absolute',
                    top: '1.25rem',
                    right: '1.25rem',
                    background: 'rgba(232,71,95,0.15)',
                    color: '#e8475f',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    padding: '0.25rem 0.625rem',
                    borderRadius: '100px',
                    border: '1px solid rgba(232,71,95,0.3)',
                  }}
                >
                  Destacado
                </div>
              )}

              {/* Project image or emoji icon */}
              {project.image ? (
                <div
                  style={{
                    width: '100%',
                    height: '180px',
                    borderRadius: '0.75rem',
                    overflow: 'hidden',
                    background: '#1a1a24',
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={project.image}
                    alt={`Vista previa de ${project.title}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top',
                      display: 'block',
                      transition: 'transform 0.4s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                </div>
              ) : (
                <div
                  style={{
                    fontSize: '2rem',
                    width: 56,
                    height: 56,
                    background: 'rgba(240,237,232,0.04)',
                    borderRadius: '0.875rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(240,237,232,0.06)',
                  }}
                >
                  {project.emoji}
                </div>
              )}

              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    fontFamily: "'Fraunces', serif",
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    color: '#f0ede8',
                    letterSpacing: '-0.02em',
                    marginBottom: '0.75rem',
                    lineHeight: 1.3,
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    color: 'rgba(240,237,232,0.5)',
                    fontSize: '0.9rem',
                    lineHeight: 1.7,
                    fontWeight: 300,
                  }}
                >
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      letterSpacing: '0.04em',
                      padding: '0.25rem 0.625rem',
                      borderRadius: '0.375rem',
                      background: 'rgba(240,237,232,0.05)',
                      color: 'rgba(240,237,232,0.7)',
                      border: '1px solid rgba(240,237,232,0.08)',
                      borderLeft: `3px solid ${tagColors[tag] ?? '#e8475f'}`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div
                style={{
                  display: 'flex',
                  gap: '0.75rem',
                  paddingTop: '0.75rem',
                  borderTop: '1px solid rgba(240,237,232,0.06)',
                }}
              >
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.375rem',
                    color: '#e8475f',
                    fontSize: '0.825rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    transition: 'opacity 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.75')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  Demo
                </a>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.375rem',
                    color: 'rgba(240,237,232,0.5)',
                    fontSize: '0.825rem',
                    fontWeight: 500,
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#f0ede8')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(240,237,232,0.5)')}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
