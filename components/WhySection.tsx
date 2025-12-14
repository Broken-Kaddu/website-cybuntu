import React from 'react';
import { ShieldCheck, Cpu, Box, GraduationCap } from 'lucide-react';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string; delay: number }> = ({ icon, title, description, delay }) => (
  <div 
    className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-neonCyan/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-cyber-neonCyan/10 transition-colors"></div>
    
    <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-cyber-neonCyan mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/10 group-hover:border-cyber-neonCyan/50">
      {icon}
    </div>
    
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-slate-400 leading-relaxed text-sm">
      {description}
    </p>
  </div>
);

const WhySection: React.FC = () => {
  return (
    <section id="why" className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Cybuntu?</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Most hacking distros assume you're already an expert. We assume you want to become one.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <FeatureCard 
          delay={0}
          icon={<Cpu className="w-6 h-6" />}
          title="Ubuntu Based"
          description="Built on the stable, familiar foundation of Ubuntu LTS. If you can use Linux, you can use Cybuntu."
        />
        <FeatureCard 
          delay={100}
          icon={<ShieldCheck className="w-6 h-6" />}
          title="Security Hardened"
          description="Pre-configured with CIS benchmarks. Learn on a system that defends itself by default."
        />
        <FeatureCard 
          delay={200}
          icon={<Box className="w-6 h-6" />}
          title="Beginner Safe"
          description="Dangerous tools are sandboxed or require explicit activation. Make mistakes without breaking your OS."
        />
        <FeatureCard 
          delay={300}
          icon={<GraduationCap className="w-6 h-6" />}
          title="Learn Concepts"
          description="We focus on the 'Why' and 'How', not just running scripts. Interactive guides included."
        />
      </div>
    </section>
  );
};

export default WhySection;