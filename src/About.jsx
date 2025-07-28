import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      aboutRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power2.out' }
    );
  }, []);

  return (
    <section id="about" ref={aboutRef}>
      <h2>About Me</h2>
      <p>
        Hi, I’m <strong>Pratham Jain</strong>, a passionate web developer specialized in building interactive and responsive React apps.
      </p>
    </section>
  );
}

export default About;
