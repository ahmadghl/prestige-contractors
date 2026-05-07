import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Building2, HardHat, Ruler, Video, BarChart3, ShieldCheck } from 'lucide-react'

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

export default function Home() {
  const [servRef, servVis] = useInView()
  const [whyRef, whyVis] = useInView()
  const [ctaRef, ctaVis] = useInView()

  return (
    <div>
      {/* HERO */}
      <section style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        position: 'relative', overflow: 'hidden',
        background: 'linear-gradient(135deg, var(--darkest) 0%, var(--dark) 50%, var(--darker) 100%)',
      }}>
        {/* Geometric background */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.04 }}>
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#C8A96E" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
          {/* Gold accent lines */}
          <div style={{ position: 'absolute', right: '8%', top: '15%', width: 1, height: '60%', background: 'linear-gradient(to bottom, transparent, var(--gold), transparent)', opacity: 0.25 }} />
          <div style={{ position: 'absolute', right: '18%', top: '25%', width: 1, height: '40%', background: 'linear-gradient(to bottom, transparent, var(--gold), transparent)', opacity: 0.12 }} />
          {/* Large triangle */}
          <svg style={{ position: 'absolute', right: '-5%', bottom: '-5%', opacity: 0.04 }} width="700" height="700" viewBox="0 0 700 700">
            <polygon points="350,50 680,620 20,620" fill="none" stroke="var(--gold)" strokeWidth="2"/>
            <polygon points="350,150 580,570 120,570" fill="none" stroke="var(--gold)" strokeWidth="1"/>
          </svg>
        </div>

        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '120px 40px 80px', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '6px 16px', border: '1px solid var(--border)', borderRadius: 2, marginBottom: 32 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--gold)', display: 'block' }} />
              <span style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500 }}>Construction Consultancy</span>
            </div>
            <h1 style={{
              fontFamily: 'var(--font-serif)', fontSize: 'clamp(52px, 6vw, 86px)',
              fontWeight: 600, lineHeight: 1.05, marginBottom: 28, letterSpacing: '-0.01em',
            }}>
              Building the<br />
              <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Future</em><br />
              From Ground Up
            </h1>
            <p style={{ fontSize: 17, color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 44, maxWidth: 480 }}>
              Expert construction consultancy for residential and commercial projects. Online consultations available worldwide — led by <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Gullsher Fareed</strong>.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link to="/contact" style={{
                padding: '15px 36px', background: 'var(--gold)',
                color: 'var(--darkest)', fontSize: 13, letterSpacing: '0.12em',
                textTransform: 'uppercase', fontWeight: 600, borderRadius: 2,
                display: 'inline-flex', alignItems: 'center', gap: 8, transition: 'var(--transition)',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold-light)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >Start Your Project <ArrowRight size={15} /></Link>
              <Link to="/services" style={{
                padding: '15px 36px', border: '1px solid var(--border)',
                color: 'var(--text-secondary)', fontSize: 13, letterSpacing: '0.12em',
                textTransform: 'uppercase', fontWeight: 500, borderRadius: 2,
                display: 'inline-flex', alignItems: 'center', gap: 8, transition: 'var(--transition)',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-secondary)' }}
              >Our Services</Link>
            </div>
          </div>

          {/* Stats card */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
            {[
              { num: 200, suffix: '+', label: 'Projects Delivered' },
              { num: 15, suffix: '+', label: 'Years Experience' },
              { num: 98, suffix: '%', label: 'Client Satisfaction' },
              { num: 50, suffix: '+', label: 'Expert Team Members' },
            ].map(({ num, suffix, label }) => (
              <div key={label} style={{
                background: 'var(--surface)', padding: '40px 32px',
                border: '1px solid var(--border)',
                transition: 'var(--transition)',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(200,169,110,0.4)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 52, fontWeight: 600, color: 'var(--gold)', lineHeight: 1 }}>
                  <AnimCounter target={num} suffix={suffix} />
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: 13, marginTop: 10, letterSpacing: '0.08em' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 10, letterSpacing: '0.2em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Scroll</span>
          <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, var(--gold), transparent)', opacity: 0.6 }} />
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section style={{ padding: '120px 0', background: 'var(--dark)' }} ref={servRef}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 70, flexWrap: 'wrap', gap: 24 }}>
            <div>
              <p style={{ fontSize: 11, letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: 14 }}>What We Do</p>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 600, lineHeight: 1.1 }}>Our Expertise</h2>
            </div>
            <Link to="/services" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              color: 'var(--gold)', fontSize: 13, letterSpacing: '0.12em',
              textTransform: 'uppercase', fontWeight: 500, transition: 'var(--transition)',
              borderBottom: '1px solid var(--gold)', paddingBottom: 2,
            }}>View All Services <ArrowRight size={14} /></Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 2 }}>
            {services.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} style={{
                background: 'var(--surface)', padding: '44px 36px',
                border: '1px solid var(--border)', transition: 'var(--transition)',
                opacity: servVis ? 1 : 0,
                transform: servVis ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: `${i * 80}ms`,
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(200,169,110,0.45)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <div style={{ width: 52, height: 52, border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 28, borderRadius: 2 }}>
                  <Icon size={22} color="var(--gold)" />
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 22, fontWeight: 600, marginBottom: 14 }}>{title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.75 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY PRESTIGE CONTRACTORS */}
      <section style={{ padding: '120px 0', background: 'var(--surface)' }} ref={whyRef}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 100, alignItems: 'center' }}>
          {/* Left visual */}
          <div style={{ position: 'relative' }}>
            <div style={{
              background: 'linear-gradient(135deg, var(--surface), var(--darker))',
              border: '1px solid var(--border)', padding: '60px',
              position: 'relative', overflow: 'hidden',
            }}>
              <svg width="100%" height="320" viewBox="0 0 400 320" fill="none">
                {/* Building silhouette */}
                <rect x="60" y="80" width="60" height="200" fill="none" stroke="rgba(200,169,110,0.15)" strokeWidth="1"/>
                <rect x="170" y="40" width="60" height="240" fill="none" stroke="rgba(200,169,110,0.15)" strokeWidth="1"/>
                <rect x="280" y="100" width="60" height="180" fill="none" stroke="rgba(200,169,110,0.15)" strokeWidth="1"/>
                {/* Gold accent building */}
                <rect x="170" y="40" width="60" height="240" fill="rgba(200,169,110,0.05)" stroke="var(--gold)" strokeWidth="1.5"/>
                {/* Windows */}
                {[60,90,120,150,170,200].map(y => [175,195,215].map(x => (
                  <rect key={`${x}-${y}`} x={x} y={y} width="10" height="14" fill="rgba(200,169,110,0.2)" rx="1"/>
                )))}
                {/* Ground line */}
                <line x1="0" y1="280" x2="400" y2="280" stroke="rgba(200,169,110,0.3)" strokeWidth="1"/>
                {/* Triangle cap */}
                <polygon points="200,10 230,40 170,40" fill="var(--gold)" opacity="0.8"/>
                <text x="200" y="308" textAnchor="middle" fill="rgba(200,169,110,0.5)" fontSize="11" letterSpacing="3">PRESTIGE</text>
              </svg>
            </div>
            <div style={{ position: 'absolute', bottom: -20, right: -20, padding: '24px 28px', background: 'var(--gold)', borderRadius: 2 }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 36, fontWeight: 700, color: 'var(--darkest)', lineHeight: 1 }}>A+</div>
              <div style={{ fontSize: 11, color: 'rgba(30,30,32,0.7)', letterSpacing: '0.1em', marginTop: 4, textTransform: 'uppercase' }}>Quality Rating</div>
            </div>
          </div>

          {/* Right content */}
          <div style={{ opacity: whyVis ? 1 : 0, transform: whyVis ? 'translateX(0)' : 'translateX(30px)', transition: 'all 0.7s ease' }}>
            <p style={{ fontSize: 11, letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: 14 }}>Why Choose Us</p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 3.5vw, 50px)', fontWeight: 600, lineHeight: 1.1, marginBottom: 24 }}>
              Construction Expertise<br />You Can Trust
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.85, marginBottom: 40 }}>
              Prestige Contractors Pvt Ltd brings together seasoned engineers, architects, and project managers to deliver construction consultancy that exceeds expectations — on time, on budget, and built to last.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {whyUs.map(item => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <CheckCircle2 size={18} color="var(--gold)" style={{ flexShrink: 0 }} />
                  <span style={{ color: 'var(--text-secondary)', fontSize: 14 }}>{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/about" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 44,
              padding: '13px 32px', border: '1px solid var(--gold)',
              color: 'var(--gold)', fontSize: 12, letterSpacing: '0.15em',
              textTransform: 'uppercase', fontWeight: 500, borderRadius: 2, transition: 'var(--transition)',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = 'var(--darkest)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--gold)' }}
            >Learn About Us <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>

      {/* ONLINE CONSULTATION HIGHLIGHT */}
      <section style={{ padding: '100px 0', background: 'var(--dark)' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 40px', textAlign: 'center' }}>
          <div style={{
            background: 'var(--surface)', border: '1px solid var(--border)',
            padding: '80px 60px', position: 'relative', overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(200,169,110,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <Video size={44} color="var(--gold)" style={{ margin: '0 auto 28px' }} />
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 600, marginBottom: 20 }}>
              Online Consultation Available
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: 16, maxWidth: 600, margin: '0 auto 44px', lineHeight: 1.8 }}>
              No matter where you are in the world — Prestige Contractors offers professional construction consultation via video call. Get expert advice on your project from the comfort of your home.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" style={{
                padding: '15px 40px', background: 'var(--gold)',
                color: 'var(--darkest)', fontSize: 13, letterSpacing: '0.12em',
                textTransform: 'uppercase', fontWeight: 600, borderRadius: 2, transition: 'var(--transition)',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--gold-light)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--gold)'}
              >Book Video Call</Link>
              <Link to="/services" style={{
                padding: '15px 40px', border: '1px solid var(--border)',
                color: 'var(--text-secondary)', fontSize: 13, letterSpacing: '0.12em',
                textTransform: 'uppercase', fontWeight: 500, borderRadius: 2, transition: 'var(--transition)',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-secondary)' }}
              >Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{ padding: '100px 0', background: 'linear-gradient(135deg, var(--surface), var(--darker))' }} ref={ctaRef}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 40px', textAlign: 'center', opacity: ctaVis ? 1 : 0, transform: ctaVis ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.6s ease' }}>
          <p style={{ fontSize: 11, letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: 16 }}>Ready to Build?</p>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(36px, 5vw, 68px)', fontWeight: 600, lineHeight: 1.1, marginBottom: 28 }}>
            Let's Build Your Vision<br />
            <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Together</em>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 16, maxWidth: 500, margin: '0 auto 48px', lineHeight: 1.8 }}>
            From a single consultation to full project management — Prestige Contractors has the expertise to take your construction project to new heights.
          </p>
          <Link to="/contact" style={{
            padding: '17px 48px', background: 'var(--gold)',
            color: 'var(--darkest)', fontSize: 14, letterSpacing: '0.12em',
            textTransform: 'uppercase', fontWeight: 700, borderRadius: 2,
            display: 'inline-flex', alignItems: 'center', gap: 10, transition: 'var(--transition)',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold-light)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.transform = 'translateY(0)' }}
          >Get Free Consultation <ArrowRight size={16} /></Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          section > div { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </div>
  )
}
