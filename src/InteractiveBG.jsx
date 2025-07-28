import React, { useRef, useEffect } from 'react';

const PARTICLE_COUNT = 200;
const LINE_DISTANCE = 120;
const PARTICLE_SIZE = 2.4;
const PARTICLE_COLOR = 'rgba(254, 254, 254, 0.75)';
const LINE_COLOR = 'rgba(0, 101, 243, 0.65)';
const REPULSE_DISTANCE = 50;

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function InteractiveBackground() {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const mouse = useRef({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    // Initialize particles
    particles.current = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: random(0, canvas.width),
      y: random(0, canvas.height),
      vx: random(-0.6, 0.6),
      vy: random(-0.6, 0.6)
    }));

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Draw particles
      particles.current.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, PARTICLE_SIZE, 0, Math.PI * 2);
        ctx.fillStyle = PARTICLE_COLOR;
        ctx.fill();
      });
      // Draw lines
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        for (let j = i + 1; j < PARTICLE_COUNT; j++) {
          const p1 = particles.current[i];
          const p2 = particles.current[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < LINE_DISTANCE) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = LINE_COLOR;
            ctx.lineWidth = 1;
            ctx.globalAlpha = Math.max(0, 1 - dist / LINE_DISTANCE);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }
    }

    function animate() {
      for (let p of particles.current) {
        // Mouse interaction: repel particles on hover
        if (mouse.current.x && mouse.current.y) {
          const dx = p.x - mouse.current.x;
          const dy = p.y - mouse.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < REPULSE_DISTANCE) {
            const angle = Math.atan2(dy, dx);
            const force = (REPULSE_DISTANCE - dist) / REPULSE_DISTANCE;
            p.vx += Math.cos(angle) * force * 0.85;
            p.vy += Math.sin(angle) * force * 0.85;
          }
        }
        p.x += p.vx;
        p.y += p.vy;
        // gently keep speed down
        p.vx *= 0.98;
        p.vy *= 0.98;
        // screen bounce
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        p.x = Math.max(0, Math.min(p.x, canvas.width));
        p.y = Math.max(0, Math.min(p.y, canvas.height));
      }
      draw();
      requestAnimationFrame(animate);
    }

    animate();

    function handleMouseMove(e) {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    }
    function handleMouseLeave() {
      mouse.current.x = null;
      mouse.current.y = null;
    }

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="particles-canvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -2,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none', // lets user interact with page normally
        background: '#101820',    
      }}
    />
  );
}

export default InteractiveBackground;
