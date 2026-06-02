import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ArrowRight, Zap, Bot, Globe, Database, TrendingUp, Users, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react'

const solutions = [
  {
    id: 'ipa',
    icon: <Zap size={32} color="#00B0ED" />,
    title: 'Intelligent Process Automation (IPA)',
    overview: 'We help organisations transform complex operations into efficient, intelligent processes. Our IPA practice combines workflow automation, robotic process automation, and AI-driven decision-making to reduce manual effort and deliver measurable efficiency gains.',
    pillars: [
      {
        name: 'Business Process Automation',
        desc: 'We digitise and automate end-to-end workflows, replacing manual and paper-based processes with structured, integrated digital systems.',
        areas: 'Approval workflows, HR processes, procurement, finance operations, customer onboarding, and service request management.',
      },
      {
        name: 'Robotic Process Automation (RPA)',
        desc: 'We deploy reliable software robots to handle repetitive, rule-based tasks across departments.',
        areas: 'Data entry, invoice & document processing, report generation, reconciliation, and legacy system interactions.',
      },
      {
        name: 'Agentic AI',
        desc: 'We implement intelligent AI agents capable of autonomous decision-making, task execution, and system interaction.',
        areas: 'AI-powered virtual assistants, intelligent task orchestration, conversational AI, and AI-driven recommendations.',
      },
    ],
    value: ['Reduced human intervention', 'Faster decision-making', 'Enhanced customer engagement', 'Scalable intelligent automation'],
    tech: ['WorkHub24', 'UiPath', 'Automation Anywhere', 'Microsoft Power Automate', 'Microsoft PowerApps', 'Workato'],
  },
  {
    id: 'ai',
    icon: <Bot size={32} color="#00B0ED" />,
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
    icon: <Globe size={32} color="#00B0ED" />,
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
    icon: <Database size={32} color="#00B0ED" />,
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
    icon: <TrendingUp size={32} color="#00B0ED" />,
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
    icon: <Users size={32} color="#00B0ED" />,
    title: 'Resource Augmentation Solutions',
    overview: 'We provide skilled technology professionals to support short-term and long-term client initiatives, enabling organisations to scale delivery capabilities efficiently.',
    categories: ['Software Developers', 'Automation Engineers', 'AI Engineers', 'Business Analysts', 'Project Managers', 'QA Engineers', 'UI/UX Designers', 'Solution Architects'],
    models: ['Project-based staffing', 'Dedicated resource model', 'Offshore development support', 'Hybrid delivery teams'],
    value: ['Faster project execution', 'Access to specialised expertise', 'Flexible scaling', 'Reduced recruitment overhead'],
  },
]

function SolutionCard({ sol, expanded, onToggle }) {
  return (
    <div style={{ background: '#fff', borderRadius: 20, overflow: 'hidden', boxShadow: '0 2px 20px rgba(10,37,64,0.07)', border: '1px solid #E5E7EB', marginBottom: 24 }}>
      <button
        onClick={onToggle}
        style={{ width: '100%', background: 'none', padding: '32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', textAlign: 'left', cursor: 'pointer' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div style={{ width: 60, height: 60, borderRadius: 14, background: 'rgba(0,176,237,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            {sol.icon}
          </div>
          <div style={{ textAlign: 'left' }}>
            <h3 style={{ fontSize: 'clamp(17px, 2vw, 22px)', color: '#0A2540', margin: 0 }}>{sol.title}</h3>
            <p style={{ color: '#4B5563', fontSize: 14, marginTop: 4, lineHeight: 1.5 }}>{sol.overview.slice(0, 100)}...</p>
          </div>
        </div>
        <div style={{ flexShrink: 0, marginLeft: 16, width: 36, height: 36, borderRadius: '50%', background: expanded ? '#00B0ED' : '#F3F4F6', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}>
          {expanded ? <ChevronUp size={18} color="#fff" /> : <ChevronDown size={18} color="#4B5563" />}
        </div>
      </button>

      {expanded && (
        <div style={{ padding: '0 32px 32px', borderTop: '1px solid #F3F4F6' }}>
          <p style={{ color: '#4B5563', lineHeight: 1.8, marginTop: 24, marginBottom: 28, fontSize: 15 }}>{sol.overview}</p>

          {sol.pillars && (
            <div style={{ marginBottom: 28 }}>
              <h4 style={{ color: '#0A2540', marginBottom: 16, fontSize: 16 }}>Our Three Pillars</h4>
              <div className="grid-3">
                {sol.pillars.map(p => (
                  <div key={p.name} style={{ background: '#FAF7F2', borderRadius: 12, padding: 20 }}>
                    <div style={{ fontWeight: 700, color: '#0A2540', fontSize: 15, marginBottom: 8 }}>{p.name}</div>
                    <p style={{ color: '#4B5563', fontSize: 13, lineHeight: 1.6, marginBottom: 8 }}>{p.desc}</p>
                    <p style={{ color: '#00B0ED', fontSize: 12, fontWeight: 600 }}>Key Areas: {p.areas}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {sol.capabilities && (
            <div style={{ marginBottom: 28 }}>
              <h4 style={{ color: '#0A2540', marginBottom: 16, fontSize: 16 }}>Our Capabilities</h4>
              <div className="grid-2">
                {sol.capabilities.map(c => (
                  <div key={c.name} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <CheckCircle size={18} color="#00B0ED" style={{ marginTop: 2, flexShrink: 0 }} />
                    <div>
                      <div style={{ fontWeight: 600, color: '#0A2540', fontSize: 14 }}>{c.name}</div>
                      <div style={{ color: '#4B5563', fontSize: 13 }}>{c.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {sol.services && (
            <div style={{ marginBottom: 28 }}>
              <h4 style={{ color: '#0A2540', marginBottom: 16, fontSize: 16 }}>Core Services</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {sol.services.map(s => (
                  <li key={s} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <CheckCircle size={16} color="#00B0ED" style={{ marginTop: 2, flexShrink: 0 }} />
                    <span style={{ color: '#4B5563', fontSize: 14 }}>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {sol.categories && (
            <div style={{ marginBottom: 24 }}>
              <h4 style={{ color: '#0A2540', marginBottom: 12, fontSize: 16 }}>Resource Categories</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {sol.categories.map(c => (
                  <span key={c} style={{ background: 'rgba(0,176,237,0.1)', color: '#0072a3', padding: '6px 14px', borderRadius: 100, fontSize: 13, fontWeight: 500 }}>{c}</span>
                ))}
              </div>
            </div>
          )}

          {sol.models && (
            <div style={{ marginBottom: 24 }}>
              <h4 style={{ color: '#0A2540', marginBottom: 12, fontSize: 16 }}>Engagement Models</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {sol.models.map(m => (
                  <span key={m} style={{ background: '#F3F4F6', color: '#4B5563', padding: '6px 14px', borderRadius: 100, fontSize: 13, fontWeight: 500 }}>{m}</span>
                ))}
              </div>
            </div>
          )}

          {sol.value && (
            <div style={{ background: 'linear-gradient(135deg, rgba(0,176,237,0.08), rgba(244,201,93,0.05))', borderRadius: 12, padding: 20, marginBottom: 24 }}>
              <h4 style={{ color: '#0A2540', marginBottom: 12, fontSize: 15 }}>Business Value</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {sol.value.map(v => (
                  <span key={v} style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#fff', color: '#0A2540', padding: '6px 14px', borderRadius: 8, fontSize: 13, fontWeight: 500, boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
                    <CheckCircle size={14} color="#00B0ED" /> {v}
                  </span>
                ))}
              </div>
            </div>
          )}

          {sol.tech && (
            <div>
              <h4 style={{ color: '#0A2540', marginBottom: 12, fontSize: 15 }}>Platforms & Technologies</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {sol.tech.map(t => (
                  <span key={t} style={{ background: '#0A2540', color: '#fff', padding: '6px 14px', borderRadius: 6, fontSize: 13, fontWeight: 500 }}>{t}</span>
                ))}
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
    <div>
      <div className="page-hero">
        <div className="container">
          <span style={{ display: 'inline-block', background: 'rgba(0,176,237,0.2)', color: '#00B0ED', fontSize: 13, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '6px 14px', borderRadius: 100, marginBottom: 20 }}>Our Solutions</span>
          <h1>Intelligent Solutions That Drive Real Business Performance</h1>
          <p>We help growth-focused organisations streamline operations, reduce manual work, and unlock smarter decision-making through automation, AI, and tailored digital systems.</p>
          <Link to="/contact" className="btn-primary" style={{ fontSize: 16 }}>
            Schedule a Free Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <section className="section" style={{ background: '#F0F2F5' }}>
        <div className="container">
          {solutions.map(sol => (
            <SolutionCard
              key={sol.id}
              sol={sol}
              expanded={expanded === sol.id}
              onToggle={() => setExpanded(expanded === sol.id ? null : sol.id)}
            />
          ))}
        </div>
      </section>

      <div className="cta-banner">
        <div className="container">
          <h2>Not Sure Where to Begin?</h2>
          <p>Our team will help you identify the highest-impact opportunities for your organisation.</p>
          <div className="btn-group">
            <Link to="/contact" className="btn-gold">Schedule a Free Consultation</Link>
            <a href="https://wa.me/94777751445" target="_blank" rel="noreferrer" className="btn-outline-white">Talk to Us</a>
          </div>
        </div>
      </div>
    </div>
  )
}
