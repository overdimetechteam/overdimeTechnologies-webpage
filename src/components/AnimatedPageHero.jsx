import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: 4 + (i / 20) * 92,
  delay: (i * 0.45) % 7,
  duration: 10 + (i % 6) * 2.5,
  size: 2 + (i % 3),
  color: i % 3 === 0
    ? `rgba(244,201,93,${0.25 + (i % 4) * 0.08})`
    : `rgba(0,176,237,${0.22 + (i % 4) * 0.08})`,
}))

export default function AnimatedPageHero({ children }) {
  const [mouse, setMouse] = useState({ x: 50, y: 50 })
  const ref = useRef(null)

  const onMouseMove = (e) => {
    if (!ref.current) return
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    setMouse({
      x: ((e.clientX - left) / width) * 100,
      y: ((e.clientY - top) / height) * 100,
    })
  }

  return (
    <div
      className="page-hero"
      ref={ref}
      onMouseMove={onMouseMove}
      style={{
        background: 'linear-gradient(135deg, #040d1a 0%, #0A2540 55%, #0c2d4e 100%)',
        position: 'relative',
      }}
    >
      {/* ── Animated background ── */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>

        {/* Mouse-reactive spotlight */}
        <div style={{
          position: 'absolute',
          width: 700, height: 700,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,176,237,0.10) 0%, transparent 60%)',
          left: `calc(${mouse.x}% - 350px)`,
          top: `calc(${mouse.y}% - 350px)`,
          transition: 'left 1.1s cubic-bezier(0.25,0.46,0.45,0.94), top 1.1s cubic-bezier(0.25,0.46,0.45,0.94)',
        }} />

        {/* Ambient orbs */}
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -45, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', top: '-15%', right: '-2%', width: 520, height: 520, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,176,237,0.18) 0%, transparent 65%)' }}
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 35, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', bottom: '-20%', left: '-5%', width: 620, height: 620, borderRadius: '50%', background: 'radial-gradient(circle, rgba(244,201,93,0.09) 0%, transparent 60%)' }}
        />
        <motion.div
          animate={{ x: [0, 25, 0], y: [0, -20, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', top: '30%', left: '40%', width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,176,237,0.07) 0%, transparent 65%)' }}
        />

        {/* Dot grid */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.055) 1px, transparent 1px)', backgroundSize: '38px 38px' }} />

        {/* Spinning rings */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
          style={{ position: 'absolute', top: '8%', right: '6%', width: 260, height: 260, borderRadius: '50%', border: '1px solid rgba(0,176,237,0.14)' }}
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
          style={{ position: 'absolute', top: '4%', right: '3%', width: 370, height: 370, borderRadius: '50%', border: '1px solid rgba(0,176,237,0.07)' }}
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 42, repeat: Infinity, ease: 'linear' }}
          style={{ position: 'absolute', bottom: '5%', left: '8%', width: 180, height: 180, borderRadius: '50%', border: '1px solid rgba(244,201,93,0.1)' }}
        />

        {/* Floating particles */}
        {PARTICLES.map(p => (
          <motion.div
            key={p.id}
            style={{
              position: 'absolute',
              left: `${p.x}%`,
              bottom: 0,
              width: p.size,
              height: p.size,
              borderRadius: '50%',
              background: p.color,
            }}
            animate={{ y: [0, -320], opacity: [0, 1, 1, 0] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'linear' }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {children}
      </div>
    </div>
  )
}
