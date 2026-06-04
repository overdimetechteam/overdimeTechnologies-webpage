import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import { Mail, Phone, MapPin, Clock, MessageCircle, Calendar, ArrowRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import { FadeUp, SlideLeft, SlideRight } from '../components/Animate'
import AnimatedPageHero from '../components/AnimatedPageHero'

// ─── EmailJS credentials ───────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'
// ──────────────────────────────────────────────────────────────────

const services = [
  'Intelligent Process Automation',
  'AI Integrated Solutions',
  'Custom Web Applications',
  'ERP Solutions',
  'Digital Transformation Consultancy',
  'Resource Augmentation',
  'General Inquiry',
]

const inputBase = {
  width: '100%',
  padding: '12px 16px',
  border: '1.5px solid #E5E7EB',
  borderRadius: 10,
  fontSize: 15,
  color: '#1F2937',
  background: '#fff',
  outline: 'none',
  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  fontFamily: 'Inter',
}

export default function Contact() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', service: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [emailError, setEmailError] = useState('')

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Full name is required'
    if (!form.company.trim()) e.company = 'Company name is required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email is required'
    return e
  }

  const sendEmail = async (subject) => {
    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      subject,
      from_name:  form.name,
      company:    form.company,
      from_email: form.email,
      phone:      form.phone  || 'Not provided',
      service:    form.service || 'Not specified',
      message:    form.message || 'No message provided',
      reply_to:   form.email,
    }, EMAILJS_PUBLIC_KEY)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSubmitting(true); setEmailError('')
    try {
      await sendEmail('New Contact Form Submission — Overdime Technologies')
      navigate('/thank-you')
    } catch {
      setEmailError('Failed to send. Please email us directly at info@overdimetechnologies.com')
    } finally { setSubmitting(false) }
  }

  const handleQuote = async () => {
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSubmitting(true); setEmailError('')
    try {
      await sendEmail('Quote Request — Overdime Technologies')
      navigate('/thank-you')
    } catch {
      setEmailError('Failed to send. Please email us directly at info@overdimetechnologies.com')
    } finally { setSubmitting(false) }
  }

  const field = (key, label, type = 'text', placeholder = '') => (
    <div style={{ marginBottom: 20 }}>
      <label style={{ display: 'block', fontWeight: 600, color: '#062230', fontSize: 13, marginBottom: 7, letterSpacing: '0.03em' }}>{label}</label>
      <input
        type={type}
        value={form[key]}
        onChange={e => { setForm(f => ({ ...f, [key]: e.target.value })); setErrors(er => ({ ...er, [key]: '' })) }}
        placeholder={placeholder}
        style={{ ...inputBase, borderColor: errors[key] ? '#ef4444' : '#E5E7EB' }}
        onFocus={e => {
          e.target.style.borderColor = errors[key] ? '#ef4444' : '#00B0ED'
          e.target.style.boxShadow = errors[key] ? '0 0 0 3px rgba(239,68,68,0.12)' : '0 0 0 3px rgba(0,176,237,0.14)'
        }}
        onBlur={e => {
          e.target.style.borderColor = errors[key] ? '#ef4444' : '#E5E7EB'
          e.target.style.boxShadow = 'none'
        }}
      />
      {errors[key] && <div style={{ color: '#ef4444', fontSize: 12, marginTop: 5, fontWeight: 500 }}>{errors[key]}</div>}
    </div>
  )

  return (
    <PageTransition>
      <div>
        {/* Hero */}
        <AnimatedPageHero>
          <span className="section-label">Contact</span>
          <h1>Let's Start a Conversation</h1>
          <p>Whether you're exploring automation opportunities, need a custom solution, or simply want to understand how we can help your organisation — we'd love to hear from you.</p>
          <a href="#form" className="btn-primary" style={{ fontSize: 16 }}>
            Schedule a Free Consultation <ArrowRight size={16} />
          </a>
        </AnimatedPageHero>

        <section className="section" style={{ background: '#F0F2F5' }} id="form">
          <div className="container">
            <div className="grid-2" style={{ gap: 64, alignItems: 'flex-start' }}>

              {/* Form */}
              <SlideLeft>
                <div className="form-card" style={{ position: 'relative', overflow: 'hidden' }}>
                  {/* Blue left accent stripe */}
                  <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: 4, background: 'linear-gradient(180deg, #00B0ED 0%, #F4C95D 100%)' }} />
                  <div style={{ paddingLeft: 8 }}>
                    <h2 style={{ fontSize: 26, marginBottom: 8 }}>Get In Touch</h2>
                    <p style={{ color: '#4B5563', fontSize: 15, marginBottom: 32, lineHeight: 1.65 }}>
                      Fill out the form and our team will get back to you within 24 hours.
                    </p>

                    <form onSubmit={handleSubmit} noValidate>
                      <div className="grid-2" style={{ gap: 16 }}>
                        <div>{field('name', 'Full Name *', 'text', 'John Smith')}</div>
                        <div>{field('company', 'Company Name *', 'text', 'Your Company')}</div>
                      </div>
                      <div className="grid-2" style={{ gap: 16 }}>
                        <div>{field('email', 'Email Address *', 'email', 'john@company.com')}</div>
                        <div>{field('phone', 'Phone Number', 'tel', '+94 xxx xxx xxx')}</div>
                      </div>

                      {/* Service select */}
                      <div style={{ marginBottom: 20 }}>
                        <label style={{ display: 'block', fontWeight: 600, color: '#062230', fontSize: 13, marginBottom: 7 }}>How Can We Help You?</label>
                        <select
                          value={form.service}
                          onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
                          style={{ ...inputBase }}
                          onFocus={e => {
                            e.target.style.borderColor = '#00B0ED'
                            e.target.style.boxShadow = '0 0 0 3px rgba(0,176,237,0.14)'
                          }}
                          onBlur={e => {
                            e.target.style.borderColor = '#E5E7EB'
                            e.target.style.boxShadow = 'none'
                          }}
                        >
                          <option value="">Select a service…</option>
                          {services.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>

                      {/* Textarea */}
                      <div style={{ marginBottom: 28 }}>
                        <label style={{ display: 'block', fontWeight: 600, color: '#062230', fontSize: 13, marginBottom: 7 }}>Message / Project Details</label>
                        <textarea
                          value={form.message}
                          onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                          rows={5}
                          placeholder="Tell us about your project, challenges, or questions…"
                          style={{ ...inputBase, resize: 'vertical', lineHeight: 1.65 }}
                          onFocus={e => {
                            e.target.style.borderColor = '#00B0ED'
                            e.target.style.boxShadow = '0 0 0 3px rgba(0,176,237,0.14)'
                          }}
                          onBlur={e => {
                            e.target.style.borderColor = '#E5E7EB'
                            e.target.style.boxShadow = 'none'
                          }}
                        />
                      </div>

                      {emailError && (
                        <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: 10, padding: '12px 16px', marginBottom: 18, color: '#DC2626', fontSize: 14 }}>
                          {emailError}
                        </div>
                      )}

                      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                        <button type="submit" className="btn-gold" style={{ flex: 1, justifyContent: 'center', fontSize: 15, opacity: submitting ? 0.7 : 1 }} disabled={submitting}>
                          {submitting ? 'Sending…' : 'Send Message'}
                        </button>
                        <button type="button" onClick={handleQuote} className="btn-secondary" style={{ flex: 1, justifyContent: 'center', fontSize: 15, opacity: submitting ? 0.7 : 1 }} disabled={submitting}>
                          {submitting ? 'Sending…' : 'Request a Quote'}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </SlideLeft>

              {/* Contact Info */}
              <SlideRight>
                <div>
                  <h2 style={{ fontSize: 26, marginBottom: 8 }}>Contact Information</h2>
                  <p style={{ color: '#4B5563', fontSize: 15, marginBottom: 36, lineHeight: 1.65 }}>Reach out directly or find us through any of the channels below.</p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 40 }}>
                    <ContactItem icon={<Mail size={18} color="#00B0ED" />} label="Email" value="info@overdimetechnologies.com" href="mailto:info@overdimetechnologies.com" />
                    <ContactItem icon={<Phone size={18} color="#00B0ED" />} label="Phone" value="+94 777 751 445" href="tel:+94777751445" />
                    <ContactItem icon={<MapPin size={18} color="#00B0ED" />} label="Address" value="122 Stratford Avenue, Kirulapone, Colombo 06, Sri Lanka" />
                    <ContactItem icon={<Clock size={18} color="#00B0ED" />} label="Business Hours" value="Monday to Friday, 9:00 AM – 6:00 PM (Sri Lanka Time, UTC+5:30)" note="Flexible for international clients across time zones." />
                  </div>

                  <div style={{ borderTop: '1px solid #E5E7EB', paddingTop: 32 }}>
                    <h4 style={{ fontSize: 15, marginBottom: 16, color: '#062230' }}>Additional Ways to Connect</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                      <a href="https://wa.me/94777751445" target="_blank" rel="noreferrer" style={{
                        display: 'flex', alignItems: 'center', gap: 12,
                        padding: '14px 20px', background: '#25D366', color: '#fff',
                        borderRadius: 12, fontWeight: 600, fontSize: 14, textDecoration: 'none',
                        transition: 'opacity 0.2s, transform 0.2s',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.opacity = '0.9'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                      onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}
                      >
                        <MessageCircle size={18} />
                        WhatsApp — Chat with Us Now
                      </a>
                      <a href="/contact" style={{
                        display: 'flex', alignItems: 'center', gap: 12,
                        padding: '14px 20px', background: '#062230', color: '#fff',
                        borderRadius: 12, fontWeight: 600, fontSize: 14, textDecoration: 'none',
                        transition: 'opacity 0.2s, transform 0.2s',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.opacity = '0.9'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                      onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}
                      >
                        <Calendar size={18} />
                        Schedule a Call
                      </a>
                    </div>
                  </div>

                  {/* Map placeholder */}
                  <div style={{
                    marginTop: 32, borderRadius: 16, overflow: 'hidden',
                    height: 'clamp(160px, 25vw, 220px)',
                    background: 'linear-gradient(135deg, #F0F2F5, #E5E7EB)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    border: '1px solid #E5E7EB',
                  }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(0,176,237,0.1)', border: '1px solid rgba(0,176,237,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px' }}>
                        <MapPin size={22} color="#00B0ED" />
                      </div>
                      <div style={{ color: '#4B5563', fontSize: 13, fontWeight: 600, lineHeight: 1.6 }}>122 Stratford Avenue, Kirulapone</div>
                      <div style={{ color: '#8A8A8A', fontSize: 12 }}>Colombo 06, Sri Lanka</div>
                    </div>
                  </div>
                </div>
              </SlideRight>
            </div>
          </div>
        </section>

        <FadeUp>
          <div className="cta-banner">
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, transparent 0%, #00B0ED 30%, #F4C95D 70%, transparent 100%)', zIndex: 2 }} />
            <div className="container">
              <h2>Ready to Transform Your Operations?</h2>
              <p>Our team is here to help you identify the right intelligent solutions for your business.</p>
              <div className="btn-group">
                <a href="#form" className="btn-gold">Schedule a Free Consultation</a>
                <a href="mailto:info@overdimetechnologies.com?subject=Quote Request" className="btn-outline-white">Request a Quote</a>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </PageTransition>
  )
}

function ContactItem({ icon, label, value, href, note }) {
  return (
    <div style={{
      display: 'flex', gap: 16, alignItems: 'flex-start',
      padding: '18px 20px',
      background: '#fff', borderRadius: 14,
      border: '1px solid #E5E7EB',
      boxShadow: '0 1px 8px rgba(10,37,64,0.05)',
      transition: 'box-shadow 0.22s, transform 0.22s',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.boxShadow = '0 6px 22px rgba(10,37,64,0.09)'
      e.currentTarget.style.transform = 'translateX(3px)'
    }}
    onMouseLeave={e => {
      e.currentTarget.style.boxShadow = '0 1px 8px rgba(10,37,64,0.05)'
      e.currentTarget.style.transform = 'translateX(0)'
    }}
    >
      <div style={{
        width: 40, height: 40, borderRadius: 10,
        background: 'rgba(0,176,237,0.08)',
        border: '1px solid rgba(0,176,237,0.15)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      }}>
        {icon}
      </div>
      <div>
        <div style={{ fontWeight: 700, color: '#062230', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.09em', marginBottom: 4 }}>{label}</div>
        {href ? (
          <a href={href} style={{ color: '#1F2937', fontSize: 14, textDecoration: 'none', fontWeight: 500 }}>{value}</a>
        ) : (
          <div style={{ color: '#1F2937', fontSize: 14, lineHeight: 1.55 }}>{value}</div>
        )}
        {note && <div style={{ color: '#4B5563', fontSize: 12, marginTop: 4, lineHeight: 1.5 }}>{note}</div>}
      </div>
    </div>
  )
}
