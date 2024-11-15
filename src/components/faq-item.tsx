'use client';

import { useState } from 'react';

export function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 dark:border-gray-800">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="py-6 w-full flex justify-between items-center text-left"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white pr-8">
          {question}
        </h3>
        <div 
          className={`transform transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-emerald-600 dark:text-emerald-400"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      <div 
        className={`grid transition-all duration-200 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-gray-600 dark:text-gray-400 pb-6">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
} 