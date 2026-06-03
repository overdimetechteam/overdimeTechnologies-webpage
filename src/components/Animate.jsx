import { motion } from 'framer-motion'

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
