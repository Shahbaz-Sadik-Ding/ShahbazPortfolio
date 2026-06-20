import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0)
    }
    window.addEventListener('scroll', update)
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, height: '3px',
      width: `${progress}%`, zIndex: 200,
      background: 'linear-gradient(90deg,#3b82f6,#06b6d4,#8b5cf6)',
      transition: 'width 0.1s linear',
      boxShadow: '0 0 10px rgba(59,130,246,0.6)'
    }} />
  )
}
