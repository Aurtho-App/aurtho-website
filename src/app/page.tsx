import { WaitlistForm } from '@/components/waitlist-form';
import AnimatedBackground from '@/components/animated-background';

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <main className="min-h-screen">
        {/* Hero Section */}
        <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-wide opacity-0 animate-fade-in lowercase" style={{ fontWeight: 300, animationDuration: '1.5s' }}>
              aurtho
            </h1>
            <p className="text-xl md:text-2xl text-white/80 opacity-0 animate-fade-in [animation-delay:500ms] font-light">
              Know your money habits
            </p>
            <div className="opacity-0 animate-fade-in [animation-delay:500ms] pt-4">
              <WaitlistForm />
            </div>
            <p className="text-xl md:text-2xl text-white/80 opacity-0 animate-fade-in [animation-delay:500ms] font-light">
              Coming soon to the App Store
            </p>
          </div>
        </div>
      </main>
    </>
  );
}







