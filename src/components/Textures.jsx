import { useEffect, useRef } from 'react'

/**
 * Lightweight texture overlay components.
 * Drop any of these as the FIRST child inside a section that has:
 *   style={{ position: 'relative', isolation: 'isolate' }}
 * The zIndex: -1 keeps them behind all static content within that
 * isolated stacking context.
 */

/* ── SVG fractal-noise grain URIs ─────────────────────────────
   Two strengths: dark sections use a more visible grain (0.09),
   light sections use a whisper-light grain (0.05).
─────────────────────────────────────────────────────────────── */
const GRAIN_DARK  = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.09'/%3E%3C/svg%3E"
const GRAIN_LIGHT = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.045'/%3E%3C/svg%3E"

const base = {
  position: 'absolute', inset: 0,
  pointerEvents: 'none',
  zIndex: -1,
}

/* ── 1. Grain / Film Noise ── */
export function Grain({ dark = true, opacity = 1 }) {
  return (
    <div style={{
      ...base,
      backgroundImage: `url("${dark ? GRAIN_DARK : GRAIN_LIGHT}")`,
      backgroundRepeat: 'repeat',
      backgroundSize: '200px 200px',
      opacity,
      mixBlendMode: 'soft-light',
    }} />
  )
}

/* ── 2. Cross / Blueprint Grid ── */
export function CrossGrid({ dark = true, size = 44 }) {
  const c = dark ? 'rgba(255,255,255,0.055)' : 'rgba(0,176,237,0.055)'
  return (
    <div style={{
      ...base,
      backgroundImage: `linear-gradient(${c} 1px, transparent 1px), linear-gradient(90deg, ${c} 1px, transparent 1px)`,
      backgroundSize: `${size}px ${size}px`,
    }} />
  )
}

/* ── 2b. Hexagon Mesh ──
   Classic CSS honeycomb grid by layering six gradients at 30°, 150° and 60°.
   The 12% / 25% stops produce proper equilateral-hex proportions.
   Tile dimensions: size × (size * √3) guarantees seamless tessellation.
─────────────────────────────────────────────────────────────────────────── */
export function HexGrid({ opacity = 0.06, size = 72 }) {
  const c  = `rgba(0,176,237,${opacity})`
  const cd = `rgba(0,176,237,${(opacity * 0.6).toFixed(3)})`
  const h  = Math.round(size * 1.732)        // height = size × √3
  const hx = `${size / 2}px ${h / 2}px`     // half-offset for stagger

  return (
    <div style={{
      ...base,
      backgroundImage: [
        `linear-gradient(30deg,  ${c}  12%, transparent 12.5%, transparent 87%, ${c}  87.5%, ${c})`,
        `linear-gradient(150deg, ${c}  12%, transparent 12.5%, transparent 87%, ${c}  87.5%, ${c})`,
        `linear-gradient(30deg,  ${c}  12%, transparent 12.5%, transparent 87%, ${c}  87.5%, ${c})`,
        `linear-gradient(150deg, ${c}  12%, transparent 12.5%, transparent 87%, ${c}  87.5%, ${c})`,
        `linear-gradient(60deg,  ${cd} 25%, transparent 25.5%, transparent 75%, ${cd} 75.5%, ${cd})`,
        `linear-gradient(60deg,  ${cd} 25%, transparent 25.5%, transparent 75%, ${cd} 75.5%, ${cd})`,
      ].join(', '),
      backgroundSize: `${size}px ${h}px`,
      backgroundPosition: `0 0, 0 0, ${hx}, ${hx}, 0 0, ${hx}`,
    }} />
  )
}

/* ── 2f. Constellation / Node Map ──
   SVG dots + connecting lines rendered at cover size.
   Gold accent nodes reference the brand palette.
   Covers the full section once — no tiling seam.
─────────────────────────────────────────────────────────────────────────── */
export function Constellation({
  dotColor  = 'rgba(0,176,237,0.38)',
  goldColor = 'rgba(244,201,93,0.32)',
  lineColor = 'rgba(0,176,237,0.11)',
}) {
  /* Node list: { x, y, r, g } — g=true → gold accent dot */
  const N = [
    // top row
    { x: 120,  y: 72,  r: 2,   g: false },
    { x: 290,  y: 42,  r: 1.5, g: false },
    { x: 430,  y: 88,  r: 2.5, g: false },
    { x: 590,  y: 50,  r: 1.5, g: true  },
    { x: 730,  y: 86,  r: 2,   g: false },
    { x: 890,  y: 52,  r: 1.5, g: false },
    { x: 1060, y: 94,  r: 2,   g: false },
    { x: 1210, y: 62,  r: 2.5, g: true  },
    { x: 1360, y: 98,  r: 1.5, g: false },
    // middle row
    { x: 75,   y: 245, r: 1.5, g: false },
    { x: 205,  y: 272, r: 2.5, g: true  },
    { x: 365,  y: 248, r: 2,   g: false },
    { x: 525,  y: 285, r: 1.5, g: false },
    { x: 685,  y: 258, r: 2.5, g: false },
    { x: 845,  y: 292, r: 1.5, g: false },
    { x: 1005, y: 252, r: 2,   g: false },
    { x: 1155, y: 278, r: 1.5, g: false },
    { x: 1325, y: 242, r: 2.5, g: true  },
    // bottom row
    { x: 145,  y: 430, r: 2,   g: false },
    { x: 305,  y: 462, r: 2.5, g: false },
    { x: 465,  y: 425, r: 1.5, g: false },
    { x: 625,  y: 468, r: 2,   g: false },
    { x: 785,  y: 432, r: 2.5, g: true  },
    { x: 945,  y: 472, r: 1.5, g: false },
    { x: 1105, y: 442, r: 2,   g: false },
    { x: 1265, y: 478, r: 2.5, g: false },
  ]

  /* Edge pairs [i, j] */
  const E = [
    // top row
    [0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],
    // middle row
    [9,10],[10,11],[11,12],[12,13],[13,14],[14,15],[15,16],[16,17],
    // bottom row
    [18,19],[19,20],[20,21],[21,22],[22,23],[23,24],[24,25],
    // top → middle
    [1,10],[2,11],[3,12],[4,13],[6,15],[7,16],
    // middle → bottom
    [10,18],[11,19],[13,21],[14,22],[15,23],[16,24],
  ]

  const lines = E.map(([a,b]) =>
    `<line x1="${N[a].x}" y1="${N[a].y}" x2="${N[b].x}" y2="${N[b].y}" stroke="${lineColor}" stroke-width="0.7"/>`
  ).join('')

  const dots = N.map(n =>
    `<circle cx="${n.x}" cy="${n.y}" r="${n.r}" fill="${n.g ? goldColor : dotColor}"/>`
  ).join('')

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 560">${lines}${dots}</svg>`

  return (
    <div style={{
      ...base,
      backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(svg)}")`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center top',
    }} />
  )
}

/* ── 2g. Animated Constellation ──
   Canvas version — nodes drift on two layered sinusoidal paths with
   independent per-axis phases for unpredictable, organic movement.
   Edges are computed dynamically each frame: any two main nodes within
   MAX_DIST are connected, fading out as they approach the threshold.
   Micro-particles float independently without edges for added depth.
─────────────────────────────────────────────────────────────────────────── */
const NODE_DEFS = [
  // Main nodes — scattered organically across the canvas
  { fx: 0.04,  fy: 0.09,  r: 1.8, gold: false },
  { fx: 0.12,  fy: 0.22,  r: 2.4, gold: false },
  { fx: 0.09,  fy: 0.55,  r: 1.6, gold: false },
  { fx: 0.18,  fy: 0.35,  r: 2.0, gold: true  },
  { fx: 0.22,  fy: 0.12,  r: 1.5, gold: false },
  { fx: 0.17,  fy: 0.70,  r: 2.2, gold: false },
  { fx: 0.28,  fy: 0.48,  r: 1.4, gold: false },
  { fx: 0.32,  fy: 0.20,  r: 2.8, gold: false },
  { fx: 0.36,  fy: 0.78,  r: 1.8, gold: false },
  { fx: 0.25,  fy: 0.88,  r: 1.5, gold: true  },
  { fx: 0.42,  fy: 0.14,  r: 1.6, gold: false },
  { fx: 0.46,  fy: 0.40,  r: 2.2, gold: false },
  { fx: 0.39,  fy: 0.60,  r: 1.5, gold: false },
  { fx: 0.52,  fy: 0.07,  r: 2.0, gold: false },
  { fx: 0.49,  fy: 0.65,  r: 2.5, gold: true  },
  { fx: 0.55,  fy: 0.30,  r: 1.7, gold: false },
  { fx: 0.58,  fy: 0.82,  r: 1.5, gold: false },
  { fx: 0.62,  fy: 0.18,  r: 2.0, gold: false },
  { fx: 0.65,  fy: 0.50,  r: 1.6, gold: false },
  { fx: 0.68,  fy: 0.90,  r: 2.2, gold: false },
  { fx: 0.72,  fy: 0.28,  r: 1.5, gold: true  },
  { fx: 0.75,  fy: 0.65,  r: 2.0, gold: false },
  { fx: 0.78,  fy: 0.10,  r: 1.8, gold: false },
  { fx: 0.82,  fy: 0.44,  r: 2.4, gold: false },
  { fx: 0.85,  fy: 0.75,  r: 1.5, gold: false },
  { fx: 0.88,  fy: 0.22,  r: 2.0, gold: false },
  { fx: 0.92,  fy: 0.58,  r: 1.6, gold: true  },
  { fx: 0.96,  fy: 0.35,  r: 2.2, gold: false },
  { fx: 0.97,  fy: 0.85,  r: 1.5, gold: false },
  { fx: 0.07,  fy: 0.78,  r: 2.0, gold: false },
  { fx: 0.23,  fy: 0.38,  r: 1.4, gold: false },
  { fx: 0.40,  fy: 0.85,  r: 2.0, gold: false },
  { fx: 0.60,  fy: 0.55,  r: 1.8, gold: false },
  { fx: 0.70,  fy: 0.80,  r: 1.5, gold: false },
  { fx: 0.80,  fy: 0.90,  r: 2.0, gold: false },
  { fx: 0.50,  fy: 0.50,  r: 1.4, gold: false },
  { fx: 0.30,  fy: 0.68,  r: 1.8, gold: false },
  { fx: 0.15,  fy: 0.90,  r: 1.5, gold: false },
  { fx: 0.90,  fy: 0.08,  r: 2.0, gold: false },
  { fx: 0.44,  fy: 0.26,  r: 1.6, gold: false },
  { fx: 0.10,  fy: 0.40,  r: 1.3, gold: false },
  { fx: 0.55,  fy: 0.94,  r: 1.5, gold: false },
  { fx: 0.73,  fy: 0.42,  r: 1.2, gold: false },
  { fx: 0.87,  fy: 0.62,  r: 1.4, gold: false },
  { fx: 0.34,  fy: 0.08,  r: 1.6, gold: false },
  { fx: 0.94,  fy: 0.70,  r: 1.3, gold: false },
  { fx: 0.20,  fy: 0.75,  r: 2.2, gold: true  },
  { fx: 0.64,  fy: 0.24,  r: 1.5, gold: false },
  { fx: 0.47,  fy: 0.74,  r: 1.8, gold: false },
  { fx: 0.77,  fy: 0.55,  r: 1.4, gold: false },
  // Micro-particles — smaller, faster drift, no edges
  { fx: 0.14,  fy: 0.30,  r: 0.8, gold: false, micro: true },
  { fx: 0.33,  fy: 0.45,  r: 0.7, gold: false, micro: true },
  { fx: 0.47,  fy: 0.16,  r: 0.9, gold: false, micro: true },
  { fx: 0.61,  fy: 0.72,  r: 0.8, gold: false, micro: true },
  { fx: 0.76,  fy: 0.34,  r: 0.7, gold: false, micro: true },
  { fx: 0.89,  fy: 0.78,  r: 0.9, gold: false, micro: true },
  { fx: 0.26,  fy: 0.58,  r: 0.8, gold: false, micro: true },
  { fx: 0.54,  fy: 0.38,  r: 0.7, gold: false, micro: true },
  { fx: 0.67,  fy: 0.12,  r: 0.9, gold: false, micro: true },
  { fx: 0.83,  fy: 0.50,  r: 0.8, gold: false, micro: true },
  { fx: 0.38,  fy: 0.22,  r: 0.7, gold: false, micro: true },
  { fx: 0.91,  fy: 0.40,  r: 0.9, gold: false, micro: true },
  { fx: 0.06,  fy: 0.62,  r: 0.8, gold: false, micro: true },
  { fx: 0.51,  fy: 0.88,  r: 0.7, gold: false, micro: true },
  { fx: 0.71,  fy: 0.60,  r: 0.9, gold: false, micro: true },
  { fx: 0.19,  fy: 0.52,  r: 0.8, gold: false, micro: true },
  { fx: 0.43,  fy: 0.95,  r: 0.7, gold: false, micro: true },
  { fx: 0.57,  fy: 0.20,  r: 0.9, gold: false, micro: true },
  { fx: 0.81,  fy: 0.15,  r: 0.8, gold: false, micro: true },
  { fx: 0.35,  fy: 0.82,  r: 0.7, gold: false, micro: true },
  { fx: 0.63,  fy: 0.90,  r: 0.8, gold: false, micro: true },
  { fx: 0.02,  fy: 0.25,  r: 0.9, gold: false, micro: true },
  { fx: 0.98,  fy: 0.52,  r: 0.7, gold: false, micro: true },
  { fx: 0.29,  fy: 0.18,  r: 0.8, gold: false, micro: true },
  { fx: 0.74,  fy: 0.95,  r: 0.9, gold: false, micro: true },
]

/* Augment each node with two-component sinusoidal drift params */
const NODES = NODE_DEFS.map((n, i) => {
  const micro = !!n.micro
  return {
    ...n,
    micro,
    freq:   0.25 + (i % 9) * 0.045,          // primary: 0.25–0.61 Hz
    freq2:  0.10 + (i % 7) * 0.065,          // secondary: 0.10–0.52 Hz
    phaseX: (i * 2.399) % (Math.PI * 2),
    phaseY: (i * 3.717) % (Math.PI * 2),
    phase2: (i * 5.123) % (Math.PI * 2),
    ampX:   micro ? 25 + (i % 5) * 10 : 38 + (i % 8) * 9,
    ampY:   micro ? 18 + (i % 4) * 8  : 25 + (i % 6) * 8,
  }
})

export function AnimatedConstellation({ dotRgb = '0,176,237', lineRgb = '0,176,237' }) {
  const canvasRef = useRef(null)
  const mouseRef  = useRef({ x: -9999, y: -9999 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width  = canvas.parentElement.offsetWidth
      canvas.height = canvas.parentElement.offsetHeight
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas.parentElement)

    /* Track cursor in canvas-local coordinates.
       The canvas has pointerEvents:none so we listen on the parent. */
    const parent = canvas.parentElement
    const onMove  = e => {
      const r = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - r.left, y: e.clientY - r.top }
    }
    const onLeave = () => { mouseRef.current = { x: -9999, y: -9999 } }
    parent.addEventListener('mousemove', onMove)
    parent.addEventListener('mouseleave', onLeave)

    const HOVER_R   = 180   // px — repulsion radius
    const HOVER_STR = 80    // px — max displacement at cursor centre

    let raf
    const draw = () => {
      const w = canvas.width
      const h = canvas.height
      ctx.clearRect(0, 0, w, h)
      const t = Date.now() * 0.001
      const maxDist   = Math.min(w, h) * 0.22
      const maxDistSq = maxDist * maxDist

      /* Current positions — two oscillation components per axis */
      const pos = NODES.map(n => ({
        x: n.fx * w
          + Math.sin(t * n.freq  + n.phaseX) * n.ampX
          + Math.sin(t * n.freq2 + n.phase2) * n.ampX * 0.32,
        y: n.fy * h
          + Math.cos(t * n.freq  * 0.73 + n.phaseY) * n.ampY
          + Math.cos(t * n.freq2 * 1.18 + n.phase2 * 1.6) * n.ampY * 0.32,
        r:     n.r,
        gold:  n.gold,
        micro: n.micro,
        pulse: 0.80 + Math.sin(t * 0.7 + n.phaseX) * 0.20,
      }))

      /* Hover repulsion — push nodes away from the cursor */
      const { x: mx, y: my } = mouseRef.current
      const hoverRSq = HOVER_R * HOVER_R
      pos.forEach(p => {
        const dx  = p.x - mx
        const dy  = p.y - my
        const dSq = dx * dx + dy * dy
        if (dSq < hoverRSq && dSq > 0) {
          const dist  = Math.sqrt(dSq)
          const force = (1 - dist / HOVER_R) * (p.micro ? HOVER_STR * 1.5 : HOVER_STR)
          p.x += (dx / dist) * force
          p.y += (dy / dist) * force
        }
      })

      /* Dynamic edges — connect any two main nodes within maxDist */
      for (let a = 0; a < pos.length - 1; a++) {
        if (pos[a].micro) continue
        for (let b = a + 1; b < pos.length; b++) {
          if (pos[b].micro) continue
          const dx  = pos[b].x - pos[a].x
          const dy  = pos[b].y - pos[a].y
          const dSq = dx * dx + dy * dy
          if (dSq < maxDistSq) {
            const fade = 1 - dSq / maxDistSq
            ctx.lineWidth   = 0.4 + fade * 0.7
            ctx.strokeStyle = `rgba(${lineRgb},${(0.18 * fade * fade).toFixed(3)})`
            ctx.beginPath()
            ctx.moveTo(pos[a].x, pos[a].y)
            ctx.lineTo(pos[b].x, pos[b].y)
            ctx.stroke()
          }
        }
      }

      /* Dots and gold glow halos */
      pos.forEach(p => {
        const alpha = p.micro ? 0.22 : p.pulse * (p.gold ? 0.60 : 0.45)

        if (p.gold) {
          const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6)
          grd.addColorStop(0, `rgba(244,201,93,${(alpha * 0.45).toFixed(3)})`)
          grd.addColorStop(1, 'rgba(244,201,93,0)')
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.r * 6, 0, Math.PI * 2)
          ctx.fillStyle = grd
          ctx.fill()
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.gold
          ? `rgba(244,201,93,${alpha.toFixed(3)})`
          : `rgba(${dotRgb},${alpha.toFixed(3)})`
        ctx.fill()
      })

      raf = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      parent.removeEventListener('mousemove', onMove)
      parent.removeEventListener('mouseleave', onLeave)
    }
  }, [dotRgb, lineRgb])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        zIndex: -1, pointerEvents: 'none',
      }}
    />
  )
}

/* ── 2e. Radial Sunburst ──
   Lines radiating from a focal point via repeating-conic-gradient.
   origin: where the rays emanate from (e.g. '110% -10%' = outside top-right).
   gap: degrees between each ray. lineWidth: how thick each ray is (degrees).
─────────────────────────────────────────────────────────────────────────── */
export function Sunburst({
  color     = 'rgba(0,176,237,0.055)',
  origin    = '108% -8%',
  gap       = 9,
  lineWidth = 1.2,
}) {
  return (
    <div style={{
      ...base,
      backgroundImage: `repeating-conic-gradient(
        from 0deg at ${origin},
        transparent            0deg,
        transparent            ${gap - lineWidth}deg,
        ${color} ${gap - lineWidth}deg,
        ${color}               ${gap}deg
      )`,
    }} />
  )
}

/* ── 2d. Diagonal Diamond Mesh ──
   Cross grid rotated 45° — creates diamond / rhombus cells.
   More elegant than a straight grid, still structured and geometric.
─────────────────────────────────────────────────────────────────────────── */
export function DiamondGrid({ color = 'rgba(0,176,237,0.065)', size = 44 }) {
  return (
    <div style={{
      ...base,
      backgroundImage: [
        `repeating-linear-gradient( 45deg, ${color} 0px, ${color} 1px, transparent 1px, transparent ${size}px)`,
        `repeating-linear-gradient(-45deg, ${color} 0px, ${color} 1px, transparent 1px, transparent ${size}px)`,
      ].join(', '),
    }} />
  )
}

/* ── 2c. Isometric Grid ──
   Three gradient directions (0°, 60°, -60°) create equilateral triangles.
   Far more distinctive than a straight grid — has an engineered/precision feel.
   Use a brand-blue tint on dark backgrounds for extra depth.
─────────────────────────────────────────────────────────────────────────── */
export function IsoGrid({ color = 'rgba(0,176,237,0.065)', size = 48 }) {
  const g = (deg) =>
    `repeating-linear-gradient(${deg}deg, ${color} 0px, ${color} 1px, transparent 1px, transparent ${size}px)`
  return (
    <div style={{
      ...base,
      backgroundImage: `${g(0)}, ${g(60)}, ${g(-60)}`,
    }} />
  )
}

/* ── 3. Dot Grid ── */
export function DotGrid({ dark = false, size = 26 }) {
  const c = dark ? 'rgba(255,255,255,0.07)' : 'rgba(6,34,48,0.06)'
  return (
    <div style={{
      ...base,
      backgroundImage: `radial-gradient(${c} 1px, transparent 1px)`,
      backgroundSize: `${size}px ${size}px`,
    }} />
  )
}

/* ── 4. Topographic / Contour Lines ── */
export function Topo({ color = 'rgba(0,176,237,0.055)', ringGap = 34 }) {
  return (
    <div style={{
      ...base,
      backgroundImage: `
        repeating-radial-gradient(ellipse at 25% 65%, transparent 0px, transparent ${ringGap}px, ${color} ${ringGap}px, ${color} ${ringGap + 1}px),
        repeating-radial-gradient(ellipse at 75% 30%, transparent 0px, transparent ${ringGap * 1.4}px, ${color.replace('0.055', '0.03')} ${ringGap * 1.4}px, ${color.replace('0.055', '0.03')} ${ringGap * 1.4 + 1}px)
      `,
    }} />
  )
}

/* ── 5. Diagonal Stripes ── */
export function Diagonal({ color = 'rgba(0,176,237,0.03)', gap = 18 }) {
  return (
    <div style={{
      ...base,
      backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent ${gap}px, ${color} ${gap}px, ${color} ${gap + 1}px)`,
    }} />
  )
}

/* ── 6. Scanlines (digital-display feel) ── */
export function Scanlines({ opacity = 0.012 }) {
  return (
    <div style={{
      ...base,
      backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,1) 3px, rgba(0,0,0,1) 4px)`,
      opacity,
    }} />
  )
}

/* ── 7. Noise Vignette (grain denser at edges) ── */
export function NoiseVignette() {
  return (
    <div style={{
      ...base,
      backgroundImage: `url("${GRAIN_DARK}")`,
      backgroundRepeat: 'repeat',
      backgroundSize: '200px 200px',
      mixBlendMode: 'soft-light',
      /* Fade grain toward centre using a radial mask */
      WebkitMaskImage: 'radial-gradient(ellipse 85% 85% at 50% 50%, transparent 40%, black 100%)',
      maskImage: 'radial-gradient(ellipse 85% 85% at 50% 50%, transparent 40%, black 100%)',
      opacity: 0.7,
    }} />
  )
}
