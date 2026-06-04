import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const ease = [0.25, 0.46, 0.45, 0.94]
const vp = { once: true, margin: '-60px' }

export function FadeUp({ children, delay = 0, className, style }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={vp}
      transition={{ duration: 0.65, ease, delay }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}

export function FadeIn({ children, delay = 0, className, style }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={vp}
      transition={{ duration: 0.55, ease, delay }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}

export function SlideLeft({ children, delay = 0, className, style }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -48 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={vp}
      transition={{ duration: 0.65, ease, delay }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}

export function SlideRight({ children, delay = 0, className, style }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 48 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={vp}
      transition={{ duration: 0.65, ease, delay }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}

/**
 * Counts from 0 → `to` when it scrolls into view.
 * Use `suffix`/`prefix` for "+", "%", "$" etc.
 * For non-numeric values (e.g. "30–50%") skip this and use FadeUp instead.
 */
export function AnimatedCounter({ to, suffix = '', prefix = '', duration = 1.8, style, className }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const steps = 60
    const stepDuration = (duration * 1000) / steps
    const increment = to / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= to) {
        setCount(to)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isInView, to, duration])

  return (
    <span ref={ref} className={className} style={style}>
      {prefix}{count}{suffix}
    </span>
  )
}
