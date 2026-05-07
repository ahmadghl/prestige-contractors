import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Award, Users, Globe, TrendingUp } from 'lucide-react'

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

const values = [
  { icon: Award, title: 'Excellence', desc: 'We hold ourselves to the highest standards — every drawing, every report, every recommendation reflects our commitment to quality.' },
  { icon: Users, title: 'Client Focus', desc: 'Your project goals are our priority. We listen, adapt, and deliver solutions tailored specifically to your needs and budget.' },
  { icon: Globe, title: 'Accessibility', desc: 'With online consultations, we break geographical barriers — bringing world-class construction expertise to clients anywhere.' },
  { icon: TrendingUp, title: 'Innovation', desc: 'We stay ahead of industry trends, using the latest tools and methodologies to deliver smarter, more efficient construction outcomes.' },
]

const team = [
  { name: 'Gullsher Fareed', role: 'Founder & Principal Consultant', bio: 'A seasoned construction professional with 15+ years of experience spanning structural engineering, project management, and construction consultancy across Pakistan and the Middle East. Gullsher founded Prestige Contractors Pvt Ltd with a vision to bring transparent, expert-driven construction advice to every client — regardless of their location.', initials: 'GF' },
  { name: 'Senior Structural Engineers', role: 'Engineering Team', bio: 'Our engineering team comprises certified structural engineers with hands-on experience in residential, commercial, and industrial construction across multiple geographies.', initials: 'SE' },
  { name: 'Project Management Specialists', role: 'PM Team', bio: 'Experienced project managers who ensure your construction stays on schedule, on budget, and on spec — from groundbreaking to ribbon-cutting.', initials: 'PM' },
]

const timeline = [
  { year: '2009', event: 'Company Founded', desc: 'Gullsher Fareed establishes Prestige Contractors Pvt Ltd in Islamabad, starting with residential structural consultancy.' },
  { year: '2013', event: 'Commercial Division', desc: 'Expanded into commercial and industrial construction consultancy, completing first high-rise project.' },
  { year: '2017', event: 'Regional Growth', desc: 'Prestige Contractors begins serving clients across all major cities in Pakistan with a growing team of specialists.' },
  { year: '2020', event: 'Online Consultations', desc: 'Launched dedicated online consultation services, enabling clients worldwide to access expert advice remotely.' },
  { year: '2024', event: 'International Reach', desc: 'Now serving clients across 12 countries — delivering construction consultancy without borders.' },
]

export default function About() {
  const [heroRef, heroVis] = useInView(0.05)
  const [valRef, valVis] = useInView()
  const [teamRef, teamVis] = useInView()
  const [timeRef, timeVis] = useInView()

  return (
    <div>
      {/* HERO */}
      <section ref={heroRef} style={{ padding: '180px 0 100px', background: 'linear-gradient(180deg, var(--darker) 0%, var(--dark) 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <svg width="100%" height="100%" style={{ opacity: 0.03 }}>
            <defs><pattern id="grid4" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="#C8A96E" strokeWidth="0.5"/></pattern></defs>
            <rect width="100%" height="100%" fill="url(#grid4)" />
          </svg>
        </div>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center', opacity: heroVis ? 1 : 0, transform: heroVis ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.7s ease' }}>
          <div>
            <p style={{ fontSize: 11, letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: 16 }}>Our Story</p>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(40px, 5vw, 70px)', fontWeight: 600, lineHeight: 1.1, marginBottom: 28 }}>
              Building Trust,<br />One Project at<br />a Time
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: 16, lineHeight: 1.9, marginBottom: 20 }}>
              Founded by <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Gullsher Fareed</strong>, Prestige Contractors Pvt Ltd was born from a simple belief: every client deserves honest, expert construction advice — delivered with integrity and professionalism.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: 16, lineHeight: 1.9 }}>
              From our base in Islamabad, we serve clients across Pakistan and around the world — offering both on-site and online consultancy services that make world-class expertise accessible to all.
            </p>
          </div>
          {/* Visual */}
          <div style={{ position: 'relative' }}>
            <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', padding: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="100%" height="280" viewBox="0 0 360 280" fill="none">
                {/* City skyline abstract */}
                <rect x="20" y="140" width="40" height="120" fill="rgba(200,169,110,0.08)" stroke="rgba(200,169,110,0.2)" strokeWidth="1"/>
                <rect x="70" y="100" width="50" height="160" fill="rgba(200,169,110,0.08)" stroke="rgba(200,169,110,0.2)" strokeWidth="1"/>
                <rect x="130" y="60" width="60" height="200" fill="rgba(200,169,110,0.12)" stroke="var(--gold)" strokeWidth="1.5"/>
                <polygon points="160,40 190,60 130,60" fill="var(--gold)" opacity="0.9"/>
                <rect x="200" y="90" width="50" height="170" fill="rgba(200,169,110,0.08)" stroke="rgba(200,169,110,0.2)" strokeWidth="1"/>
                <rect x="260" y="120" width="40" height="140" fill="rgba(200,169,110,0.08)" stroke="rgba(200,169,110,0.2)" strokeWidth="1"/>
                <rect x="310" y="150" width="30" height="110" fill="rgba(200,169,110,0.08)" stroke="rgba(200,169,110,0.2)" strokeWidth="1"/>
                {/* Ground */}
                <line x1="0" y1="260" x2="360" y2="260" stroke="rgba(200,169,110,0.3)" strokeWidth="1"/>
                {/* Windows on main building */}
                {[70, 90, 110, 130, 150, 170].map(y => [135, 150, 165, 175].map(x => (
                  <rect key={`${x}${y}`} x={x} y={y} width="10" height="12" fill="rgba(200,169,110,0.2)" rx="1"/>
                )))}
                <text x="180" y="275" textAnchor="middle" fill="rgba(200,169,110,0.4)" fontSize="10" letterSpacing="4">ISLAMABAD · PAKISTAN</text>
              </svg>
            </div>
            <div style={{ position: 'absolute', bottom: -20, left: -20, padding: '20px 24px', background: 'var(--gold)', borderRadius: 2 }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 32, fontWeight: 700, color: 'var(--darkest)', lineHeight: 1 }}>15+</div>
              <div style={{ fontSize: 11, color: 'rgba(30,30,32,0.7)', letterSpacing: '0.1em', marginTop: 4, textTransform: 'uppercase' }}>Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section style={{ padding: '100px 0', background: 'var(--dark)' }} ref={valRef}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 40px' }}>
          <div style={{ textAlign: 'center', marginBottom: 70 }}>
            <p style={{ fontSize: 11, letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: 14 }}>What Drives Us</p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 600 }}>Our Core Values</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 2 }}>
            {values.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} style={{
                background: 'var(--surface)', padding: '44px 36px', border: '1px solid var(--border)',
                opacity: valVis ? 1 : 0, transform: valVis ? 'translateY(0)' : 'translateY(24px)',
                transition: `all 0.6s ease ${i * 100}ms`,
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(200,169,110,0.4)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                <Icon size={28} color="var(--gold)" style={{ marginBottom: 24 }} />
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 22, fontWeight: 600, marginBottom: 12 }}>{title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.8 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section style={{ padding: '100px 0', background: 'var(--surface)' }} ref={timeRef}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 40px' }}>
          <div style={{ textAlign: 'center', marginBottom: 70 }}>
            <p style={{ fontSize: 11, letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: 14 }}>Our Journey</p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 600 }}>Milestones</h2>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', left: 60, top: 0, bottom: 0, width: 1, background: 'var(--border)' }} />
            {timeline.map(({ year, event, desc }, i) => (
              <div key={year} style={{
                display: 'flex', gap: 40, marginBottom: 52,
                opacity: timeVis ? 1 : 0, transform: timeVis ? 'translateX(0)' : 'translateX(-24px)',
                transition: `all 0.6s ease ${i * 100}ms`,
              }}>
                <div style={{ width: 60, flexShrink: 0, textAlign: 'right', paddingTop: 4 }}>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: 18, fontWeight: 600, color: 'var(--gold)' }}>{year}</span>
                </div>
                <div style={{ position: 'relative', paddingLeft: 30 }}>
                  <div style={{ position: 'absolute', left: -6, top: 8, width: 12, height: 12, border: '2px solid var(--gold)', borderRadius: '50%', background: 'var(--surface)' }} />
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 20, fontWeight: 600, marginBottom: 8 }}>{event}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.75 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section style={{ padding: '100px 0', background: 'var(--dark)' }} ref={teamRef}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 40px' }}>
          <div style={{ textAlign: 'center', marginBottom: 70 }}>
            <p style={{ fontSize: 11, letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: 14 }}>The People</p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 600 }}>Meet Our Team</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 2 }}>
            {team.map(({ name, role, bio, initials }, i) => (
              <div key={name} style={{
                background: 'var(--surface)', padding: '48px 40px', border: '1px solid var(--border)',
                opacity: teamVis ? 1 : 0, transform: teamVis ? 'translateY(0)' : 'translateY(24px)',
                transition: `all 0.6s ease ${i * 100}ms`,
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(200,169,110,0.35)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                <div style={{ width: 64, height: 64, border: '1px solid var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24, borderRadius: 2 }}>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: 22, color: 'var(--gold)', fontWeight: 600 }}>{initials}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 22, fontWeight: 600, marginBottom: 6 }}>{name}</h3>
                <p style={{ fontSize: 12, letterSpacing: '0.12em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: 18 }}>{role}</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.8 }}>{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '100px 0', background: 'var(--surface)', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto', padding: '0 40px' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 4vw, 50px)', fontWeight: 600, marginBottom: 20 }}>Work With Us</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 16, lineHeight: 1.8, marginBottom: 44 }}>
            Join hundreds of clients who trust Prestige Contractors to guide their construction projects from vision to reality.
          </p>
          <Link to="/contact" style={{
            padding: '15px 40px', background: 'var(--gold)', color: 'var(--darkest)',
            fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase',
            fontWeight: 700, borderRadius: 2, display: 'inline-flex', alignItems: 'center', gap: 10, transition: 'var(--transition)',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold-light)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.transform = 'translateY(0)' }}
          >Get In Touch <ArrowRight size={15} /></Link>
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
