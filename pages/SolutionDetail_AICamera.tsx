
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  ArrowRight, 
  Cpu, 
  Cloud, 
  Zap, 
  Layers, 
  Image as ImageIcon,
  MessageSquare,
  Globe,
  Camera,
  Smartphone,
  Shield,
  Activity
} from 'lucide-react';
import { RoutePath } from '../types';

const SolutionDetail_AICamera: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Cloud AI Camera Solution | AIMORELOGY";
  }, []);

  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="pt-24 pb-16 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-6">
           {/* Breadcrumbs */}
           <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500 mb-8">
              <Link to={RoutePath.HOME} className="hover:text-[#4f4398]">Home</Link>
              <ArrowRight size={10} />
              <span>Solutions</span>
              <ArrowRight size={10} />
              <span className="text-[#4f4398]">Cloud AI Camera</span>
           </div>

           <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                      <div className="bg-[#4f4398] text-white px-3 py-1 text-xs font-bold uppercase">Turnkey Solution</div>
                      <div className="text-gray-500 font-bold tracking-widest text-sm uppercase">Powered by SOPHGO</div>
                  </div>
                  
                  <h1 className="text-4xl md:text-6xl font-black text-gray-900 uppercase mb-6 leading-tight">
                    Ultra-HD Cloud <br/><span className="text-[#4f4398]">AI Camera</span>
                  </h1>
                  
                  <p className="text-gray-600 text-lg mb-8 max-w-xl leading-relaxed">
                     A one-stop solution combining the powerful CV1842C-P edge processor with our y-MaaS cloud service. We provide the complete PCBA, software stack, and cloud infrastructure—you define the product and UI.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to={RoutePath.CONTACT} className="bg-[#4f4398] text-white px-8 py-4 font-bold text-sm uppercase hover:bg-[#3e3479] transition-all flex items-center justify-center gap-2 shadow-sm">
                        Get Solution Proposal <ArrowRight size={16} />
                    </Link>
                    <div className="flex items-center gap-4 px-6 text-sm text-gray-500 font-medium">
                       <CheckCircle size={16} className="text-[#76b900]" /> 
                       <span>Ready to Manufacture</span>
                    </div>
                  </div>
              </div>
              
              {/* Visual Representation */}
              <div className="lg:w-1/2 relative">
                  <div className="aspect-[4/3] bg-white border border-gray-200 shadow-2xl relative overflow-hidden rounded-sm flex flex-col">
                      <div className="bg-gray-100 p-3 border-b border-gray-200 flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-400"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                          <div className="w-3 h-3 rounded-full bg-green-400"></div>
                          <span className="ml-2 text-xs font-mono text-gray-500">Camera_OS_v4.0</span>
                      </div>
                      <div className="flex-1 bg-gray-900 relative">
                           {/* UI Mockup */}
                           <div className="absolute inset-0 flex items-center justify-center">
                              <img 
                                src="https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&q=80&w=800" 
                                alt="Camera View" 
                                className="w-full h-full object-cover opacity-80"
                              />
                              {/* Overlay UI */}
                              <div className="absolute top-4 left-4 bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">AI Scene: Landscape</div>
                              <div className="absolute bottom-8 flex gap-8">
                                  <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center bg-white/20 hover:bg-white/40 cursor-pointer">
                                      <div className="w-10 h-10 rounded-full bg-white"></div>
                                  </div>
                              </div>
                           </div>
                      </div>
                  </div>
                  {/* Chip Badge */}
                  <div className="absolute -bottom-6 -right-6 bg-white p-4 shadow-lg border border-gray-100 max-w-xs hidden md:block">
                      <div className="flex items-center gap-3">
                          <Cpu size={32} className="text-[#4f4398]" />
                          <div>
                              <div className="text-xs text-gray-500 uppercase font-bold">Main Controller</div>
                              <div className="text-xl font-black text-gray-900">CV1842C-P</div>
                          </div>
                      </div>
                  </div>
              </div>
           </div>
        </div>
      </section>

      {/* 2. VALUE PROPOSITION */}
      <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  <div className="bg-white p-8 border border-gray-100 hover:border-[#4f4398] transition-colors group shadow-sm">
                      <div className="w-12 h-12 bg-[#4f4398]/10 flex items-center justify-center mb-6 group-hover:bg-[#4f4398] transition-colors">
                          <Cloud className="text-[#4f4398] group-hover:text-white" size={24} />
                      </div>
                      <h3 className="text-xl font-black text-gray-900 uppercase mb-3">Cost-Performance Leader</h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                          Revolutionary pricing model: Chip hardware + Buyout Cloud Services (~10 RMB). Drastically lowers the barrier for AIoT device entry.
                      </p>
                  </div>

                  <div className="bg-white p-8 border border-gray-100 hover:border-[#4f4398] transition-colors group shadow-sm">
                      <div className="w-12 h-12 bg-[#4f4398]/10 flex items-center justify-center mb-6 group-hover:bg-[#4f4398] transition-colors">
                          <Layers className="text-[#4f4398] group-hover:text-white" size={24} />
                      </div>
                      <h3 className="text-xl font-black text-gray-900 uppercase mb-3">Turnkey Software</h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                          "Key-in-hand" engineering. We handle the OS, Drivers, and Cloud connection. You only need to focus on Product Definition and UI Design.
                      </p>
                  </div>

                  <div className="bg-white p-8 border border-gray-100 hover:border-[#4f4398] transition-colors group shadow-sm">
                      <div className="w-12 h-12 bg-[#4f4398]/10 flex items-center justify-center mb-6 group-hover:bg-[#4f4398] transition-colors">
                          <Camera className="text-[#4f4398] group-hover:text-white" size={24} />
                      </div>
                      <h3 className="text-xl font-black text-gray-900 uppercase mb-3">Premium Image Quality</h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                          Powered by ISP v4.0 architecture. Features DRC (Dynamic Range Compression), MCTF (Motion Compensated Temporal Filtering), and 3A algorithms matching tier-1 security standards.
                      </p>
                  </div>
              </div>
          </div>
      </section>

      {/* 3. HARDWARE SPECIFICATIONS */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
          <div className="container mx-auto px-6">
              <div className="flex flex-col md:flex-row gap-12">
                  <div className="md:w-1/3">
                      <h2 className="text-3xl font-black text-gray-900 uppercase mb-6">Core Specifications</h2>
                      <p className="text-gray-600 mb-6">
                          The SM3-81 module integrates high-performance computing, advanced imaging, and seamless connectivity into a compact form factor.
                      </p>
                      <div className="space-y-4">
                          <div className="flex justify-between border-b border-gray-200 pb-2">
                              <span className="font-bold text-gray-500 text-sm uppercase">Main Chip</span>
                              <span className="font-bold text-gray-900">CV1842C-P</span>
                          </div>
                          <div className="flex justify-between border-b border-gray-200 pb-2">
                              <span className="font-bold text-gray-500 text-sm uppercase">CPU Arch</span>
                              <span className="font-bold text-gray-900 text-right">Arm A53 @ 1.1GHz<br/>RISC-V C906 @ 800MHz</span>
                          </div>
                          <div className="flex justify-between border-b border-gray-200 pb-2">
                              <span className="font-bold text-gray-500 text-sm uppercase">TPU (AI)</span>
                              <span className="font-bold text-gray-900">INT8 @ ~1.5 TOPS</span>
                          </div>
                          <div className="flex justify-between border-b border-gray-200 pb-2">
                              <span className="font-bold text-gray-500 text-sm uppercase">Memory</span>
                              <span className="font-bold text-gray-900">SiP DDR3 2Gb (256MB)</span>
                          </div>
                          <div className="flex justify-between border-b border-gray-200 pb-2">
                              <span className="font-bold text-gray-500 text-sm uppercase">Power</span>
                              <span className="font-bold text-gray-900">10W Level / 2.48W Avg (4K Rec)</span>
                          </div>
                      </div>
                  </div>

                  <div className="md:w-2/3">
                      <div className="bg-white p-8 border border-gray-200 h-full">
                          <h3 className="font-bold text-[#4f4398] uppercase mb-6 tracking-widest text-sm">System Block Diagram</h3>
                          {/* Schematic Visualization */}
                          <div className="relative border-2 border-dashed border-gray-300 p-8 rounded-lg flex items-center justify-center bg-gray-50">
                               {/* Central Chip */}
                               <div className="bg-[#4f4398] text-white p-8 w-64 text-center shadow-lg relative z-10">
                                   <div className="font-black text-xl mb-1">CV1842C-P</div>
                                   <div className="text-xs opacity-80">(SiP 256MB DDR)</div>
                               </div>

                               {/* Connections */}
                               <div className="absolute inset-0 flex flex-col justify-between p-4">
                                   <div className="flex justify-between w-full px-12">
                                       <div className="flex flex-col items-center gap-1">
                                            <div className="bg-gray-200 text-xs font-bold px-2 py-1">Power Key</div>
                                            <div className="h-8 w-px bg-gray-400"></div>
                                            <div className="text-[10px] text-gray-500">GPIO</div>
                                       </div>
                                       <div className="flex flex-col items-center gap-1">
                                            <div className="bg-gray-200 text-xs font-bold px-2 py-1">Camera</div>
                                            <div className="h-8 w-px bg-gray-400"></div>
                                            <div className="text-[10px] text-gray-500">MIPI-RX</div>
                                       </div>
                                   </div>

                                   <div className="flex justify-between w-full items-center">
                                       <div className="flex items-center gap-1">
                                            <div className="bg-gray-200 text-xs font-bold px-2 py-1">Screen</div>
                                            <div className="w-8 h-px bg-gray-400"></div>
                                       </div>
                                       <div className="flex items-center gap-1">
                                            <div className="w-8 h-px bg-gray-400"></div>
                                            <div className="bg-gray-200 text-xs font-bold px-2 py-1">Wi-Fi / 4G</div>
                                       </div>
                                   </div>

                                   <div className="flex justify-between w-full px-12">
                                       <div className="flex flex-col items-center gap-1">
                                            <div className="text-[10px] text-gray-500">Aud-in</div>
                                            <div className="h-8 w-px bg-gray-400"></div>
                                            <div className="bg-gray-200 text-xs font-bold px-2 py-1">MIC</div>
                                       </div>
                                       <div className="flex flex-col items-center gap-1">
                                            <div className="text-[10px] text-gray-500">SDXC</div>
                                            <div className="h-8 w-px bg-gray-400"></div>
                                            <div className="bg-gray-200 text-xs font-bold px-2 py-1">SD Card</div>
                                       </div>
                                   </div>
                               </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* 4. SOFTWARE & CLOUD */}
      <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
               <h2 className="text-3xl font-black text-gray-900 uppercase mb-12 text-center">Full-Stack Software Architecture</h2>
               
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                   
                   {/* Cloud Layer */}
                   <div className="border border-orange-100 bg-orange-50/30 p-8 rounded-sm">
                       <h3 className="flex items-center gap-2 text-orange-600 font-bold uppercase mb-6">
                           <Cloud size={24} /> Cloud Layer (y-MaaS)
                       </h3>
                       <div className="grid grid-cols-2 gap-4">
                           {['LLM Integration', 'Image Generation', 'Video Generation', 'Streaming ASR', 'Streaming TTS', 'Token Management'].map((item, idx) => (
                               <div key={idx} className="bg-white border border-orange-200 px-4 py-3 text-sm font-medium text-gray-700 shadow-sm">
                                   {item}
                               </div>
                           ))}
                       </div>
                   </div>

                   {/* Device Layer */}
                   <div className="border border-green-100 bg-green-50/30 p-8 rounded-sm">
                       <h3 className="flex items-center gap-2 text-green-600 font-bold uppercase mb-6">
                           <Smartphone size={24} /> Device Layer (AI Module)
                       </h3>
                       
                       <div className="space-y-4">
                           {/* Application */}
                           <div className="bg-white border border-green-200 p-4 shadow-sm">
                               <div className="text-xs text-gray-500 font-bold uppercase mb-2">Application & Components</div>
                               <div className="flex flex-wrap gap-2">
                                   {['AI Recognition', 'Translation', 'Dialogue', 'Album', 'Power Mgr', 'LVGL UI', 'WebRTC'].map((tag, i) => (
                                       <span key={i} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-sm">{tag}</span>
                                   ))}
                               </div>
                           </div>
                           
                           {/* Driver/HAL */}
                           <div className="bg-gray-100 border border-gray-200 p-3 text-center text-xs font-bold text-gray-500">
                               HAL / Drivers (Panel, TP, Wi-Fi, 4G, Sensor)
                           </div>

                           {/* OS */}
                           <div className="bg-gray-800 text-white p-3 text-center text-xs font-bold uppercase tracking-widest rounded-sm">
                               Linux + RTOS System
                           </div>
                       </div>
                   </div>
               </div>
          </div>
      </section>

      {/* 5. CAPABILITIES LIST */}
      <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-6">
              <h2 className="text-3xl font-black uppercase mb-12">Cloud AI Capabilities</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-gray-800 p-6 border border-gray-700 hover:border-[#4f4398] transition-colors">
                      <div className="flex items-center gap-3 mb-4">
                          <MessageSquare className="text-[#4f4398]" size={24} />
                          <h4 className="font-bold uppercase">AI Dialogue</h4>
                      </div>
                      <p className="text-gray-400 text-sm">
                          Interactive cartoon characters with knowledge Q&A. Supports interruption, voice selection, and age-appropriate content filtering.
                      </p>
                  </div>

                  <div className="bg-gray-800 p-6 border border-gray-700 hover:border-[#4f4398] transition-colors">
                      <div className="flex items-center gap-3 mb-4">
                          <ImageIcon className="text-[#4f4398]" size={24} />
                          <h4 className="font-bold uppercase">Style Transfer</h4>
                      </div>
                      <p className="text-gray-400 text-sm">
                          Convert photos into Sketch, Ink, Van Gogh, or Cartoon styles using Image-to-Image generation models.
                      </p>
                  </div>

                  <div className="bg-gray-800 p-6 border border-gray-700 hover:border-[#4f4398] transition-colors">
                      <div className="flex items-center gap-3 mb-4">
                          <Globe className="text-[#4f4398]" size={24} />
                          <h4 className="font-bold uppercase">Object Recognition</h4>
                      </div>
                      <p className="text-gray-400 text-sm">
                          Identify objects, flora, and fauna. Provides audio introductions and encyclopedic knowledge for educational purposes.
                      </p>
                  </div>

                  <div className="bg-gray-800 p-6 border border-gray-700 hover:border-[#4f4398] transition-colors">
                      <div className="flex items-center gap-3 mb-4">
                          <MessageSquare className="text-[#4f4398]" size={24} />
                          <h4 className="font-bold uppercase">Translation</h4>
                      </div>
                      <p className="text-gray-400 text-sm">
                          Real-time photo and audio translation (Chinese-English), making it ideal for travel and learning devices.
                      </p>
                  </div>

                  <div className="bg-gray-800 p-6 border border-gray-700 hover:border-[#4f4398] transition-colors">
                      <div className="flex items-center gap-3 mb-4">
                          <Zap className="text-[#4f4398]" size={24} />
                          <h4 className="font-bold uppercase">Generative Editing</h4>
                      </div>
                      <p className="text-gray-400 text-sm">
                          Input voice commands to generate or modify images (e.g., "Change background to space") while preserving the main subject.
                      </p>
                  </div>

                  <div className="bg-gray-800 p-6 border border-gray-700 hover:border-[#4f4398] transition-colors">
                      <div className="flex items-center gap-3 mb-4">
                          <Shield className="text-[#4f4398]" size={24} />
                          <h4 className="font-bold uppercase">Content Safety</h4>
                      </div>
                      <p className="text-gray-400 text-sm">
                          Built-in content grading and filtering systems ensure safe usage for children and educational environments.
                      </p>
                  </div>
              </div>
          </div>
      </section>

      {/* 6. CTA */}
      <section className="bg-white py-24 text-center">
          <div className="container mx-auto px-6">
              <h2 className="text-3xl font-black text-gray-900 uppercase mb-4">Build Your AI Product Today</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  Leverage our mature hardware and cloud infrastructure to launch your AI camera or educational robot in record time.
              </p>
              <div className="flex justify-center gap-4">
                <Link to={RoutePath.CONTACT} className="bg-[#4f4398] text-white px-10 py-4 font-bold uppercase hover:bg-[#5f51b0] transition-colors">
                    Contact Sales
                </Link>
                <Link to="/products/sophgo/cv184" className="border border-gray-300 text-gray-700 px-10 py-4 font-bold uppercase hover:border-gray-900 transition-colors">
                    View Chip Details
                </Link>
              </div>
          </div>
      </section>

    </div>
  );
};

export default SolutionDetail_AICamera;
