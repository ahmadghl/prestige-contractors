import { useState, useRef, useEffect } from 'react'
import { Phone, Mail, MapPin, Clock, Video, Send, CheckCircle } from 'lucide-react'

function useInView(threshold = 0.1) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, visible]
}

const services = [
  'Online Consultation', 'Structural Engineering', 'Project Management',
  'Architectural Design', 'Cost Estimation', 'Quality Assurance',
  'Building Permits', 'Renovation', 'Other',
]

export default function Contact() {
  const [heroRef, heroVis] = useInView(0.05)
  const [formRef, formVis] = useInView()
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '', type: 'online' })
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }
    setErrors({})
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1500)
  }

  const inputStyle = (err) => ({
    width: '100%', padding: '14px 18px', background: 'rgba(255,255,255,0.03)',
    border: `1px solid ${err ? '#c0392b' : 'var(--border)'}`, borderRadius: 2,
    color: 'var(--text-primary)', fontSize: 14, fontFamily: 'var(--font-sans)',
    outline: 'none', transition: 'var(--transition)',
  })

  return (
    <div>
      {/* HERO */}
      <section ref={heroRef} style={{ padding: '180px 0 100px', background: 'linear-gradient(180deg, var(--darker) 0%, var(--dark) 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <svg width="100%" height="100%" style={{ opacity: 0.03 }}>
            <defs><pattern id="grid5" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="#C8A96E" strokeWidth="0.5"/></pattern></defs>
            <rect width="100%" height="100%" fill="url(#grid5)" />
          </svg>
        </div>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 40px', textAlign: 'center', opacity: heroVis ? 1 : 0, transform: heroVis ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.7s ease' }}>
          <p style={{ fontSize: 11, letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: 16 }}>Let's Talk</p>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(44px, 6vw, 80px)', fontWeight: 600, lineHeight: 1.05, marginBottom: 24 }}>Get In Touch</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: 17, maxWidth: 580, margin: '0 auto', lineHeight: 1.8 }}>
            Ready to start your project? Book an online consultation or send us a message. Our team typically responds within 24 hours.
          </p>
        </div>
      </section>

      {/* MAIN SECTION */}
      <section style={{ padding: '80px 0 120px', background: 'var(--dark)' }} ref={formRef}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 40px', display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 60, alignItems: 'start' }}>

          {/* FORM */}
          <div style={{ opacity: formVis ? 1 : 0, transform: formVis ? 'translateY(0)' : 'translateY(24px)', transition: 'all 0.6s ease' }}>
            <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', padding: '56px' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '60px 0' }}>
                  <CheckCircle size={56} color="var(--gold)" style={{ margin: '0 auto 24px' }} />
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 32, fontWeight: 600, marginBottom: 16 }}>Message Received!</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.8 }}>
                    Thank you for reaching out to Prestige Contractors. Gullsher or a member of our team will be in touch within 24 hours to discuss your project.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontWeight: 600, marginBottom: 8 }}>Send a Message</h2>
                  <p style={{ color: 'var(--text-secondary)', fontSize: 14, marginBottom: 36 }}>Fill in the form and we'll get back to you shortly.</p>

                  {/* Consultation type */}
                  <div style={{ marginBottom: 28 }}>
                    <label style={{ display: 'block', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 12 }}>Preferred Consultation Type</label>
                    <div style={{ display: 'flex', gap: 12 }}>
                      {[{ val: 'online', label: '🎥 Online (Video Call)', }, { val: 'onsite', label: '🏗 On-Site Visit' }].map(({ val, label }) => (
                        <button key={val} type="button" onClick={() => setForm(f => ({ ...f, type: val }))} style={{
                          flex: 1, padding: '12px 20px', borderRadius: 2, fontSize: 13,
                          border: `1px solid ${form.type === val ? 'var(--gold)' : 'var(--border)'}`,
                          background: form.type === val ? 'rgba(200,169,110,0.1)' : 'transparent',
                          color: form.type === val ? 'var(--gold)' : 'var(--text-secondary)',
                          transition: 'var(--transition)', cursor: 'pointer',
                        }}>{label}</button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Email row */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                    <div>
                      <label style={{ display: 'block', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 8 }}>Full Name *</label>
                      <input style={inputStyle(errors.name)} placeholder="Your full name" value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                        onBlur={e => e.target.style.borderColor = errors.name ? '#c0392b' : 'var(--border)'}
                      />
                      {errors.name && <span style={{ fontSize: 12, color: '#c0392b', marginTop: 4, display: 'block' }}>{errors.name}</span>}
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 8 }}>Email Address *</label>
                      <input type="email" style={inputStyle(errors.email)} placeholder="you@example.com" value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                        onBlur={e => e.target.style.borderColor = errors.email ? '#c0392b' : 'var(--border)'}
                      />
                      {errors.email && <span style={{ fontSize: 12, color: '#c0392b', marginTop: 4, display: 'block' }}>{errors.email}</span>}
                    </div>
                  </div>

                  {/* Phone & Service row */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                    <div>
                      <label style={{ display: 'block', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 8 }}>Phone Number</label>
                      <input style={inputStyle(false)} placeholder="+92 300 000 0000" value={form.phone}
                        onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                        onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                        onBlur={e => e.target.style.borderColor = 'var(--border)'}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 8 }}>Service Needed</label>
                      <select style={{ ...inputStyle(false), appearance: 'none' }} value={form.service}
                        onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
                        onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                        onBlur={e => e.target.style.borderColor = 'var(--border)'}
                      >
                        <option value="">Select a service</option>
                        {services.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div style={{ marginBottom: 28 }}>
                    <label style={{ display: 'block', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 8 }}>Project Details *</label>
                    <textarea rows={5} style={{ ...inputStyle(errors.message), resize: 'vertical' }}
                      placeholder="Tell us about your project — location, scope, timeline, budget..." value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                      onBlur={e => e.target.style.borderColor = errors.message ? '#c0392b' : 'var(--border)'}
                    />
                    {errors.message && <span style={{ fontSize: 12, color: '#c0392b', marginTop: 4, display: 'block' }}>{errors.message}</span>}
                  </div>

                  <button type="submit" disabled={loading} style={{
                    width: '100%', padding: '16px', background: loading ? 'var(--gold-dark)' : 'var(--gold)',
                    color: 'var(--darkest)', fontSize: 13, letterSpacing: '0.15em',
                    textTransform: 'uppercase', fontWeight: 700, borderRadius: 2,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                    transition: 'var(--transition)', cursor: loading ? 'wait' : 'pointer',
                  }}
                  onMouseEnter={e => { if (!loading) e.currentTarget.style.background = 'var(--gold-light)' }}
                  onMouseLeave={e => { if (!loading) e.currentTarget.style.background = 'var(--gold)' }}
                  >
                    {loading ? 'Sending...' : <><Send size={15} /> Send Message</>}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* SIDEBAR INFO */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2, opacity: formVis ? 1 : 0, transform: formVis ? 'translateY(0)' : 'translateY(24px)', transition: 'all 0.6s ease 0.15s' }}>
            {[
              { icon: Phone, label: 'Phone', value: '+92 300 000 0000', sub: 'Mon–Sat, 9am–6pm PKT' },
              { icon: Mail, label: 'Email', value: 'info@prestigecontractorspvt.com', sub: 'We reply within 24 hrs' },
              { icon: MapPin, label: 'Office', value: 'Islamabad, Pakistan', sub: 'G-10, Islamabad' },
              { icon: Clock, label: 'Hours', value: 'Mon–Sat: 9am–6pm', sub: 'PKT (UTC+5)' },
            ].map(({ icon: Icon, label, value, sub }) => (
              <div key={label} style={{ background: 'var(--surface)', border: '1px solid var(--border)', padding: '28px 28px', display: 'flex', gap: 18, alignItems: 'flex-start', transition: 'var(--transition)' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(200,169,110,0.4)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                <div style={{ width: 44, height: 44, border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 2, flexShrink: 0 }}>
                  <Icon size={18} color="var(--gold)" />
                </div>
                <div>
                  <div style={{ fontSize: 11, letterSpacing: '0.15em', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 4 }}>{label}</div>
                  <div style={{ fontSize: 15, color: 'var(--text-primary)', fontWeight: 500 }}>{value}</div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>{sub}</div>
                </div>
              </div>
            ))}

            {/* Online consultation highlight */}
            <div style={{ background: 'rgba(200,169,110,0.06)', border: '1px solid rgba(200,169,110,0.3)', padding: '28px', marginTop: 4 }}>
              <Video size={24} color="var(--gold)" style={{ marginBottom: 14 }} />
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: 18, fontWeight: 600, marginBottom: 10 }}>Online Consultation</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: 13, lineHeight: 1.75 }}>
                Available globally via Zoom, Google Meet, or Microsoft Teams. Book a session and get expert advice from anywhere in the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          section > div { grid-template-columns: 1fr !important; }
          form > div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
