import { useEffect, useState } from 'react'

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [trail, setTrail] = useState({ x: -100, y: -100 })

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  useEffect(() => {
    let frame
    const animate = () => {
      setTrail(prev => ({
        x: prev.x + (pos.x - prev.x) * 0.12,
        y: prev.y + (pos.y - prev.y) * 0.12,
      }))
      frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [pos])

  const dot = {
    position: 'fixed', pointerEvents: 'none', zIndex: 9999, borderRadius: '50%',
    transform: 'translate(-50%,-50%)', transition: 'none',
  }

  return (
    <>
      <div style={{ ...dot, left: pos.x, top: pos.y, width: 8, height: 8, background: '#3b82f6' }} />
      <div style={{
        ...dot, left: trail.x, top: trail.y, width: 32, height: 32,
        border: '1.5px solid rgba(59,130,246,0.5)', background: 'transparent',
      }} />
    </>
  )
}
