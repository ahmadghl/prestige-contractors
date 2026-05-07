import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

function NotFound() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '40px' }}>
      <div style={{ fontFamily: 'var(--font-serif)', fontSize: 120, fontWeight: 600, color: 'rgba(200,169,110,0.15)', lineHeight: 1 }}>404</div>
      <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 36, fontWeight: 600, marginBottom: 16, marginTop: -20 }}>Page Not Found</h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: 40 }}>The page you are looking for does not exist.</p>
      <a href="/" style={{ padding: '13px 32px', background: 'var(--gold)', color: 'var(--dark)', fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700, borderRadius: 2 }}>Go Home</a>
    </div>
  )
}
