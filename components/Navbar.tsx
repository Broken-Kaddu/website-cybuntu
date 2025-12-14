import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X, Github } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-cyber-dark/80 backdrop-blur-md border-white/10 py-3' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="p-2 bg-gradient-to-br from-cyber-neonCyan to-blue-600 rounded-lg group-hover:shadow-[0_0_15px_rgba(0,243,255,0.5)] transition-shadow">
            <Terminal className="w-5 h-5 text-black font-bold" />
          </div>
          <span className="text-xl font-bold font-mono tracking-tighter text-white">
            CYBUNTU
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#why" className="text-sm font-medium text-slate-400 hover:text-cyber-neonCyan transition-colors">Why Cybuntu</a>
          <a href="#features" className="text-sm font-medium text-slate-400 hover:text-cyber-neonCyan transition-colors">Features</a>
          <a href="#community" className="text-sm font-medium text-slate-400 hover:text-cyber-neonCyan transition-colors">Community</a>
          <a 
            href="#" 
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 hover:border-cyber-neonCyan/50 transition-all text-sm font-medium"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-cyber-dark border-b border-white/10 p-6 md:hidden flex flex-col gap-4 animate-in slide-in-from-top-2">
          <a href="#why" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-300 hover:text-cyber-neonCyan">Why Cybuntu</a>
          <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-300 hover:text-cyber-neonCyan">Features</a>
          <a href="#community" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-300 hover:text-cyber-neonCyan">Community</a>
          <a href="#" className="flex items-center gap-2 text-cyber-neonCyan">
            <Github className="w-4 h-4" /> GitHub
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;