import { useRef, useState } from 'react';

export default function TiltCard({ children, className }) {
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation. Max rotation is 15 degrees.
    const rotateX = ((y - centerY) / centerY) * -15; 
    const rotateY = ((x - centerX) / centerX) * 15;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => setIsHovered(true);
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(${isHovered ? 1.05 : 1}, ${isHovered ? 1.05 : 1}, 1)`,
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Glare effect */}
      <div 
        className="absolute inset-0 z-10 rounded-3xl pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${rotation.y * 5 + 50}% ${rotation.x * -5 + 50}%, rgba(255,255,255,0.3) 0%, transparent 50%)`,
          opacity: isHovered ? 1 : 0
        }}
      />
      
      {/* Content wrapper with 3D pop */}
      <div 
        className="h-full w-full"
        style={{ transform: isHovered ? 'translateZ(30px)' : 'translateZ(0)', transition: 'transform 0.3s ease-out' }}
      >
        {children}
      </div>
    </div>
  );
}
