import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Link as LinkIcon, Share2, ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', padding: '80px 0 0' }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 60, marginBottom: 60 }}>
          
          {/* Brand */}
          <div>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <svg width="34" height="34" viewBox="0 0 36 36" fill="none">
                <polygon points="18,3 33,31 3,31" fill="none" stroke="var(--gold)" strokeWidth="1.8"/>
                <line x1="18" y1="3" x2="18" y2="31" stroke="var(--gold)" strokeWidth="1" opacity="0.5"/>
                <line x1="10.5" y1="21" x2="25.5" y2="21" stroke="var(--gold)" strokeWidth="1" opacity="0.5"/>
              </svg>
              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 15, fontWeight: 600, letterSpacing: '0.03em' }}>Prestige Contractors</div>
                <div style={{ fontSize: 9, letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase', marginTop: 2 }}>Pvt Ltd</div>
              </div>
            </Link>
            <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.8, maxWidth: 280 }}>
              Premier construction consultancy delivering excellence from foundation to finish. Online consultation available worldwide.
            </p>
            <div style={{ display: 'flex', gap: 14, marginTop: 24 }}>
              {[LinkIcon, Share2, ExternalLink].map((Icon, i) => (
                <a key={i} href="#" style={{
                  width: 36, height: 36, border: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--text-muted)', borderRadius: 2, transition: 'var(--transition)',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)' }}
                ><Icon size={15} /></a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: 18, color: 'var(--gold)', marginBottom: 20, fontWeight: 500 }}>Services</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {['Online Consultation', 'Structural Engineering', 'Project Management', 'Interior Design', 'Renovation', 'Cost Estimation', 'Site Supervision', 'Building Permits'].map(s => (
                <li key={s}><Link to="/services" style={{ color: 'var(--text-secondary)', fontSize: 14, transition: 'var(--transition)' }}
                  onMouseEnter={e => e.target.style.color = 'var(--gold-light)'}
                  onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
                >{s}</Link></li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: 18, color: 'var(--gold)', marginBottom: 20, fontWeight: 500 }}>Company</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[['About Us', '/about'], ['Our Projects', '/projects'], ['Contact Us', '/contact'], ['Book Online', '/contact']].map(([label, to]) => (
                <li key={label}><Link to={to} style={{ color: 'var(--text-secondary)', fontSize: 14, transition: 'var(--transition)' }}
                  onMouseEnter={e => e.target.style.color = 'var(--gold-light)'}
                  onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
                >{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: 18, color: 'var(--gold)', marginBottom: 20, fontWeight: 500 }}>Get In Touch</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { Icon: Phone, text: '+92 300 000 0000' },
                { Icon: Mail, text: 'info@prestigecontractorspvt.com' },
                { Icon: MapPin, text: 'Islamabad, Pakistan' },
              ].map(({ Icon, text }) => (
                <div key={text} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <Icon size={16} color="var(--gold)" style={{ marginTop: 3, flexShrink: 0 }} />
                  <span style={{ color: 'var(--text-secondary)', fontSize: 14 }}>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid var(--border)', padding: '24px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ color: 'var(--text-muted)', fontSize: 13 }}>© {new Date().getFullYear()} Prestige Contractors Pvt Ltd. All rights reserved.</p>
          <p style={{ color: 'var(--text-muted)', fontSize: 13 }}>Crafted with precision by <span style={{ color: 'var(--gold)' }}>Gullsher Fareed</span></p>
        </div>
      </div>
    </footer>
  )
}
