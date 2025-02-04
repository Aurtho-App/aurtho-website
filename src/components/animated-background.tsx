'use client';

import React, { useEffect, useState } from 'react';

const AnimatedBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{
          zIndex: 0,
          backgroundImage: `
            radial-gradient(
              circle at ${mousePosition.x}% ${mousePosition.y}%,
              rgba(81, 89, 154, 0.85) 0%,
              rgba(81, 89, 154, 0.4) 25%,
              rgba(81, 89, 154, 0) 50%
            ),
            radial-gradient(
              circle at ${100 - mousePosition.x}% ${100 - mousePosition.y}%,
              rgba(36, 76, 60, 0.85) 0%,
              rgba(36, 76, 60, 0.4) 25%,
              rgba(36, 76, 60, 0) 50%
            ),
            linear-gradient(
              135deg,
              #244C3C 0%,
              #51599A 100%
            )
          `,
          transition: 'background-position 0.3s ease-out',
        }}
      />
      <div
        className="fixed pointer-events-none blur-md"
        style={{
          zIndex: 1,
          left: cursorPosition.x,
          top: cursorPosition.y,
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle at center, rgba(81, 89, 154, 0.15) 0%, transparent 70%)',
          transition: 'all 0.15s ease-out',
          mixBlendMode: 'soft-light',
        }}
      />
      <div
        className="fixed pointer-events-none blur-[3px]"
        style={{
          zIndex: 1,
          left: cursorPosition.x,
          top: cursorPosition.y,
          transform: 'translate(-50%, -50%)',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle at center, rgba(36, 76, 60, 0.2) 0%, transparent 70%)',
          transition: 'all 0.1s ease-out',
          mixBlendMode: 'soft-light',
        }}
      />
    </>
  );
};

export default AnimatedBackground; 