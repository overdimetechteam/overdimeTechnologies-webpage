import { useState, useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { X } from 'lucide-react'

const toasts = [
  {
    quote: '"We can now pinpoint the bottleneck — something impossible before. This translated directly into productivity gains and cost savings."',
    name: 'Lalith Kulasinghe',
    role: 'CEO, Colombo Fort Group Services',
    initial: 'L',
  },
  {
    quote: '"Their practical approach to automation meant we saw real results quickly — a true transformation of our operations."',
    name: 'Client Representative',
    role: 'Enterprise Organisation, Sri Lanka',
    initial: 'C',
  },
]

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

export default function TestimonialToast() {
  const [visible, setVisible]   = useState(false)
  const [current, setCurrent]   = useState(0)
  const dismissedRef            = useRef(false)
  const blockedRef              = useRef(false)
  const visibleRef              = useRef(false)
  const navigate                = useNavigate()
  const location                = useLocation()

  /* Sync visible state + ref together */
  const show = (val) => {
    setVisible(val)
    visibleRef.current = val
  }

  /* Re-runs whenever the route changes so we re-query the correct DOM elements */
  useEffect(() => {
    let removeScroll = null

    const t = setTimeout(() => {
      const els = [
        document.querySelector('.hero-section'),
        document.getElementById('testimonials'),
      ].filter(Boolean)

      if (els.length === 0) {
        blockedRef.current = false
        return
      }

      const check = () => {
        const isBlocked = els.some(el => {
          const r = el.getBoundingClientRect()
          return r.top < window.innerHeight && r.bottom > 0
        })
        blockedRef.current = isBlocked
        /* Hide immediately if user scrolls into a blocked section */
        if (isBlocked && visibleRef.current) show(false)
      }

      check()
      window.addEventListener('scroll', check, { passive: true })
      removeScroll = () => window.removeEventListener('scroll', check)
    }, 100)

    return () => {
      clearTimeout(t)
      if (removeScroll) removeScroll()
    }
  }, [location.pathname])

  useEffect(() => {
    let showTimer, hideTimer, nextTimer

    const cycle = (initialDelay) => {
      showTimer = setTimeout(() => {
        if (dismissedRef.current) return

        /* Skip this cycle if hero or testimonials section is in view */
        if (blockedRef.current) {
          nextTimer = setTimeout(() => cycle(rand(22000, 38000)), 500)
          return
        }

        setCurrent(prev => (prev + 1) % toasts.length)
        show(true)

        hideTimer = setTimeout(() => {
          show(false)
          nextTimer = setTimeout(() => cycle(rand(22000, 38000)), 500)
        }, 7000)
      }, initialDelay)
    }

    cycle(rand(10000, 18000))

    return () => {
      clearTimeout(showTimer)
      clearTimeout(hideTimer)
      clearTimeout(nextTimer)
    }
  }, [])

  const dismiss = () => {
    dismissedRef.current = true
    show(false)
  }

  const t = toasts[current]

  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        position: 'fixed',
        bottom: 28,
        left: 28,
        zIndex: 997,
        transform: visible
          ? 'translateX(0) translateY(0)'
          : 'translateX(calc(-100% - 36px))',
        opacity: visible ? 1 : 0,
        transition: visible
          ? 'transform 0.48s cubic-bezier(0.34, 1.42, 0.64, 1), opacity 0.32s ease'
          : 'transform 0.40s cubic-bezier(0.55, 0, 0.45, 1), opacity 0.28s ease',
        pointerEvents: visible ? 'auto' : 'none',
        maxWidth: 'min(318px, calc(100vw - 72px))',
        width: '100%',
      }}
    >
      <div style={{
        background: '#ffffff',
        borderRadius: 16,
        padding: '16px 40px 16px 18px',
        boxShadow: '0 8px 48px rgba(6,34,48,0.16), 0 2px 12px rgba(6,34,48,0.08)',
        border: '1px solid rgba(0,176,237,0.14)',
        borderLeft: '4px solid #00B0ED',
        position: 'relative',
        cursor: 'pointer',
        transition: 'box-shadow 0.2s ease',
      }}
      onClick={() => navigate({ pathname: '/', hash: 'testimonials' })}
      onMouseEnter={e => e.currentTarget.style.boxShadow = '0 12px 56px rgba(6,34,48,0.22), 0 2px 12px rgba(6,34,48,0.10)'}
      onMouseLeave={e => e.currentTarget.style.boxShadow = '0 8px 48px rgba(6,34,48,0.16), 0 2px 12px rgba(6,34,48,0.08)'}
      >

        {/* Dismiss × */}
        <button
          onClick={e => { e.stopPropagation(); dismiss() }}
          aria-label="Dismiss"
          style={{
            position: 'absolute', top: 10, right: 10,
            background: 'none', border: 'none', cursor: 'pointer',
            padding: 4, borderRadius: 6,
            color: '#C4C9D4',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'color 0.18s ease',
          }}
          onMouseEnter={e => e.currentTarget.style.color = '#062230'}
          onMouseLeave={e => e.currentTarget.style.color = '#C4C9D4'}
        >
          <X size={13} />
        </button>

        {/* Stars */}
        <div style={{ display: 'flex', gap: 2, marginBottom: 9 }}>
          {[1,2,3,4,5].map(n => (
            <span key={n} style={{ color: '#F4C95D', fontSize: 13, lineHeight: 1 }}>★</span>
          ))}
        </div>

        {/* Quote */}
        <p style={{
          color: '#374151',
          fontSize: 13,
          lineHeight: 1.68,
          fontStyle: 'italic',
          marginBottom: 13,
        }}>
          {t.quote}
        </p>

        {/* Attribution */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 30, height: 30, borderRadius: '50%', flexShrink: 0,
            background: 'linear-gradient(135deg, #00B0ED 0%, #062230 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', fontWeight: 800, fontSize: 12,
            fontFamily: 'Plus Jakarta Sans',
          }}>
            {t.initial}
          </div>
          <div>
            <div style={{ fontWeight: 700, color: '#062230', fontSize: 12, fontFamily: 'Plus Jakarta Sans', lineHeight: 1.3 }}>
              {t.name}
            </div>
            <div style={{ color: '#9CA3AF', fontSize: 11, marginTop: 1 }}>
              {t.role}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
