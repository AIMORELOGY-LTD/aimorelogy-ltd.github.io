
import React, { useEffect } from 'react';
import { MapPin, Briefcase, Frown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { RoutePath } from '../types';

const Careers: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Careers | AIMORELOGY";
  }, []);

  return (
    <div className="bg-white min-h-screen flex flex-col font-sans text-gray-900">
      {/* Hero Section */}
      <section className="bg-[#111] text-white py-24 relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-r from-black via-[#111] to-transparent z-10"></div>
         {/* Abstract background pattern */}
         <div className="absolute inset-0 opacity-20" 
             style={{ 
               backgroundImage: `radial-gradient(#4f4398 1px, transparent 1px)`,
               backgroundSize: '30px 30px' 
             }}>
        </div>

         <div className="container mx-auto px-6 relative z-20">
            <span className="text-[#4f4398] font-bold uppercase tracking-widest mb-4 block">Join Our Team</span>
            <h1 className="text-5xl md:text-6xl font-black uppercase mb-6 leading-tight">
              Careers at <br/> AIMORELOGY
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed border-l-4 border-[#4f4398] pl-6">
              Build the future of autonomous flight and edge intelligence with us.
            </p>
         </div>
      </section>

      {/* Main Content */}
      <section className="py-20 flex-grow">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
             <div className="mb-16 text-center">
               <h2 className="text-3xl font-bold uppercase mb-4">Open Positions</h2>
               <div className="w-20 h-1 bg-[#4f4398] mx-auto"></div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Shenzhen Office */}
                <div className="bg-gray-50 border border-gray-200 p-10 text-center rounded-sm hover:border-[#4f4398] transition-colors group flex flex-col">
                    <div className="flex justify-center mb-6">
                       <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm text-[#4f4398] group-hover:bg-[#4f4398] group-hover:text-white transition-colors">
                          <MapPin size={32} />
                       </div>
                    </div>
                    <h3 className="text-2xl font-bold uppercase mb-2">Shenzhen</h3>
                    <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-8">Global Headquarters</p>
                    
                    <div className="bg-white p-6 border border-gray-100 inline-block w-full mt-auto">
                       <Briefcase className="mx-auto text-gray-400 mb-3" size={24} />
                       <p className="text-gray-600 font-medium">No open positions available.</p>
                       <p className="text-xs text-gray-400 mt-2">Check back later for R&D opportunities.</p>
                    </div>
                </div>

                {/* Hong Kong Office */}
                <div className="bg-gray-50 border border-gray-200 p-10 text-center rounded-sm hover:border-[#4f4398] transition-colors group flex flex-col">
                    <div className="flex justify-center mb-6">
                       <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm text-[#4f4398] group-hover:bg-[#4f4398] group-hover:text-white transition-colors">
                          <MapPin size={32} />
                       </div>
                    </div>
                    <h3 className="text-2xl font-bold uppercase mb-2">Hong Kong</h3>
                    <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-8">Overseas Business Dept</p>
                    
                    <div className="bg-white p-6 border border-gray-100 inline-block w-full mt-auto">
                       <Briefcase className="mx-auto text-gray-400 mb-3" size={24} />
                       <p className="text-gray-600 font-medium">No open positions available.</p>
                       <p className="text-xs text-gray-400 mt-2">Check back later for Operations opportunities.</p>
                    </div>
                </div>
             </div>

             <div className="mt-16 text-center">
                <p className="text-gray-600 mb-4">
                  Don't see a role that fits? We are always looking for talent.
                </p>
                <Link to={RoutePath.CONTACT} className="text-[#4f4398] font-bold uppercase hover:underline">
                  Contact Us for General Inquiry
                </Link>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
