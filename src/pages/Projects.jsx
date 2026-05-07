import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Calendar, Layers } from 'lucide-react'

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

const categories = ['All', 'Residential', 'Commercial', 'Industrial', 'Renovation']

const projects = [
  { title: 'Luxury Villa Complex', category: 'Residential', location: 'Islamabad, Pakistan', year: '2024', area: '12,000 sq ft', desc: 'Full structural design and project management for a 6-villa luxury complex with underground parking and landscaped grounds.', color: '#2a2016' },
  { title: 'Corporate Tower Consultancy', category: 'Commercial', location: 'Karachi, Pakistan', year: '2024', area: '85,000 sq ft', desc: 'Structural engineering consultancy for a 22-storey commercial tower — from concept design through construction supervision.', color: '#162016' },
  { title: 'Industrial Warehouse Facility', category: 'Industrial', location: 'Lahore, Pakistan', year: '2023', area: '45,000 sq ft', desc: 'Complete design, BOQ, and quality assurance for a large-scale industrial storage and logistics facility.', color: '#161a20' },
  { title: 'Heritage Hotel Renovation', category: 'Renovation', location: 'Lahore, Pakistan', year: '2023', area: '28,000 sq ft', desc: 'Sensitive structural retrofitting and full interior renovation of a heritage-listed colonial-era hotel, preserving original character.', color: '#1e1616' },
  { title: 'Residential Apartment Block', category: 'Residential', location: 'Rawalpindi, Pakistan', year: '2023', area: '35,000 sq ft', desc: 'Structural design, permits, and project management for a 12-storey residential apartment building with 96 units.', color: '#2a2016' },
  { title: 'Shopping Mall Expansion', category: 'Commercial', location: 'Islamabad, Pakistan', year: '2022', area: '60,000 sq ft', desc: 'Structural analysis and phased expansion consultancy for a major retail complex while maintaining live operations.', color: '#162016' },
  { title: 'Online Consultation — UAE Client', category: 'Residential', location: 'Dubai, UAE (Remote)', year: '2024', area: '8,500 sq ft', desc: 'Full remote consultancy for a luxury villa project — structural review, design critique, and BOQ over 12 video sessions.', color: '#1a1620' },
  { title: 'Factory Structural Audit', category: 'Industrial', location: 'Faisalabad, Pakistan', year: '2022', area: '22,000 sq ft', desc: 'Comprehensive structural audit and retrofitting recommendation report for an aging manufacturing facility.', color: '#161a20' },
  { title: 'School Building Project', category: 'Commercial', location: 'Peshawar, Pakistan', year: '2022', area: '18,000 sq ft', desc: 'Full-cycle project management and quality assurance for a 3-storey school with 40 classrooms and sports facilities.', color: '#162016' },
]

export default function Projects() {
  const [active, setActive] = useState('All')
  const [heroRef, heroVis] = useInView(0.05)

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <div>
      {/* HERO */}
      <section ref={heroRef} style={{ padding: '180px 0 100px', background: 'linear-gradient(180deg, #111 0%, var(--dark) 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <svg width="100%" height="100%" style={{ opacity: 0.03 }}>
            <defs><pattern id="grid3" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="#C8A96E" strokeWidth="0.5"/></pattern></defs>
            <rect width="100%" height="100%" fill="url(#grid3)" />
          </svg>
        </div>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 40px', textAlign: 'center', opacity: heroVis ? 1 : 0, transform: heroVis ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.7s ease' }}>
          <p style={{ fontSize: 11, letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: 16 }}>Our Portfolio</p>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(44px, 6vw, 80px)', fontWeight: 600, lineHeight: 1.05, marginBottom: 24 }}>Featured Projects</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: 17, maxWidth: 580, margin: '0 auto', lineHeight: 1.8 }}>
            A selection of projects we've proudly delivered — across residential, commercial, industrial, and renovation sectors throughout Pakistan and beyond.
          </p>
        </div>
      </section>

      {/* FILTER */}
      <section style={{ padding: '60px 0 0', background: 'var(--dark)' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 40px', display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setActive(cat)} style={{
              padding: '10px 24px', fontSize: 12, letterSpacing: '0.12em',
              textTransform: 'uppercase', fontWeight: 500, borderRadius: 2,
              border: `1px solid ${active === cat ? 'var(--gold)' : 'var(--border)'}`,
              background: active === cat ? 'var(--gold)' : 'transparent',
              color: active === cat ? 'var(--dark)' : 'var(--text-secondary)',
              transition: 'var(--transition)', cursor: 'pointer',
            }}>{cat}</button>
          ))}
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section style={{ padding: '60px 0 120px', background: 'var(--dark)' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 40px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 2 }}>
            {filtered.map((project, i) => (
              <ProjectCard key={project.title} project={project} delay={i * 60} />
            ))}
          </div>
        </div>
      </section>

      {/* STATS ROW */}
      <section style={{ padding: '80px 0', background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 40px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 0 }}>
          {[
            { num: '200+', label: 'Projects Delivered' },
            { num: '15+', label: 'Years in Industry' },
            { num: '12', label: 'Countries Served' },
            { num: '₨2B+', label: 'Projects Value Managed' },
          ].map(({ num, label }) => (
            <div key={label} style={{ padding: '48px 40px', borderRight: '1px solid var(--border)', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 52, fontWeight: 600, color: 'var(--gold)', lineHeight: 1, marginBottom: 10 }}>{num}</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '100px 0', background: 'var(--dark)', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto', padding: '0 40px' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 4vw, 50px)', fontWeight: 600, marginBottom: 20 }}>
            Your Project Could Be Next
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 16, lineHeight: 1.8, marginBottom: 44 }}>
            Whether it's a small renovation or a landmark commercial build — Prestige Contractors brings world-class consultancy to your doorstep.
          </p>
          <Link to="/contact" style={{
            padding: '15px 40px', background: 'var(--gold)', color: 'var(--dark)',
            fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase',
            fontWeight: 700, borderRadius: 2, display: 'inline-flex', alignItems: 'center', gap: 10, transition: 'var(--transition)',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold-light)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.transform = 'translateY(0)' }}
          >Start Your Project <ArrowRight size={15} /></Link>
        </div>
      </section>
    </div>
  )
}

function ProjectCard({ project, delay }) {
  const [ref, vis] = useInView(0.05)
  const [hovered, setHovered] = useState(false)

  return (
    <div ref={ref} style={{
      background: hovered ? project.color : 'var(--surface)',
      border: `1px solid ${hovered ? 'rgba(200,169,110,0.4)' : 'var(--border)'}`,
      padding: '48px 40px', transition: 'var(--transition)',
      opacity: vis ? 1 : 0, transform: vis ? 'translateY(0)' : 'translateY(24px)',
      transitionDelay: `${delay}ms`,
    }}
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
        <span style={{ padding: '4px 12px', border: '1px solid var(--border)', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', borderRadius: 2 }}>{project.category}</span>
        <span style={{ fontSize: 13, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 6 }}><Calendar size={13} />{project.year}</span>
      </div>
      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 24, fontWeight: 600, marginBottom: 12, lineHeight: 1.2 }}>{project.title}</h3>
      <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.75, marginBottom: 28 }}>{project.desc}</p>
      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', paddingTop: 20, borderTop: '1px solid var(--border)' }}>
        <span style={{ display: 'flex', gap: 6, alignItems: 'center', color: 'var(--text-muted)', fontSize: 13 }}><MapPin size={13} color="var(--gold)" />{project.location}</span>
        <span style={{ display: 'flex', gap: 6, alignItems: 'center', color: 'var(--text-muted)', fontSize: 13 }}><Layers size={13} color="var(--gold)" />{project.area}</span>
      </div>
    </div>
  )
}
