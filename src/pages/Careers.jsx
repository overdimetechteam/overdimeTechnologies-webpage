import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { ArrowRight, Target, TrendingUp, Monitor, DollarSign, Globe, ExternalLink } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import { FadeUp, SlideLeft, SlideRight } from '../components/Animate'
import AnimatedPageHero from '../components/AnimatedPageHero'

const STORAGE_KEY = 'overdime_jobs'
const defaultPositions = [
  { id: 1, title: 'Senior Automation Engineer', subtitle: 'RPA / Workato / UiPath', type: 'Full-time', level: 'Senior', active: true },
  { id: 2, title: 'AI Solutions Architect', subtitle: 'OpenAI / Claude / Gemini', type: 'Full-time', level: 'Senior', active: true },
  { id: 3, title: 'Full Stack Developer', subtitle: 'React / Node / Python', type: 'Full-time / Freelance', level: 'Mid–Senior', active: true },
  { id: 4, title: 'Business Analyst', subtitle: 'Process Automation', type: 'Full-time', level: 'Mid', active: true },
  { id: 5, title: 'Project Manager', subtitle: 'Digital Transformation', type: 'Full-time', level: 'Senior', active: true },
]

const perks = [
  { icon: <Target size={24} />, title: 'Meaningful Impact', desc: 'Contribute to projects that transform how organisations operate and grow.', iconColor: '#00B0ED', grad: 'linear-gradient(135deg, rgba(0,176,237,0.15) 0%, rgba(0,176,237,0.04) 100%)', border: 'rgba(0,176,237,0.18)' },
  { icon: <TrendingUp size={24} />, title: 'Continuous Growth', desc: 'Exposure to cutting-edge technologies in automation, Agentic AI, and intelligent solutions.', iconColor: '#00B0ED', grad: 'linear-gradient(135deg, rgba(0,176,237,0.15) 0%, rgba(0,176,237,0.04) 100%)', border: 'rgba(0,176,237,0.18)' },
  { icon: <Monitor size={24} />, title: 'Hybrid Work Culture', desc: 'Flexibility combining remote and onsite collaboration to support productivity and work-life balance.', iconColor: '#00B0ED', grad: 'linear-gradient(135deg, rgba(0,176,237,0.15) 0%, rgba(0,176,237,0.04) 100%)', border: 'rgba(0,176,237,0.18)' },
  { icon: <DollarSign size={24} />, title: 'Competitive Rewards', desc: 'Attractive compensation, performance bonuses, and comprehensive benefits.', iconColor: '#00B0ED', grad: 'linear-gradient(135deg, rgba(0,176,237,0.15) 0%, rgba(0,176,237,0.04) 100%)', border: 'rgba(0,176,237,0.18)' },
  { icon: <Globe size={24} />, title: 'Global Exposure', desc: 'Opportunity to work with local and international clients while being based in Sri Lanka.', iconColor: '#00B0ED', grad: 'linear-gradient(135deg, rgba(0,176,237,0.15) 0%, rgba(0,176,237,0.04) 100%)', border: 'rgba(0,176,237,0.18)' },
]

const levelColors = {
  Senior:     { bg: 'rgba(244,201,93,0.10)', color: '#8a6200', border: 'rgba(244,201,93,0.25)' },
  Mid:        { bg: 'rgba(0,176,237,0.08)',  color: '#0078aa', border: 'rgba(0,176,237,0.18)' },
  'Mid–Senior': { bg: 'rgba(0,176,237,0.08)', color: '#0078aa', border: 'rgba(0,176,237,0.18)' },
}

export default function Careers() {
  const [positions, setPositions] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      return stored ? JSON.parse(stored).filter(j => j.active) : defaultPositions.filter(j => j.active)
    } catch { return defaultPositions }
  })

  useEffect(() => {
    const sync = () => {
      try {
        const stored = localStorage.getItem(STORAGE_KEY)
        if (stored) setPositions(JSON.parse(stored).filter(j => j.active))
      } catch {}
    }
    window.addEventListener('storage', sync)
    return () => window.removeEventListener('storage', sync)
  }, [])

  return (
    <PageTransition>
      <div>
        {/* Hero */}
        <AnimatedPageHero>
          <span className="section-label">Careers</span>
          <h1>Join Our Journey of Intelligent Innovation</h1>
          <p>We're building a team of passionate problem-solvers who want to make a real impact through automation, AI, and digital transformation.</p>
          <a href="#positions" className="btn-primary" style={{ fontSize: 16 }}>
            Explore Open Positions <ArrowRight size={16} />
          </a>
        </AnimatedPageHero>

        {/* ── Culture ── */}
        <section className="section" style={{ background: '#fff' }}>
          <div className="container">
            <div className="grid-2" style={{ gap: 72, alignItems: 'center' }}>
              <SlideLeft>
                <div>
                  <span className="section-label">Our Culture</span>
                  <h2 style={{ fontSize: 'clamp(24px, 3vw, 40px)', marginBottom: 24 }}>Where Expertise Meets Creativity</h2>
                  <p style={{ color: '#4B5563', fontSize: 16, lineHeight: 1.85, marginBottom: 16 }}>
                    At Overdime Technologies, we believe great work happens when people feel valued, challenged, and supported.
                  </p>
                  <p style={{ color: '#4B5563', fontSize: 16, lineHeight: 1.85, marginBottom: 16 }}>
                    We build a collaborative environment where domain expertise meets creativity. Our team combines deep industry experience with a genuine curiosity to solve complex business challenges.
                  </p>
                  <p style={{ color: '#4B5563', fontSize: 16, lineHeight: 1.85 }}>
                    Whether you are an experienced automation specialist, AI engineer, developer, or someone who thrives at the intersection of technology and business, you will find meaningful work here. We welcome both <strong>full-time and freelance talent.</strong>
                  </p>
                </div>
              </SlideLeft>

              <SlideRight>
                <div style={{ background: '#F8F9FA', borderRadius: 22, padding: 36, border: '1px solid #E5E7EB' }}>
                  {[
                    { label: 'Team Culture', value: 'Collaborative & Inclusive' },
                    { label: 'Work Model', value: 'Hybrid (Remote + Onsite)' },
                    { label: 'Engagement', value: 'Full-time & Freelance' },
                    { label: 'Location', value: 'Colombo, Sri Lanka' },
                  ].map((item, i, arr) => (
                    <div key={item.label} style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      padding: '16px 0',
                      borderBottom: i < arr.length - 1 ? '1px solid #E5E7EB' : 'none',
                    }}>
                      <span style={{ color: '#4B5563', fontSize: 14 }}>{item.label}</span>
                      <span style={{ fontWeight: 700, color: '#062230', fontSize: 14, fontFamily: 'Plus Jakarta Sans' }}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </SlideRight>
            </div>
          </div>
        </section>

        {/* ── Perks ── */}
        <section className="section" style={{ background: '#F0F2F5' }}>
          <div className="container">
            <FadeUp>
              <div style={{ textAlign: 'center', marginBottom: 56 }}>
                <span className="section-label">Why Join Overdime</span>
                <h2 style={{ fontSize: 'clamp(24px, 3vw, 40px)', marginTop: 10 }}>What Makes Working Here Different</h2>
              </div>
            </FadeUp>
            <div className="perks-grid">
              {perks.map((p, i) => (
                <FadeUp key={p.title} delay={i * 0.09}>
                  <div style={{
                    background: '#fff',
                    borderRadius: 16,
                    padding: '28px 20px 24px',
                    textAlign: 'center',
                    border: '1px solid #E5E7EB',
                    borderTop: `3px solid ${p.iconColor}`,
                    boxShadow: '0 2px 12px rgba(10,37,64,0.05)',
                    transition: 'transform 0.22s, box-shadow 0.22s',
                    height: '100%',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-4px)'
                    e.currentTarget.style.boxShadow = '0 12px 36px rgba(10,37,64,0.10)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 2px 12px rgba(10,37,64,0.05)'
                  }}
                  >
                    {/* Gradient icon circle */}
                    <div style={{
                      width: 54, height: 54, borderRadius: '50%',
                      background: p.grad,
                      border: `1px solid ${p.border}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      margin: '0 auto 16px',
                      color: p.iconColor,
                    }}>
                      {p.icon}
                    </div>
                    <h3 style={{ fontSize: 14, marginBottom: 9, lineHeight: 1.3, color: '#062230' }}>{p.title}</h3>
                    <p style={{ color: '#4B5563', fontSize: 12.5, lineHeight: 1.65 }}>{p.desc}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ── Open Positions ── */}
        <section className="section" id="positions" style={{ background: '#fff' }}>
          <div className="container">
            <FadeUp>
              <div style={{ textAlign: 'center', marginBottom: 56 }}>
                <span className="section-label">Open Positions</span>
                <h2 style={{ fontSize: 'clamp(24px, 3vw, 40px)', marginTop: 10 }}>Current Opportunities</h2>
                <p style={{ color: '#4B5563', fontSize: 16, marginTop: 14, maxWidth: 600, margin: '14px auto 0', lineHeight: 1.7 }}>
                  We are open to both full-time and freelance professionals. Even if you don't see an exact match for your profile, we'd still love to hear from you.
                </p>
              </div>
            </FadeUp>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 820, margin: '0 auto' }}>
              {positions.map((pos, i) => {
                const lc = levelColors[pos.level] || levelColors['Mid']
                return (
                  <FadeUp key={pos.id || pos.title} delay={i * 0.07}>
                    <div style={{
                      background: '#fff',
                      borderRadius: 16,
                      padding: '24px 28px',
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      border: '1px solid #E5E7EB',
                      borderLeft: '4px solid rgba(0,176,237,0.25)',
                      flexWrap: 'wrap', gap: 16,
                      transition: 'all 0.22s ease',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderLeftColor = '#00B0ED'
                      e.currentTarget.style.boxShadow = '0 6px 24px rgba(10,37,64,0.09)'
                      e.currentTarget.style.transform = 'translateX(2px)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderLeftColor = 'rgba(0,176,237,0.25)'
                      e.currentTarget.style.boxShadow = 'none'
                      e.currentTarget.style.transform = 'translateX(0)'
                    }}
                    >
                      <div>
                        <h3 style={{ fontSize: 17, marginBottom: 3, lineHeight: 1.3 }}>{pos.title}</h3>
                        <p style={{ color: '#4B5563', fontSize: 13, marginBottom: 10 }}>{pos.subtitle}</p>
                        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                          <span style={{ background: 'rgba(0,176,237,0.08)', color: '#0078aa', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 600, border: '1px solid rgba(0,176,237,0.15)' }}>
                            {pos.type}
                          </span>
                          <span style={{ background: lc.bg, color: lc.color, padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 600, border: `1px solid ${lc.border}` }}>
                            {pos.level}
                          </span>
                        </div>
                      </div>
                      <a
                        href={`mailto:info@overdimetechnologies.com?subject=Application: ${pos.title}`}
                        className="btn-primary"
                        style={{ flexShrink: 0, fontSize: 13, padding: '10px 20px' }}
                      >
                        Apply Now <ExternalLink size={13} />
                      </a>
                    </div>
                  </FadeUp>
                )
              })}
            </div>

            <FadeUp delay={0.3}>
              <div style={{ textAlign: 'center', marginTop: 40, padding: '36px 32px', background: '#F8F9FA', borderRadius: 18, border: '1px dashed #D1D5DB', maxWidth: 600, margin: '40px auto 0' }}>
                <p style={{ color: '#4B5563', fontSize: 15, marginBottom: 18 }}>Don't see a role that fits? We're always open to hearing from talented people.</p>
                <a href="mailto:info@overdimetechnologies.com?subject=General Application" className="btn-secondary" style={{ display: 'inline-flex' }}>
                  Send Us Your CV <ArrowRight size={16} />
                </a>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* CTA */}
        <FadeUp>
          <div className="cta-banner">
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, transparent 0%, #00B0ED 30%, #F4C95D 70%, transparent 100%)', zIndex: 2 }} />
            <div className="container">
              <h2>Ready to shape the future of intelligent automation?</h2>
              <p>If you're excited about solving real business challenges with smart technology, we'd love to meet you.</p>
              <div className="btn-group">
                <a href="#positions" className="btn-gold">View Open Positions</a>
                <a href="mailto:info@overdimetechnologies.com?subject=CV Submission" className="btn-outline-white">Send Us Your CV</a>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </PageTransition>
  )
}
