
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Bell } from 'lucide-react';
import { RoutePath } from '../types';

const ProductDetail_AFC: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Coming Soon | AFC-V1";
  }, []);

  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans flex flex-col">
      <div className="flex-grow flex items-center justify-center relative overflow-hidden pt-16">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
             style={{ 
               backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`,
               backgroundSize: '40px 40px' 
             }}>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center pb-20">
            <div className="inline-block mb-8 animate-pulse">
                <span className="bg-[#4f4398] text-white px-4 py-1 text-xs font-bold uppercase tracking-widest border border-[#4f4398]">Development in Progress</span>
            </div>
            
            <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter uppercase mb-2 leading-none">
              Coming Soon
            </h1>
            
            <h2 className="text-2xl md:text-4xl font-black text-[#4f4398] uppercase mb-8 tracking-widest">
              AFC-V1
            </h2>

            <div className="w-24 h-1 bg-[#222] mx-auto mb-8">
              <div className="h-full bg-[#4f4398] w-1/3 animate-[loading_2s_ease-in-out_infinite]"></div>
            </div>
            <style>{`
              @keyframes loading {
                0% { transform: translateX(0); width: 10%; }
                50% { width: 100%; }
                100% { transform: translateX(300%); width: 10%; }
              }
            `}</style>

            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
              The ultimate all-in-one flight controller integrating <span className="text-white font-bold">Vision</span>, <span className="text-white font-bold">Video Link</span>, and <span className="text-white font-bold">Control</span> is on the horizon.
              <br/>
              <span className="text-sm mt-4 block text-gray-600 font-mono">Redefining the future of UAV brains.</span>
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <Link to={RoutePath.HOME} className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors font-bold uppercase text-xs tracking-wider">
                    <ArrowLeft size={16} /> Return to Home
                </Link>
                <Link to={RoutePath.CONTACT} className="bg-[#4f4398] text-white px-8 py-4 font-bold uppercase hover:bg-[#3e3479] transition-all flex items-center gap-2 text-sm">
                    <Mail size={16} /> Contact Sales for Specs
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail_AFC;
