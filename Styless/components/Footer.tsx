export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(240,237,232,0.06)',
        padding: '2.5rem 2rem',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <a
          href="#inicio"
          style={{
            fontFamily: "'Fraunces', serif",
            fontSize: '1.1rem',
            fontWeight: 600,
            color: '#f0ede8',
            textDecoration: 'none',
            letterSpacing: '-0.02em',
          }}
        >
          NT<span style={{ color: '#e8475f' }}>.</span>
        </a>

        <p
          style={{
            color: 'rgba(240,237,232,0.3)',
            fontSize: '0.85rem',
            fontWeight: 300,
          }}
        >
          © {year} Natalia Tavera. Todos los derechos reservados.
        </p>

        <a
          href="#inicio"
          style={{
            color: 'rgba(240,237,232,0.4)',
            fontSize: '0.8rem',
            fontWeight: 500,
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.375rem',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#e8475f')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(240,237,232,0.4)')}
        >
          Volver arriba ↑
        </a>
      </div>
    </footer>
  )
}
