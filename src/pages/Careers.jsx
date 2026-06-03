import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { ArrowRight, Target, TrendingUp, Monitor, DollarSign, Globe, ExternalLink } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import { FadeUp, SlideLeft, SlideRight } from '../components/Animate'

const STORAGE_KEY = 'overdime_jobs'
const defaultPositions = [
  { id: 1, title: 'Senior Automation Engineer', subtitle: 'RPA / Workato / UiPath', type: 'Full-time', level: 'Senior', active: true },
  { id: 2, title: 'AI Solutions Architect', subtitle: 'OpenAI / Claude / Gemini', type: 'Full-time', level: 'Senior', active: true },
  { id: 3, title: 'Full Stack Developer', subtitle: 'React / Node / Python', type: 'Full-time / Freelance', level: 'Mid–Senior', active: true },
  { id: 4, title: 'Business Analyst', subtitle: 'Process Automation', type: 'Full-time', level: 'Mid', active: true },
  { id: 5, title: 'Project Manager', subtitle: 'Digital Transformation', type: 'Full-time', level: 'Senior', active: true },
]

const perks = [
  { icon: <Target size={28} color="#00B0ED" />, title: 'Meaningful Impact', desc: 'Contribute to projects that transform how organisations operate and grow.' },
  { icon: <TrendingUp size={28} color="#F4C95D" />, title: 'Continuous Growth', desc: 'Exposure to cutting-edge technologies in automation, Agentic AI, and intelligent solutions.' },
  { icon: <Monitor size={28} color="#00B0ED" />, title: 'Hybrid Work Culture', desc: 'Flexibility combining remote and onsite collaboration to support productivity and work-life balance.' },
  { icon: <DollarSign size={28} color="#F4C95D" />, title: 'Competitive Rewards', desc: 'Attractive compensation, performance bonuses, and comprehensive benefits.' },
  { icon: <Globe size={28} color="#00B0ED" />, title: 'Global Exposure', desc: 'Opportunity to work with local and international clients while being based in Sri Lanka.' },
]

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
        <div className="page-hero">
          <div className="container">
            <span className="section-label">Careers</span>
            <h1>Join Our Journey of Intelligent Innovation</h1>
            <p>We're building a team of passionate problem-solvers who want to make a real impact through automation, AI, and digital transformation.</p>
            <a href="#positions" className="btn-primary" style={{ fontSize: 16 }}>
              Explore Open Positions <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Culture */}
        <section className="section" style={{ background: '#fff' }}>
          <div className="container">
            <div className="grid-2" style={{ gap: 64, alignItems: 'center' }}>
              <SlideLeft>
                <span className="section-label">Our Culture</span>
                <h2 style={{ fontSize: 'clamp(18px, 2.5vw, 24px)', marginBottom: 24 }}>Where Expertise Meets Creativity</h2>
                <p style={{ color: '#4B5563', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
                  At Overdime Technologies, we believe great work happens when people feel valued, challenged, and supported.
                </p>
                <p style={{ color: '#4B5563', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
                  We build a collaborative environment where domain expertise meets creativity. Our team combines deep industry experience with a genuine curiosity to solve complex business challenges.
                </p>
                <p style={{ color: '#4B5563', fontSize: 16, lineHeight: 1.8 }}>
                  Whether you are an experienced automation specialist, AI engineer, developer, or someone who thrives at the intersection of technology and business, you will find meaningful work here. We welcome both <strong>full-time and freelance talent.</strong>
                </p>
              </SlideLeft>
              <SlideRight>
                <div style={{ background: 'linear-gradient(135deg, #FAF7F2, #fff)', borderRadius: 24, padding: 40, border: '1px solid #E5E7EB' }}>
                  {[
                    { label: 'Team Culture', value: 'Collaborative & Inclusive' },
                    { label: 'Work Model', value: 'Hybrid (Remote + Onsite)' },
                    { label: 'Engagement', value: 'Full-time & Freelance' },
                    { label: 'Location', value: 'Colombo, Sri Lanka' },
                  ].map(item => (
                    <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 0', borderBottom: '1px solid #E5E7EB' }}>
                      <span style={{ color: '#4B5563', fontSize: 14 }}>{item.label}</span>
                      <span style={{ fontWeight: 700, color: '#0A2540', fontSize: 14, fontFamily: 'Plus Jakarta Sans' }}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </SlideRight>
            </div>
          </div>
        </section>

        {/* Perks */}
        <section className="section" style={{ background: '#F0F2F5' }}>
          <div className="container">
            <FadeUp>
              <div style={{ textAlign: 'center', marginBottom: 56 }}>
                <span className="section-label">Why Join Overdime</span>
                <h2 style={{ fontSize: 'clamp(18px, 2.5vw, 24px)', marginTop: 8 }}>What Makes Working Here Different</h2>
              </div>
            </FadeUp>
            <div className="perks-grid">
              {perks.map((p, i) => (
                <FadeUp key={p.title} delay={i * 0.09}>
                  <div style={{ background: '#fff', borderRadius: 14, padding: '24px 16px', textAlign: 'center', boxShadow: '0 2px 12px rgba(10,37,64,0.06)' }}>
                    <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#F0F2F5', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px' }}>
                      {p.icon}
                    </div>
                    <h3 style={{ fontSize: 14, marginBottom: 8, lineHeight: 1.3 }}>{p.title}</h3>
                    <p style={{ color: '#4B5563', fontSize: 12, lineHeight: 1.6 }}>{p.desc}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="section" id="positions" style={{ background: '#fff' }}>
          <div className="container">
            <FadeUp>
              <div style={{ textAlign: 'center', marginBottom: 56 }}>
                <span className="section-label">Open Positions</span>
                <h2 style={{ fontSize: 'clamp(18px, 2.5vw, 24px)', marginTop: 8 }}>Current Opportunities</h2>
                <p style={{ color: '#4B5563', fontSize: 16, marginTop: 12, maxWidth: 600, margin: '12px auto 0' }}>
                  We are open to both full-time and freelance professionals. Even if you don't see an exact match for your profile, we'd still love to hear from you.
                </p>
              </div>
            </FadeUp>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 800, margin: '0 auto' }}>
              {positions.map((pos, i) => (
                <FadeUp key={pos.id || pos.title} delay={i * 0.08}>
                  <div style={{ background: '#fff', borderRadius: 16, padding: '24px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid #E5E7EB', flexWrap: 'wrap', gap: 16 }}>
                    <div>
                      <h3 style={{ fontSize: 18, marginBottom: 4 }}>{pos.title}</h3>
                      <p style={{ color: '#4B5563', fontSize: 14 }}>{pos.subtitle}</p>
                      <div style={{ display: 'flex', gap: 8, marginTop: 10, flexWrap: 'wrap' }}>
                        <span style={{ background: 'rgba(0,176,237,0.1)', color: '#0072a3', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 600 }}>{pos.type}</span>
                        <span style={{ background: '#F3F4F6', color: '#4B5563', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 600 }}>{pos.level}</span>
                      </div>
                    </div>
                    <a
                      href={`mailto:info@overdimetechnologies.com?subject=Application: ${pos.title}`}
                      className="btn-primary"
                      style={{ flexShrink: 0, fontSize: 14, padding: '10px 20px' }}
                    >
                      Apply Now <ExternalLink size={14} />
                    </a>
                  </div>
                </FadeUp>
              ))}
            </div>

            <FadeUp delay={0.3}>
              <div style={{ textAlign: 'center', marginTop: 40, padding: 32, background: '#FAF7F2', borderRadius: 16, border: '1px dashed #E5E7EB', maxWidth: 600, margin: '40px auto 0' }}>
                <p style={{ color: '#4B5563', fontSize: 15, marginBottom: 16 }}>Don't see a role that fits? We're always open to hearing from talented people.</p>
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
            <div className="container">
              <h2>Ready to Shape the Future of Intelligent Automation?</h2>
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
