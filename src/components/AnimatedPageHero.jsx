import { Grain, AnimatedConstellation, NoiseVignette } from './Textures'

export default function AnimatedPageHero({ children }) {
  return (
    <div
      className="page-hero"
      style={{
        background: 'linear-gradient(135deg, #030f1a 0%, #062230 55%, #093040 100%)',
        position: 'relative',
        isolation: 'isolate',
      }}
    >
      <Grain dark opacity={0.85} />
      <AnimatedConstellation />
      <NoiseVignette />

      <div className="container page-hero-content" style={{ position: 'relative', zIndex: 2 }}>
        {children}
      </div>
    </div>
  )
}
