import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Solutions from './pages/Solutions'
import CaseStudies from './pages/CaseStudies'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import ThankYou from './pages/ThankYou'
import Admin from './pages/Admin'

function PublicRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter basename="/overdimeTechnologies-webpage">
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/*" element={
          <>
            <Navbar />
            <main style={{ paddingTop: 100 }}>
              <PublicRoutes />
            </main>
            <Footer />
          </>
        } />
      </Routes>
    </BrowserRouter>
  )
}
