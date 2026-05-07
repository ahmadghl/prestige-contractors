import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Building2, HardHat, Ruler, Video, BarChart3, ShieldCheck, Star } from 'lucide-react'

function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, visible]
}

function AnimCounter({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  const [ref, visible] = useInView()
  useEffect(() => {
    if (!visible) return
    let start = 0
    const step = target / 60
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [visible, target])
  return <span ref={ref}>{count}{suffix}</span>
}

const services = [
  { icon: Video, title: 'Online Consultation', desc: 'Expert advice from anywhere in the world via video call, tailored to your project needs.' },
  { icon: Building2, title: 'Structural Engineering', desc: 'Comprehensive structural analysis, design, and review for residential and commercial builds.' },
  { icon: HardHat, title: 'Project Management', desc: 'End-to-end project oversight — timeline, budget, quality, and contractor coordination.' },
  { icon: Ruler, title: 'Design & Planning', desc: 'Architectural layout, space optimization, and detailed construction drawings.' },
  { icon: BarChart3, title: 'Cost Estimation', desc: 'Accurate quantity surveys and BOQ preparation to keep your project on budget.' },
  { icon: ShieldCheck, title: 'Quality Assurance', desc: 'On-site inspections and quality control for materials and construction standards.' },
]

const whyUs = [
  '15+ years of proven construction expertise',
  'Online consultations — available worldwide',
  'Transparent pricing with no hidden costs',
  'Certified engineers and project managers',
  'On-time delivery, every time',
  'Full lifecycle support — design to handover',
]

const testimonials = [
  { name: 'Tariq Mahmood', role: 'Villa Owner, Islamabad', text: 'Prestige Contractors delivered our villa project on time and within budget. Gullsher and his team were professional from day one.' },
  { name: 'Fatima Akhtar', role: 'CEO, Akhtar Developments', text: 'The online consultation service is a game changer. We got expert structural advice without leaving Dubai. Highly recommended.' },
  { name: 'Usman Raza', role: 'Property Developer, Lahore', text: 'Their cost estimation was spot-on. No surprises, no hidden charges. The most transparent consultancy we have worked with.' },
]

export default function Home() {
  const [servRef, servVis] = useInView()
  const [whyRef, whyVis] = useInView()
  const [testRef, testVis] = useInView()

  return (
    <div>
      {/* HERO */}
      <section style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        position: 'relative', overflow: 'hidden',
        background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)',
      }}>
        {/* Background pattern */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.05 }}>
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.8"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
          <div style={{ position: 'absolute', right: '-10%', top: '-10%', width: 600, height: 600, borderRadius: '50%', background: 'rgba(200,150,60,0.1)', filter: 'blur(80px)' }} />
          <div style={{ position: 'absolute', left: '-5%', bottom: '-10%', width: 400, height: 400, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', filter: 'blur(60px)' }} />
        </div>

        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '140px 40px 100px', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center', position: 'relative' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', background: 'rgba(200,150,60,0.15)', border: '1px solid rgba(200,150,60,0.3)', borderRadius: 20, marginBottom: 32 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', display: 'block' }} />
              <span style={{ fontSize: 12, color: 'var(--accent-light)', fontWeight: 500, letterSpacing: '0.05em' }}>Trusted Construction Consultancy</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(48px, 5.5vw, 80px)', fontWeight: 700, lineHeight: 1.08, marginBottom: 28, color: 'var(--white)', letterSpacing: '-0.01em' }}>
              Building the<br />
              <span style={{ color: 'var(--accent-light)', fontStyle: 'italic' }}>Future</span><br />
              From Ground Up
            </h1>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, marginBottom: 44, maxWidth: 480 }}>
              Expert construction consultancy for residential and commercial projects. Online consultations available worldwide — led by <strong style={{ color: 'var(--white)', fontWeight: 600 }}>Gullsher Fareed</strong>.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link to="/contact" style={{
                padding: '15px 36px', background: 'var(--accent)',
                color: 'var(--white)', fontSize: 14, fontWeight: 600,
                borderRadius: 'var(--radius)', display: 'inline-flex', alignItems: 'center', gap: 8,
                transition: 'var(--transition)', boxShadow: '0 4px 16px rgba(200,150,60,0.4)',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent-light)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >Start Your Project <ArrowRight size={16} /></Link>
              <Link to="/services" style={{
                padding: '15px 36px', border: '1px solid rgba(255,255,255,0.3)',
                color: 'var(--white)', fontSize: 14, fontWeight: 500,
                borderRadius: 'var(--radius)', display: 'inline-flex', alignItems: 'center', gap: 8,
                transition: 'var(--transition)',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.7)'; e.currentTarget.style.background = 'rgba(255,255,255,0.1)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.background = 'transparent' }}
              >Our Services</Link>
            </div>
          </div>

          {/* Stats grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[
              { num: 200, suffix: '+', label: 'Projects Delivered', icon: '🏗' },
              { num: 15, suffix: '+', label: 'Years Experience', icon: '📅' },
              { num: 98, suffix: '%', label: 'Client Satisfaction', icon: '⭐' },
              { num: 50, suffix: '+', label: 'Expert Team Members', icon: '👷' },
            ].map(({ num, suffix, label, icon }) => (
              <div key={label} style={{
                background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.12)',
                padding: '32px 28px', borderRadius: 12,
                transition: 'var(--transition)',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.13)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <div style={{ fontSize: 28, marginBottom: 8 }}>{icon}</div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 48, fontWeight: 700, color: 'var(--accent-light)', lineHeight: 1 }}>
                  <AnimCounter target={num} suffix={suffix} />
                </div>
                <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, marginTop: 8 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: '120px 0', background: 'var(--off-white)' }} ref={servRef}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, flexWrap: 'wrap', gap: 24 }}>
            <div>
              <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: 12 }}>What We Do</p>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(36px, 4vw, 52px)', fontWeight: 700, color: 'var(--primary)', lineHeight: 1.1 }}>Our Core Services</h2>
            </div>
            <Link to="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--accent)', fontSize: 14, fontWeight: 600, transition: 'var(--transition)' }}
            onMouseEnter={e => e.currentTarget.style.gap = '12px'}
            onMouseLeave={e => e.currentTarget.style.gap = '8px'}
            >View All Services <ArrowRight size={16} /></Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
            {services.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} style={{
                background: 'var(--white)', padding: '40px 36px',
                borderRadius: 12, border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-sm)', transition: 'var(--transition)',
                opacity: servVis ? 1 : 0, transform: servVis ? 'translateY(0)' : 'translateY(24px)',
                transitionDelay: `${i * 80}ms`,
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'var(--accent)' }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--border)' }}
              >
                <div style={{ width: 56, height: 56, background: 'rgba(200,150,60,0.1)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
                  <Icon size={24} color="var(--accent)" />
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 22, fontWeight: 700, color: 'var(--primary)', marginBottom: 12 }}>{title}</h3>
                <p style={{ color: 'var(--text-light)', fontSize: 15, lineHeight: 1.75 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section style={{ padding: '120px 0', background: 'var(--white)' }} ref={whyRef}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 100, alignItems: 'center' }}>
          {/* Left visual */}
          <div style={{ position: 'relative', opacity: whyVis ? 1 : 0, transform: whyVis ? 'translateX(0)' : 'translateX(-30px)', transition: 'all 0.7s ease' }}>
            <div style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)', borderRadius: 16, padding: '60px', overflow: 'hidden', position: 'relative' }}>
              <svg width="100%" height="300" viewBox="0 0 380 300" fill="none">
                <rect x="20" y="130" width="50" height="140" fill="rgba(255,255,255,0.06)" rx="2"/>
                <rect x="80" y="90" width="60" height="180" fill="rgba(255,255,255,0.06)" rx="2"/>
                <rect x="150" y="50" width="70" height="220" fill="rgba(200,150,60,0.15)" stroke="var(--accent)" strokeWidth="1.5" rx="2"/>
                <polygon points="185,28 220,50 150,50" fill="var(--accent)" opacity="0.9"/>
                <rect x="230" y="80" width="60" height="190" fill="rgba(255,255,255,0.06)" rx="2"/>
                <rect x="300" y="110" width="50" height="160" fill="rgba(255,255,255,0.06)" rx="2"/>
                <line x1="0" y1="270" x2="380" y2="270" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
                {[60,85,110,135,160].map(y => [155,170,185,200].map(x => (
                  <rect key={`${x}${y}`} x={x} y={y} width="10" height="14" fill="rgba(200,150,60,0.25)" rx="1"/>
                )))}
                <text x="190" y="290" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="10" letterSpacing="4">PRESTIGE CONTRACTORS</text>
              </svg>
            </div>
            <div style={{ position: 'absolute', bottom: -20, right: -20, padding: '20px 28px', background: 'var(--accent)', borderRadius: 12, boxShadow: '0 8px 24px rgba(200,150,60,0.4)' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 36, fontWeight: 700, color: 'var(--white)', lineHeight: 1 }}>A+</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.8)', letterSpacing: '0.1em', marginTop: 4, textTransform: 'uppercase' }}>Quality Rating</div>
            </div>
          </div>

          {/* Right */}
          <div style={{ opacity: whyVis ? 1 : 0, transform: whyVis ? 'translateX(0)' : 'translateX(30px)', transition: 'all 0.7s ease 0.15s' }}>
            <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: 12 }}>Why Choose Us</p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 3.5vw, 48px)', fontWeight: 700, color: 'var(--primary)', lineHeight: 1.15, marginBottom: 20 }}>
              Construction Expertise<br />You Can Trust
            </h2>
            <p style={{ color: 'var(--text-light)', fontSize: 16, lineHeight: 1.85, marginBottom: 36 }}>
              Prestige Contractors Pvt Ltd brings together seasoned engineers, architects, and project managers to deliver construction consultancy that exceeds expectations — on time, on budget, and built to last.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {whyUs.map(item => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <CheckCircle2 size={20} color="var(--accent)" style={{ flexShrink: 0 }} />
                  <span style={{ color: 'var(--text-mid)', fontSize: 15 }}>{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/about" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 40,
              padding: '13px 32px', background: 'var(--primary)',
              color: 'var(--white)', fontSize: 14, fontWeight: 600,
              borderRadius: 'var(--radius)', transition: 'var(--transition)',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--primary-light)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--primary)'; e.currentTarget.style.transform = 'translateY(0)' }}
            >Learn About Us <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>

      {/* ONLINE CONSULTATION */}
      <section style={{ padding: '100px 0', background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.15em', color: 'var(--accent-light)', textTransform: 'uppercase', marginBottom: 12 }}>Available Worldwide</p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 700, color: 'var(--white)', lineHeight: 1.1, marginBottom: 20 }}>
              Online Consultation<br />From Anywhere
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 16, lineHeight: 1.85, marginBottom: 36 }}>
              No matter where you are in the world — Prestige Contractors offers professional construction consultation via video call. Get expert advice on your project from the comfort of your home.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link to="/contact" style={{ padding: '14px 36px', background: 'var(--accent)', color: 'var(--white)', fontSize: 14, fontWeight: 600, borderRadius: 'var(--radius)', transition: 'var(--transition)', boxShadow: '0 4px 16px rgba(200,150,60,0.4)' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent-light)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >Book Video Call</Link>
              <Link to="/services" style={{ padding: '14px 36px', border: '1px solid rgba(255,255,255,0.3)', color: 'var(--white)', fontSize: 14, fontWeight: 500, borderRadius: 'var(--radius)', transition: 'var(--transition)' }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >Learn More</Link>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[
              { icon: '🎥', title: 'Video Call', desc: 'Zoom, Meet, or Teams' },
              { icon: '🌍', title: 'Global', desc: 'Clients in 12+ countries' },
              { icon: '⚡', title: 'Fast', desc: 'Same day response' },
              { icon: '📋', title: 'Reports', desc: 'Written consultation notes' },
            ].map(({ icon, title, desc }) => (
              <div key={title} style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 12, padding: '28px 24px', transition: 'var(--transition)' }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.13)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
              >
                <div style={{ fontSize: 28, marginBottom: 12 }}>{icon}</div>
                <div style={{ color: 'var(--white)', fontWeight: 600, fontSize: 15, marginBottom: 4 }}>{title}</div>
                <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: '120px 0', background: 'var(--off-white)' }} ref={testRef}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 40px' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: 12 }}>Client Reviews</p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 4vw, 50px)', fontWeight: 700, color: 'var(--primary)' }}>What Our Clients Say</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {testimonials.map(({ name, role, text }, i) => (
              <div key={name} style={{
                background: 'var(--white)', padding: '40px 36px', borderRadius: 12,
                border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)',
                opacity: testVis ? 1 : 0, transform: testVis ? 'translateY(0)' : 'translateY(24px)',
                transition: `all 0.6s ease ${i * 100}ms`,
              }}>
                <div style={{ display: 'flex', gap: 4, marginBottom: 20 }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="var(--accent)" color="var(--accent)" />)}
                </div>
                <p style={{ color: 'var(--text-mid)', fontSize: 15, lineHeight: 1.8, marginBottom: 24, fontStyle: 'italic' }}>"{text}"</p>
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--primary)', fontSize: 15 }}>{name}</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: 13, marginTop: 2 }}>{role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '100px 0', background: 'var(--white)' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', padding: '0 40px', textAlign: 'center' }}>
          <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: 16 }}>Ready to Build?</p>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(36px, 5vw, 62px)', fontWeight: 700, color: 'var(--primary)', lineHeight: 1.1, marginBottom: 24 }}>
            Let's Build Your Vision Together
          </h2>
          <p style={{ color: 'var(--text-light)', fontSize: 17, lineHeight: 1.8, marginBottom: 48 }}>
            From a single consultation to full project management — Prestige Contractors has the expertise to take your construction project to new heights.
          </p>
          <Link to="/contact" style={{
            padding: '17px 48px', background: 'var(--primary)',
            color: 'var(--white)', fontSize: 15, fontWeight: 700,
            borderRadius: 'var(--radius)', display: 'inline-flex', alignItems: 'center', gap: 10,
            transition: 'var(--transition)', boxShadow: '0 4px 20px rgba(27,42,59,0.25)',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--primary-light)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'var(--primary)'; e.currentTarget.style.transform = 'translateY(0)' }}
          >Get Free Consultation <ArrowRight size={17} /></Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          section > div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </div>
  )
}
