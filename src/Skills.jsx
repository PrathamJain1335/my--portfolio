import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

function Skills() {
  const skillsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      skillsRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, delay: 0.6, ease: 'power2.out' }
    );
  }, []);

  return (
    <section id="skills" ref={skillsRef}>
      <h2>Skills</h2>
      <ul>
        <li>React</li>
        <li>JavaScript (ES6+)</li>
        <li>HTML &amp; CSS</li>
        <li>Vite</li>
        <li>Git &amp; GitHub</li>
        <li>Responsive Design</li>
      </ul>
    </section>
  );
}

export default Skills;
