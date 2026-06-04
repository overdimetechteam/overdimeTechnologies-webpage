import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ArrowRight, Zap, Bot, Globe, Database, TrendingUp, Users, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import { FadeUp } from '../components/Animate'
import AnimatedPageHero from '../components/AnimatedPageHero'
import { asset } from '../utils/asset'

const techLogos = {
  'WorkHub24':                asset('logos/WorkHub24.png'),
  'UiPath':                   asset('logos/uipath.jpg'),
  'Automation Anywhere':      asset('logos/Automation Anywhere.png'),
  'Microsoft Power Automate': asset('logos/Microsoft.jpg'),
  'Microsoft PowerApps':      asset('logos/Microsoft.jpg'),
  'Workato':                  asset('logos/workato.jpg'),
  'Google Gemini':            asset('logos/GoogleGemini.png'),
  'OpenAI':                   asset('logos/openAi.png'),
  'Odoo':                     asset('logos/odoo.jpg'),
  'Zoho':                     asset('logos/Zoho.png'),
  'N8N':                      asset('logos/n8n.png'),
  'Jotform AI':               asset('logos/jotform.png'),
  'Anthropic Claude':         asset('logos/anthropic.png'),
}

function TechBadge({ name }) {
  const logo = techLogos[name]
  const [imgFailed, setImgFailed] = useState(false)

  if (logo && !imgFailed) {
    return (
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: '#fff', border: '1px solid #E5E7EB', borderRadius: 10,
        padding: '8px 14px', height: 50, minWidth: 80,
        boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
        transition: 'all 0.2s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,0,0,0.10)'
        e.currentTarget.style.transform = 'translateY(-2px)'
        e.currentTarget.style.borderColor = 'rgba(0,176,237,0.2)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.05)'
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.borderColor = '#E5E7EB'
      }}
      >
        <img src={logo} alt={name} style={{ maxHeight: 28, maxWidth: 88, objectFit: 'contain' }} onError={() => setImgFailed(true)} />
      </div>
    )
  }
  return (
    <span style={{
      background: '#F0F2F5', color: '#062230', border: '1px solid #E5E7EB',
      padding: '8px 14px', borderRadius: 10, fontSize: 13, fontWeight: 600,
      height: 50, display: 'inline-flex', alignItems: 'center',
    }}>{name}</span>
  )
}

const solutions = [
  {
    id: 'ipa',
    icon: <Zap size={30} color="#00B0ED" />,
    title: 'Intelligent Process Automation (IPA)',
    overview: 'We help organisations transform complex operations into efficient, intelligent processes. Our IPA practice combines workflow automation, robotic process automation, and AI-driven decision-making to reduce manual effort and deliver measurable efficiency gains.',
    pillars: [
      { name: 'Business Process Automation', desc: 'We digitise and automate end-to-end workflows, replacing manual and paper-based processes with structured, integrated digital systems.', areas: 'Approval workflows, HR processes, procurement, finance operations, customer onboarding, and service request management.' },
      { name: 'Robotic Process Automation (RPA)', desc: 'We deploy reliable software robots to handle repetitive, rule-based tasks across departments.', areas: 'Data entry, invoice & document processing, report generation, reconciliation, and legacy system interactions.' },
      { name: 'Agentic AI', desc: 'We implement intelligent AI agents capable of autonomous decision-making, task execution, and system interaction.', areas: 'AI-powered virtual assistants, intelligent task orchestration, conversational AI, and AI-driven recommendations.' },
    ],
    value: ['Reduced human intervention', 'Faster decision-making', 'Enhanced customer engagement', 'Scalable intelligent automation'],
    tech: ['WorkHub24', 'UiPath', 'Automation Anywhere', 'Microsoft Power Automate', 'Microsoft PowerApps', 'Workato'],
  },
  {
    id: 'ai',
    icon: <Bot size={30} color="#00B0ED" />,
    title: 'AI Integrated Solutions',
    overview: 'We design and implement AI-powered solutions that help organisations operate more intelligently, accurately, and efficiently while minimising manual intervention.',
    capabilities: [
      { name: 'AI-Powered Business Solutions', desc: 'Intelligent systems that automate functions and enhance operational performance.' },
      { name: 'AI Bots & Virtual Assistants', desc: 'For customer support, internal operations, employee assistance, and knowledge management.' },
      { name: 'AI-Driven Operational Efficiency', desc: 'Faster processing, improved accuracy, optimised workflows, and data-driven decisions.' },
      { name: 'Industry-Specific AI Solutions', desc: 'Tailored AI implementations designed for your specific sector and challenges.' },
      { name: 'Custom AI Development', desc: 'Bespoke AI models and integrations built around your unique business requirements.' },
    ],
    tech: ['N8N', 'Workato', 'Jotform AI', 'Google Gemini', 'Anthropic Claude', 'OpenAI'],
  },
  {
    id: 'web',
    icon: <Globe size={30} color="#00B0ED" />,
    title: 'Custom Web Applications',
    overview: 'When standard solutions fall short, we design and develop bespoke web applications that perfectly match your unique business processes and growth ambitions.',
    services: [
      'Custom Business Applications for internal operations, workflow management, and reporting.',
      'Secure Customer & Employee Portals.',
      'Systems Integration with ERPs, CRMs, third-party platforms, and cloud services.',
      'Legacy Application Modernisation for improved performance, security, and usability.',
    ],
    value: ['Scalable, user-friendly platforms', 'Enhanced operational efficiency', 'Long-term business growth support', 'Secure and reliable architecture'],
  },
  {
    id: 'erp',
    icon: <Database size={30} color="#00B0ED" />,
    title: 'ERP Solutions',
    overview: 'We help organisations centralise and streamline operations through modern ERP and business management platforms, delivering greater visibility, collaboration, and control.',
    services: [
      'ERP Implementation and Module Configuration',
      'Customisation & Integration',
      'ERP Advisory & Optimisation',
      'User Training & Ongoing Support',
    ],
    value: ['Centralised operations', 'Improved reporting and visibility', 'Stronger process control', 'Scalable foundation for growth'],
    tech: ['Odoo', 'Zoho'],
  },
  {
    id: 'consulting',
    icon: <TrendingUp size={30} color="#00B0ED" />,
    title: 'Digital Transformation Consultancy',
    overview: 'We guide organisations through their digital transformation journey by aligning technology, processes, and people to improve efficiency, agility, and business performance. Our senior consultants bring over 25 years of experience in global companies.',
    services: [
      'Digital Transformation Strategy & Technology Roadmaps',
      'Business Process Improvement',
      'Project & Program Management',
      'Change Management & User Adoption',
      'Technology Advisory & Solution Architecture',
    ],
    value: ['Reduced transformation risk', 'Higher project success rates', 'Better technology adoption', 'Structured and scalable digital growth'],
  },
  {
    id: 'staffing',
    icon: <Users size={30} color="#00B0ED" />,
    title: 'Resource Augmentation Solutions',
    overview: 'We provide skilled technology professionals to support short-term and long-term client initiatives, enabling organisations to scale delivery capabilities efficiently.',
    categories: ['Software Developers', 'Automation Engineers', 'AI Engineers', 'Business Analysts', 'Project Managers', 'QA Engineers', 'UI/UX Designers', 'Solution Architects'],
    models: ['Project-based staffing', 'Dedicated resource model', 'Offshore development support', 'Hybrid delivery teams'],
    value: ['Faster project execution', 'Access to specialised expertise', 'Flexible scaling', 'Reduced recruitment overhead'],
  },
]

function SolutionCard({ sol, expanded, onToggle }) {
  return (
    <div style={{
      background: '#fff',
      borderRadius: 20,
      overflow: 'hidden',
      boxShadow: '0 2px 16px rgba(10,37,64,0.07)',
      border: '1px solid #E5E7EB',
      borderLeft: expanded ? '4px solid #F4C95D' : '4px solid rgba(0,176,237,0.25)',
      marginBottom: 20,
      transition: 'border-left-color 0.25s ease, box-shadow 0.25s ease',
    }}
    onMouseEnter={e => {
      if (!expanded) e.currentTarget.style.boxShadow = '0 6px 28px rgba(10,37,64,0.11)'
    }}
    onMouseLeave={e => {
      e.currentTarget.style.boxShadow = '0 2px 16px rgba(10,37,64,0.07)'
    }}
    >
      {/* Header / Toggle */}
      <button
        onClick={onToggle}
        style={{
          width: '100%', background: 'none', padding: '28px 32px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          textAlign: 'left', cursor: 'pointer',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          {/* Icon container */}
          <div style={{
            width: 58, height: 58, borderRadius: 14, flexShrink: 0,
            background: expanded
              ? 'linear-gradient(135deg, rgba(244,201,93,0.15) 0%, rgba(244,201,93,0.04) 100%)'
              : 'linear-gradient(135deg, rgba(0,176,237,0.13) 0%, rgba(0,176,237,0.04) 100%)',
            border: expanded ? '1px solid rgba(244,201,93,0.2)' : '1px solid rgba(0,176,237,0.14)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.25s ease',
          }}>
            {sol.icon}
          </div>
          <div style={{ textAlign: 'left' }}>
            <h3 style={{ fontSize: 'clamp(16px, 2vw, 21px)', color: '#062230', margin: 0, lineHeight: 1.25 }}>{sol.title}</h3>
            <p style={{ color: '#4B5563', fontSize: 13, marginTop: 5, lineHeight: 1.5 }}>{sol.overview.slice(0, 100)}…</p>
          </div>
        </div>
        {/* Expand/collapse button */}
        <div style={{
          flexShrink: 0, marginLeft: 20,
          width: 36, height: 36, borderRadius: '50%',
          background: expanded ? '#F4C95D' : '#F3F4F6',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'all 0.25s ease',
          boxShadow: expanded ? '0 4px 12px rgba(244,201,93,0.35)' : 'none',
        }}>
          {expanded
            ? <ChevronUp size={17} color="#062230" />
            : <ChevronDown size={17} color="#4B5563" />
          }
        </div>
      </button>

      {/* Expanded content */}
      {expanded && (
        <div style={{ padding: '0 32px 36px', borderTop: '1px solid #F3F4F6' }}>
          <p style={{ color: '#4B5563', lineHeight: 1.85, marginTop: 24, marginBottom: 32, fontSize: 15 }}>{sol.overview}</p>

          {sol.pillars && (
            <div style={{ marginBottom: 32 }}>
              <h4 style={{ color: '#062230', marginBottom: 16, fontSize: 15, fontWeight: 700 }}>Our Three Pillars</h4>
              <div className="grid-3">
                {sol.pillars.map(p => (
                  <div key={p.name} style={{ background: '#F8F9FA', borderRadius: 14, padding: '20px 18px', border: '1px solid #E5E7EB' }}>
                    <div style={{ fontWeight: 700, color: '#062230', fontSize: 14, marginBottom: 8 }}>{p.name}</div>
                    <p style={{ color: '#4B5563', fontSize: 13, lineHeight: 1.65, marginBottom: 8 }}>{p.desc}</p>
                    <p style={{ color: '#0078aa', fontSize: 12, fontWeight: 600 }}>Key Areas: {p.areas}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {sol.capabilities && (
            <div style={{ marginBottom: 32 }}>
              <h4 style={{ color: '#062230', marginBottom: 16, fontSize: 15, fontWeight: 700 }}>Our Capabilities</h4>
              <div className="grid-2">
                {sol.capabilities.map(c => (
                  <div key={c.name} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <CheckCircle size={17} color="#00B0ED" style={{ marginTop: 2, flexShrink: 0 }} />
                    <div>
                      <div style={{ fontWeight: 600, color: '#062230', fontSize: 14 }}>{c.name}</div>
                      <div style={{ color: '#4B5563', fontSize: 13, marginTop: 2 }}>{c.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {sol.services && (
            <div style={{ marginBottom: 32 }}>
              <h4 style={{ color: '#062230', marginBottom: 14, fontSize: 15, fontWeight: 700 }}>Core Services</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {sol.services.map(s => (
                  <li key={s} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <CheckCircle size={15} color="#00B0ED" style={{ marginTop: 3, flexShrink: 0 }} />
                    <span style={{ color: '#4B5563', fontSize: 14 }}>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {sol.categories && (
            <div style={{ marginBottom: 28 }}>
              <h4 style={{ color: '#062230', marginBottom: 12, fontSize: 15, fontWeight: 700 }}>Resource Categories</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {sol.categories.map(c => (
                  <span key={c} style={{ background: 'rgba(0,176,237,0.08)', color: '#0078aa', padding: '6px 14px', borderRadius: 100, fontSize: 13, fontWeight: 500, border: '1px solid rgba(0,176,237,0.15)' }}>{c}</span>
                ))}
              </div>
            </div>
          )}

          {sol.models && (
            <div style={{ marginBottom: 28 }}>
              <h4 style={{ color: '#062230', marginBottom: 12, fontSize: 15, fontWeight: 700 }}>Engagement Models</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {sol.models.map(m => (
                  <span key={m} style={{ background: '#F3F4F6', color: '#4B5563', padding: '6px 14px', borderRadius: 100, fontSize: 13, fontWeight: 500, border: '1px solid #E5E7EB' }}>{m}</span>
                ))}
              </div>
            </div>
          )}

          {sol.value && (
            <div style={{ background: 'linear-gradient(135deg, rgba(0,176,237,0.06), rgba(244,201,93,0.04))', borderRadius: 14, padding: '20px 22px', marginBottom: 24, border: '1px solid rgba(0,176,237,0.1)' }}>
              <h4 style={{ color: '#062230', marginBottom: 12, fontSize: 14, fontWeight: 700 }}>Business Value</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {sol.value.map(v => (
                  <span key={v} style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#fff', color: '#062230', padding: '7px 14px', borderRadius: 8, fontSize: 13, fontWeight: 500, boxShadow: '0 1px 4px rgba(0,0,0,0.06)', border: '1px solid #E5E7EB' }}>
                    <CheckCircle size={13} color="#00B0ED" /> {v}
                  </span>
                ))}
              </div>
            </div>
          )}

          {sol.tech && (
            <div>
              <h4 style={{ color: '#062230', marginBottom: 12, fontSize: 14, fontWeight: 700 }}>Platforms & Technologies</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center' }}>
                {sol.tech.map(t => <TechBadge key={t} name={t} />)}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default function Solutions() {
  const [expanded, setExpanded] = useState('ipa')

  return (
    <PageTransition>
      <div>
        <AnimatedPageHero>
          <span className="section-label">Our Solutions</span>
          <h1>Intelligent Solutions That Drive Real Business Performance</h1>
          <p>We help growth-focused organisations streamline operations, reduce manual work, and unlock smarter decision-making through automation, AI, and tailored digital systems.</p>
          <Link to="/contact" className="btn-primary" style={{ fontSize: 16 }}>
            Schedule a Free Consultation <ArrowRight size={16} />
          </Link>
        </AnimatedPageHero>

        <section className="section" style={{ background: '#F0F2F5' }}>
          <div className="container">
            {solutions.map((sol, i) => (
              <FadeUp key={sol.id} delay={i * 0.06}>
                <SolutionCard
                  sol={sol}
                  expanded={expanded === sol.id}
                  onToggle={() => setExpanded(expanded === sol.id ? null : sol.id)}
                />
              </FadeUp>
            ))}
          </div>
        </section>

        <FadeUp>
          <div className="cta-banner">
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, transparent 0%, #00B0ED 30%, #F4C95D 70%, transparent 100%)', zIndex: 2 }} />
            <div className="container">
              <h2>Not Sure Where to Begin?</h2>
              <p>Our team will help you identify the highest-impact opportunities for your organisation.</p>
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
