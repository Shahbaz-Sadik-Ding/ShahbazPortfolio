import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = ['About', 'Experience', 'Skills', 'Education', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    padding: '1rem 2rem',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    transition: 'background 0.3s, box-shadow 0.3s',
    background: scrolled ? 'rgba(10,14,26,0.92)' : 'transparent',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    boxShadow: scrolled ? '0 1px 0 rgba(255,255,255,0.05)' : 'none',
  }

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav style={navStyle}>
      {/* Logo */}
      <button onClick={() => scrollTo('hero')} style={{
        border: 'none', cursor: 'pointer',
        fontFamily: 'Fira Code, monospace', fontWeight: 700, fontSize: '1.1rem',
        background: 'linear-gradient(135deg,#3b82f6,#06b6d4)', WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}>
        &lt;Shahbaz /&gt;
      </button>

      {/* Desktop links */}
      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }} className="desktop-nav">
        {links.map((l, i) => (
          <li key={l}>
            <button onClick={() => scrollTo(l.toLowerCase())} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: '#94a3b8', fontSize: '0.9rem', fontWeight: 500,
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.target.style.color = '#3b82f6'}
              onMouseLeave={e => e.target.style.color = '#94a3b8'}
            >
              <span style={{ color: '#3b82f6', fontFamily: 'Fira Code, monospace', fontSize: '0.75rem', marginRight: '0.3rem' }}>
                0{i + 1}.
              </span>
              {l}
            </button>
          </li>
        ))}
        <li>
          <a
            href="https://www.linkedin.com/in/shahbaz-sadik-1867701a4/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ padding: '0.5rem 1.2rem', fontSize: '0.85rem' }}
          >
            Resume
          </a>
        </li>
      </ul>

      {/* Mobile hamburger */}
      <button onClick={() => setOpen(!open)} style={{
        display: 'none', background: 'none', border: 'none', cursor: 'pointer',
        color: '#94a3b8'
      }} className="mobile-menu-btn">
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: 'fixed', inset: 0, background: 'rgba(10,14,26,0.97)',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', gap: '2rem', zIndex: 99
        }}>
          <button onClick={() => setOpen(false)} style={{
            position: 'absolute', top: '1.5rem', right: '2rem',
            background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8'
          }}><X size={28} /></button>
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l.toLowerCase())} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: '#f1f5f9', fontSize: '1.5rem', fontWeight: 600
            }}>{l}</button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
