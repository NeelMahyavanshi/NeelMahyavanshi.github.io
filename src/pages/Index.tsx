import Scene3D from '@/components/Scene3D';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Scene3D />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
