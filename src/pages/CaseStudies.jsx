import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ArrowRight, TrendingUp } from 'lucide-react'

const filters = ['All', 'Intelligent Automation', 'AI Solutions', 'Custom Applications', 'ERP']

const cases = [
  {
    client: 'Colombo Fort Group',
    logo: 'C',
    logoColor: '#0A2540',
    category: 'Intelligent Automation',
    title: 'Enterprise Process Automation',
    description: 'End-to-end process automation for one of Sri Lanka\'s leading conglomerates, transforming manual workflows into intelligent digital processes across multiple business units.',
    results: ['Reduced human errors significantly', 'Achieved better cross-departmental collaboration', 'Gained high process transparency', 'Ability to pinpoint bottlenecks in real-time'],
    metric: '45%',
    metricLabel: 'Reduction in manual processing time',
    quote: 'We can now pinpoint the bottleneck — something that was impossible before.',
    attribution: 'Lalith Kulasinghe, Executive Director / CEO',
  },
  {
    client: 'Dialog Axiata',
    logo: 'D',
    logoColor: '#E10014',
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
    logoColor: '#1a5276',
    category: 'Custom Applications',
    title: 'Digital Process Transformation',
    description: 'Custom digital solutions designed to modernise key business processes for one of Sri Lanka\'s most respected automotive and diversified business groups.',
    results: ['Digitised key business workflows', 'Improved data accuracy and reporting', 'Enhanced customer service processes', 'Reduced operational overhead'],
    metric: '50%',
    metricLabel: 'Reduction in process completion time',
  },
]

export default function CaseStudies() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? cases : cases.filter(c => c.category === active)

  return (
    <div>
      <div className="page-hero">
        <div className="container">
          <span style={{ display: 'inline-block', background: 'rgba(0,176,237,0.2)', color: '#00B0ED', fontSize: 13, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '6px 14px', borderRadius: 100, marginBottom: 20 }}>Case Studies</span>
          <h1>Solving Complex Operational Challenges</h1>
          <p>Real results delivered for forward-thinking organisations across Sri Lanka and beyond.</p>
        </div>
      </div>

      <section className="section" style={{ background: '#F0F2F5' }}>
        <div className="container">
          {/* Filters */}
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 48, justifyContent: 'center' }}>
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActive(f)}
                style={{
                  padding: '10px 22px',
                  borderRadius: 100,
                  border: active === f ? 'none' : '1px solid #E5E7EB',
                  background: active === f ? '#00B0ED' : '#fff',
                  color: active === f ? '#fff' : '#4B5563',
                  fontWeight: 600,
                  fontSize: 14,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {filtered.map((cs, i) => (
              <div key={cs.client} style={{ background: '#fff', borderRadius: 20, overflow: 'hidden', boxShadow: '0 2px 20px rgba(10,37,64,0.07)', border: '1px solid #E5E7EB', display: 'grid', gridTemplateColumns: i % 2 === 0 ? '1fr 1fr' : '1fr 1fr' }}>
                {/* Left: info */}
                <div style={{ padding: '48px 40px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
                    <div style={{ width: 52, height: 52, borderRadius: 12, background: cs.logoColor, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: 16, fontFamily: 'Plus Jakarta Sans' }}>
                      {cs.logo}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, color: '#0A2540', fontSize: 16, fontFamily: 'Plus Jakarta Sans' }}>{cs.client}</div>
                      <span style={{ background: 'rgba(0,176,237,0.1)', color: '#00B0ED', fontSize: 12, fontWeight: 600, padding: '3px 10px', borderRadius: 100 }}>{cs.category}</span>
                    </div>
                  </div>

                  <h3 style={{ fontSize: 22, marginBottom: 14 }}>{cs.title}</h3>
                  <p style={{ color: '#4B5563', fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>{cs.description}</p>

                  <div style={{ marginBottom: 20 }}>
                    <div style={{ fontWeight: 600, color: '#0A2540', fontSize: 13, marginBottom: 10 }}>KEY OUTCOMES</div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {cs.results.map(r => (
                        <li key={r} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#00B0ED', flexShrink: 0, marginTop: 8 }} />
                          <span style={{ color: '#4B5563', fontSize: 13 }}>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {cs.quote && (
                    <div style={{ background: '#FAF7F2', borderLeft: '3px solid #00B0ED', padding: '12px 16px', borderRadius: '0 8px 8px 0', marginBottom: 20 }}>
                      <p style={{ color: '#1F2937', fontSize: 13, fontStyle: 'italic', lineHeight: 1.6 }}>"{cs.quote}"</p>
                      <p style={{ color: '#4B5563', fontSize: 12, marginTop: 6 }}>— {cs.attribution}</p>
                    </div>
                  )}
                </div>

                {/* Right: metric */}
                <div style={{ background: 'linear-gradient(135deg, #0A2540, #0d3460)', padding: '48px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                  <TrendingUp size={48} color="rgba(0,176,237,0.4)" style={{ marginBottom: 24 }} />
                  <div style={{ fontSize: 'clamp(48px, 6vw, 80px)', fontWeight: 800, color: '#F4C95D', fontFamily: 'Plus Jakarta Sans', lineHeight: 1 }}>{cs.metric}</div>
                  <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: 15, marginTop: 12, lineHeight: 1.5, maxWidth: 200 }}>{cs.metricLabel}</div>
                  <div style={{ marginTop: 40, width: '100%', height: 1, background: 'rgba(255,255,255,0.1)' }} />
                  <div style={{ marginTop: 24, color: 'rgba(255,255,255,0.5)', fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Impact Delivered</div>
                </div>
              </div>
            ))}
          </div>

          {/* Coming soon note */}
          <div style={{ textAlign: 'center', marginTop: 48, padding: 32, background: '#fff', borderRadius: 16, border: '1px dashed #E5E7EB' }}>
            <p style={{ color: '#9CA3AF', fontSize: 15 }}>More case studies coming soon. Contact us to learn more about our work across various industries.</p>
            <Link to="/contact" className="btn-primary" style={{ marginTop: 20, display: 'inline-flex' }}>
              Discuss Your Project <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <div className="cta-banner">
        <div className="container">
          <h2>Ready to Be Our Next Success Story?</h2>
          <p>Let's explore how we can deliver measurable results for your organisation.</p>
          <div className="btn-group">
            <Link to="/contact" className="btn-gold">Schedule a Free Consultation</Link>
            <a href="https://wa.me/94777751445" target="_blank" rel="noreferrer" className="btn-outline-white">Talk to Us</a>
          </div>
        </div>
      </div>
    </div>
  )
}
