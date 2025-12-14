import React, { useEffect, useState } from 'react';
import { ArrowRight, Download, Terminal } from 'lucide-react';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "init_learning_protocol --safe-mode";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 lg:pt-48 px-6 container mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
      
      {/* Left Content */}
      <div className="flex-1 text-center lg:text-left z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-neonCyan/10 border border-cyber-neonCyan/20 text-cyber-neonCyan text-xs font-mono mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-neonCyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-neonCyan"></span>
          </span>
          v1.0 Beta Released
        </div>
        
        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
          Cybuntu — Learn <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-neonCyan to-cyber-neonPurple">
            Cybersecurity
          </span> Without Fear
        </h1>
        
        <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
          A beginner-friendly, hardened Ubuntu OS designed to teach cybersecurity the right way. 
          Stop breaking your computer, start breaking into knowledge.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
          <button className="w-full sm:w-auto px-8 py-4 bg-cyber-neonCyan text-cyber-darker font-bold rounded-lg hover:bg-cyan-300 transition-all hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] flex items-center justify-center gap-2 group">
            <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
            Try Cybuntu
          </button>
          
          <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 hover:border-white/40 transition-all flex items-center justify-center gap-2">
            <Terminal className="w-5 h-5" />
            View on GitHub
          </button>
        </div>
      </div>

      {/* Right Visual - Animated Terminal */}
      <div className="flex-1 w-full max-w-lg lg:max-w-xl perspective-1000">
        <div className="glass-panel rounded-xl shadow-2xl overflow-hidden transform transition-transform hover:scale-[1.02] duration-500 animate-float border-t border-l border-white/10 border-b-4 border-r-4 border-black/30">
          {/* Terminal Header */}
          <div className="bg-slate-900/90 px-4 py-3 flex items-center gap-2 border-b border-white/5">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            <div className="ml-auto text-xs text-slate-500 font-mono">user@cybuntu: ~</div>
          </div>
          
          {/* Terminal Body */}
          <div className="bg-slate-950/90 p-6 min-h-[300px] font-mono text-sm sm:text-base">
            <div className="text-green-400 mb-2">
              <span className="text-blue-400">user@cybuntu</span>:<span className="text-white">~</span>$ {typedText}<span className="animate-pulse">_</span>
            </div>
            
            <div className={`transition-opacity duration-500 ${typedText.length === fullText.length ? 'opacity-100' : 'opacity-0'}`}>
              <div className="text-slate-300 mt-4">
                [+] Initializing Safe Environment... <span className="text-green-400">Done</span>
              </div>
              <div className="text-slate-300">
                [+] Loading Security Tools... <span className="text-green-400">Done</span>
              </div>
              <div className="text-slate-300">
                [+] Hardening Kernel Parameters... <span className="text-green-400">Done</span>
              </div>
              <div className="text-slate-300">
                [+] Launching Interactive Tutorial...
              </div>
              
              <div className="mt-6 p-4 border-l-2 border-cyber-neonPurple bg-cyber-neonPurple/5">
                <p className="text-cyber-neonPurple font-bold">Welcome to Cybuntu!</p>
                <p className="text-slate-400 text-xs mt-1">Ready to learn your first command?</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Grid Behind */}
        <div className="absolute -z-10 top-10 -right-10 w-full h-full border-2 border-dashed border-white/5 rounded-xl"></div>
      </div>
    </section>
  );
};

export default Hero;