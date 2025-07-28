import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

function Projects() {
  const projectsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      projectsRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, delay: 0.3, ease: 'power2.out' }
    );
  }, []);

  return (
    <section id="projects" ref={projectsRef}>
      <h2>Projects</h2>
      <ul>
        <li>
          <strong>Portfolio Site</strong> <br />
          <span>
            My personal website built with React and Vite.{' '}
            <a href="https://your-portfolio-link.com" target="_blank" rel="noopener noreferrer">View Live</a> |{' '}
            <a href="https://github.com/your-username/portfolio" target="_blank" rel="noopener noreferrer">Code</a>
          </span>
        </li>
        <li>
          <strong>ToDo App</strong> <br />
          <span>
            A simple and elegant task manager.{' '}
            <a href="https://your-todo-link.com" target="_blank" rel="noopener noreferrer">View Live</a> |{' '}
            <a href="https://github.com/your-username/todo-app" target="_blank" rel="noopener noreferrer">Code</a>
          </span>
        </li>
      </ul>
    </section>
  );
}

export default Projects;
