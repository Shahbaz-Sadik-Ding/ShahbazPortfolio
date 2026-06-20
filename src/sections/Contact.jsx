import { useRef, useEffect, useState } from 'react'
import { Mail, MapPin, Send } from 'lucide-react'

// Sign up free at https://formspree.io, create a form, and paste your form ID below.
// e.g. if your endpoint is https://formspree.io/f/abcdefgh, set FORMSPREE_ID = 'abcdefgh'
const FORMSPREE_ID = 'YOUR_FORM_ID'

const LinkedinIcon = () => (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const GithubIcon = () => (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)

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

const inputStyle = {
  width: '100%', padding: '0.85rem 1rem',
  background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: 10, color: '#f1f5f9', fontSize: '0.9rem', outline: 'none',
  transition: 'border-color 0.2s', fontFamily: 'inherit',
}

export default function Contact() {
  const ref = useReveal()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // 'sending' | 'sent' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
      })
      if (res.ok) { setStatus('sent'); setForm({ name: '', email: '', message: '' }) }
      else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" style={{ padding: '7rem 2rem' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }} ref={ref}>
        <p className="section-label">05. Contact</p>
        <h2 className="section-title" style={{ marginBottom: '0.75rem' }}>
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p style={{ color: '#64748b', marginBottom: '3rem', maxWidth: 520 }}>
          Whether you have an opportunity, a question, or just want to connect — my inbox is always open!
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
          {/* Info */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
              {[
                { icon: <Mail size={20} />, label: 'Email', value: 'shahbaz.sadik@ding.com', href: 'mailto:shahbaz.sadik@ding.com' },
                { icon: <LinkedinIcon />, label: 'LinkedIn', value: 'linkedin.com/in/shahbaz-sadik', href: 'https://www.linkedin.com/in/shahbaz-sadik-1867701a4/' },
                { icon: <GithubIcon />, label: 'GitHub', value: 'github.com/shahbazsadik', href: 'https://github.com/shahbazsadik' },
                { icon: <MapPin size={20} />, label: 'Location', value: 'Dhaka, Bangladesh', href: null },
              ].map(({ icon, label, value, href }) => (
                <div key={label} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6', flexShrink: 0
                  }}>{icon}</div>
                  <div>
                    <p style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '0.1rem' }}>{label}</p>
                    {href ? (
                      <a href={href} target="_blank" rel="noopener noreferrer"
                        style={{ color: '#f1f5f9', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s' }}
                        onMouseEnter={e => e.target.style.color = '#3b82f6'}
                        onMouseLeave={e => e.target.style.color = '#f1f5f9'}
                      >{value}</a>
                    ) : (
                      <p style={{ color: '#f1f5f9', fontSize: '0.9rem', fontWeight: 500 }}>{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
              padding: '0.6rem 1.2rem', background: 'rgba(16,185,129,0.1)',
              border: '1px solid rgba(16,185,129,0.25)', borderRadius: 999
            }}>
              <div style={{
                width: 8, height: 8, borderRadius: '50%', background: '#10b981',
                animation: 'pulse 2s infinite',
              }} />
              <span style={{ color: '#10b981', fontSize: '0.82rem', fontWeight: 600 }}>Open to Opportunities</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.4rem', display: 'block' }}>Your Name</label>
              <input style={inputStyle} placeholder="John Doe" value={form.name} required
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                onFocus={e => e.target.style.borderColor = 'rgba(59,130,246,0.5)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
              />
            </div>
            <div>
              <label style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.4rem', display: 'block' }}>Email Address</label>
              <input type="email" style={inputStyle} placeholder="john@example.com" value={form.email} required
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                onFocus={e => e.target.style.borderColor = 'rgba(59,130,246,0.5)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
              />
            </div>
            <div>
              <label style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.4rem', display: 'block' }}>Message</label>
              <textarea style={{ ...inputStyle, height: 140, resize: 'vertical' }} placeholder="Your message here..." value={form.message} required
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                onFocus={e => e.target.style.borderColor = 'rgba(59,130,246,0.5)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
              />
            </div>
            <button type="submit" className="btn-primary" disabled={status === 'sending'}
              style={{ justifyContent: 'center', opacity: status === 'sending' ? 0.7 : 1 }}>
              <Send size={16} />
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'sent' && <p style={{ color: '#10b981', fontSize: '0.85rem', textAlign: 'center' }}>✅ Message sent successfully!</p>}
            {status === 'error' && <p style={{ color: '#ef4444', fontSize: '0.85rem', textAlign: 'center' }}>❌ Something went wrong. Please try again.</p>}
          </form>
        </div>
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @media (max-width: 768px) {
          #contact > div > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
