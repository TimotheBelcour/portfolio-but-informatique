import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import CompetencePage from './pages/competences/CompetencePage'
import { competences } from './data/competences'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          {competences.map((c) => (
            <Route
              key={c.slug}
              path={`/competences/${c.slug}`}
              element={<CompetencePage competence={c} />}
            />
          ))}
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
