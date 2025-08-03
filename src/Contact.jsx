import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

function Contact() {
  const contactRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      contactRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, delay: 0.9, ease: 'power2.out' }
    );
  }, []);

  return (
    <section id="contact" ref={contactRef}>
      <h2>Contact</h2>
      <p>
        Email: <a href="mailto:prathamjain1335@gmail.com">prathamjain1335@gmail.com</a>
      </p>
    </section>
  );
}

export default Contact;
