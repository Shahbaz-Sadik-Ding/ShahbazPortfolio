import { useEffect, useRef } from 'react'
import { Code2, Server, Database, Users } from 'lucide-react'

const highlights = [
  { icon: <Code2 size={22} />, title: '.NET Expert', desc: 'Deep expertise in .NET Core & Framework building production-grade APIs and microservices.' },
  { icon: <Server size={22} />, title: 'System Design', desc: 'Designing scalable, fault-tolerant distributed systems with event-driven architecture.' },
  { icon: <Database size={22} />, title: 'Data & Integrations', desc: 'Proficient in SQL, MongoDB, and third-party system integrations across diverse domains.' },
  { icon: <Users size={22} />, title: 'Team Leadership', desc: 'Leading integration teams, mentoring engineers, and driving cross-functional delivery.' },
]

function useReveal(threshold = 0.15) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { el.style.opacity = 1; el.style.transform = 'translateY(0)' }
    }, { threshold })
    el.style.opacity = 0; el.style.transform = 'translateY(30px)'; el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return ref
}

export default function About() {
  const sectionRef = useReveal()

  return (
    <section id="about" style={{ padding: '7rem 2rem', maxWidth: 1100, margin: '0 auto' }}>
      <div ref={sectionRef}>
        <p className="section-label">01. About Me</p>
        <h2 className="section-title" style={{ marginBottom: '3rem' }}>
          Who I <span className="gradient-text">Am</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          <div>
            <div style={{
              width: 180, height: 180, borderRadius: '50%', margin: '0 auto 2rem',
              background: 'linear-gradient(135deg,#3b82f6,#06b6d4,#8b5cf6)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '5rem', boxShadow: '0 0 60px rgba(59,130,246,0.3)'
            }}>
              👨‍💻
            </div>
            <p style={{ color: '#94a3b8', lineHeight: 1.9, marginBottom: '1.2rem' }}>
              Hi! I&apos;m <strong style={{ color: '#f1f5f9' }}>Shahbaz Sadik</strong>, an Engineering Team Lead
              at <strong style={{ color: '#3b82f6' }}>Ding.com</strong> based in Dhaka, Bangladesh.
              I hold a <strong style={{ color: '#f1f5f9' }}>BSc in Computer Science &amp; Engineering</strong> from
              East West University (2015–2019).
            </p>
            <p style={{ color: '#94a3b8', lineHeight: 1.9, marginBottom: '1.2rem' }}>
              Over 5+ years I&apos;ve grown from a .NET Developer to leading the Integrations Team, building
              resilient microservices, robust REST APIs, and complex third-party integrations that power
              Ding&apos;s global telecom platform.
            </p>
            <p style={{ color: '#94a3b8', lineHeight: 1.9 }}>
              I&apos;m passionate about clean architecture, system design, and mentoring the next generation
              of engineers. Previously I also served as a Teaching Assistant at East West University.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {highlights.map(({ icon, title, desc }) => (
              <div key={title} className="card" style={{ padding: '1.5rem' }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12, marginBottom: '1rem',
                  background: 'rgba(59,130,246,0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#3b82f6'
                }}>{icon}</div>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.5rem' }}>{title}</h3>
                <p style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about > div > div:last-child { grid-template-columns: 1fr !important; gap: 2rem !important; }
          #about > div > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
