import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import BackgroundBlobs from './components/BackgroundBlobs';

import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="relative min-h-screen">
      <CustomCursor />
      <div className="grain-overlay"></div>
      <BackgroundBlobs />
      <Navbar />
      
      <main className="flex flex-col">
        <section id="home" className="sticky-section"><Home /></section>
        <section id="about" className="sticky-section"><About /></section>
        <section id="skills" className="sticky-section"><Skills /></section>
        <section id="projects" className="sticky-section"><Projects /></section>
        <section id="experience" className="sticky-section"><Experience /></section>
        <section id="contact" className="sticky-section"><Contact /></section>
      </main>
    </div>
  );
}

export default App;
