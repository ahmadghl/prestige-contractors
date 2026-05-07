import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, HardHat } from 'lucide-react'

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
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      padding: scrolled ? '12px 0' : '20px 0',
      background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
      transition: 'var(--transition)',
    }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 40, height: 40, background: 'var(--primary)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <HardHat size={22} color="var(--accent)" />
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 18, fontWeight: 700, color: scrolled ? 'var(--primary)' : 'var(--white)', lineHeight: 1, letterSpacing: '0.02em' }}>Prestige Contractors</div>
            <div style={{ fontSize: 10, letterSpacing: '0.2em', color: 'var(--accent)', textTransform: 'uppercase', lineHeight: 1, marginTop: 3 }}>Pvt Ltd</div>
          </div>
        </Link>

        {/* Desktop links */}
        <ul style={{ display: 'flex', gap: 36, listStyle: 'none', alignItems: 'center' }} className="desk-nav">
          {links.map(l => (
            <li key={l.to}>
              <Link to={l.to} style={{
                fontSize: 14, fontWeight: 500,
                color: pathname === l.to ? 'var(--accent)' : scrolled ? 'var(--text-mid)' : 'rgba(255,255,255,0.9)',
                transition: 'var(--transition)',
                paddingBottom: 2,
                borderBottom: pathname === l.to ? '2px solid var(--accent)' : '2px solid transparent',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--accent)'}
              onMouseLeave={e => { if (pathname !== l.to) e.target.style.color = scrolled ? 'var(--text-mid)' : 'rgba(255,255,255,0.9)' }}
              >{l.label}</Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link to="/contact" className="desk-nav" style={{
          padding: '11px 26px', background: 'var(--accent)',
          color: 'var(--white)', fontSize: 13, fontWeight: 600,
          borderRadius: 'var(--radius)', transition: 'var(--transition)',
          boxShadow: '0 2px 8px rgba(200,150,60,0.3)',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent-dark)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
        onMouseLeave={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(0)' }}
        >Book Consultation</Link>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)} style={{ color: scrolled ? 'var(--primary)' : 'var(--white)', display: 'none' }} className="mob-nav">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: 'var(--white)', borderBottom: '1px solid var(--border)',
          padding: '20px 40px 28px', boxShadow: 'var(--shadow)',
        }}>
          {links.map(l => (
            <Link key={l.to} to={l.to} style={{
              display: 'block', padding: '13px 0',
              fontSize: 15, fontWeight: 500,
              color: pathname === l.to ? 'var(--accent)' : 'var(--text-mid)',
              borderBottom: '1px solid var(--border)',
            }}>{l.label}</Link>
          ))}
          <Link to="/contact" style={{
            display: 'inline-block', marginTop: 20, padding: '12px 28px',
            background: 'var(--accent)', color: 'var(--white)',
            fontSize: 13, fontWeight: 600, borderRadius: 'var(--radius)',
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
