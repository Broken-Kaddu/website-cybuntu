import React from 'react';
import { ArrowRight } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="container mx-auto px-6 py-20 text-center relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyber-neonCyan/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
          Start Your Cybersecurity <br className="hidden md:block" />
          Journey Today
        </h2>
        
        <div className="flex flex-col items-center gap-4">
          <button className="px-10 py-5 bg-gradient-to-r from-cyber-neonCyan to-blue-500 text-black font-bold text-lg rounded-full hover:shadow-[0_0_30px_rgba(0,243,255,0.6)] hover:scale-105 transition-all duration-300 flex items-center gap-2">
            Download Cybuntu
            <span className="text-xs font-normal bg-black/20 px-2 py-0.5 rounded ml-2">Coming Soon</span>
          </button>
          
          <p className="text-slate-500 text-sm mt-4">
            Sign up for the newsletter to get notified when v1.0 drops.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;