'use client';

import { useState } from 'react';
import { z } from 'zod';

// Share the same validation schema
const emailSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address')
    .transform(email => email.toLowerCase().trim()),
});

export function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate only on form submission
    const result = emailSchema.safeParse({ email });
    if (!result.success) {
      setStatus('error');
      setMessage(result.error.errors[0].message);
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      setStatus('success');
      setMessage(data.message);
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Failed to join waitlist');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md w-full mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          aria-label="Email address"
          className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 
                   bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                   focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold 
                   rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
        </button>
      </div>
      {message && (
        <p className={`mt-3 text-sm ${status === 'error' ? 'text-red-500' : 'text-emerald-500'}`}>
          {message}
        </p>
      )}
    </form>
  );
} 


