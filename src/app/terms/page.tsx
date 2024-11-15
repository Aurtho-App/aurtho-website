import Link from 'next/link';

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Terms of Service
        </h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              By accessing or using Project Oasis, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              2. Use License
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Project Oasis grants you a limited, non-exclusive, non-transferable, and revocable license to use our service for personal, non-commercial purposes, subject to these Terms of Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              3. Account Terms
            </h2>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li>You must provide accurate and complete information when creating an account</li>
              <li>You are responsible for maintaining the security of your account</li>
              <li>You must notify us immediately of any unauthorized access or use</li>
              <li>We reserve the right to terminate accounts at our discretion</li>
            </ul>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <Link 
            href="/"
            className="text-emerald-600 dark:text-emerald-500 hover:text-emerald-700 dark:hover:text-emerald-400"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
} 