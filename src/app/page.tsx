import { WaitlistForm } from '@/components/waitlist-form';

import { Footer } from '@/components/footer';

import { FaqItem } from '@/components/faq-item';

import { PricingSection } from '@/components/pricing-section';



export default function Home() {

  return (

    <>

      <main className="min-h-screen">

        {/* Hero Section */}

        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-emerald-950 dark:to-teal-900 px-4 sm:px-6 lg:px-8">

          <div className="text-center space-y-8 max-w-3xl mx-auto">

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-emerald-800 dark:text-emerald-200 opacity-0 animate-fade-in">

              Your Personal Financial Oasis

            </h1>

            <p className="text-xl md:text-2xl text-emerald-700 dark:text-emerald-300 opacity-0 animate-fade-in [animation-delay:500ms]">

              Take control of your finances with intelligent income allocation

            </p>

            <div className="opacity-0 animate-fade-in [animation-delay:1000ms] pt-4">

              <WaitlistForm />

            </div>

          </div>

        </div>



        {/* Feature Preview Section */}

        <section id="features" className="py-24 bg-white dark:bg-gray-900">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">

              Reimagine Your Relationship with Money

            </h2>

            <div className="grid md:grid-cols-3 gap-12">

              <FeatureCard 

                title="Smart Allocation"

                description="Automatically divide your income into purposeful categories based on your preferences"

                icon="📊"

              />

              <FeatureCard 

                title="Mindful Spending"

                description="Stay aware of your spending patterns and make informed financial decisions"

                icon="🎯"

              />

              <FeatureCard 

                title="Financial Clarity"

                description="Gain crystal-clear insights into where your money goes and take control"

                icon="✨"

              />

            </div>

          </div>

        </section>



        {/* How It Works Section */}

        <section id="how-it-works" className="py-24 bg-emerald-50 dark:bg-gray-800">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">

              How It Works

            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

              <StepCard

                number={1}

                title="Set Your Categories"

                description="Create custom categories for your income allocation"

              />

              <StepCard

                number={2}

                title="Define Percentages"

                description="Assign percentage splits for each category"

              />

              <StepCard

                number={3}

                title="Add Income"

                description="Record your income and watch it automatically distribute"

              />

              <StepCard

                number={4}

                title="Track & Adjust"

                description="Monitor your spending and adjust allocations as needed"

              />

            </div>

          </div>

        </section>



        {/* Pricing Section */}

        <section id="pricing">

          <PricingSection />

        </section>



        {/* FAQ Section */}

        <section id="faq" className="py-24 bg-white dark:bg-gray-900">

          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">

              Frequently Asked Questions

            </h2>

            <p className="text-center text-gray-600 dark:text-gray-400 mb-16">

              Everything you need to know about Project Oasis

            </p>

            <div className="divide-y divide-gray-200 dark:divide-gray-800">

              <FaqItem

                question="How does the percentage-based allocation work?"

                answer="You set custom percentages for different spending categories (e.g., 50% necessities, 30% savings, 20% leisure). When you receive income, it's automatically divided according to these percentages, making budgeting effortless."

              />

              <FaqItem

                question="Can I change my category percentages?"

                answer="Yes! Your financial needs may change over time, and Project Oasis adapts with you. You can adjust your category percentages anytime, and future income will be allocated according to your new preferences."

              />

              <FaqItem

                question="Is my financial data secure?"

                answer="Absolutely. We implement bank-level security measures to protect your sensitive information. Your data is encrypted both in transit and at rest, and we never share your personal information with third parties."

              />

              <FaqItem

                question="What makes Project Oasis different from other budgeting apps?"

                answer="Project Oasis focuses on proactive money management through automated income allocation, rather than just tracking expenses. This approach helps you stick to your financial goals by organizing your money as soon as you receive it."

              />

              <FaqItem

                question="When will the app be available?"

                answer="We're currently in the final stages of development. Join our waitlist to be among the first to know when we launch and receive early access to special features!"

              />

              <FaqItem

                question="Will there be a free version?"

                answer="Yes! We'll offer a free tier with essential features for personal finance management. Premium features will be available for users who want advanced analytics and customization options."

              />

            </div>

          </div>

        </section>

      </main>

      <Footer />

    </>

  );

}



function FeatureCard({ title, description, icon }: { 

  title: string; 

  description: string; 

  icon: string;

}) {

  return (

    <div className="bg-emerald-50 dark:bg-emerald-900/30 rounded-xl p-6 text-center">

      <div className="text-4xl mb-4">{icon}</div>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">

        {title}

      </h3>

      <p className="text-gray-600 dark:text-gray-300">

        {description}

      </p>

    </div>

  );

}



function StepCard({ number, title, description }: {

  number: number;

  title: string;

  description: string;

}) {

  return (

    <div className="relative p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm">

      <div className="absolute -top-4 left-6 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">

        {number}

      </div>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-2 mb-2">

        {title}

      </h3>

      <p className="text-gray-600 dark:text-gray-300">

        {description}

      </p>

    </div>

  );

}


