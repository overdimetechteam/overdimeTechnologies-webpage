import { BrowserRouter, Routes, Route } from 'react-router-dom'
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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Admin is fully standalone — no Navbar/Footer */}
        <Route path="/admin" element={<Admin />} />

        {/* Public site */}
        <Route path="/*" element={
          <>
            <Navbar />
            <main style={{ paddingTop: 100 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/thank-you" element={<ThankYou />} />
              </Routes>
            </main>
            <Footer />
          </>
        } />
      </Routes>
    </BrowserRouter>
  )
}
