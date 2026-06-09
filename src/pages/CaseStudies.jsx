import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { ArrowRight, TrendingUp, X } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import { FadeUp } from '../components/Animate'
import AnimatedPageHero from '../components/AnimatedPageHero'

const filters = ['All', 'Intelligent Automation', 'AI Solutions', 'Custom Applications', 'ERP']

const cases = [
  {
    client: 'Colombo Fort Group',
    logo: 'C',
    logoColor: '#fff',
    logoBg: 'linear-gradient(135deg, #00B0ED 0%, #062230 100%)',
    category: 'Intelligent Automation',
    title: 'Enterprise Process Automation',
    description: 'By implementing WorkHub24 with Overdime Technologies, Colombo Fort Group streamlined operations across 58 companies, reduced human errors, improved collaboration, and achieved greater transparency in workflows. The automation of 20+ processes has delivered measurable time and cost savings, while supporting over 1,500 executives with just 50 concurrent licenses—a scalable, cost-efficient model that sets a benchmark in Sri Lanka\'s digital transformation landscape.',
    results: ['Reduced human errors significantly', 'Achieved better cross-departmental collaboration', 'Gained high process transparency', 'Ability to pinpoint bottlenecks in real-time'],
    metric: '45%',
    metricLabel: 'Reduction in manual processing time',
    quote: 'We can now pinpoint the bottleneck — something that was impossible before.',
    attribution: 'Lalith Kulasinghe, Executive Director / CEO',
    fullDetails: {
      subtitle: 'A WorkHub24 and Overdime Technologies success story',
      challenge: {
        intro: 'Large conglomerates often struggle with maintaining transparency and efficiency across diverse businesses. Colombo Fort Group, with listed entities such as Lankem Ceylon PLC and E. B. Creasy & Co. PLC, faced:',
        points: [
          'Fragmented IT systems across 58 companies',
          'Manual processes prone to errors',
          'Difficulty pinpointing bottlenecks across the group',
        ],
      },
      solution: {
        intro: 'Partnering with Overdime Technologies, the Group adopted WorkHub24 as its workflow automation platform. Key steps included:',
        points: [
          'Gradual rollout over two years across 20 processes',
          'Integration with SAP, Salesforce, and Office 365',
          'Flexible concurrent licensing model to optimise costs',
          'Tailored process re-engineering where needed, while preserving existing workflows',
        ],
      },
      results: [
        { label: 'Error reduction',      detail: 'Significant drop in manual mistakes across all business units' },
        { label: 'Transparency',         detail: 'Real-time visibility into delays and bottlenecks' },
        { label: 'Efficiency gains',     detail: 'Time savings directly translating into cost savings' },
        { label: 'Scalable adoption',    detail: '50 licenses supporting over 1,500 executives' },
        { label: 'Process coverage',     detail: 'Petty cash automation across 58 companies and 72 locations; corporate insurance claims fully digitised' },
      ],
      testimonial: {
        quote: 'Colombo Fort Group partnered with Overdime Technologies for the implementation of WorkHub24, recognising them as a trusted and capable technology partner. Their flexible approach allowed them to adapt to our unique requirements rather than enforcing rigid frameworks. The strong relationship built on trust and collaboration played a key role in the project\'s success. Overdime\'s access to high-quality expert resources ensured a smooth and efficient implementation, while their phased model helped us mitigate risks, control costs, train users effectively, and achieve a high return on investment.',
        name: 'Lalith Kulasinghe',
        role: 'Executive Director & CEO, Colombo Fort Group Services (Pvt) Ltd',
      },
      takeaways: [
        { label: 'Integrated simplicity',      detail: 'Four core platforms (SAP, WorkHub24, Office 365, Salesforce) replaced a fragmented IT landscape.' },
        { label: 'Cost-efficient scalability', detail: 'Concurrent licensing maximised ROI across 58 companies.' },
        { label: 'Human impact',               detail: 'Automation redeployed staff to higher-value roles, dispelling myths about job losses.' },
        { label: 'Strategic transformation',   detail: 'Workflow automation became a pillar of the Group\'s digital strategy.' },
      ],
    },
  },
  {
    client: 'Dialog Axiata',
    logo: 'D',
    logoColor: '#fff',
    logoBg: 'linear-gradient(135deg, #00B0ED 0%, #062230 100%)',
    category: 'Intelligent Automation',
    title: 'Operational Workflow Automation',
    description: 'Streamlining internal operational workflows for Sri Lanka\'s leading telecommunications provider, reducing manual touchpoints and improving processing speed across departments.',
    results: ['Faster processing of operational requests', 'Reduced manual data entry', 'Improved cross-team visibility', 'Enhanced reporting accuracy'],
    metric: '30%+',
    metricLabel: 'Improvement in operational efficiency',
  },
  {
    client: 'David Pieris Group',
    logo: 'DP',
    logoColor: '#fff',
    logoBg: 'linear-gradient(135deg, #00B0ED 0%, #062230 100%)',
    category: 'Custom Applications',
    title: 'Digital Process Transformation',
    description: 'Custom digital solutions designed to modernise key business processes for one of Sri Lanka\'s most respected automotive and diversified business groups.',
    results: ['Digitised key business workflows', 'Improved data accuracy and reporting', 'Enhanced customer service processes', 'Reduced operational overhead'],
    metric: '50%',
    metricLabel: 'Reduction in process cycle time',
  },
]

function CaseStudyModal({ cs, onClose }) {
  const d = cs.fullDetails

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  const backdrop = {
    position: 'fixed', inset: 0, zIndex: 1000,
    background: 'rgba(3,15,26,0.72)',
    backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    padding: '24px 16px',
  }

  const shell = {
    borderRadius: 20, overflow: 'hidden',
    width: '100%', maxWidth: 760,
    boxShadow: '0 24px 80px rgba(3,15,26,0.36)',
  }

  const scroller = { maxHeight: '88vh', overflowY: 'auto' }

  const header = {
    position: 'sticky', top: 0, zIndex: 2,
    background: 'linear-gradient(135deg, #030f1a 0%, #062230 100%)',
    padding: '28px 36px 24px',
  }

  const closeBtn = {
    position: 'absolute', top: 18, right: 18,
    background: 'rgba(255,255,255,0.10)', border: 'none',
    borderRadius: 8, padding: 7, cursor: 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    transition: 'background 0.18s',
  }

  return (
    <div style={backdrop} onClick={onClose}>
      <div style={shell} onClick={e => e.stopPropagation()}>
        <div className="modal-scroll" style={scroller}>
          <div style={header}>
            <button
              onClick={onClose}
              style={closeBtn}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.20)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.10)' }}
            >
              <X size={16} color="#fff" />
            </button>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#00B0ED', marginBottom: 6 }}>
              Case Study — {cs.client}
            </div>
            <h2 style={{ color: '#fff', fontSize: 'clamp(18px, 2.4vw, 26px)', fontFamily: 'Plus Jakarta Sans', margin: 0, lineHeight: 1.2 }}>
              {cs.title}
            </h2>
            {d.subtitle && (
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, marginTop: 6, fontStyle: 'italic' }}>{d.subtitle}</p>
            )}
          </div>
          <div style={{ padding: '36px 36px 40px', background: '#fff' }}>
            <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.85, marginBottom: 32 }}>{cs.description}</p>
            <hr style={{ border: 'none', borderTop: '1px solid #F3F4F6', marginBottom: 32 }} />
            <Section label="Challenge">
              <p style={{ color: '#4B5563', fontSize: 14, lineHeight: 1.8, marginBottom: 14 }}>{d.challenge.intro}</p>
              <BulletList items={d.challenge.points} />
            </Section>
            <Section label="Solution">
              <p style={{ color: '#4B5563', fontSize: 14, lineHeight: 1.8, marginBottom: 14 }}>{d.solution.intro}</p>
              <BulletList items={d.solution.points} />
            </Section>
            <Section label="Results">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {d.results.map((r, i) => (
                  <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#00B0ED', flexShrink: 0, marginTop: 6 }} />
                    <div style={{ fontSize: 14, color: '#374151', lineHeight: 1.65 }}>
                      <strong style={{ color: '#062230' }}>{r.label}:</strong> {r.detail}
                    </div>
                  </div>
                ))}
              </div>
            </Section>
            <Section label="Client testimonial">
              <div style={{ background: 'linear-gradient(135deg, #FFFCF0 0%, #FFFEF8 100%)', border: '1px solid rgba(244,201,93,0.30)', borderLeft: '4px solid #F4C95D', borderRadius: '0 12px 12px 0', padding: '20px 22px' }}>
                <p style={{ color: '#374151', fontSize: 14, lineHeight: 1.8, fontStyle: 'italic', marginBottom: 14 }}>"{d.testimonial.quote}"</p>
                <div style={{ fontWeight: 700, color: '#062230', fontSize: 13 }}>{d.testimonial.name}</div>
                <div style={{ color: '#6B7280', fontSize: 12, marginTop: 2 }}>{d.testimonial.role}</div>
              </div>
            </Section>
            <Section label="Key takeaways" last>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {d.takeaways.map((t, i) => (
                  <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#F4C95D', flexShrink: 0, marginTop: 6 }} />
                    <div style={{ fontSize: 14, color: '#374151', lineHeight: 1.65 }}>
                      <strong style={{ color: '#062230' }}>{t.label}:</strong> {t.detail}
                    </div>
                  </div>
                ))}
              </div>
            </Section>
          </div>
        </div>
      </div>
    </div>
  )
}

function Section({ label, children, last }) {
  return (
    <div style={{ marginBottom: last ? 0 : 28 }}>
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#00B0ED', marginBottom: 12 }}>
        {label}
      </div>
      {children}
      {!last && <hr style={{ border: 'none', borderTop: '1px solid #F3F4F6', marginTop: 28 }} />}
    </div>
  )
}

function BulletList({ items }) {
  return (
    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
      {items.map((item, i) => (
        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
          <div style={{ width: 18, height: 18, borderRadius: '50%', background: 'rgba(0,176,237,0.1)', border: '1px solid rgba(0,176,237,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
            <svg width="9" height="9" viewBox="0 0 9 9" fill="none"><path d="M1.5 4.5L3.5 6.5L7.5 2.5" stroke="#00B0ED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
          <span style={{ color: '#4B5563', fontSize: 14, lineHeight: 1.6 }}>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function CaseStudies() {
  const [active, setActive]   = useState('All')
  const [modal, setModal]     = useState(null)
  const filtered = active === 'All' ? cases : cases.filter(c => c.category === active)

  return (
    <PageTransition>
      <div>
        <AnimatedPageHero>
          <span className="section-label">Case Studies</span>
          <h1>Solving Complex Operational Challenges</h1>
          <p>Real results delivered for forward-thinking organisations across Sri Lanka and beyond.</p>
        </AnimatedPageHero>

        <section className="section" style={{ background: '#F0F2F5' }}>
          <div className="container">

            {/* Filters */}
            <FadeUp>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 56, justifyContent: 'center' }}>
                {filters.map(f => (
                  <button
                    key={f}
                    onClick={() => setActive(f)}
                    style={{
                      padding: '10px 22px',
                      borderRadius: 100,
                      border: active === f ? 'none' : '1px solid #E5E7EB',
                      background: active === f ? '#062230' : '#fff',
                      color: active === f ? '#fff' : '#4B5563',
                      fontWeight: 600,
                      fontSize: 14,
                      cursor: 'pointer',
                      transition: 'all 0.22s ease',
                      boxShadow: active === f ? '0 4px 16px rgba(10,37,64,0.20)' : '0 1px 4px rgba(0,0,0,0.04)',
                    }}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </FadeUp>

            {/* Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              {filtered.map((cs, i) => (
                <FadeUp key={cs.client} delay={i * 0.09}>
                  <div className="case-card-grid">
                    {/* Left: info */}
                    <div style={{ padding: '48px 44px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
                        <div style={{
                          width: 52, height: 52, borderRadius: 13,
                          background: cs.logoBg,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          color: cs.logoColor, fontWeight: 800, fontSize: 15,
                          fontFamily: 'Plus Jakarta Sans',
                          flexShrink: 0,
                          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                        }}>
                          {cs.logo}
                        </div>
                        <div>
                          <div style={{ fontWeight: 700, color: '#062230', fontSize: 16, fontFamily: 'Plus Jakarta Sans' }}>{cs.client}</div>
                          <span style={{ background: 'rgba(0,176,237,0.08)', color: '#0078aa', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 100, border: '1px solid rgba(0,176,237,0.15)', letterSpacing: '0.06em' }}>{cs.category}</span>
                        </div>
                      </div>

                      <h3 style={{ fontSize: 22, marginBottom: 12, lineHeight: 1.25 }}>{cs.title}</h3>
                      <p style={{ color: '#4B5563', fontSize: 14, lineHeight: 1.8, marginBottom: 22 }}>{cs.description}</p>

                      <div style={{ marginBottom: 22 }}>
                        <div style={{ fontWeight: 700, color: '#062230', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>Key Outcomes</div>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9 }}>
                          {cs.results.map(r => (
                            <li key={r} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                              <div style={{ width: 18, height: 18, borderRadius: '50%', background: 'rgba(0,176,237,0.1)', border: '1px solid rgba(0,176,237,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                                <svg width="9" height="9" viewBox="0 0 9 9" fill="none"><path d="M1.5 4.5L3.5 6.5L7.5 2.5" stroke="#00B0ED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                              </div>
                              <span style={{ color: '#4B5563', fontSize: 13, lineHeight: 1.5 }}>{r}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {cs.quote && (
                        <div style={{ background: 'linear-gradient(135deg, rgba(0,176,237,0.05), rgba(0,176,237,0.02))', borderLeft: '3px solid #00B0ED', padding: '14px 18px', borderRadius: '0 10px 10px 0', marginBottom: cs.fullDetails ? 22 : 0 }}>
                          <p style={{ color: '#1F2937', fontSize: 13, fontStyle: 'italic', lineHeight: 1.65 }}>"{cs.quote}"</p>
                          <p style={{ color: '#4B5563', fontSize: 12, marginTop: 6, fontWeight: 600 }}>— {cs.attribution}</p>
                        </div>
                      )}

                      {cs.fullDetails && (
                        <button onClick={() => setModal(cs)} className="btn-gold" style={{ fontSize: 13 }}>
                          View full case study <ArrowRight size={14} />
                        </button>
                      )}
                    </div>

                    {/* Right: metric panel */}
                    <div className="case-metric-panel" style={{
                      background: 'linear-gradient(135deg, #030f1a 0%, #062230 55%, #093040 100%)',
                      padding: '48px 40px',
                      display: 'flex', flexDirection: 'column',
                      justifyContent: 'center', alignItems: 'center', textAlign: 'center',
                      position: 'relative', overflow: 'hidden',
                    }}>
                      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '22px 22px', pointerEvents: 'none' }} />
                      <div style={{ position: 'relative', zIndex: 1 }}>
                        <TrendingUp size={40} color="rgba(0,176,237,0.35)" style={{ marginBottom: 24 }} />
                        <div style={{ fontSize: 'clamp(52px, 7vw, 84px)', fontWeight: 900, color: '#F4C95D', fontFamily: 'Plus Jakarta Sans', lineHeight: 1 }}>
                          {cs.metric}
                        </div>
                        <div style={{ color: 'rgba(255,255,255,0.70)', fontSize: 14, marginTop: 14, lineHeight: 1.55, maxWidth: 180 }}>{cs.metricLabel}</div>
                        <div style={{ margin: '36px 0 16px', width: 48, height: 1, background: 'rgba(244,201,93,0.3)', marginLeft: 'auto', marginRight: 'auto' }} />
                        <div style={{ color: 'rgba(255,255,255,0.38)', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Impact Delivered</div>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>

            {/* Coming soon note */}
            <FadeUp delay={0.2}>
              <div style={{ textAlign: 'center', marginTop: 52, padding: '40px 32px', background: '#fff', borderRadius: 18, border: '1px dashed #D1D5DB' }}>
                <p style={{ color: '#9CA3AF', fontSize: 15, marginBottom: 20 }}>More case studies coming soon. Contact us to learn more about our work across various industries.</p>
                <Link to="/contact" className="btn-primary" style={{ display: 'inline-flex' }}>
                  Discuss Your Project <ArrowRight size={16} />
                </Link>
              </div>
            </FadeUp>
          </div>
        </section>

        <FadeUp>
          <div className="cta-banner">
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, transparent 0%, #00B0ED 30%, #F4C95D 70%, transparent 100%)', zIndex: 2 }} />
            <div className="container">
              <h2>Ready to be our next success story?</h2>
              <p>Let's explore how we can deliver measurable results for your organisation.</p>
              <div className="btn-group">
                <Link to="/contact" className="btn-gold">Schedule a Free Consultation</Link>
                <a href="https://wa.me/94772414208" target="_blank" rel="noreferrer" className="btn-outline-white">Chat with Us</a>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>

      {modal && <CaseStudyModal cs={modal} onClose={() => setModal(null)} />}
    </PageTransition>
  )
}
