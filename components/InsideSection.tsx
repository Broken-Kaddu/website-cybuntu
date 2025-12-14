import React from 'react';
import { Lock, Search, Shield, Zap } from 'lucide-react';

const InsideSection: React.FC = () => {
  return (
    <section id="features" className="container mx-auto px-6">
      <div className="glass-panel rounded-3xl p-8 md:p-12 border border-white/10 bg-gradient-to-br from-white/5 to-transparent relative overflow-hidden">
        {/* Glow Effects inside container */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-neonPurple to-transparent opacity-50"></div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="flex-1 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              What’s Inside <span className="text-cyber-neonPurple">Cybuntu</span>
            </h2>
            <p className="text-slate-400 text-lg">
              A curated suite of tools and configurations designed to take you from "Hello World" to "Root Access".
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="mt-1">
                  <Shield className="w-6 h-6 text-cyber-neonGreen" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Hardened Kernel</h4>
                  <p className="text-slate-400 text-sm mt-1">Memory protection and restricted access enabled out-of-the-box.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="mt-1">
                  <Zap className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Curated Tools</h4>
                  <p className="text-slate-400 text-sm mt-1">Nmap, Wireshark, and Burp Suite pre-installed with beginner configurations.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1">
                  <Lock className="w-6 h-6 text-cyber-neonCyan" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Privacy First</h4>
                  <p className="text-slate-400 text-sm mt-1">Telemetry disabled. Tor and VPN support baked into the network manager.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1">
                  <Search className="w-6 h-6 text-pink-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Safe Sandbox</h4>
                  <p className="text-slate-400 text-sm mt-1">Dedicated container environments for running malware analysis safely.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side UI Mockup */}
          <div className="flex-1 w-full relative">
            <div className="relative z-10 bg-slate-900 rounded-lg shadow-2xl border border-slate-700 overflow-hidden">
               {/* Mock Window Header */}
               <div className="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 text-center text-xs text-slate-400 font-mono">Cybuntu Dashboard</div>
               </div>
               
               {/* Mock Content */}
               <div className="p-6 grid grid-cols-2 gap-4">
                  <div className="col-span-2 p-4 rounded bg-slate-800/50 border border-slate-700">
                    <div className="text-xs text-slate-500 uppercase font-bold mb-2">System Status</div>
                    <div className="flex items-center gap-2 text-green-400 text-sm font-mono">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                      SECURE // FIREWALL ACTIVE
                    </div>
                  </div>
                  <div className="p-4 rounded bg-slate-800/50 border border-slate-700 aspect-square flex flex-col justify-between">
                     <div className="text-xs text-slate-500 uppercase font-bold">Tools</div>
                     <div className="text-2xl font-bold text-white">24</div>
                     <div className="w-full bg-slate-700 h-1 rounded-full overflow-hidden">
                        <div className="w-3/4 h-full bg-cyber-neonCyan"></div>
                     </div>
                  </div>
                  <div className="p-4 rounded bg-slate-800/50 border border-slate-700 aspect-square flex flex-col justify-between">
                     <div className="text-xs text-slate-500 uppercase font-bold">Lessons</div>
                     <div className="text-2xl font-bold text-white">12</div>
                     <div className="w-full bg-slate-700 h-1 rounded-full overflow-hidden">
                        <div className="w-1/4 h-full bg-cyber-neonPurple"></div>
                     </div>
                  </div>
               </div>
            </div>
            
            {/* Glow behind the mockup */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-cyber-neonPurple/20 blur-3xl -z-10 rounded-full"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InsideSection;