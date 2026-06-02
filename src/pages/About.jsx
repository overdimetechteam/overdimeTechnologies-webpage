import { Link } from 'react-router-dom'
import { ArrowRight, Heart, Lightbulb, Shield, Award } from 'lucide-react'

const values = [
  { icon: <Heart size={28} color="#00B0ED" />, title: 'Client-First', desc: 'We listen deeply and design solutions tailored to your unique challenges and goals.' },
  { icon: <Lightbulb size={28} color="#F4C95D" />, title: 'Practical Innovation', desc: 'We focus on what delivers real results — not just the latest technology trends.' },
  { icon: <Shield size={28} color="#00B0ED" />, title: 'Integrity & Transparency', desc: 'Honest communication, clear timelines, and measurable outcomes you can trust.' },
  { icon: <Award size={28} color="#F4C95D" />, title: 'Excellence Through Experience', desc: 'Our team brings decades of industry and business knowledge to every engagement.' },
]

const whyUs = [
  'Industry and domain experts with extensive real-world business experience',
  'Proven track record serving respected organisations including Dialog, David Pieris, and Colombo Fort Group',
  'End-to-end partnership from consultation through implementation and ongoing support',
  'Local insight with global-standard delivery',
  'Focus on practical, sustainable outcomes',
]

export default function About() {
  return (
    <div>
      {/* Hero */}
      <div className="page-hero">
        <div className="container">
          <span style={{ display: 'inline-block', background: 'rgba(0,176,237,0.2)', color: '#00B0ED', fontSize: 13, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '6px 14px', borderRadius: 100, marginBottom: 20 }}>About Us</span>
          <h1>About Overdime Technologies</h1>
          <p>A boutique automation agency dedicated to helping scaling companies achieve operational excellence through intelligent automation and practical digital solutions.</p>
          <Link to="/contact#team" className="btn-primary" style={{ fontSize: 16 }}>
            Meet Our Team <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Our Story */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: 64, alignItems: 'center' }}>
            <div>
              <span className="section-label">Our Story</span>
              <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', marginBottom: 24 }}>Built on a Simple Belief: Technology Should Make Business Simpler</h2>
              <p style={{ color: '#4B5563', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
                Overdime Technologies was founded with a simple belief: technology should make business simpler, not more complicated.
              </p>
              <p style={{ color: '#4B5563', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
                Based in Sri Lanka, we have grown into a trusted partner for forward-thinking medium and large enterprises. Our team consists of industry and domain experts with deep, hands-on experience across multiple industries. This real-world expertise allows us to understand business challenges from the inside and design solutions that deliver meaningful, lasting impact.
              </p>
              <p style={{ color: '#4B5563', fontSize: 16, lineHeight: 1.8 }}>
                We combine this practical knowledge with modern automation, AI, and intelligent systems to help organisations reduce manual work, streamline processes, and achieve measurable growth — both locally and globally.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[
                { label: 'Founded', value: 'Sri Lanka' },
                { label: 'Focus', value: 'Enterprise Automation' },
                { label: 'Experience', value: '25+ Years Combined' },
                { label: 'Reach', value: 'Local & Global' },
              ].map(item => (
                <div key={item.label} style={{ background: '#FAF7F2', borderRadius: 16, padding: 28, textAlign: 'center' }}>
                  <div style={{ fontSize: 22, fontWeight: 800, color: '#0A2540', fontFamily: 'Plus Jakarta Sans', marginBottom: 6 }}>{item.value}</div>
                  <div style={{ color: '#4B5563', fontSize: 13 }}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section style={{ background: 'linear-gradient(135deg, #0A2540 0%, #0d3460 100%)', padding: '80px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span style={{ display: 'inline-block', background: 'rgba(0,176,237,0.2)', color: '#00B0ED', fontSize: 13, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '6px 14px', borderRadius: 100, marginBottom: 20 }}>Our Mission</span>
          <h2 style={{ color: '#fff', fontSize: 'clamp(24px, 3.5vw, 40px)', maxWidth: 760, margin: '0 auto 24px', lineHeight: 1.3 }}>
            "To empower scaling companies with intelligent solutions that deliver genuine efficiency, smarter decision-making, and sustainable growth — with care, clarity, and a commitment to long-term partnership."
          </h2>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: '#FAF7F2' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="section-label">Our Values</span>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', marginTop: 8 }}>The Principles That Guide Everything We Do</h2>
          </div>
          <div className="grid-4">
            {values.map(v => (
              <div key={v.title} className="card" style={{ textAlign: 'center' }}>
                <div style={{ width: 60, height: 60, borderRadius: '50%', background: '#FAF7F2', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                  {v.icon}
                </div>
                <h3 style={{ fontSize: 18, marginBottom: 12 }}>{v.title}</h3>
                <p style={{ color: '#4B5563', fontSize: 14, lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section" id="team" style={{ background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="section-label">Our Team</span>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', marginTop: 8 }}>The People Behind the Solutions</h2>
          </div>
          <div className="grid-3">
            {[
              {
                name: 'Suresh de Silva',
                role: 'Founder & CEO',
                bio: 'With over 25 years of experience in technology, telecommunications, infrastructure, and client-facing leadership roles, Suresh brings deep strategic insight and a practical understanding of complex business environments.',
                initial: 'S',
              },
              {
                name: 'Senior Consultant',
                role: 'Digital Transformation Lead',
                bio: 'Bringing deep expertise in business process improvement and change management, our senior consultants guide organisations through transformative digital journeys with practical, results-focused strategies.',
                initial: 'C',
              },
              {
                name: 'Technology Team',
                role: 'Engineering & AI',
                bio: 'Our engineering team combines expertise across automation platforms, AI development, and custom software to deliver solutions that are both technically excellent and genuinely useful.',
                initial: 'T',
              },
            ].map(member => (
              <div key={member.name} className="card" style={{ textAlign: 'center' }}>
                <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'linear-gradient(135deg, #00B0ED, #0A2540)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: 28, fontFamily: 'Plus Jakarta Sans', margin: '0 auto 20px' }}>
                  {member.initial}
                </div>
                <h3 style={{ fontSize: 20, marginBottom: 4 }}>{member.name}</h3>
                <div style={{ color: '#00B0ED', fontSize: 14, fontWeight: 600, marginBottom: 16 }}>{member.role}</div>
                <p style={{ color: '#4B5563', fontSize: 14, lineHeight: 1.7 }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Overdime */}
      <section className="section" style={{ background: '#FAF7F2' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: 64, alignItems: 'center' }}>
            <div>
              <span className="section-label">Why Choose Overdime</span>
              <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', marginBottom: 32 }}>A Partner Who Truly Understands Your Business</h2>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 16 }}>
                {whyUs.map(item => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#00B0ED', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                    <span style={{ color: '#1F2937', fontSize: 15, lineHeight: 1.6 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: 'linear-gradient(135deg, #0A2540, #0d3460)', borderRadius: 24, padding: 48, color: '#fff' }}>
              <div style={{ fontSize: 48, fontWeight: 800, color: '#F4C95D', fontFamily: 'Plus Jakarta Sans', marginBottom: 8 }}>25+</div>
              <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: 16, marginBottom: 32 }}>Years of combined leadership experience in global enterprises</div>
              <div style={{ fontSize: 48, fontWeight: 800, color: '#00B0ED', fontFamily: 'Plus Jakarta Sans', marginBottom: 8 }}>3+</div>
              <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: 16, marginBottom: 32 }}>Enterprise organisations served, including publicly listed companies</div>
              <div style={{ fontSize: 48, fontWeight: 800, color: '#F4C95D', fontFamily: 'Plus Jakarta Sans', marginBottom: 8 }}>100%</div>
              <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: 16 }}>Commitment to practical, measurable outcomes</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-banner">
        <div className="container">
          <h2>Ready to Work With a Partner Who Truly Understands Your Business?</h2>
          <p>Let's have an open conversation about your goals and how intelligent solutions can help you achieve them.</p>
          <div className="btn-group">
            <Link to="/contact" className="btn-white">Schedule a Free Consultation</Link>
            <a href="https://wa.me/94777751445" target="_blank" rel="noreferrer" className="btn-outline-white">Talk to Us</a>
          </div>
        </div>
      </div>
    </div>
  )
}
