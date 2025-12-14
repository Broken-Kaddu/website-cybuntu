import React from 'react';
import { Terminal, Twitter, Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-black/50 backdrop-blur-sm pt-12 pb-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-cyber-neonCyan rounded">
              <Terminal className="w-4 h-4 text-black" />
            </div>
            <span className="text-lg font-bold text-white tracking-tight">CYBUNTU</span>
          </div>
          
          <div className="flex gap-6">
             <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
             <a href="#" className="text-slate-400 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
             <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 border-t border-white/5 pt-8">
          <p>&copy; {new Date().getFullYear()} Cybuntu Project. Open Source (MIT License).</p>
          <div className="flex gap-4 mt-4 md:mt-0 font-mono">
            <span className="text-cyber-neonGreen">Learn.</span>
            <span className="text-cyber-neonCyan">Break.</span>
            <span className="text-cyber-neonPurple">Defend.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;