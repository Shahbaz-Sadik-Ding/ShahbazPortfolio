import { useEffect, useRef, useState } from 'react'
import { ArrowDown, Terminal, Mail, MapPin } from 'lucide-react'

const GithubIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)

const LinkedinIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const TITLES = [
  'Engineering Team Lead',
  '.NET Core Architect',
  'Microservices Engineer',
  'System Design Expert',
  'Full-Stack Developer',
]

function ProfilePhoto() {
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 })
  const [hover, setHover] = useState(false)
  const [imgOk, setImgOk] = useState(true)

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    setTilt({ rx: -py * 12, ry: px * 12 })
  }
  const onLeave = () => { setTilt({ rx: 0, ry: 0 }); setHover(false) }

  return (
    <div style={{ perspective: 1000, flex: '0 0 auto', display: 'flex', justifyContent: 'center' }}>
      <div
        onMouseMove={onMove}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={onLeave}
        style={{
          position: 'relative',
          width: 'clamp(240px, 30vw, 340px)',
          aspectRatio: '4 / 5',
          transformStyle: 'preserve-3d',
          transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) scale(${hover ? 1.02 : 1})`,
          transition: 'transform 0.25s ease-out',
          animation: 'float 6s ease-in-out infinite',
        }}
      >
        <div style={{
          position: 'absolute', inset: -10, borderRadius: 28, zIndex: 0,
          background: 'radial-gradient(circle at 50% 40%, rgba(59,130,246,0.40), rgba(6,182,212,0.12) 60%, transparent 75%)',
          filter: 'blur(30px)', opacity: hover ? 0.55 : 0.35,
          transition: 'opacity 0.4s ease',
        }} />

        <div style={{
          position: 'absolute', inset: 0, borderRadius: 24, zIndex: 1,
          padding: 2,
          background: 'linear-gradient(140deg, rgba(59,130,246,0.9), rgba(139,92,246,0.5), rgba(6,182,212,0.9))',
          transform: 'translateZ(20px)',
        }}>
          <div style={{
            width: '100%', height: '100%', borderRadius: 22, overflow: 'hidden',
            background: 'linear-gradient(160deg, #0f172a, #1e293b)',
            boxShadow: '0 30px 60px -20px rgba(0,0,0,0.7)',
          }}>
            {imgOk ? (
              <img
                src={`${import.meta.env.BASE_URL}profile.jpg`}
                alt="Shahbaz Sadik"
                onError={() => setImgOk(false)}
                style={{
                  width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                  filter: hover ? 'grayscale(0) contrast(1.05)' : 'grayscale(0.35)',
                  transform: hover ? 'scale(1.06)' : 'scale(1)',
                  transition: 'filter 0.5s ease, transform 0.6s ease',
                }}
              />
            ) : (
              <div style={{
                width: '100%', height: '100%', display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center', gap: '0.5rem', textAlign: 'center',
                padding: '1rem',
              }}>
                <span className="gradient-text" style={{ fontSize: '3.5rem', fontWeight: 900 }}>SS</span>
                <span style={{ color: '#475569', fontSize: '0.7rem', fontFamily: 'Fira Code, monospace' }}>
                  add /public/profile.jpg
                </span>
              </div>
            )}
          </div>
        </div>

        <div style={{
          position: 'absolute', bottom: 14, left: '50%',
          transform: 'translateX(-50%) translateZ(45px)', zIndex: 2,
          display: 'flex', alignItems: 'center', gap: '0.4rem',
          padding: '0.45rem 0.9rem', borderRadius: 999,
          background: 'rgba(15,23,42,0.72)', backdropFilter: 'blur(8px)',
          border: '1px solid rgba(59,130,246,0.35)',
          color: '#cbd5e1', fontSize: '0.78rem', fontWeight: 600, whiteSpace: 'nowrap',
          boxShadow: '0 8px 24px -8px rgba(0,0,0,0.6)',
        }}>
          <MapPin size={13} color="#06b6d4" /> Dhaka, Bangladesh
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  const [titleIdx, setTitleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const canvasRef = useRef(null)

  useEffect(() => {
    const target = TITLES[titleIdx]
    let timeout
    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length - 1)), 45)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setTitleIdx((i) => (i + 1) % TITLES.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, titleIdx])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let w = canvas.width = canvas.offsetWidth
    let h = canvas.height = canvas.offsetHeight
    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.5 + 0.1,
    }))
    let frame
    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(59,130,246,${p.alpha})`
        ctx.fill()
      })
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(59,130,246,${0.08 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
      frame = requestAnimationFrame(draw)
    }
    draw()
    const resize = () => {
      w = canvas.width = canvas.offsetWidth
      h = canvas.height = canvas.offsetHeight
    }
    window.addEventListener('resize', resize)
    return () => { cancelAnimationFrame(frame); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <section id="hero" style={{
      minHeight: '100vh', position: 'relative', display: 'flex',
      alignItems: 'center', justifyContent: 'center',
      padding: '0 2rem', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)',
        top: '-20%', right: '-10%', pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)',
        bottom: '-10%', left: '-10%', pointerEvents: 'none'
      }} />

      <canvas ref={canvasRef} style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none'
      }} />

      <div style={{
        maxWidth: 1120, width: '100%', position: 'relative', zIndex: 1,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: '3rem', flexWrap: 'wrap',
      }}>
        <div style={{ flex: '1 1 480px', minWidth: 280 }}>
          <p style={{
            fontFamily: 'Fira Code, monospace', color: '#06b6d4',
            fontSize: '1rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem'
          }}>
            <Terminal size={16} /> Hello, World! I&apos;m
          </p>

          <h1 style={{
            fontSize: 'clamp(2.8rem, 8vw, 5.5rem)', fontWeight: 900,
            lineHeight: 1.05, marginBottom: '1rem'
          }}>
            <span className="gradient-text">Shahbaz</span>
            <br />
            <span style={{ color: '#f1f5f9' }}>Sadik</span>
          </h1>

          <div style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', fontWeight: 600,
            color: '#94a3b8', marginBottom: '1.5rem', minHeight: '2.2rem',
            display: 'flex', alignItems: 'center', gap: '2px'
          }}>
            <span>{displayed}</span>
            <span style={{
              display: 'inline-block', width: 2, height: '1.2em',
              background: '#3b82f6', animation: 'blink 1s step-end infinite',
              verticalAlign: 'middle'
            }} />
          </div>

          <p style={{
            maxWidth: 580, color: '#64748b', fontSize: '1rem',
            lineHeight: 1.8, marginBottom: '2.5rem'
          }}>
            Engineering Team Lead at{' '}
            <span style={{ color: '#3b82f6', fontWeight: 600 }}>Ding.com</span>, specialising in
            .NET Core microservices, API integrations, and scalable system design. Passionate about building
            resilient, high-performance software.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <button className="btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              <Mail size={16} /> Get in Touch
            </button>
            <a href="https://www.linkedin.com/in/shahbaz-sadik-1867701a4/" target="_blank" rel="noopener noreferrer" className="btn-outline">
              <LinkedinIcon /> LinkedIn
            </a>
            <a href="https://github.com/shahbazsadik" target="_blank" rel="noopener noreferrer" className="btn-outline">
              <GithubIcon /> GitHub
            </a>
          </div>

          <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap' }}>
            {[
              { num: '5+', label: 'Years Experience' },
              { num: '3+', label: 'Roles at Ding' },
              { num: '∞', label: 'Systems Built' },
            ].map(({ num, label }) => (
              <div key={label}>
                <div style={{ fontSize: '2rem', fontWeight: 800 }} className="gradient-text">{num}</div>
                <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '0.2rem' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        <ProfilePhoto />
      </div>

      <div style={{
        position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
        color: '#475569', fontSize: '0.75rem', animation: 'bounce 2s infinite'
      }}>
        <ArrowDown size={16} />
        <span style={{ fontFamily: 'Fira Code, monospace' }}>scroll</span>
      </div>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes bounce { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(-8px)} }
        @keyframes float { 0%,100%{translate:0 0} 50%{translate:0 -14px} }
      `}</style>
    </section>
  )
}
