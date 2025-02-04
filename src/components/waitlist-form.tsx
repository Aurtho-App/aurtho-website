'use client';

import { useState } from 'react';

export function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address');
      return;
    }

    try {
      // TODO: Replace with your actual API endpoint
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Failed to join waitlist');
      }

      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to join waitlist. Please try again later.');
    }
  };

  return (
    <div className="max-w-md w-full mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <div className="flex-grow relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm
                     text-white placeholder-white/60
                     border border-white/20 
                     focus:border-white/40 focus:ring-0 focus:outline-none
                     transition-all duration-200"
            disabled={status === 'loading'}
          />
          {status === 'error' && (
            <p className="absolute -bottom-6 left-0 text-sm text-red-300">
              {errorMessage}
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-8 py-4 bg-white/20 hover:bg-white/30
                   text-white font-light rounded-full
                   backdrop-blur-sm border border-white/20
                   transition-all duration-200
                   disabled:opacity-50 disabled:cursor-not-allowed
                   whitespace-nowrap"
        >
          {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
        </button>
      </form>
      {status === 'success' && (
        <p className="mt-4 text-center text-white/80 font-light">
          Thanks for joining our waitlist! We'll be in touch soon.
        </p>
      )}
    </div>
  );
} 


