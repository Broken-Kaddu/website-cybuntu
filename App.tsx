import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhySection from './components/WhySection';
import InsideSection from './components/InsideSection';
import BeginnersSection from './components/BeginnersSection';
import CommunitySection from './components/CommunitySection';
import Footer from './components/Footer';
import FinalCTA from './components/FinalCTA';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-cyber-dark text-slate-200 selection:bg-cyber-neonCyan selection:text-cyber-darker relative">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 cyber-grid opacity-30 h-[80vh]"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyber-neonPurple opacity-10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyber-neonCyan opacity-10 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <main className="flex flex-col gap-24 pb-24">
          <Hero />
          <WhySection />
          <InsideSection />
          <BeginnersSection />
          <CommunitySection />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;