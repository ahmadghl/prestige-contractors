import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      padding: scrolled ? '14px 0' : '22px 0',
      background: scrolled ? 'rgba(44,44,46,0.97)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition: 'var(--transition)',
    }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <polygon points="18,3 33,31 3,31" fill="none" stroke="var(--gold)" strokeWidth="1.8"/>
            <line x1="18" y1="3" x2="18" y2="31" stroke="var(--gold)" strokeWidth="1" opacity="0.5"/>
            <line x1="10.5" y1="21" x2="25.5" y2="21" stroke="var(--gold)" strokeWidth="1" opacity="0.5"/>
            <circle cx="18" cy="3" r="2" fill="var(--gold)" opacity="0.8"/>
          </svg>
          <div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 15, fontWeight: 600, letterSpacing: '0.03em', color: 'var(--text-primary)', lineHeight: 1 }}>Prestige Contractors</div>
            <div style={{ fontSize: 9, letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase', lineHeight: 1, marginTop: 3 }}>Pvt Ltd</div>
          </div>
        </Link>

        {/* Desktop links */}
        <ul style={{ display: 'flex', gap: 40, listStyle: 'none', alignItems: 'center' }} className="desk-nav">
          {links.map(l => (
            <li key={l.to}>
              <Link to={l.to} style={{
                fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase',
                color: pathname === l.to ? 'var(--gold)' : 'var(--text-secondary)',
                fontWeight: 500, transition: 'var(--transition)',
                paddingBottom: 2,
                borderBottom: pathname === l.to ? '1px solid var(--gold)' : '1px solid transparent',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--gold)'}
              onMouseLeave={e => { if (pathname !== l.to) e.target.style.color = 'var(--text-secondary)' }}
              >{l.label}</Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link to="/contact" className="desk-nav" style={{
          padding: '10px 24px', border: '1px solid var(--gold)',
          color: 'var(--gold)', fontSize: 12, letterSpacing: '0.15em',
          textTransform: 'uppercase', fontWeight: 500, borderRadius: 2,
          transition: 'var(--transition)',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = 'var(--darkest)' }}
        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--gold)' }}
        >Book Consultation</Link>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)} style={{ color: 'var(--gold)', display: 'none' }} className="mob-nav">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: 'rgba(44,44,46,0.98)', backdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--border)', padding: '24px 40px',
        }}>
          {links.map(l => (
            <Link key={l.to} to={l.to} style={{
              display: 'block', padding: '14px 0',
              fontSize: 15, letterSpacing: '0.1em', textTransform: 'uppercase',
              color: pathname === l.to ? 'var(--gold)' : 'var(--text-secondary)',
              borderBottom: '1px solid var(--border)',
            }}>{l.label}</Link>
          ))}
          <Link to="/contact" style={{
            display: 'inline-block', marginTop: 20, padding: '12px 28px',
            border: '1px solid var(--gold)', color: 'var(--gold)',
            fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase',
          }}>Book Consultation</Link>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) { .desk-nav { display: none !important; } .mob-nav { display: block !important; } }
        @media (min-width: 901px) { .mob-nav { display: none !important; } }
      `}</style>
    </nav>
  )
}
