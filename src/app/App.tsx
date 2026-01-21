import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from '@/app/components/Navigation';
import { Home } from '@/app/pages/Home';
import { About } from '@/app/pages/About';
import { Education } from '@/app/pages/Education';
import { Achievements } from '@/app/pages/Achievements';
import { Project } from '@/app/pages/Project';
import { Contact } from '@/app/pages/Contact';
import { Footer } from '@/app/components/Footer';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#E8D8C4] flex flex-col justify-between">
        <div>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
