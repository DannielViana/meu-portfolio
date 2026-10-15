import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects.tsx';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact.tsx';

function App() {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-100 selection:bg-blue-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
      </main>
      <Contact />
    </div>
  );
}

export default App;