import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { ArrowRight, Zap, Bot, Globe, Database, Users, TrendingUp, CheckCircle, Quote, ChevronRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import { FadeUp, SlideLeft, SlideRight } from '../components/Animate'

const heroSlides = [
  { url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80' },
  { url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80' },
  { url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80' },
  { url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1920&q=80' },
]

const solutions = [
  {
    icon: <Zap size={28} color="#00B0ED" />,
    title: 'Intelligent Process Automation',
    desc: 'Streamline workflows with RPA, intelligent automation, and Agentic AI to reduce manual effort and drive operational excellence.',
  },
  {
    icon: <Bot size={28} color="#00B0ED" />,
    title: 'AI Integrated Solutions',
    desc: 'Develop intelligent bots, virtual assistants, and AI systems that enhance decision-making and customer engagement.',
  },
  {
    icon: <Globe size={28} color="#00B0ED" />,
    title: 'Custom Web Applications',
    desc: 'Build tailored applications and secure portals designed specifically for your business processes.',
  },
  {
    icon: <Database size={28} color="#00B0ED" />,
    title: 'ERP Solutions',
    desc: 'Implement modern platforms that bring visibility, control, and collaboration across your organisation.',
  },
  {
    icon: <TrendingUp size={28} color="#00B0ED" />,
    title: 'Digital Transformation Consultancy',
    desc: 'Expert guidance in defining and executing digital transformation strategies, process optimisation, and technology roadmapping.',
  },
  {
    icon: <Users size={28} color="#00B0ED" />,
    title: 'Resource Augmentation',
    desc: 'Access skilled technology professionals through flexible engagement models to scale teams and access specialised expertise.',
  },
]

const stats = [
  { value: '30–50%', label: 'Average improvement in operational efficiency' },
  { value: '100+', label: 'Projects delivered across industries' },
  { value: '25+', label: 'Years combined leadership experience' },
  { value: '3+', label: 'Enterprise clients in Fortune segments' },
]

const partners = [
  { name: 'WorkHub24',           logo: '/logos/WorkHub24.png'                  },
  { name: 'UiPath',              logo: '/logos/uipath.jpg'                     },
  { name: 'Microsoft',           logo: '/logos/Microsoft.jpg'                  },
  { name: 'OpenAI',              logo: '/logos/openAi.png'                     },
  { name: 'Google Gemini',       logo: '/logos/GoogleGemini.png'               },
  { name: 'Automation Anywhere', logo: '/logos/Automation%20Anywhere.png'      },
  { name: 'Workato',             logo: '/logos/workato.jpg'                    },
  { name: 'Odoo',                logo: '/logos/odoo.jpg'                       },
  { name: 'Zoho',                logo: '/logos/Zoho.png'                       },
]

const clients = [
  { name: 'Dialog',             logo: '/logos/dialog.jpg'        },
  { name: 'David Pieris',       logo: '/logos/david_peiris.png'  },
  { name: 'Colombo Fort Group', logo: '/logos/cfgs.jpg'          },
  { name: 'Assetline',          logo: '/logos/assetline.png'     },
]

export default function Home() {
  const [slide, setSlide] = useState(0)
  const [prevSlide, setPrevSlide] = useState(null)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setPrevSlide(null)
        setSlide(s => (s + 1) % heroSlides.length)
        setFading(false)
      }, 800)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToSlide = (i) => {
    if (i === slide) return
    setPrevSlide(slide)
    setFading(true)
    setTimeout(() => {
      setPrevSlide(null)
      setSlide(i)
      setFading(false)
    }, 800)
  }

  return (
    <PageTransition>
    <div>
      {/* ── HERO ── */}
      <section className="hero-section">
        {/* Slideshow background — clipped in its own container */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          {heroSlides.map((s, i) => (
            <div key={i} style={{
              position: 'absolute', inset: 0,
              backgroundImage: `url(${s.url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: i === slide ? (fading ? 0 : 1) : (i === prevSlide ? (fading ? 1 : 0) : 0),
              transition: 'opacity 0.8s ease-in-out',
            }} />
          ))}
          {/* Overlay for text legibility */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.32) 55%, rgba(0,0,0,0.1) 100%)' }} />
        </div>

        {/* Slide dots */}
        <div style={{ position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 10, zIndex: 4 }}>
          {heroSlides.map((_, i) => (
            <button key={i} onClick={() => goToSlide(i)} aria-label={`Slide ${i + 1}`} style={{
              width: i === slide ? 28 : 10, height: 10, borderRadius: 100,
              background: i === slide ? '#F4C95D' : 'rgba(255,255,255,0.4)',
              border: 'none', cursor: 'pointer', padding: 0,
              transition: 'all 0.3s ease',
            }} />
          ))}
        </div>

        <div className="container hero-container">
          <div className="hero-grid">

            {/* ── Left: copy ── */}
            <div style={{ minWidth: 0 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(0,176,237,0.15)', border: '1px solid rgba(0,176,237,0.3)', borderRadius: 100, padding: '5px 14px', marginBottom: 20 }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#00B0ED' }} />
                <span style={{ color: '#00B0ED', fontSize: 16, fontWeight: 600, letterSpacing: '0.06em' }}>BOUTIQUE AUTOMATION AGENCY</span>
              </div>

              <h1 style={{ color: '#fff', fontSize: 'clamp(28px, 3.8vw, 52px)', fontFamily: 'Plus Jakarta Sans', fontWeight: 800, lineHeight: 1.1, marginBottom: 20 }}>
                Intelligent Automation<br />
                <span style={{ color: '#00B0ED' }}>for Enterprise Growth</span>
              </h1>

              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 'clamp(14px, 1.3vw, 16px)', lineHeight: 1.7, marginBottom: 32 }}>
                We help medium and large enterprises streamline operations, implement AI-powered solutions, and build custom systems that deliver measurable efficiency and sustainable growth — locally and globally.
              </p>

              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 40 }}>
                <Link to="/contact" className="btn-primary" style={{ fontSize: 15, padding: '13px 26px' }}>
                  Schedule a Free Consultation <ArrowRight size={16} />
                </Link>
                <a href="https://wa.me/94777751445" target="_blank" rel="noreferrer" className="btn-gold" style={{ fontSize: 15, padding: '13px 26px' }}>
                  Talk to Us
                </a>
              </div>

              {/* Trusted by */}
              <div>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 14 }}>
                  Trusted by leading organisations
                </p>
                <div className="marquee-outer">
                  <div className="marquee-inner">
                    {[...clients, ...clients, ...clients, ...clients].map((c, i) => (
                      <div key={i} style={{
                        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                        height: 44, padding: '0 18px', marginRight: 20,
                        background: 'rgba(255,255,255,0.92)', borderRadius: 8, flexShrink: 0,
                      }}>
                        <img src={c.logo} alt={c.name} style={{ height: 22, maxWidth: 110, objectFit: 'contain' }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ── Right: stat cards ── */}
            <div className="hero-stats-grid">
              {stats.map((s, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.09)',
                  borderRadius: 18,
                  padding: '28px 22px',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  transition: 'background 0.2s',
                }}>
                  <div style={{ fontSize: 'clamp(26px, 2.8vw, 38px)', fontWeight: 800, color: i % 2 === 0 ? '#00B0ED' : '#F4C95D', fontFamily: 'Plus Jakarta Sans', lineHeight: 1, marginBottom: 10 }}>
                    {s.value}
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, lineHeight: 1.5 }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </section>

      {/* ── VALUE PROPOSITION ── */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: 64 }}>
            <SlideLeft>
            <div>
              <span className="section-label" style={{ marginBottom: 16, display: 'inline-block' }}>Our Value Proposition</span>
              <h2 style={{ fontSize: 'clamp(26px, 3.2vw, 38px)', marginBottom: 20 }}>Practical Digital Solutions That Transform Operations</h2>
              <p style={{ color: '#4B5563', fontSize: 17, lineHeight: 1.8, marginBottom: 20 }}>
                We specialise in Intelligent Process Automation, AI-integrated solutions, custom web applications, and ERP implementations — creating practical digital solutions that transform how medium and large organisations operate.
              </p>
              <p style={{ color: '#4B5563', fontSize: 17, lineHeight: 1.8, marginBottom: 32 }}>
                Domain experts who understand real business challenges — many of our team members bring hands-on experience in building, managing, and scaling businesses.
              </p>
              <Link to="/about" className="btn-secondary">
                Our Story <ChevronRight size={16} />
              </Link>
            </div>
            </SlideLeft>

            <SlideRight>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { title: 'What We Do', desc: 'We specialise in Intelligent Process Automation, AI-integrated solutions, custom web applications, and ERP implementations — creating practical digital solutions that transform how medium and large organisations operate.' },
                { title: 'Who We Serve', desc: 'Medium and large-scale enterprises in Sri Lanka and across global markets seeking scalable, results-driven digital transformation.' },
                { title: 'Why Choose Overdime', desc: 'Domain experts who understand real business challenges — many of our team members bring hands-on experience in building, managing, and scaling businesses, combining deep industry insight with international standards to deliver measurable business value.' },
              ].map(item => (
                <div key={item.title} style={{ display: 'flex', gap: 16, padding: 24, background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px rgba(10,37,64,0.06)' }}>
                  <CheckCircle size={22} color="#00B0ED" style={{ flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <div style={{ fontWeight: 700, color: '#0A2540', marginBottom: 4, fontFamily: 'Plus Jakarta Sans' }}>{item.title}</div>
                    <div style={{ color: '#4B5563', fontSize: 14, lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            </SlideRight>
          </div>
        </div>
      </section>

      {/* ── CORE SOLUTIONS ── */}
      <section className="section" style={{ background: '#F0F2F5' }}>
        <div className="container">
          <FadeUp>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <span className="section-label">Our Core Solutions</span>
              <h2 style={{ fontSize: 'clamp(18px, 2.5vw, 24px)', marginTop: 8 }}>Everything You Need to Transform Your Operations</h2>
            </div>
          </FadeUp>
          <div className="grid-3">
            {solutions.map((s, i) => (
              <FadeUp key={s.title} delay={i * 0.09}>
              <div className="card">
                <div style={{ width: 52, height: 52, borderRadius: 12, background: 'rgba(0,176,237,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                  {s.icon}
                </div>
                <h3 style={{ fontSize: 18, marginBottom: 12 }}>{s.title}</h3>
                <p style={{ color: '#4B5563', fontSize: 14, lineHeight: 1.7 }}>{s.desc}</p>
              </div>
              </FadeUp>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 48, display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/solutions" className="btn-primary">
              Explore All Solutions <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="btn-gold">
              Get a Free Consultation <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROVEN RESULTS ── */}
      <section className="section" style={{ background: 'linear-gradient(135deg, #0A2540 0%, #0d3460 100%)', color: '#fff' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <FadeUp>
            <span className="section-label">Proven Results</span>
            <h2 style={{ color: '#fff', fontSize: 'clamp(18px, 2.5vw, 24px)', marginBottom: 16 }}>Delivering Real Impact for Forward-Thinking Organisations</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 18, maxWidth: 560, margin: '0 auto 56px' }}>
              Our intelligent solutions consistently deliver measurable improvements across key business metrics.
            </p>
          </FadeUp>
          <div className="grid-4">
            {[
              { value: '30–50%', label: 'Average improvement in operational efficiency' },
              { value: 'Significant', label: 'Reduction in manual processing time' },
              { value: 'Faster', label: 'Smarter decision-making across departments' },
              { value: 'Greater', label: 'Process transparency and control' },
            ].map((item, i) => (
              <FadeUp key={item.value} delay={i * 0.1}>
                <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 16, padding: '32px 24px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div style={{ fontSize: 32, fontWeight: 800, color: '#F4C95D', fontFamily: 'Plus Jakarta Sans', marginBottom: 8 }}>{item.value}</div>
                  <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14, lineHeight: 1.6 }}>{item.label}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section" style={{ background: '#F0F2F5' }}>
        <div className="container">
          <FadeUp>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <span className="section-label">What Our Clients Say</span>
              <h2 style={{ fontSize: 'clamp(18px, 2.5vw, 24px)', marginTop: 8 }}>Trusted by Industry Leaders</h2>
            </div>
          </FadeUp>
          <div className="grid-2">
            <SlideLeft>
            <div className="card" style={{ position: 'relative' }}>
              <Quote size={36} color="rgba(0,176,237,0.2)" style={{ marginBottom: 16 }} />
              <p style={{ color: '#1F2937', fontSize: 16, lineHeight: 1.8, fontStyle: 'italic', marginBottom: 24 }}>
                "Through our process automation with Overdime, we have achieved many benefits. We have managed to reduce human errors, achieve better collaboration, and have gained high process transparency. If there is a delay, we can now pinpoint the bottleneck — something that was impossible before. This has translated directly into productivity gains and cost savings."
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'linear-gradient(135deg, #00B0ED, #0A2540)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 16 }}>L</div>
                <div>
                  <div style={{ fontWeight: 700, color: '#0A2540', fontFamily: 'Plus Jakarta Sans' }}>Lalith Kulasinghe</div>
                  <div style={{ color: '#4B5563', fontSize: 13 }}>Executive Director / CEO, Colombo Fort Group Services (Pvt) Ltd.</div>
                </div>
              </div>
            </div>
            </SlideLeft>

            <SlideRight>
            <div className="card" style={{ background: 'linear-gradient(135deg, #0A2540, #0d3460)', border: 'none' }}>
              <Quote size={36} color="rgba(0,176,237,0.3)" style={{ marginBottom: 16 }} />
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 16, lineHeight: 1.8, fontStyle: 'italic', marginBottom: 24 }}>
                "Overdime's team brought both technical depth and genuine business understanding to our project. Their practical approach to automation meant we saw real results quickly — not just a technology deployment but a true transformation of our operations."
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(0,176,237,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 16 }}>C</div>
                <div>
                  <div style={{ fontWeight: 700, color: '#fff', fontFamily: 'Plus Jakarta Sans' }}>Client Representative</div>
                  <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13 }}>Enterprise Organisation, Sri Lanka</div>
                </div>
              </div>
            </div>
            </SlideRight>
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGY PARTNERS ── */}
      <section style={{ background: '#F0F2F5', padding: '56px 0', borderTop: '1px solid #E5E7EB' }}>
        <div className="container">
          <FadeUp>
          <p style={{ textAlign: 'center', color: '#8A8A8A', fontSize: 13, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 36 }}>Technology Partners</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(9, 1fr)', gap: 10 }}>
            {partners.map(p => (
              <div key={p.name} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: '12px 10px', background: '#fff', borderRadius: 12,
                border: '1px solid #E5E7EB', height: 76,
                boxShadow: '0 1px 6px rgba(0,0,0,0.04)',
                transition: 'box-shadow 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.10)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 1px 6px rgba(0,0,0,0.04)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <img
                  src={p.logo}
                  alt={p.name}
                  style={{ maxHeight: 48, maxWidth: '100%', width: '100%', objectFit: 'contain' }}
                />
              </div>
            ))}
          </div>
          </FadeUp>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <FadeUp>
        <div className="cta-banner">
          <div className="container">
            <h2>Ready to Transform Your Operations?</h2>
            <p>Let's discuss how intelligent automation can create real value for your organisation.</p>
            <div className="btn-group">
              <Link to="/contact" className="btn-gold">Schedule a Free Consultation</Link>
              <a href="https://wa.me/94777751445" target="_blank" rel="noreferrer" className="btn-outline-white">Talk to Us</a>
            </div>
          </div>
        </div>
      </FadeUp>
    </div>
    </PageTransition>
  )
}
