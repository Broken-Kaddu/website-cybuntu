import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const BeginnersSection: React.FC = () => {
  return (
    <section className="container mx-auto px-6 py-12">
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
        <span className="text-cyber-neonGreen font-mono text-sm tracking-widest uppercase mb-4">No Experience Needed</span>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
          Perfect for <span className="text-cyber-neonGreen decoration-wavy underline decoration-cyber-neonGreen/30 underline-offset-8">Beginners</span>
        </h2>
        
        <p className="text-lg text-slate-400 mb-12 leading-relaxed">
          Traditional security distros like Kali are powerful, but they can be overwhelming. 
          Cybuntu bridges the gap. We strip away the complexity so you can focus on learning.
        </p>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Zero Knowledge Required", desc: "Start from scratch. Our onboard tutorials guide you through your first scan." },
            { title: "Step-by-Step Growth", desc: "Unlocks advanced tools as you complete modules. Don't get lost in the menu." },
            { title: "Student Friendly", desc: "Lightweight and runs great on older laptops or in a Virtual Machine." }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center p-6 rounded-xl hover:bg-white/5 transition-colors">
              <div className="mb-4 text-cyber-neonGreen">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeginnersSection;