import { useRef, useEffect, useState } from 'react'
import { MapPin, Calendar } from 'lucide-react'

const jobs = [
  {
    company: 'Ding',
    logo: '🔵',
    role: 'Engineering Team Lead – Integrations',
    period: 'Jan 2025 – Present',
    duration: '1 yr 4 mos',
    type: 'Full-time · Hybrid',
    location: 'Dublin, Ireland (Remote)',
    desc: 'Leading the Integrations engineering team, driving architectural decisions, mentoring engineers, and overseeing delivery of complex integration features across Ding\'s global telecom platform.',
    tags: ['.NET Core', 'Microservices', 'System Design', 'Team Leadership', 'API'],
  },
  {
    company: 'Ding',
    logo: '🔵',
    role: 'Software Engineer – Team Integrations',
    period: 'Jul 2023 – Jan 2025',
    duration: '1 yr 7 mos',
    type: 'Full-time',
    location: 'Hybrid',
    desc: 'Designed and built high-throughput integration services connecting Ding with global telecom partners. Focused on reliability, observability, and scalable microservice patterns.',
    tags: ['.NET Core', 'REST APIs', 'MongoDB', 'SQL', 'Azure'],
  },
  {
    company: 'Ding',
    logo: '🔵',
    role: '.NET Developer / Systems Integrator',
    period: 'Mar 2021 – Jul 2023',
    duration: '2 yrs 5 mos',
    type: 'Full-time',
    location: 'Remote',
    desc: 'Developed and maintained backend services for system integrations. Implemented RESTful APIs, worked on data pipelines, and collaborated across teams to deliver integration solutions.',
    tags: ['.NET Framework', '.NET Core', 'SQL', 'REST APIs', 'Integrations'],
  },
  {
    company: 'Spring Rain Pvt Ltd',
    logo: '🌿',
    role: 'Full-Stack Developer',
    period: 'Sep 2020 – Dec 2020',
    duration: '4 mos',
    type: 'Internship',
    location: 'Dhaka, Bangladesh',
    desc: 'Internship in full-stack JavaScript technologies. Built features using Node.js, React.js, MySQL, MongoDB, REST APIs, and CSS/SASS.',
    tags: ['Node.js', 'React.js', 'MySQL', 'MongoDB', 'REST APIs', 'SASS'],
  },
  {
    company: 'East West University',
    logo: '🎓',
    role: 'Graduate Teaching Assistant',
    period: 'Sep 2019 – Aug 2020',
    duration: '1 yr',
    type: 'Part-time',
    location: 'Dhaka, Bangladesh',
    desc: 'Assisted faculty in delivering CSE courses, grading, conducting lab sessions, and supporting undergraduate students.',
    tags: ['Teaching', 'CSE', 'Mentoring'],
  },
  {
    company: 'East West University',
    logo: '🎓',
    role: 'Undergraduate Teaching Assistant',
    period: 'Sep 2017 – Aug 2019',
    duration: '2 yrs',
    type: 'Part-time',
    location: 'Dhaka, Bangladesh',
    desc: 'Supported professors in lab sessions and course activities for undergraduate Computer Science students.',
    tags: ['Teaching', 'CSE', 'Lab Sessions'],
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

function JobCard({ job, index, active, onClick }) {
  const isActive = active === index
  return (
    <div
      className="card"
      onClick={onClick}
      style={{
        cursor: 'pointer', padding: '1.5rem',
        borderColor: isActive ? 'rgba(59,130,246,0.5)' : undefined,
        boxShadow: isActive ? '0 0 30px rgba(59,130,246,0.15)' : undefined,
        transform: 'none',
      }}
    >
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
        <div style={{
          width: 44, height: 44, borderRadius: 12, fontSize: '1.5rem',
          background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0
        }}>{job.logo}</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.2rem' }}>{job.role}</h3>
          <p style={{ fontSize: '0.85rem', color: '#3b82f6', fontWeight: 600, marginBottom: '0.4rem' }}>{job.company}</p>
          <div style={{ display: 'flex', gap: '1rem', fontSize: '0.75rem', color: '#64748b', flexWrap: 'wrap' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Calendar size={12} />{job.period}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><MapPin size={12} />{job.type}</span>
          </div>
        </div>
        {isActive && <div style={{ width: 4, height: '100%', background: 'linear-gradient(180deg,#3b82f6,#8b5cf6)', borderRadius: 2, flexShrink: 0 }} />}
      </div>

      {isActive && (
        <div style={{ marginTop: '1.2rem', paddingTop: '1.2rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.8, marginBottom: '1rem' }}>{job.desc}</p>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {job.tags.map(t => <span key={t} className="tag">{t}</span>)}
          </div>
        </div>
      )}
    </div>
  )
}

export default function Experience() {
  const [active, setActive] = useState(0)
  const ref = useReveal()

  return (
    <section id="experience" style={{ padding: '7rem 2rem', background: 'rgba(255,255,255,0.01)' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }} ref={ref}>
        <p className="section-label">02. Experience</p>
        <h2 className="section-title" style={{ marginBottom: '3rem' }}>
          Where I&apos;ve <span className="gradient-text">Worked</span>
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {jobs.map((job, i) => (
            <JobCard key={i} job={job} index={i} active={active} onClick={() => setActive(i === active ? -1 : i)} />
          ))}
        </div>
      </div>
    </section>
  )
}
