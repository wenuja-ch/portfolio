import { useEffect, useRef } from 'react';

export default function GalaxyBackground({ isDarkMode = true }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Calculate a safe number of particles for performance
    const particleCount = Math.min(Math.floor((width * height) / 6000), 200);
    const particles = [];

    let mouse = { x: -1000, y: -1000 };

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        radius: Math.random() * 2.5 + 0.5,
        color: Math.random() > 0.5 ? '#4ade80' : '#10b981', // Green variations
      });
    }

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseOut = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);

    let animationId;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges gently
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        p.x = Math.max(0, Math.min(p.x, width));
        p.y = Math.max(0, Math.min(p.y, height));

        // Interactive motion with mouse
        const dxMouse = mouse.x - p.x;
        const dyMouse = mouse.y - p.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        
        // Increase interaction radius and force
        if (distMouse < 300) {
          const force = (300 - distMouse) / 300;
          // Stronger push away from the mouse
          p.x -= (dxMouse / distMouse) * force * 8;
          p.y -= (dyMouse / distMouse) * force * 8;
        }

        // Draw particle (ONLY dots, no lines)
        ctx.beginPath();
        
        // Make particles near mouse larger and glow brighter
        if (distMouse < 300) {
           const force = (300 - distMouse) / 300;
           ctx.arc(p.x, p.y, p.radius + (force * 2), 0, Math.PI * 2);
           ctx.fillStyle = '#6ee7b7'; // Brighter green when near mouse
           ctx.shadowBlur = 15;
           ctx.shadowColor = '#6ee7b7';
        } else {
           ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
           ctx.fillStyle = p.color;
           ctx.shadowBlur = 0;
        }
        
        ctx.fill();
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-20 w-full h-full opacity-80"
      style={{ pointerEvents: 'none' }}
    />
  );
}
