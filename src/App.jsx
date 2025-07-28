import './App.css';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact.jsx';
import Photograph from './Photograph.jsx'
import Background from './Background.jsx';
import Cursor from './Cursor.jsx'
import InteractiveBackground from './InteractiveBG.jsx';

function App() {
  return (
    <div>

      <InteractiveBackground/>
      {/* <Background /> */}
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
      
      <main>
        <Cursor />
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
