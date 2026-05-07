import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Video, Building2, HardHat, Ruler, BarChart3, ShieldCheck, FileText, Wrench, TreePine, Layers, PhoneCall } from 'lucide-react'

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
  {
    icon: Video,
    title: 'Online Consultation',
    desc: 'Get expert construction advice from anywhere in the world. Our engineers and consultants are available via video call for project reviews, feasibility assessments, design critiques, and technical Q&A sessions.',
    features: ['Video call sessions (Zoom/Meet/Teams)', 'Project feasibility review', 'Design & drawing critique', 'Technical Q&A', 'Written consultation reports', 'Follow-up support'],
    tag: 'Most Popular',
  },
  {
    icon: Building2,
    title: 'Structural Engineering',
    desc: 'Comprehensive structural analysis and design services for residential, commercial, and industrial buildings. We ensure safety, compliance, and cost-efficiency in every structural solution.',
    features: ['Structural analysis & design', 'Foundation engineering', 'Load calculations', 'Seismic & wind design', 'Structural drawings', 'Peer review services'],
  },
  {
    icon: HardHat,
    title: 'Project Management',
    desc: 'End-to-end project oversight that keeps your construction on schedule and within budget. We coordinate contractors, manage timelines, and ensure quality at every phase.',
    features: ['Project scheduling (Gantt/CPM)', 'Budget management', 'Contractor coordination', 'Progress reporting', 'Risk management', 'Handover & closeout'],
  },
  {
    icon: Ruler,
    title: 'Architectural Design & Planning',
    desc: 'Creative and functional architectural solutions for your space. From conceptual layouts to detailed construction drawings, we turn your vision into buildable plans.',
    features: ['Concept design & layouts', 'Space optimization', '2D & 3D drawings', 'Construction documents', 'Permit drawings', 'Interior space planning'],
  },
  {
    icon: BarChart3,
    title: 'Cost Estimation & BOQ',
    desc: 'Accurate cost estimation and Bill of Quantities preparation to ensure you know exactly what your project will cost — before breaking ground.',
    features: ['Quantity surveying', 'BOQ preparation', 'Material cost analysis', 'Labour estimation', 'Tender document support', 'Value engineering'],
  },
  {
    icon: ShieldCheck,
    title: 'Quality Assurance',
    desc: 'Rigorous quality control inspections and testing to ensure construction meets design specifications and industry standards.',
    features: ['Site inspections', 'Material testing oversight', 'Defect identification', 'Compliance checking', 'QA/QC reports', 'Punch list management'],
  },
  {
    icon: FileText,
    title: 'Building Permits & Approvals',
    desc: 'We handle all the paperwork — from permit applications to authority approvals — so your project complies with local building codes and regulations.',
    features: ['Permit application preparation', 'Authority liaison', 'Code compliance review', 'NOC assistance', 'Documentation support', 'Regulatory guidance'],
  },
  {
    icon: Wrench,
    title: 'Renovation & Retrofitting',
    desc: 'Expert consultancy for renovation, extension, and retrofitting projects. We assess existing structures and develop practical upgrade strategies.',
    features: ['Structural assessment', 'Renovation planning', 'Extension design', 'Retrofitting solutions', 'Seismic upgrades', 'Energy efficiency review'],
  },
  {
    icon: TreePine,
    title: 'Landscape & Site Planning',
    desc: 'Comprehensive site planning and landscape consultancy to maximize the functionality and aesthetics of your outdoor spaces.',
    features: ['Site analysis', 'Landscape design', 'Drainage planning', 'Hardscape layouts', 'Utility coordination', 'Site development plans'],
  },
]

const process = [
  { step: '01', title: 'Initial Inquiry', desc: 'Reach out via our contact form or book a call. Tell us about your project — scope, location, and goals.' },
  { step: '02', title: 'Consultation', desc: 'We schedule a detailed consultation (online or in-person) to understand your requirements and assess the project.' },
  { step: '03', title: 'Proposal', desc: 'You receive a tailored proposal with scope of work, timeline, and transparent pricing.' },
  { step: '04', title: 'Delivery', desc: 'Our team gets to work — delivering expert consultancy with regular updates and full transparency.' },
]

export default function Services() {
  const [heroRef, heroVis] = useInView(0.05)
  const [procRef, procVis] = useInView()

  return (
    <div>
      {/* HERO */}
      <section ref={heroRef} style={{
        padding: '180px 0 100px',
        background: 'linear-gradient(180deg, var(--darker) 0%, var(--dark) 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <svg width="100%" height="100%" style={{ opacity: 0.03 }}>
            <defs><pattern id="grid2" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="#C8A96E" strokeWidth="0.5"/></pattern></defs>
            <rect width="100%" height="100%" fill="url(#grid2)" />
          </svg>
        </div>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 40px', textAlign: 'center', opacity: heroVis ? 1 : 0, transform: heroVis ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.7s ease' }}>
          <p style={{ fontSize: 11, letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: 16 }}>What We Offer</p>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(44px, 6vw, 80px)', fontWeight: 600, lineHeight: 1.05, marginBottom: 24 }}>Our Services</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: 17, maxWidth: 600, margin: '0 auto', lineHeight: 1.8 }}>
            Comprehensive construction consultancy services — from first concept to final handover. Available online and on-site across Pakistan and worldwide.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section style={{ padding: '100px 0', background: 'var(--dark)' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 40px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 2 }}>
            {services.map(({ icon: Icon, title, desc, features, tag }, i) => (
              <ServiceCard key={title} Icon={Icon} title={title} desc={desc} features={features} tag={tag} delay={i * 60} />
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ padding: '100px 0', background: 'var(--surface)' }} ref={procRef}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 40px' }}>
          <div style={{ textAlign: 'center', marginBottom: 70 }}>
            <p style={{ fontSize: 11, letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: 14 }}>How It Works</p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 600 }}>Our Process</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 0, position: 'relative' }}>
            {process.map(({ step, title, desc }, i) => (
              <div key={step} style={{
                padding: '44px 36px', border: '1px solid var(--border)', position: 'relative',
                opacity: procVis ? 1 : 0, transform: procVis ? 'translateY(0)' : 'translateY(24px)',
                transition: `all 0.6s ease ${i * 100}ms`,
              }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 64, fontWeight: 700, color: 'rgba(200,169,110,0.12)', lineHeight: 1, marginBottom: 16 }}>{step}</div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 22, fontWeight: 600, marginBottom: 12, color: 'var(--gold)' }}>{title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.75 }}>{desc}</p>
                {i < process.length - 1 && (
                  <div style={{ position: 'absolute', right: -1, top: '50%', transform: 'translateY(-50%)', width: 2, height: 40, background: 'var(--gold)', opacity: 0.3, display: 'none' }} className="connector" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ONLINE CONSULTATION CTA */}
      <section style={{ padding: '100px 0', background: 'var(--dark)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 40px', textAlign: 'center' }}>
          <PhoneCall size={40} color="var(--gold)" style={{ margin: '0 auto 24px' }} />
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(30px, 4vw, 50px)', fontWeight: 600, marginBottom: 20 }}>
            Ready to Get Started?
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 16, lineHeight: 1.8, marginBottom: 44 }}>
            Book a free 30-minute consultation call with our team. We'll discuss your project, answer your questions, and outline how Prestige Contractors can help you build with confidence.
          </p>
          <Link to="/contact" style={{
            padding: '16px 44px', background: 'var(--gold)',
            color: 'var(--darkest)', fontSize: 13, letterSpacing: '0.12em',
            textTransform: 'uppercase', fontWeight: 700, borderRadius: 2,
            display: 'inline-flex', alignItems: 'center', gap: 10, transition: 'var(--transition)',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold-light)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.transform = 'translateY(0)' }}
          >Book Free Consultation <ArrowRight size={15} /></Link>
        </div>
      </section>
    </div>
  )
}

function ServiceCard({ Icon, title, desc, features, tag, delay }) {
  const [ref, vis] = useInView(0.05)
  const [hovered, setHovered] = useState(false)
  return (
    <div ref={ref} style={{
      background: hovered ? 'var(--surface)' : 'var(--surface)',
      padding: '48px 40px', border: `1px solid ${hovered ? 'rgba(200,169,110,0.4)' : 'var(--border)'}`,
      transition: 'var(--transition)', cursor: 'default',
      opacity: vis ? 1 : 0, transform: vis ? 'translateY(0)' : 'translateY(28px)',
      transitionDelay: `${delay}ms`, position: 'relative',
    }}
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    >
      {tag && (
        <div style={{ position: 'absolute', top: 20, right: 20, padding: '4px 12px', background: 'var(--gold)', color: 'var(--darkest)', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 700, borderRadius: 2 }}>{tag}</div>
      )}
      <div style={{ width: 54, height: 54, border: `1px solid ${hovered ? 'rgba(200,169,110,0.5)' : 'var(--border)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 28, borderRadius: 2, transition: 'var(--transition)' }}>
        <Icon size={22} color="var(--gold)" />
      </div>
      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 24, fontWeight: 600, marginBottom: 14 }}>{title}</h3>
      <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.8, marginBottom: 28 }}>{desc}</p>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {features.map(f => (
          <li key={f} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--gold)', flexShrink: 0, opacity: 0.8 }} />
            <span style={{ color: 'var(--text-secondary)', fontSize: 13 }}>{f}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
