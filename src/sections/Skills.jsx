import { useRef, useEffect } from 'react'

const skillGroups = [
  {
    category: 'Backend & Frameworks',
    color: '#3b82f6',
    skills: [
      { name: '.NET Core', level: 95 },
      { name: '.NET Framework', level: 90 },
      { name: 'ASP.NET Web API', level: 93 },
      { name: 'C#', level: 95 },
      { name: 'Microservices', level: 88 },
      { name: 'Node.js', level: 70 },
    ],
  },
  {
    category: 'Frontend',
    color: '#06b6d4',
    skills: [
      { name: 'React.js', level: 78 },
      { name: 'JavaScript', level: 80 },
      { name: 'HTML / CSS', level: 82 },
      { name: 'SASS', level: 70 },
    ],
  },
  {
    category: 'Data & Cloud',
    color: '#8b5cf6',
    skills: [
      { name: 'SQL (MSSQL/Postgres)', level: 88 },
      { name: 'MongoDB', level: 82 },
      { name: 'REST APIs', level: 95 },
      { name: 'Azure', level: 72 },
    ],
  },
  {
    category: 'Architecture & Tools',
    color: '#10b981',
    skills: [
      { name: 'System Design', level: 85 },
      { name: 'API Design', level: 90 },
      { name: 'Event-Driven Arch.', level: 78 },
      { name: 'Git / GitHub', level: 88 },
    ],
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

function SkillBar({ name, level }) {
  return (
    <div style={{ marginBottom: '0.75rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
        <span style={{ fontSize: '0.85rem', color: '#d1d5db', fontWeight: 500 }}>{name}</span>
        <span style={{ fontSize: '0.75rem', color: '#64748b', fontFamily: 'Fira Code, monospace' }}>{level}%</span>
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useReveal()

  return (
    <section id="skills" style={{ padding: '7rem 2rem' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }} ref={ref}>
        <p className="section-label">03. Skills</p>
        <h2 className="section-title" style={{ marginBottom: '3rem' }}>
          Technical <span className="gradient-text">Toolkit</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          {skillGroups.map(({ category, color, skills }) => (
            <div key={category} className="card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div style={{ width: 12, height: 12, borderRadius: '50%', background: color, boxShadow: `0 0 8px ${color}` }} />
                <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#f1f5f9' }}>{category}</h3>
              </div>
              {skills.map(s => <SkillBar key={s.name} {...s} />)}
            </div>
          ))}
        </div>

        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <p style={{ color: '#475569', fontSize: '0.8rem', marginBottom: '1.5rem', fontFamily: 'Fira Code, monospace' }}>
            // other technologies I&apos;ve worked with
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
            {['Docker', 'RabbitMQ', 'SignalR', 'Entity Framework', 'Dapper', 'Swagger / OpenAPI',
              'Postman', 'GitHub Actions', 'Agile / Scrum', 'Clean Architecture'].map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
