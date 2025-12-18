import React from 'react';
import { Github, Code2, Users } from 'lucide-react';

const CommunitySection: React.FC = () => {
  return (
    <section id="community" className="container mx-auto px-6">
      <div className="glass-panel p-1 border-t border-b border-white/5 md:border md:rounded-3xl bg-cyber-dark/50">
        <div className="grid grid-cols-1 md:grid-cols-2">
          
          <div className="p-8 md:p-16 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/10">
            <div className="inline-flex items-center gap-2 mb-6 text-slate-400 font-mono text-sm">
              <Code2 className="w-4 h-4" />
              <span>OPEN SOURCE</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Built in Public.<br />
              Powered by Community.
            </h2>
            <p className="text-slate-400 mb-8">
              Cybuntu is 100% open source. Inspect the code, contribute features, or build your own fork. 
              We believe security tools should be transparent.
            </p>
            <a 
              href="#" 
              className="inline-flex items-center gap-3 px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-slate-200 transition-colors w-fit"
            >
              <Github className="w-5 h-5" />
              Explore the Code on GitHub
            </a>
          </div>

          <div className="p-8 md:p-16 flex flex-col items-center justify-center bg-white/5 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>
            
            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
               <div className="bg-cyber-dark p-6 rounded-2xl border border-white/10 text-center">
                  <div className="text-3xl font-bold text-white mb-1">GROWING</div>
                  <div className="text-xs text-slate-500 font-mono">STARS</div>
               </div>
               <div className="bg-cyber-dark p-6 rounded-2xl border border-white/10 text-center">
                  <div className="text-3xl font-bold text-white mb-1">GROWING</div>
                  <div className="text-xs text-slate-500 font-mono">CONTRIBUTORS</div>
               </div>
               <div className="col-span-2 bg-gradient-to-r from-cyber-neonCyan/20 to-cyber-neonPurple/20 p-6 rounded-2xl border border-white/10 flex items-center justify-center gap-4">
                  <Users className="w-6 h-6 text-white" />
                  <span className="text-white font-bold">Join the Discord</span>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
