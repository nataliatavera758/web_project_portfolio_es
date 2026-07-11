const categories = [
  {
    title: 'Frontend',
    icon: '🎨',
    color: '#61dafb',
    skills: [
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 85 },
      { name: 'JavaScript', level: 80 },
      { name: 'React', level: 70 },
    ],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    color: '#68a063',
    skills: [
      { name: 'Node.js', level: 70 },
      { name: 'Python', level: 65 },
      { name: 'Express', level: 65 },
      { name: 'Django', level: 55 },
    ],
  },
  {
    title: 'Herramientas',
    icon: '🛠',
    color: '#e8475f',
    skills: [
      { name: 'Git', level: 80 },
      { name: 'GitHub', level: 80 },
      { name: 'VS Code', level: 90 },
      { name: 'Figma', level: 60 },
    ],
  },
]

export default function Skills() {
  return (
    <section
      id="habilidades"
      style={{
        padding: '8rem 2rem',
        background: 'linear-gradient(180deg, #08080c 0%, #0e0e18 50%, #08080c 100%)',
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
        <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
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
              Habilidades
            </span>
            <div style={{ width: 24, height: 1, background: '#e8475f' }} />
          </div>
          <h2
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 600,
              color: '#f0ede8',
              letterSpacing: '-0.025em',
              lineHeight: 1.15,
            }}
          >
            Mi <span style={{ fontStyle: 'italic', color: '#e8475f' }}>stack</span> tecnológico
          </h2>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
          }}
          className="skills-grid"
        >
          {categories.map((cat) => (
            <div
              key={cat.title}
              style={{
                background: '#111118',
                border: '1px solid rgba(240,237,232,0.07)',
                borderRadius: '1.25rem',
                padding: '2rem',
                transition: 'border-color 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `rgba(${cat.color.replace('#', '').match(/.{2}/g)!.map(h => parseInt(h, 16)).join(',')}, 0.3)`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(240,237,232,0.07)'
              }}
            >
              {/* Category header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '2rem',
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    background: 'rgba(240,237,232,0.04)',
                    borderRadius: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.3rem',
                    border: '1px solid rgba(240,237,232,0.06)',
                  }}
                >
                  {cat.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "'Fraunces', serif",
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    color: '#f0ede8',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {cat.title}
                </h3>
              </div>

              {/* Skills with bars */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '0.5rem',
                      }}
                    >
                      <span
                        style={{
                          color: 'rgba(240,237,232,0.75)',
                          fontSize: '0.875rem',
                          fontWeight: 500,
                        }}
                      >
                        {skill.name}
                      </span>
                      <span
                        style={{
                          color: 'rgba(240,237,232,0.35)',
                          fontSize: '0.75rem',
                          fontWeight: 400,
                          fontVariantNumeric: 'tabular-nums',
                        }}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      style={{
                        height: 4,
                        background: 'rgba(240,237,232,0.06)',
                        borderRadius: 2,
                        overflow: 'hidden',
                      }}
                    >
                      <div
                        style={{
                          height: '100%',
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, ${cat.color}80, ${cat.color})`,
                          borderRadius: 2,
                          transition: 'width 1s ease',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 600px) and (max-width: 900px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  )
}
