'use client';

import { useEffect, useState } from 'react';

interface Circle {
  x: number;
  y: number;
  radius: number;
  color: string;
  vx: number;
  vy: number;
}

interface CircleBackgroundProps {
  numberOfCircles?: number;
  minRadius?: number;
  maxRadius?: number;
  blurStrength?: number;
  opacity?: number;
  speed?: number;
}

export function CircleBackground({ 
  numberOfCircles = 50,
  minRadius = 50,
  maxRadius = 300,
  blurStrength = 100,
  opacity = 0.6,
  speed = 1
}: CircleBackgroundProps) {
  const [circles, setCircles] = useState<Circle[]>([]);

  useEffect(() => {
    const generateCircles = () => {
      const newCircles: Circle[] = [];
      const colors = ['#244C3C', '#51599A'];
      
      for (let i = 0; i < numberOfCircles; i++) {
        const vx = (Math.random() - 0.5) * 0.1 * speed;
        const vy = (Math.random() - 0.5) * 0.1 * speed;
        
        newCircles.push({
          x: Math.random() * 100,
          y: Math.random() * 100,
          radius: Math.random() * (maxRadius - minRadius) + minRadius,
          color: colors[i % 2],
          vx,
          vy,
        });
      }
      setCircles(newCircles);
    };

    generateCircles();

    let animationFrameId: number;
    const animate = () => {
      setCircles(prevCircles => 
        prevCircles.map(circle => {
          let newX = circle.x + circle.vx;
          let newY = circle.y + circle.vy;
          let newVx = circle.vx;
          let newVy = circle.vy;

          // Let the circle wrap around until its center crosses the edge
          if (newX < 0) {
            newX = 0;
            newVx = Math.abs(circle.vx); // Bounce back
          }
          if (newX > 100) {
            newX = 100;
            newVx = -Math.abs(circle.vx); // Bounce back
          }
          if (newY < 0) {
            newY = 0;
            newVy = Math.abs(circle.vy); // Bounce back
          }
          if (newY > 100) {
            newY = 100;
            newVy = -Math.abs(circle.vy); // Bounce back
          }

          return {
            ...circle,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy,
          };
        })
      );
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      generateCircles();
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [numberOfCircles, minRadius, maxRadius, speed]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {circles.map((circle, index) => (
        <div
          key={index}
          className="absolute rounded-full transition-transform"
          style={{
            left: `${circle.x}%`,
            top: `${circle.y}%`,
            width: `${circle.radius}px`,
            height: `${circle.radius}px`,
            transform: 'translate(-50%, -50%)',
            backgroundColor: circle.color,
            filter: `blur(${blurStrength}px)`,
            opacity: opacity,
          }}
        />
      ))}
    </div>
  );
} 