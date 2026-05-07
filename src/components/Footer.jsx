import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, HardHat } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--primary)', color: 'var(--white)', padding: '80px 0 0' }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 60, marginBottom: 60 }}>

          {/* Brand */}
          <div>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <div style={{ width: 40, height: 40, background: 'var(--accent)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <HardHat size={20} color="var(--white)" />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 17, fontWeight: 700, color: 'var(--white)', lineHeight: 1 }}>Prestige Contractors</div>
                <div style={{ fontSize: 9, letterSpacing: '0.2em', color: 'var(--accent)', textTransform: 'uppercase', marginTop: 3 }}>Pvt Ltd</div>
              </div>
            </Link>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.8, maxWidth: 280 }}>
              Premier construction consultancy delivering excellence from foundation to finish. Online consultation available worldwide.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontSize: 14, fontWeight: 600, color: 'var(--accent)', marginBottom: 20, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Services</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {['Online Consultation', 'Structural Engineering', 'Project Management', 'Architectural Design', 'Cost Estimation', 'Quality Assurance', 'Building Permits', 'Renovation'].map(s => (
                <li key={s}><Link to="/services" style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, transition: 'var(--transition)' }}
                  onMouseEnter={e => e.target.style.color = 'var(--accent-light)'}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}
                >{s}</Link></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ fontSize: 14, fontWeight: 600, color: 'var(--accent)', marginBottom: 20, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Company</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[['About Us', '/about'], ['Our Projects', '/projects'], ['Contact Us', '/contact'], ['Book Online', '/contact']].map(([label, to]) => (
                <li key={label}><Link to={to} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, transition: 'var(--transition)' }}
                  onMouseEnter={e => e.target.style.color = 'var(--accent-light)'}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}
                >{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: 14, fontWeight: 600, color: 'var(--accent)', marginBottom: 20, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Get In Touch</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { Icon: Phone, text: '+92 300 000 0000' },
                { Icon: Mail, text: 'info@prestigecontractorspvt.com' },
                { Icon: MapPin, text: 'Islamabad, Pakistan' },
              ].map(({ Icon, text }) => (
                <div key={text} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <Icon size={16} color="var(--accent)" style={{ marginTop: 3, flexShrink: 0 }} />
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', padding: '24px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13 }}>© {new Date().getFullYear()} Prestige Contractors Pvt Ltd. All rights reserved.</p>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13 }}>Led by <span style={{ color: 'var(--accent)' }}>Gullsher Fareed</span></p>
        </div>
      </div>
    </footer>
  )
}
