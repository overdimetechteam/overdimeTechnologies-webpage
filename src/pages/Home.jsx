import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'
import { ArrowRight, Zap, Bot, Globe, Database, Users, TrendingUp, ChevronRight, ChevronDown, ChevronLeft } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import { FadeUp, SlideLeft, SlideRight, AnimatedCounter } from '../components/Animate'
import { DotGrid, Diagonal, Grain, CrossGrid, Scanlines, NoiseVignette } from '../components/Textures'

const heroSlides = [
  { url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80' },
  { url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80' },
  { url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80' },
  { url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1920&q=80' },
]

const solutions = [
  { icon: <Zap size={26} color="#00B0ED" />, title: 'Intelligent Process Automation', desc: 'Streamline workflows with RPA, intelligent automation, and Agentic AI to reduce manual effort and drive operational excellence.' },
  { icon: <Bot size={26} color="#00B0ED" />, title: 'AI Integrated Solutions', desc: 'Develop intelligent bots, virtual assistants, and AI systems that enhance decision-making and customer engagement.' },
  { icon: <Globe size={26} color="#00B0ED" />, title: 'Custom Web Applications', desc: 'Build tailored applications and secure portals designed specifically for your business processes.' },
  { icon: <Database size={26} color="#00B0ED" />, title: 'ERP Solutions', desc: 'Implement modern platforms that bring visibility, control, and collaboration across your organisation.' },
  { icon: <TrendingUp size={26} color="#00B0ED" />, title: 'Digital Transformation Consultancy', desc: 'Expert guidance in defining and executing digital transformation strategies, process optimisation, and technology roadmapping.' },
  { icon: <Users size={26} color="#00B0ED" />, title: 'Resource Augmentation', desc: 'Access skilled technology professionals through flexible engagement models to scale teams and access specialised expertise.' },
]

/* numericTo: null = non-numeric value, just render as text with FadeUp */
const stats = [
  { value: '30–50%', numericTo: null,  numericSuffix: '',  label: 'Average improvement in operational efficiency', accent: '#00B0ED' },
  { value: '100+',   numericTo: 100,   numericSuffix: '+', label: 'Projects delivered across industries',          accent: '#00B0ED' },
  { value: '25+',    numericTo: 25,    numericSuffix: '+', label: 'Years combined leadership experience',           accent: '#00B0ED' },
  { value: '3+',     numericTo: 3,     numericSuffix: '+', label: 'Enterprise clients in Fortune segments',        accent: '#00B0ED' },
]

/* outcome: concise claim backed by published case study data */
const clients = [
  { name: 'Dialog',             logo: '/logos/dialog.jpg',       outcome: '30%+ efficiency' },
  { name: 'David Pieris',       logo: '/logos/david_peiris.png', outcome: '50% faster processes' },
  { name: 'Colombo Fort Group', logo: '/logos/cfgs.jpg',         outcome: '45% less manual work' },
  { name: 'Assetline',          logo: '/logos/assetline.png',    outcome: 'Automation partner' },
]

/* featured: true = blue top-border + "Partner" chip */
const partners = [
  { name: 'WorkHub24',           logo: '/logos/WorkHub24.png',             featured: false },
  { name: 'UiPath',              logo: '/logos/uipath.jpg',                featured: true  },
  { name: 'Microsoft',           logo: '/logos/Microsoft.jpg',             featured: true  },
  { name: 'OpenAI',              logo: '/logos/openAi.png',                featured: true  },
  { name: 'Google Gemini',       logo: '/logos/GoogleGemini.png',          featured: true  },
  { name: 'Automation Anywhere', logo: '/logos/Automation%20Anywhere.png', featured: true  },
  { name: 'Workato',             logo: '/logos/workato.jpg',               featured: false },
  { name: 'Odoo',                logo: '/logos/odoo.jpg',                  featured: false },
  { name: 'Zoho',                logo: '/logos/Zoho.png',                  featured: false },
]

const testimonials = [
  {
    quote: '"Through our process automation with Overdime, we have achieved many benefits. We have managed to reduce human errors, achieve better collaboration, and have gained high process transparency. If there is a delay, we can now pinpoint the bottleneck — something that was impossible before. This has translated directly into productivity gains and cost savings."',
    name: 'Lalith Kulasinghe',
    role: 'Executive Director / CEO, Colombo Fort Group Services (Pvt) Ltd.',
    initial: 'L',
    dark: false,
  },
  {
    quote: '"Overdime\'s team brought both technical depth and genuine business understanding to our project. Their practical approach to automation meant we saw real results quickly — not just a technology deployment but a true transformation of our operations."',
    name: 'Client Representative',
    role: 'Enterprise Organisation, Sri Lanka',
    initial: 'C',
    dark: true,
  },
]

const valueProps = [
  { num: '01', title: 'What We Do',         accent: '#00B0ED', desc: 'We specialise in Intelligent Process Automation, AI-integrated solutions, custom web applications, and ERP implementations — creating practical digital solutions that transform how medium and large organisations operate.' },
  { num: '02', title: 'Who We Serve',        accent: '#00B0ED', desc: 'Medium and large-scale enterprises in Sri Lanka and across global markets seeking scalable, results-driven digital transformation.' },
  { num: '03', title: 'Why Choose Overdime', accent: '#00B0ED', desc: 'Domain experts who understand real business challenges — many of our team members bring hands-on experience in building, managing, and scaling businesses, combining deep industry insight with international standards to deliver measurable business value.' },
]

const provenResults = [
  { value: '30–50%',   numericTo: null, label: 'Average improvement in operational efficiency' },
  { value: 'Significant', numericTo: null, label: 'Reduction in manual processing time' },
  { value: 'Faster',   numericTo: null, label: 'Smarter decision-making across departments' },
  { value: 'Greater',  numericTo: null, label: 'Process transparency and control' },
]

/* ─────────────────────────────────────────────────────
   Testimonials carousel — single focused card, auto-rotates
───────────────────────────────────────────────────── */
function TestimonialsCarousel() {
  const [active, setActive]     = useState(0)
  const [fading, setFading]     = useState(false)
  const total                   = testimonials.length

  const navigate = useCallback((next) => {
    if (fading) return
    setFading(true)
    setTimeout(() => {
      setActive(next)
      setFading(false)
    }, 280)
  }, [fading])

  const prev = () => navigate((active - 1 + total) % total)
  const next = () => navigate((active + 1) % total)

  /* Auto-advance every 7 s */
  useEffect(() => {
    const t = setTimeout(() => navigate((active + 1) % total), 7000)
    return () => clearTimeout(t)
  }, [active, navigate, total])

  const t = testimonials[active]

  return (
    <div style={{ position: 'relative' }}>
      {/* Card */}
      <div style={{
        maxWidth: 760, margin: '0 auto',
        opacity: fading ? 0 : 1,
        transform: fading ? 'translateY(6px)' : 'translateY(0)',
        transition: 'opacity 0.28s ease, transform 0.28s ease',
      }}>
        <div style={{
          background: t.dark
            ? 'linear-gradient(135deg, #062230, #0a3848)'
            : '#fff',
          borderRadius: 22,
          padding: '44px 48px',
          boxShadow: t.dark
            ? '0 12px 48px rgba(10,37,64,0.28)'
            : '0 4px 28px rgba(10,37,64,0.09)',
          border: t.dark ? 'none' : '1px solid #E5E7EB',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Decorative quote mark */}
          <span style={{
            position: 'absolute', top: 10, right: 24,
            fontSize: 140, lineHeight: 1,
            color: t.dark ? 'rgba(0,176,237,0.09)' : 'rgba(0,176,237,0.06)',
            fontFamily: 'Georgia, serif',
            pointerEvents: 'none', userSelect: 'none',
          }}>"</span>

          {/* Stars */}
          <div style={{ display: 'flex', gap: 3, marginBottom: 20 }}>
            {[1,2,3,4,5].map(n => (
              <span key={n} style={{ color: '#F4C95D', fontSize: 18 }}>★</span>
            ))}
          </div>

          <p style={{
            color: t.dark ? 'rgba(255,255,255,0.84)' : '#1F2937',
            fontSize: 16, lineHeight: 1.88, fontStyle: 'italic',
            marginBottom: 32, position: 'relative', zIndex: 1,
          }}>
            {t.quote}
          </p>

          <div style={{
            display: 'flex', alignItems: 'center', gap: 14,
            borderTop: t.dark ? '1px solid rgba(255,255,255,0.10)' : '1px solid #F3F4F6',
            paddingTop: 22,
          }}>
            <div style={{
              width: 48, height: 48, borderRadius: '50%', flexShrink: 0,
              background: t.dark
                ? 'rgba(0,176,237,0.22)'
                : 'linear-gradient(135deg, #00B0ED 0%, #062230 100%)',
              border: t.dark ? '1px solid rgba(0,176,237,0.30)' : 'none',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', fontWeight: 800, fontSize: 18,
              fontFamily: 'Plus Jakarta Sans',
            }}>
              {t.initial}
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 15, fontFamily: 'Plus Jakarta Sans', color: t.dark ? '#fff' : '#062230' }}>{t.name}</div>
              <div style={{ fontSize: 13, marginTop: 2, color: t.dark ? 'rgba(255,255,255,0.55)' : '#4B5563' }}>{t.role}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation row */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginTop: 28 }}>
        {/* Prev */}
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          style={{
            width: 40, height: 40, borderRadius: '50%',
            background: '#fff', border: '1px solid #E5E7EB',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', transition: 'all 0.22s ease',
            boxShadow: '0 2px 8px rgba(10,37,64,0.06)',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#F4C95D'; e.currentTarget.style.borderColor = '#F4C95D' }}
          onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.borderColor = '#E5E7EB' }}
        >
          <ChevronLeft size={18} color="#062230" />
        </button>

        {/* Dots */}
        <div style={{ display: 'flex', gap: 8 }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => navigate(i)}
              aria-label={`Testimonial ${i + 1}`}
              style={{
                width: i === active ? 24 : 8, height: 8,
                borderRadius: 100, border: 'none', cursor: 'pointer', padding: 0,
                background: i === active ? '#00B0ED' : 'rgba(10,37,64,0.18)',
                transition: 'all 0.3s ease',
                boxShadow: i === active ? '0 0 8px rgba(0,176,237,0.4)' : 'none',
              }}
            />
          ))}
        </div>

        {/* Next */}
        <button
          onClick={next}
          aria-label="Next testimonial"
          style={{
            width: 40, height: 40, borderRadius: '50%',
            background: '#fff', border: '1px solid #E5E7EB',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', transition: 'all 0.22s ease',
            boxShadow: '0 2px 8px rgba(10,37,64,0.06)',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#F4C95D'; e.currentTarget.style.borderColor = '#F4C95D' }}
          onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.borderColor = '#E5E7EB' }}
        >
          <ChevronRight size={18} color="#062230" />
        </button>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────── */
export default function Home() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash === '#testimonials') {
      const el = document.getElementById('testimonials')
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 150)
    }
  }, [hash])

  const [slide, setSlide]         = useState(0)
  const [prevSlide, setPrevSlide] = useState(null)
  const [fading, setFading]       = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setPrevSlide(null)
        setSlide(s => (s + 1) % heroSlides.length)
        setFading(false)
      }, 800)
    }, 8500)
    return () => clearInterval(timer)
  }, [])

  const goToSlide = (i) => {
    if (i === slide) return
    setPrevSlide(slide)
    setFading(true)
    setTimeout(() => { setPrevSlide(null); setSlide(i); setFading(false) }, 800)
  }

  return (
    <PageTransition>
    <div>

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="hero-section">
        {/* Slideshow */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          {heroSlides.map((s, i) => (
            <div key={i} style={{
              position: 'absolute', inset: 0,
              backgroundImage: `url(${s.url})`,
              backgroundSize: 'cover', backgroundPosition: 'center',
              opacity: i === slide ? (fading ? 0 : 1) : (i === prevSlide ? (fading ? 1 : 0) : 0),
              transition: 'opacity 0.8s ease-in-out',
            }} />
          ))}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(5,15,30,0.75) 0%, rgba(5,15,30,0.52) 50%, rgba(5,15,30,0.22) 100%)' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 120, background: 'linear-gradient(to top, rgba(5,15,30,0.4) 0%, transparent 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 2 }}>
            <Grain dark opacity={0.8} />
            <Scanlines opacity={0.015} />
            <NoiseVignette />
          </div>
        </div>

        {/* Full-width trusted-by strip */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          borderTop: '1px solid rgba(255,255,255,0.08)',
          padding: '14px 0 18px',
          background: 'rgba(5,15,30,0.55)',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
          zIndex: 3,
        }}>
          <p style={{ color: 'rgba(255,255,255,0.50)', fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', textAlign: 'center', marginBottom: 12 }}>
            Trusted by leading organisations
          </p>
          <div className="marquee-outer">
            <div className="marquee-inner">
              {[...clients, ...clients, ...clients, ...clients].map((c, i) => (
                <div key={i} style={{
                  display: 'inline-flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center',
                  height: 60, padding: '6px 20px 8px', marginRight: 14,
                  background: '#fff', borderRadius: 10, flexShrink: 0,
                  gap: 5, boxShadow: '0 2px 8px rgba(0,0,0,0.20)',
                  border: '1px solid rgba(255,255,255,0.90)',
                }}>
                  <img src={c.logo} alt={c.name} style={{ height: 22, maxWidth: 120, objectFit: 'contain' }} />
                  <span style={{ fontSize: 11, fontWeight: 700, color: '#062230', letterSpacing: '0.06em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                    {c.outcome}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Slide dots */}
        <div style={{ position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 8, zIndex: 4 }}>
          {heroSlides.map((_, i) => (
            <button key={i} onClick={() => goToSlide(i)} aria-label={`Slide ${i + 1}`} style={{
              width: i === slide ? 32 : 8, height: 8, borderRadius: 100,
              background: i === slide ? '#F4C95D' : 'rgba(255,255,255,0.35)',
              border: 'none', cursor: 'pointer', padding: 0,
              transition: 'all 0.35s ease',
              boxShadow: i === slide ? '0 0 8px rgba(244,201,93,0.5)' : 'none',
            }} />
          ))}
        </div>

        <div className="container hero-container" style={{ paddingBottom: 160 }}>
          <div className="hero-grid">

            {/* Left: copy */}
            <div style={{ minWidth: 0 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#00B0ED', flexShrink: 0, display: 'inline-block' }} />
                <span style={{ color: '#00B0ED', fontSize: 20, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Boutique Automation Agency</span>
              </div>

              <h1 style={{ color: '#fff', fontSize: 'clamp(30px, 4vw, 56px)', fontFamily: 'Plus Jakarta Sans', fontWeight: 800, lineHeight: 1.08, marginBottom: 22 }}>
                Intelligent Automation<br />
                <span style={{ color: '#00B0ED' }}>for Enterprise Growth</span>
              </h1>

              <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: 'clamp(14px, 1.3vw, 16px)', lineHeight: 1.8, marginBottom: 36 }}>
                We help medium and large enterprises streamline operations, implement AI-powered solutions, and build custom systems that deliver measurable efficiency and sustainable growth — locally and globally.
              </p>

              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 44 }}>
                <Link to="/contact" className="btn-primary" style={{ fontSize: 15 }}>
                  Schedule a Free Consultation <ArrowRight size={16} />
                </Link>
                <a href="https://wa.me/94777751445" target="_blank" rel="noreferrer" className="btn-gold" style={{ fontSize: 15 }}>
                  Chat with Us
                </a>
              </div>

            </div>

            {/* Right: stat cards */}
            <div className="hero-stats-grid">
              {stats.map((s, i) => (
                <div key={i} style={{
                  background: 'rgba(6,34,48,0.62)',
                  border: '1px solid rgba(255,255,255,0.10)',
                  borderTop: `3px solid ${s.accent}`,
                  borderRadius: 18, padding: '28px 20px',
                  backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
                  transition: 'background 0.25s, transform 0.25s', cursor: 'default',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(6,34,48,0.80)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(6,34,48,0.62)'; e.currentTarget.style.transform = 'translateY(0)' }}
                >
                  <div style={{ fontSize: 'clamp(24px, 2.8vw, 38px)', fontWeight: 900, color: s.accent, fontFamily: 'Plus Jakarta Sans', lineHeight: 1, marginBottom: 10 }}>
                    {s.numericTo !== null
                      ? <AnimatedCounter to={s.numericTo} suffix={s.numericSuffix} duration={1.6} />
                      : s.value
                    }
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.58)', fontSize: 13, lineHeight: 1.55 }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── VALUE PROPOSITION ──────────────────────────────────── */}
      <section className="section" style={{ background: '#fff', position: 'relative', isolation: 'isolate' }}>
        <DotGrid dark={false} />
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: 72 }}>
            <SlideLeft>
              <div>
                <span className="section-label">Our Value Proposition</span>
                <h2 style={{ fontSize: 'clamp(26px, 3.2vw, 42px)', marginBottom: 20, lineHeight: 1.15 }}>
                  Practical Digital Solutions That Transform Operations
                </h2>
                <p style={{ color: '#4B5563', fontSize: 16, lineHeight: 1.85, marginBottom: 16 }}>
                  We specialise in Intelligent Process Automation, AI-integrated solutions, custom web applications, and ERP implementations — creating practical digital solutions that transform how medium and large organisations operate.
                </p>
                <p style={{ color: '#4B5563', fontSize: 16, lineHeight: 1.85, marginBottom: 36 }}>
                  Domain experts who understand real business challenges — many of our team members bring hands-on experience in building, managing, and scaling businesses.
                </p>
                <Link to="/about" className="btn-secondary">Our Story <ChevronRight size={16} /></Link>
              </div>
            </SlideLeft>

            <SlideRight>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {valueProps.map((item) => (
                  <div key={item.num} style={{
                    position: 'relative', display: 'flex', gap: 18,
                    padding: '24px 28px', background: '#fff', borderRadius: 14,
                    boxShadow: '0 2px 14px rgba(10,37,64,0.06)', border: '1px solid #E5E7EB',
                    borderLeft: `3px solid ${item.accent}`, overflow: 'hidden',
                    transition: 'box-shadow 0.22s, transform 0.22s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 28px rgba(10,37,64,0.10)'; e.currentTarget.style.transform = 'translateX(3px)' }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 2px 14px rgba(10,37,64,0.06)'; e.currentTarget.style.transform = 'translateX(0)' }}
                  >
                    <span style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', fontSize: 72, fontWeight: 900, lineHeight: 1, color: 'rgba(0,176,237,0.05)', fontFamily: 'Plus Jakarta Sans', pointerEvents: 'none', userSelect: 'none' }}>{item.num}</span>
                    <div style={{ zIndex: 1 }}>
                      <div style={{ fontWeight: 700, color: '#062230', marginBottom: 6, fontFamily: 'Plus Jakarta Sans', fontSize: 15 }}>{item.title}</div>
                      <div style={{ color: '#4B5563', fontSize: 14, lineHeight: 1.7 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </SlideRight>
          </div>
        </div>
      </section>

      {/* ── CORE SOLUTIONS ─────────────────────────────────────── */}
      <section className="section" style={{ background: '#F0F2F5', position: 'relative', isolation: 'isolate' }}>
        <Diagonal />
        <DotGrid dark={false} size={32} />
        <div className="container">
          <FadeUp>
            <div style={{ textAlign: 'center', marginBottom: 60 }}>
              <span className="section-label">Our Core Solutions</span>
              <h2 style={{ fontSize: 'clamp(24px, 3vw, 40px)', marginTop: 10 }}>Everything You Need to Transform Your Operations</h2>
            </div>
          </FadeUp>
          <div className="grid-3">
            {solutions.map((s, i) => (
              <FadeUp key={s.title} delay={i * 0.08}>
                <div style={{
                  background: '#fff', borderRadius: 20, padding: '32px',
                  border: '1px solid #E5E7EB', borderTop: '3px solid transparent',
                  transition: 'all 0.25s ease', cursor: 'default',
                  position: 'relative', overflow: 'hidden', height: '100%',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderTopColor = '#00B0ED'
                  e.currentTarget.style.transform = 'translateY(-5px)'
                  e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,176,237,0.12)'
                }}
                onMouseLeave={e => { e.currentTarget.style.borderTopColor = 'transparent'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
                >
                  <span style={{ position: 'absolute', right: -6, bottom: -10, fontSize: 100, fontWeight: 900, lineHeight: 1, color: 'rgba(0,176,237,0.04)', fontFamily: 'Plus Jakarta Sans', pointerEvents: 'none', userSelect: 'none' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div style={{ width: 54, height: 54, borderRadius: 14, background: 'linear-gradient(135deg, rgba(0,176,237,0.13) 0%, rgba(0,176,237,0.04) 100%)', border: '1px solid rgba(0,176,237,0.14)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 22, flexShrink: 0 }}>
                    {s.icon}
                  </div>
                  <h3 style={{ fontSize: 17, marginBottom: 10, lineHeight: 1.3 }}>{s.title}</h3>
                  <p style={{ color: '#4B5563', fontSize: 14, lineHeight: 1.75 }}>{s.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 52, display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/solutions" className="btn-primary">Explore All Solutions <ArrowRight size={16} /></Link>
            <Link to="/contact" className="btn-gold">Get a Free Consultation <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* ── PROVEN RESULTS ─────────────────────────────────────── */}
      <section className="section" style={{ background: 'linear-gradient(135deg, #030f1a 0%, #062230 55%, #093040 100%)', position: 'relative', isolation: 'isolate' }}>
        <CrossGrid dark size={52} />
        <Grain dark opacity={0.9} />
        <div className="container" style={{ textAlign: 'center' }}>
          <FadeUp>
            <span className="section-label section-label-dark">Proven Results</span>
            <h2 style={{ color: '#fff', fontSize: 'clamp(24px, 3vw, 40px)', marginBottom: 16 }}>
              Delivering Real Impact for Forward-Thinking Organisations
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.62)', fontSize: 17, maxWidth: 540, margin: '0 auto 56px', lineHeight: 1.7 }}>
              Our intelligent solutions consistently deliver measurable improvements across key business metrics.
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, overflow: 'hidden', background: 'rgba(255,255,255,0.03)' }}>
              {provenResults.map((item, i) => (
                <div key={i} style={{
                  padding: 'clamp(28px, 4vw, 48px) clamp(16px, 2vw, 28px)',
                  textAlign: 'center', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                }}>
                  <div style={{ fontSize: 'clamp(28px, 3.2vw, 48px)', fontWeight: 900, lineHeight: 1.1, fontFamily: 'Plus Jakarta Sans', color: i % 2 === 0 ? '#F4C95D' : '#00B0ED', marginBottom: 12, whiteSpace: 'nowrap' }}>
                    {item.value}
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.58)', fontSize: 13, lineHeight: 1.55 }}>{item.label}</div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── TESTIMONIALS — single-card carousel ────────────────── */}
      <section id="testimonials" className="section" style={{ background: '#F0F2F5', position: 'relative', isolation: 'isolate' }}>
        <DotGrid dark={false} />
        <div className="container">
          <FadeUp>
            <div style={{ textAlign: 'center', marginBottom: 52 }}>
              <span className="section-label">What Our Clients Say</span>
              <h2 style={{ fontSize: 'clamp(24px, 3vw, 40px)', marginTop: 10 }}>Trusted by Industry Leaders</h2>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <TestimonialsCarousel />
          </FadeUp>
        </div>
      </section>

      {/* ── TECHNOLOGY PARTNERS — with featured partner badges ──── */}
      <section style={{ background: '#fff', padding: '56px 0', borderTop: '1px solid #E5E7EB' }}>
        <div className="container">
          <FadeUp>
            <p style={{ textAlign: 'center', color: '#8A8A8A', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 36 }}>
              Technology Partners
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: 12 }}>
              {partners.map(p => (
                <div key={p.name} style={{
                  position: 'relative',
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center',
                  padding: p.featured ? '20px 10px 12px' : '12px 10px',
                  background: '#F8F9FA', borderRadius: 12,
                  border: '1px solid #E5E7EB',
                  /* Featured partners always show a blue top border */
                  borderTop: p.featured ? '2px solid rgba(0,176,237,0.35)' : '1px solid #E5E7EB',
                  height: p.featured ? 86 : 72,
                  transition: 'all 0.22s ease', cursor: 'default', gap: 6,
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.boxShadow = '0 6px 22px rgba(0,0,0,0.09)'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.borderColor = 'rgba(0,176,237,0.28)' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#F8F9FA'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = p.featured ? 'rgba(0,176,237,0.35)' : '#E5E7EB' }}
                >
                  <img src={p.logo} alt={p.name} style={{ maxHeight: 36, maxWidth: '100%', width: '100%', objectFit: 'contain' }} />
                  {/* Featured badge — blue pill, accessible colour on white */}
                  {p.featured && (
                    <span style={{
                      fontSize: 8, fontWeight: 700, color: '#0078aa',
                      background: 'rgba(0,176,237,0.08)',
                      border: '1px solid rgba(0,176,237,0.18)',
                      padding: '2px 7px', borderRadius: 100,
                      letterSpacing: '0.07em', textTransform: 'uppercase',
                      whiteSpace: 'nowrap',
                    }}>Partner</span>
                  )}
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────────────────── */}
      <FadeUp>
        <div className="cta-banner">
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, transparent 0%, #00B0ED 30%, #F4C95D 70%, transparent 100%)', zIndex: 2 }} />
          <div className="container">
            <h2>Ready to Transform Your Operations?</h2>
            <p>Let's discuss how intelligent automation can create real value for your organisation.</p>
            <div className="btn-group">
              <Link to="/contact" className="btn-gold">Schedule a Free Consultation</Link>
              <a href="https://wa.me/94777751445" target="_blank" rel="noreferrer" className="btn-outline-white">Chat with Us</a>
            </div>
          </div>
        </div>
      </FadeUp>

    </div>
    </PageTransition>
  )
}
