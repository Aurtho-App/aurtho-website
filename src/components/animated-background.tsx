'use client';

import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden">
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #244C3C 0%, #51599A 100%)',
          zIndex: 0,
        }}
      />
      
      {/* Subtle gradient shifts */}
      <div 
        className="absolute inset-0"
        style={{
          zIndex: 1,
          animation: 'moveFirst 25s ease-in-out infinite',
          background: `
            radial-gradient(100% 100% at 50% 50%, rgba(81, 89, 154, 0.15) 0%, rgba(81, 89, 154, 0) 70%),
            radial-gradient(100% 100% at -20% 120%, rgba(36, 76, 60, 0.15) 0%, rgba(36, 76, 60, 0) 70%)
          `,
          filter: 'blur(40px)',
          transform: 'translate3d(0, 0, 0)',
          mixBlendMode: 'soft-light',
        }}
      />
      
      <div 
        className="absolute inset-0"
        style={{
          zIndex: 2,
          animation: 'moveSecond 30s ease-in-out infinite',
          background: `
            radial-gradient(100% 100% at 120% -20%, rgba(81, 89, 154, 0.15) 0%, rgba(81, 89, 154, 0) 70%),
            radial-gradient(100% 100% at 30% 80%, rgba(36, 76, 60, 0.15) 0%, rgba(36, 76, 60, 0) 70%)
          `,
          filter: 'blur(40px)',
          transform: 'translate3d(0, 0, 0)',
          mixBlendMode: 'soft-light',
        }}
      />

      <style jsx>{`
        @keyframes moveFirst {
          0% {
            transform: translate3d(-20%, -20%, 0) scale(1.1);
          }
          25% {
            transform: translate3d(20%, 0%, 0) scale(1);
          }
          50% {
            transform: translate3d(10%, 20%, 0) scale(1.05);
          }
          75% {
            transform: translate3d(-10%, 10%, 0) scale(0.95);
          }
          100% {
            transform: translate3d(-20%, -20%, 0) scale(1.1);
          }
        }

        @keyframes moveSecond {
          0% {
            transform: translate3d(20%, 20%, 0) scale(0.95);
          }
          25% {
            transform: translate3d(-10%, -10%, 0) scale(1.05);
          }
          50% {
            transform: translate3d(-20%, 20%, 0) scale(1);
          }
          75% {
            transform: translate3d(10%, -20%, 0) scale(1.1);
          }
          100% {
            transform: translate3d(20%, 20%, 0) scale(0.95);
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground; 