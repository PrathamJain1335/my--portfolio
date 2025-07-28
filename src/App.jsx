import './App.css';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact.jsx';
import Photograph from './Photograph.jsx'

function App() {
  return (
    <div>
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
      
      <main>
        <Photograph />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
