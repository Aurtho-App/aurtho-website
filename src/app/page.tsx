import { WaitlistForm } from '@/components/waitlist-form';

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        {/* Hero Section */}
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-emerald-950 dark:to-teal-900 px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-emerald-800 dark:text-emerald-200 opacity-0 animate-fade-in">
              Aurtho
            </h1>
            <p className="text-xl md:text-2xl text-emerald-700 dark:text-emerald-300 opacity-0 animate-fade-in [animation-delay:500ms]">
              Know your money habits
            </p>
            <div className="opacity-0 animate-fade-in [animation-delay:1000ms] pt-4">
              <WaitlistForm />
            </div>
            <p className="text-xl md:text-2xl text-emerald-700 dark:text-emerald-300 opacity-0 animate-fade-in [animation-delay:500ms]">
              Coming soon to the App Store
            </p>
          </div>
        </div>
      </main>
    </>
  );
}







