
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Zap, Activity, Cpu, Sliders, Layers, CheckCircle } from 'lucide-react';
import { RoutePath } from '../types';

const Technology_DShot: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Adaptive DShot Framework | AIMORELOGY";
  }, []);

  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans selection:bg-[#4f4398] selection:text-white">
      
      {/* 1. HERO SECTION (Dark Tech Theme) */}
      <section className="bg-[#050505] text-white pt-24 pb-20 border-b border-gray-900 overflow-hidden relative">
         {/* Tech Background Grid */}
         <div className="absolute inset-0 opacity-10" 
             style={{ 
               backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`,
               backgroundSize: '40px 40px' 
             }}>
         </div>
         
         <div className="container mx-auto px-6 relative z-10">
           {/* Breadcrumbs */}
           <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500 mb-12">
              <Link to={RoutePath.HOME} className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={12} />
              <span>Technology</span>
              <ChevronRight size={12} />
              <span className="text-[#4f4398]">Adaptive Control</span>
           </div>

           <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                  <div className="inline-flex items-center gap-2 border border-[#4f4398] rounded-full px-4 py-1 mb-6">
                      <Zap size={14} className="text-[#4f4398]" />
                      <span className="text-[#4f4398] font-bold text-xs uppercase tracking-widest">Software Defined IO</span>
                  </div>
                  
                  <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-none">
                    Universal <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f4398] to-[#8075cc]">Adaptive DShot</span>
                  </h1>
                  
                  <h2 className="text-xl text-gray-400 font-medium mb-8 max-w-lg leading-relaxed">
                    A revolutionary DMA-Free framework that brings Bi-directional DShot 300/150 to <i>any</i> chip platform with self-calibrating signal stability.
                  </h2>

                  <div className="grid grid-cols-2 gap-6 mb-10">
                      <div>
                          <div className="text-3xl font-black text-white mb-1">0<span className="text-sm text-gray-500"> DMA</span></div>
                          <div className="text-xs font-bold text-[#4f4398] uppercase">Hardware Dependency</div>
                      </div>
                      <div>
                          <div className="text-3xl font-black text-white mb-1">Auto<span className="text-sm text-gray-500">Tune</span></div>
                          <div className="text-xs font-bold text-[#4f4398] uppercase">Jitter Elimination</div>
                      </div>
                  </div>
              </div>

              {/* Visualization: Static Diagram (Direct Image) */}
              <div className="lg:w-1/2 w-full flex justify-center">
                  <img 
                     src="DSHOT-WAVE.webp" 
                     alt="DShot Protocol Timing Diagram" 
                     className="w-full h-auto object-contain max-h-[300px]" 
                  />
              </div>
           </div>
         </div>
      </section>

      {/* 2. CORE INNOVATIONS */}
      <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
              <div className="max-w-3xl mx-auto text-center mb-16">
                  <h2 className="text-3xl font-black text-gray-900 uppercase mb-4">Break Free From Hardware Limits</h2>
                  <p className="text-gray-600 text-lg">
                      Traditional DShot implementations rely heavily on specific DMA channels and Timers, limiting chip selection and port mapping. Our <strong>Adaptive IO Framework</strong> solves this by moving the precision logic to an intelligent software layer.
                  </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="bg-gray-50 p-8 border border-gray-100 hover:border-[#4f4398] transition-all group">
                      <Cpu size={32} className="text-[#4f4398] mb-6" />
                      <h3 className="text-lg font-bold text-gray-900 uppercase mb-3">DMA-Free Architecture</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                          We decoupled the protocol from specific hardware resources. Our algorithm enables Bi-directional DShot on any GPIO, making it compatible with virtually <strong>any MCU platform</strong> (RISC-V, ARM, etc.).
                      </p>
                  </div>

                  <div className="bg-gray-50 p-8 border border-gray-100 hover:border-[#4f4398] transition-all group">
                      <Sliders size={32} className="text-[#4f4398] mb-6" />
                      <h3 className="text-lg font-bold text-gray-900 uppercase mb-3">Adaptive Tuning</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                          The system constantly monitors input and output frequencies. It <strong>dynamically adjusts</strong> timing parameters to eliminate jitter and drift caused by temperature changes or clock variances.
                      </p>
                  </div>

                  <div className="bg-gray-50 p-8 border border-gray-100 hover:border-[#4f4398] transition-all group">
                      <Activity size={32} className="text-[#4f4398] mb-6" />
                      <h3 className="text-lg font-bold text-gray-900 uppercase mb-3">Bi-Directional 300/150</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                          Full support for real-time telemetry. Receive RPM, voltage, and temperature data from the ESC on the same signal line without auxiliary wiring.
                      </p>
                  </div>

                  <div className="bg-gray-50 p-8 border border-gray-100 hover:border-[#4f4398] transition-all group">
                      <Layers size={32} className="text-[#4f4398] mb-6" />
                      <h3 className="text-lg font-bold text-gray-900 uppercase mb-3">Universal Support</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                          Plug-and-play compatibility with mainstream ESC firmware including <strong>BLHeli_32, BLHeli_S, and AM32</strong>. No custom ESC firmware required.
                      </p>
                  </div>
              </div>
          </div>
      </section>

      {/* 3. COMPARISON TABLE */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
          <div className="container mx-auto px-6">
              <h3 className="text-2xl font-black text-gray-900 uppercase mb-10 text-center">Implementation Comparison</h3>
              
              <div className="max-w-5xl mx-auto overflow-hidden bg-white shadow-sm border border-gray-200 rounded-sm">
                  <table className="w-full text-left border-collapse">
                      <thead>
                          <tr className="bg-[#111] text-white">
                              <th className="p-6 font-bold uppercase text-xs tracking-wider w-1/4">Feature</th>
                              <th className="p-6 font-bold uppercase text-xs tracking-wider w-1/4">Standard PWM</th>
                              <th className="p-6 font-bold uppercase text-xs tracking-wider w-1/4">Hardware DShot (DMA)</th>
                              <th className="p-6 font-bold uppercase text-xs tracking-wider w-1/4 bg-[#4f4398]">AIMORELOGY Adaptive</th>
                          </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                          <tr className="hover:bg-gray-50">
                              <td className="p-6 text-sm font-bold text-gray-900">Chip Compatibility</td>
                              <td className="p-6 text-sm text-gray-600">Universal</td>
                              <td className="p-6 text-sm text-gray-600">Limited (Requires DMA/Timer)</td>
                              <td className="p-6 text-sm font-bold text-[#4f4398]">Universal (Any GPIO)</td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                              <td className="p-6 text-sm font-bold text-gray-900">Signal Stability</td>
                              <td className="p-6 text-sm text-gray-600">Low</td>
                              <td className="p-6 text-sm text-gray-600">Fixed (Hardware Clock)</td>
                              <td className="p-6 text-sm font-bold text-[#4f4398]">Adaptive (Self-Correcting)</td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                              <td className="p-6 text-sm font-bold text-gray-900">Resource Usage</td>
                              <td className="p-6 text-sm text-gray-600">Low</td>
                              <td className="p-6 text-sm text-gray-600">High (Locks DMA channels)</td>
                              <td className="p-6 text-sm font-bold text-[#4f4398]">Optimized (Software)</td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                              <td className="p-6 text-sm font-bold text-gray-900">Telemetry</td>
                              <td className="p-6 text-sm text-gray-600">No</td>
                              <td className="p-6 text-sm text-gray-600">Bi-directional</td>
                              <td className="p-6 text-sm font-bold text-[#4f4398]">Bi-directional</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </section>

      {/* 4. TECHNICAL DEEP DIVE */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
               <div className="bg-gray-50 p-8 border border-gray-200 h-full flex flex-col justify-center">
                  <div className="space-y-6">
                      <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-[#4f4398] text-white flex items-center justify-center font-bold">1</div>
                          <div>
                              <h4 className="font-bold text-gray-900 text-sm uppercase">Frequency Detection</h4>
                              <p className="text-xs text-gray-600">Real-time analysis of MCU clock jitter and external ESC signal variations.</p>
                          </div>
                      </div>
                      <div className="w-px h-8 bg-gray-300 ml-5"></div>
                      <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-[#4f4398] text-white flex items-center justify-center font-bold">2</div>
                          <div>
                              <h4 className="font-bold text-gray-900 text-sm uppercase">Dynamic Compensation</h4>
                              <p className="text-xs text-gray-600">Software algorithm adjusts bit-bang timing nanosecond-by-nanosecond.</p>
                          </div>
                      </div>
                      <div className="w-px h-8 bg-gray-300 ml-5"></div>
                      <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-[#4f4398] text-white flex items-center justify-center font-bold">3</div>
                          <div>
                              <h4 className="font-bold text-gray-900 text-sm uppercase">Stable Output</h4>
                              <p className="text-xs text-gray-600">Perfect DShot 300/150 signal synthesized regardless of chip load.</p>
                          </div>
                      </div>
                  </div>
               </div>
            </div>
            
            <div className="lg:w-1/2">
               <h3 className="text-3xl font-black text-gray-900 uppercase mb-6">The "Zero-Hardware" Advantage</h3>
               <p className="text-gray-600 mb-6 leading-relaxed">
                  By removing the dependency on Direct Memory Access (DMA) controllers, AIMORELOGY's Adaptive DShot framework frees up critical hardware resources for other tasks like AI Inference and Video Processing.
               </p>
               <p className="text-gray-600 mb-8 leading-relaxed">
                  This architecture is specifically designed for the next generation of <strong>Integrated AI Flight Controllers</strong>, where NPU usage is high and hardware resources must be balanced efficiently.
               </p>
               <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm font-bold text-gray-900">
                     <CheckCircle size={16} className="text-[#4f4398]" />
                     Supports BLHeli_32, BLHeli_S, AM32
                  </li>
                  <li className="flex items-center gap-3 text-sm font-bold text-gray-900">
                     <CheckCircle size={16} className="text-[#4f4398]" />
                     High-Precision RPM Filtering
                  </li>
                  <li className="flex items-center gap-3 text-sm font-bold text-gray-900">
                     <CheckCircle size={16} className="text-[#4f4398]" />
                     Simplified PCB Layout (Any Pin)
                  </li>
               </ul>
            </div>
         </div>
      </section>

      {/* 5. CTA */}
      <section className="bg-[#111] py-20 text-center">
          <div className="container mx-auto px-6">
              <h2 className="text-3xl font-black text-white uppercase mb-4">Integrate This Technology</h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                  Our Adaptive DShot framework is available as a software IP core for chip manufacturers and industrial drone developers.
              </p>
              <div className="flex justify-center gap-4">
                <Link to={RoutePath.CONTACT} className="inline-block bg-[#4f4398] text-white px-10 py-4 font-bold uppercase hover:bg-[#5f51b0] transition-colors">
                    Request Licensing Info
                </Link>
              </div>
          </div>
      </section>

    </div>
  );
};

export default Technology_DShot;
