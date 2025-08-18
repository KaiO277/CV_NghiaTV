import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/Home/index.jsx'; // import file mới
import AboutSection from './pages/AboutSection';
import ExperienceSection from './pages/ExperienceSection';
import ProjectsSection from './pages/ProjectsSection';
import ContactSection from './pages/ContactSection';
import ProjectDetail from './pages/ProjectDetail/index.jsx'; // import file mới
import './App.css'; // import file mới
import './i18n.js'

function App() {
  return (
    <div className="bg-gray-50 overflow-x-hidden max-w-screen">
    <Router>
      <Header />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/experience" element={<ExperienceSection />} />
          <Route path="/projects" element={<ProjectsSection />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
      </main>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
