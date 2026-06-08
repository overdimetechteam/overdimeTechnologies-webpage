import { Link } from 'react-router-dom'
import { Heart, Lightbulb, Shield, Award } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import { FadeUp, SlideLeft, SlideRight, AnimatedCounter } from '../components/Animate'
import AnimatedPageHero from '../components/AnimatedPageHero'
import { CrossGrid, DotGrid, Diagonal, Grain } from '../components/Textures'

const values = [
  { icon: <Heart size={26} color="#00B0ED" />, title: 'Client-First', desc: 'We listen deeply and design solutions tailored to your unique challenges and goals.', grad: 'linear-gradient(135deg, rgba(0,176,237,0.15) 0%, rgba(0,176,237,0.04) 100%)', border: 'rgba(0,176,237,0.15)' },
  { icon: <Lightbulb size={26} color="#F4C95D" />, title: 'Practical Innovation', desc: 'We focus on what delivers real results — not just the latest technology trends.', grad: 'linear-gradient(135deg, rgba(244,201,93,0.18) 0%, rgba(244,201,93,0.04) 100%)', border: 'rgba(244,201,93,0.22)' },
  { icon: <Shield size={26} color="#00B0ED" />, title: 'Integrity & Transparency', desc: 'Honest communication, clear timelines, and measurable outcomes you can trust.', grad: 'linear-gradient(135deg, rgba(0,176,237,0.15) 0%, rgba(0,176,237,0.04) 100%)', border: 'rgba(0,176,237,0.15)' },
  { icon: <Award size={26} color="#F4C95D" />, title: 'Excellence Through Experience', desc: 'Our team brings decades of industry and business knowledge to every engagement.', grad: 'linear-gradient(135deg, rgba(244,201,93,0.18) 0%, rgba(244,201,93,0.04) 100%)', border: 'rgba(244,201,93,0.22)' },
]

const whyUs = [
  'Industry and domain experts with extensive real-world business experience',
  'Proven track record serving respected organisations including Dialog, David Pieris, and Colombo Fort Group',
  'End-to-end partnership from consultation through implementation and ongoing support',
  'Local insight with global-standard delivery',
  'Focus on practical, sustainable outcomes',
]

const storyStats = [
  { label: 'Founded', value: 'Sri Lanka' },
  { label: 'Focus', value: 'Enterprise Automation' },
  { label: 'Experience', value: '25+ Years Combined' },
  { label: 'Reach', value: 'Local & Global' },
]

export default function About() {
  return (
    <PageTransition>
      <div>
        {/* Hero */}
        <AnimatedPageHero>
          <span className="section-label">About Us</span>
          <h1>About Overdime Technologies</h1>
          <p>A boutique automation agency dedicated to helping scaling companies achieve operational excellence through intelligent automation and practical digital solutions.</p>

        </AnimatedPageHero>

        {/* ── Our Story ── */}
        <section className="section" style={{ background: '#F0F2F5', position: 'relative', isolation: 'isolate' }}>
          <DotGrid dark={false} />
          <div className="container">
            <div className="grid-2" style={{ gap: 72, alignItems: 'center' }}>
              <SlideLeft>
                <div>
                  <span className="section-label">Our Story</span>
                  <h2 style={{ fontSize: 'clamp(24px, 3vw, 40px)', marginBottom: 24 }}>
                    Built on a Simple Belief: Technology Should Make Business Simpler
                  </h2>
                  <p style={{ color: '#4B5563', fontSize: 16, lineHeight: 1.85, marginBottom: 16 }}>
                    Overdime Technologies was founded with a simple belief: technology should make business simpler, not more complicated.
                  </p>
                  <p style={{ color: '#4B5563', fontSize: 16, lineHeight: 1.85, marginBottom: 16 }}>
                    Based in Sri Lanka, we have grown into a trusted partner for forward-thinking medium and large enterprises. Our team consists of industry and domain experts with deep, hands-on experience across multiple industries.
                  </p>
                  <p style={{ color: '#4B5563', fontSize: 16, lineHeight: 1.85 }}>
                    We combine this practical knowledge with modern automation, AI, and intelligent systems to help organisations reduce manual work, streamline processes, and achieve measurable growth — both locally and globally.
                  </p>
                </div>
              </SlideLeft>

              <SlideRight>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  {storyStats.map((item, i) => (
                    <div key={item.label} style={{
                      background: '#fff',
                      borderRadius: 16,
                      padding: '28px 22px',
                      textAlign: 'center',
                      border: '1px solid #E5E7EB',
                      borderTop: `3px solid #00B0ED`,
                      transition: 'transform 0.22s, box-shadow 0.22s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'translateY(-3px)'
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(10,37,64,0.10)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                    >
                      <div style={{ fontSize: 18, fontWeight: 800, color: '#062230', fontFamily: 'Plus Jakarta Sans', marginBottom: 6, lineHeight: 1.2 }}>{item.value}</div>
                      <div style={{ color: '#4B5563', fontSize: 12, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{item.label}</div>
                    </div>
                  ))}
                </div>
              </SlideRight>
            </div>
          </div>
        </section>

        {/* ── Mission ── */}
        <section style={{ background: 'linear-gradient(135deg, #030f1a 0%, #062230 55%, #093040 100%)', padding: '96px 0', position: 'relative', overflow: 'hidden', isolation: 'isolate' }}>
          <CrossGrid dark size={56} />
          <Grain dark opacity={0.9} />
          <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <FadeUp>
              <span className="section-label section-label-dark">Our Mission</span>
              <div style={{ position: 'relative', maxWidth: 820, margin: '0 auto' }}>
                <span style={{ position: 'absolute', top: -20, left: -8, fontSize: 120, lineHeight: 1, color: 'rgba(0,176,237,0.10)', fontFamily: 'Georgia, serif', pointerEvents: 'none', userSelect: 'none' }}>"</span>
                <h2 style={{
                  color: '#fff',
                  fontSize: 'clamp(20px, 2.8vw, 34px)',
                  lineHeight: 1.5,
                  fontWeight: 600,
                  fontStyle: 'italic',
                  padding: '0 32px',
                }}>
                  To empower scaling companies with intelligent solutions that deliver genuine efficiency, smarter decision-making, and sustainable growth — with care, clarity, and a commitment to long-term partnership.
                </h2>
                <span style={{ position: 'absolute', bottom: -40, right: -8, fontSize: 120, lineHeight: 1, color: 'rgba(244,201,93,0.10)', fontFamily: 'Georgia, serif', pointerEvents: 'none', userSelect: 'none' }}>"</span>
              </div>

            </FadeUp>
          </div>
        </section>

        {/* ── Values ── */}
        <section className="section" style={{ background: '#F0F2F5', position: 'relative', isolation: 'isolate' }}>
          <Diagonal color="rgba(0,176,237,0.035)" />
          <DotGrid dark={false} size={30} />
          <div className="container">
            <FadeUp>
              <div style={{ textAlign: 'center', marginBottom: 60 }}>
                <h2 style={{ fontSize: 'clamp(24px, 3vw, 40px)' }}>The Principles That Guide Everything We Do</h2>
              </div>
            </FadeUp>
            <div className="grid-4" style={{ alignItems: 'stretch' }}>
              {values.map((v, i) => (
                <FadeUp key={v.title} delay={i * 0.1} style={{ height: '100%' }}>
                  <div className="card" style={{ textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    {/* Gradient icon circle */}
                    <div style={{
                      width: 64, height: 64, borderRadius: '50%',
                      background: v.grad,
                      border: `1px solid ${v.border}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      margin: '0 auto 22px',
                    }}>
                      {v.icon}
                    </div>
                    <h3 style={{ fontSize: 17, marginBottom: 10 }}>{v.title}</h3>
                    <p style={{ color: '#4B5563', fontSize: 14, lineHeight: 1.75 }}>{v.desc}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ── Team ── */}
        <section className="section" id="team" style={{ background: '#fff' }}>
          <div className="container">
            <FadeUp>
              <div style={{ textAlign: 'center', marginBottom: 60 }}>
                <h2 style={{ fontSize: 'clamp(24px, 3vw, 40px)' }}>The People Behind the Solutions</h2>
              </div>
            </FadeUp>
            <div className="grid-3" style={{ alignItems: 'stretch' }}>
              {[
                { name: 'Suresh de Silva', role: 'Founder & CEO', bio: 'With over 25 years of experience in technology, telecommunications, infrastructure, and client-facing leadership roles, Suresh brings deep strategic insight and a practical understanding of complex business environments.', initial: 'S', accent: '#00B0ED' },
                { name: 'Senior Consultant', role: 'Digital Transformation Lead', bio: 'Bringing deep expertise in business process improvement and change management, our senior consultants guide organisations through transformative digital journeys with practical, results-focused strategies.', initial: 'C', accent: '#00B0ED' },
                { name: 'Technology Team', role: 'Engineering & AI', bio: 'Our engineering team combines expertise across automation platforms, AI development, and custom software to deliver solutions that are both technically excellent and genuinely useful.', initial: 'T', accent: '#00B0ED' },
              ].map((member, i) => (
                <FadeUp key={member.name} delay={i * 0.12} style={{ height: '100%' }}>
                  <div style={{
                    background: '#fff',
                    borderRadius: 20,
                    padding: '36px 28px 0',
                    boxShadow: '0 2px 16px rgba(10,37,64,0.07)',
                    border: '1px solid #E5E7EB',
                    textAlign: 'center',
                    overflow: 'hidden',
                    height: '100%',
                    display: 'flex', flexDirection: 'column',
                    transition: 'transform 0.22s, box-shadow 0.22s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-4px)'
                    e.currentTarget.style.boxShadow = '0 12px 40px rgba(10,37,64,0.12)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 2px 16px rgba(10,37,64,0.07)'
                  }}
                  >
                    <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'linear-gradient(135deg, #00B0ED 0%, #062230 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: 28, fontFamily: 'Plus Jakarta Sans', margin: '0 auto 20px' }}>
                      {member.initial}
                    </div>
                    <h3 style={{ fontSize: 19, marginBottom: 4 }}>{member.name}</h3>
                    <div style={{ color: '#00B0ED', fontSize: 13, fontWeight: 600, marginBottom: 16 }}>{member.role}</div>
                    <p style={{ color: '#4B5563', fontSize: 14, lineHeight: 1.75, marginBottom: 0, flexGrow: 1 }}>{member.bio}</p>
                    {/* Bottom accent strip */}
                    <div style={{ height: 4, background: `linear-gradient(90deg, ${member.accent}, transparent)`, marginTop: 28, marginLeft: -28, marginRight: -28, flexShrink: 0 }} />
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Choose Overdime ── */}
        <section className="section" style={{ background: '#F0F2F5', position: 'relative', isolation: 'isolate' }}>
          <CrossGrid dark={false} size={44} />
          <DotGrid dark={false} />
          <div className="container">
            <div className="grid-2" style={{ gap: 72, alignItems: 'center' }}>
              <SlideLeft>
                <div>
                  <span className="section-label">Why Choose Overdime</span>
                  <h2 style={{ fontSize: 'clamp(24px, 3vw, 40px)', marginBottom: 32 }}>A Partner Who Truly Understands Your Business</h2>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 16 }}>
                    {whyUs.map(item => (
                      <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                        <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'linear-gradient(135deg, #00B0ED, #0078aa)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </div>
                        <span style={{ color: '#1F2937', fontSize: 15, lineHeight: 1.65 }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </SlideLeft>

              <SlideRight>
                <div style={{ background: '#fff', borderRadius: 24, padding: '48px 40px', position: 'relative', overflow: 'hidden', border: '1px solid #E5E7EB', boxShadow: '0 4px 24px rgba(10,37,64,0.08)' }}>
                  <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(0,176,237,0.06) 1px, transparent 1px)', backgroundSize: '22px 22px', pointerEvents: 'none', borderRadius: 24 }} />
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    {[
                      { to: 25,  suffix: '+',  label: 'Years of combined leadership experience in global enterprises', color: '#00B0ED' },
                      { to: 70,  suffix: '+',  label: 'Intelligent automation & digital solutions delivered', sub: 'Trusted by leading Sri Lankan enterprises and global organisations.', color: '#062230' },
                      { to: 100, suffix: '%',  label: 'Commitment to practical, measurable outcomes', color: '#00B0ED' },
                    ].map((item, i) => (
                      <div key={i} style={{ marginBottom: i < 2 ? 32 : 0, paddingBottom: i < 2 ? 32 : 0, borderBottom: i < 2 ? '1px solid #E5E7EB' : 'none' }}>
                        <div style={{ fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: 900, color: item.color, fontFamily: 'Plus Jakarta Sans', lineHeight: 1, marginBottom: 8 }}>
                          <AnimatedCounter to={item.to} suffix={item.suffix} duration={1.6} />
                        </div>
                        <div style={{ color: '#4B5563', fontSize: 15, lineHeight: 1.55 }}>{item.label}</div>
                        {item.sub && <div style={{ color: '#9CA3AF', fontSize: 13, lineHeight: 1.5, marginTop: 4 }}>{item.sub}</div>}
                      </div>
                    ))}
                  </div>
                </div>
              </SlideRight>
            </div>
          </div>
        </section>

        {/* CTA */}
        <FadeUp>
          <div className="cta-banner">
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, transparent 0%, #00B0ED 30%, #F4C95D 70%, transparent 100%)', zIndex: 2 }} />
            <div className="container">
              <h2>Ready to work with a partner who truly understands your business?</h2>
              <p>Let's have an open conversation about your goals and how intelligent solutions can help you achieve them.</p>
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
