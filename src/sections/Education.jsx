import { useRef, useEffect } from 'react'

const education = [
  {
    icon: '🏛️',
    degree: 'Bachelor of Science in Computer Science & Engineering',
    institution: 'East West University',
    period: '2015 – 2019',
    desc: 'Focused on algorithms, data structures, software engineering, databases, networking, and computer architecture. Served as both Undergraduate and Graduate Teaching Assistant.',
    highlights: ['Data Structures & Algorithms', 'Software Engineering', 'Database Systems', 'Computer Networks'],
  },
  {
    icon: '📚',
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'The Naogaon Government College',
    period: '2013 – 2014',
    desc: 'Science group with focus on Mathematics, Physics, and Chemistry.',
    highlights: ['Science', 'Mathematics', 'Physics'],
  },
  {
    icon: '🏫',
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Naogaon K.D. Government High School',
    period: '2004 – 2012',
    desc: 'Completed secondary education with strong academic foundation.',
    highlights: ['Science', 'Mathematics'],
  },
]

function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.style.opacity = 1; el.style.transform = 'translateY(0)' }
    }, { threshold: 0.1 })
    el.style.opacity = 0; el.style.transform = 'translateY(30px)'; el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

export default function Education() {
  const ref = useReveal()

  return (
    <section id="education" style={{ padding: '7rem 2rem', background: 'rgba(255,255,255,0.01)' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }} ref={ref}>
        <p className="section-label">04. Education</p>
        <h2 className="section-title" style={{ marginBottom: '3rem' }}>
          Academic <span className="gradient-text">Background</span>
        </h2>

        <div style={{ position: 'relative' }}>
          <div style={{
            position: 'absolute', left: 28, top: 0, bottom: 0, width: 2,
            background: 'linear-gradient(180deg, #3b82f6, #8b5cf6, transparent)'
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {education.map((edu, i) => (
              <div key={i} style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                <div style={{
                  width: 56, height: 56, borderRadius: '50%', flexShrink: 0,
                  background: 'var(--bg-card)', border: '2px solid rgba(59,130,246,0.4)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.5rem', zIndex: 1,
                  boxShadow: '0 0 20px rgba(59,130,246,0.15)'
                }}>
                  {edu.icon}
                </div>

                <div className="card" style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <div>
                      <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.3rem' }}>{edu.degree}</h3>
                      <p style={{ color: '#3b82f6', fontWeight: 600, fontSize: '0.9rem' }}>{edu.institution}</p>
                    </div>
                    <span style={{
                      padding: '0.3rem 0.8rem', background: 'rgba(139,92,246,0.12)',
                      border: '1px solid rgba(139,92,246,0.25)', borderRadius: 999,
                      fontSize: '0.78rem', color: '#a78bfa', fontFamily: 'Fira Code, monospace',
                      whiteSpace: 'nowrap'
                    }}>{edu.period}</span>
                  </div>
                  <p style={{ color: '#64748b', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '1rem' }}>{edu.desc}</p>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {edu.highlights.map(h => <span key={h} className="tag">{h}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
