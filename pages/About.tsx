
import React, { useState } from 'react';
import { MapPin, User, Building2, Phone, Mail, Quote } from 'lucide-react';

const PartnerLogo = ({ name, image }: { name: string, image: string }) => {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <span className="font-bold text-gray-400 text-sm uppercase group-hover:text-white transition-colors">
        {name}
      </span>
    );
  }

  return (
    <img
      src={image}
      alt={name}
      title={name}
      className="max-w-full max-h-full object-contain brightness-0 opacity-60 group-hover:opacity-100 group-hover:brightness-0 group-hover:invert transition-all duration-500"
      onError={() => setError(true)}
    />
  );
};

const About: React.FC = () => {
  const PARTNERS = [
    {
      name: "SOPHGO",
      image: "https://cdn.brandfetch.io/idP8bYf9zp/w/160/h/56/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B"
    },
    {
      name: "RT-Thread",
      image: "https://cdn.brandfetch.io/idQfv7Ovzy/w/160/h/60/theme/light/logo.png?c=1bxid64Mup7aczewSAYMX&t=1764556814610"
    },
     {
      name: "RISC-V",
      image: "https://cdn.brandfetch.io/idGm5lRj_H/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1761288532881"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
       {/* Hero Section */}
       <div className="bg-[#111] text-white py-24 relative overflow-hidden">
          {/* Abstract Background */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-[#111] to-transparent"></div>

          <div className="container mx-auto px-6 relative z-10">
             <div className="max-w-3xl">
                <span className="text-[#4f4398] font-bold uppercase tracking-widest mb-4 block">Corporate Profile</span>
                <h1 className="text-5xl md:text-6xl font-black uppercase mb-6 leading-tight">
                  About <br/> AIMORELOGY
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed border-l-4 border-[#4f4398] pl-6">
                  Pioneering the next generation of intelligent flight control systems and AI-driven autonomous solutions for the industrial world.
                </p>
             </div>
          </div>
       </div>

       {/* Introduction */}
       <div className="py-20 container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16">
             <div className="md:w-1/3">
                <h2 className="text-3xl font-bold text-gray-900 uppercase mb-6">Our Mission</h2>
                <div className="h-1 w-20 bg-[#4f4398]"></div>
             </div>
             <div className="md:w-2/3">
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                   AIMORELOGY is a technology leader dedicated to revolutionizing the UAV and robotics industry. We specialize in advanced edge AI computing, high-definition video transmission, and autonomous flight control algorithms.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                   By integrating vision, control, and communication into powerful, compact units like the CV184XH series, we enable industrial partners to build smarter, safer, and more efficient autonomous systems.
                </p>
             </div>
          </div>
       </div>

       {/* PARTNERS SECTION */}
       <div className="bg-white py-24 border-t border-gray-100">
           <div className="container mx-auto px-6">
               <div className="mb-16 text-center md:text-left">
                   <h2 className="text-3xl font-bold text-gray-900 uppercase mb-6">Partners</h2>
                   <div className="h-1 w-20 bg-[#4f4398] mx-auto md:mx-0"></div>
               </div>
               
               <div className="flex flex-wrap justify-center gap-6">
                   {PARTNERS.map((partner) => (
                       <div key={partner.name} className="w-48 bg-white border border-gray-100 h-32 flex items-center justify-center p-8 hover:bg-[#4f4398] hover:border-[#4f4398] hover:shadow-lg transition-all duration-300 group rounded-sm">
                           <PartnerLogo name={partner.name} image={partner.image} />
                       </div>
                   ))}
               </div>
           </div>
       </div>

       {/* Leadership Section - Redesigned Typographic Style */}
       <div className="bg-gray-50 py-24 border-t border-gray-200">
          <div className="container mx-auto px-6">
             <h2 className="text-3xl font-bold text-gray-900 uppercase mb-16 text-center md:text-left">
               Leadership
             </h2>
             
             <div className="flex flex-col lg:flex-row gap-16 items-start">
                {/* Left: Identity Column (Sticky) */}
                <div className="lg:w-1/3 lg:sticky lg:top-24">
                   <div className="border-l-8 border-[#4f4398] pl-8">
                      <h3 className="text-6xl font-black text-gray-900 uppercase leading-none mb-4">Ke Yiran</h3>
                      <p className="text-[#4f4398] font-bold uppercase tracking-[0.2em] text-sm">Founder & CEO</p>
                   </div>
                   <div className="mt-8 hidden lg:block">
                        {/* Decorative Technical Specs look */}
                        <div className="space-y-2 text-xs font-mono text-gray-400">
                           <p>// SYSTEM ARCHITECT</p>
                           <p>// OPEN SOURCE ADVOCATE</p>
                           <p>// PRODUCT STRATEGIST</p>
                        </div>
                        <div className="mt-8 w-16 h-16 border-t-2 border-l-2 border-gray-200"></div>
                   </div>
                </div>

                {/* Right: Bio Column */}
                <div className="lg:w-2/3">
                    <div className="prose prose-lg text-gray-600 max-w-none space-y-8">
                       <p className="text-xl text-gray-900 font-medium leading-relaxed">
                          Ke Yiran is the Founder and CEO of AIMORELOGY, bringing extensive cross-domain experience ranging from underlying hardware to intelligent system algorithms.
                       </p>
                       
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
                          <div>
                             <h4 className="font-bold text-gray-900 uppercase text-sm mb-3">Background</h4>
                             <p className="text-base">
                                Before founding the company, he was deeply involved in the open-source hardware and RISC-V ecosystem, recognized as one of the early builders of the domestic RISC-V community.
                             </p>
                          </div>
                          <div>
                             <h4 className="font-bold text-gray-900 uppercase text-sm mb-3">Track Record</h4>
                             <p className="text-base">
                                Led the design, productization, and global promotion of the Milk-V Duo, Mars, and Pioneer series, achieving remarkable success in overseas crowdfunding.
                             </p>
                          </div>
                       </div>

                       <p>
                          His extensive background in chips and underlying systems has fostered deep technical thinking, product execution capabilities, and a natural resonance with developer culture. He believes the value of technology lies not just in performance metrics, but in enabling more people to "truly use it, touch it, and change it."
                       </p>
                       
                       <p>
                          Post-2025, he has shifted his focus from system architecture to intelligent UAVs and AI systems. Founding AIMORELOGY, he focuses on UAV flight control, visual perception, edge AI inference, and intelligent mission systems.
                       </p>

                       {/* Philosophy Card */}
                       <div className="bg-white p-8 border border-gray-200 shadow-sm mt-8">
                          <div className="flex items-center gap-2 mb-6">
                               <Quote className="text-[#4f4398] fill-current" size={24} />
                               <span className="font-bold text-gray-900 uppercase text-sm tracking-wider">Philosophy</span>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                              <div className="border-l-2 border-gray-100 pl-4">
                                  <p className="font-bold text-gray-900 text-sm mb-1">Reality First</p>
                                  <p className="text-sm text-gray-500">Technology must be usable in reality, not just in demonstrations.</p>
                              </div>
                              <div className="border-l-2 border-gray-100 pl-4">
                                  <p className="font-bold text-gray-900 text-sm mb-1">Human Centric</p>
                                  <p className="text-sm text-gray-500">Innovation should improve the relationship between humans and technology.</p>
                              </div>
                              <div className="border-l-2 border-gray-100 pl-4">
                                  <p className="font-bold text-gray-900 text-sm mb-1">Simplicity</p>
                                  <p className="text-sm text-gray-500">Complex systems must be presented with a simple, reliable experience.</p>
                              </div>
                              <div className="border-l-2 border-gray-100 pl-4">
                                  <p className="font-bold text-gray-900 text-sm mb-1">Trust</p>
                                  <p className="text-sm text-gray-500">Every product must possess "trustworthy" stability and security.</p>
                              </div>
                          </div>
                       </div>

                       <p className="text-sm text-gray-500 italic mt-8">
                          Ke Yiran remains an engineer at heart: personally reviewing system architectures, participating in flight control link design, and prioritizing underlying reliability and real-world user scenarios.
                       </p>
                    </div>
                </div>
             </div>
          </div>
       </div>

       {/* Locations */}
       <div className="bg-white py-24 border-t border-gray-200">
          <div className="container mx-auto px-6">
             <h2 className="text-3xl font-bold text-gray-900 uppercase mb-12 text-center">Global Presence</h2>
             
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Shenzhen Office */}
                <div className="bg-white p-10 border border-gray-200 shadow-sm hover:border-[#4f4398] transition-all duration-300 group">
                   <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-100">
                      <div className="bg-gray-100 p-3 rounded-sm group-hover:bg-[#4f4398] transition-colors">
                        <Building2 className="text-[#4f4398] group-hover:text-white transition-colors" size={32} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 uppercase">Shenzhen</h3>
                        <p className="text-xs text-[#4f4398] font-bold uppercase tracking-widest">Global Headquarters</p>
                      </div>
                   </div>

                   <div className="space-y-8">
                      <div>
                         <h4 className="font-bold text-xs text-gray-500 uppercase tracking-wider mb-2">Company Name</h4>
                         <p className="text-gray-900 font-bold text-lg">Shenzhen AIMORELOGY Technology Co., Ltd.</p>
                      </div>

                      <div className="flex gap-4">
                         <MapPin className="text-[#4f4398] shrink-0 mt-1" size={20} />
                         <div>
                            <h4 className="font-bold text-xs text-gray-500 uppercase tracking-wider mb-2">Address</h4>
                            <p className="text-gray-700 leading-relaxed">
                              Room 603-12, Zone A, Building T2, Langjun Square,<br/>
                              Tiezai Road, Xixiang Street, Bao'an District, Shenzhen
                            </p>
                         </div>
                      </div>

                      <div className="bg-gray-50 p-6 border border-gray-100">
                         <h4 className="font-bold text-xs text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                           <User size={14} /> Key Contacts
                         </h4>
                         <div className="grid grid-cols-1 gap-6">
                             <div>
                                <p className="font-bold text-gray-900 mb-1">Yiran Ke</p>
                                <a href="mailto:yiran.ke@aimorelogy.com" className="text-gray-600 hover:text-[#4f4398] text-sm flex items-center gap-2 font-medium transition-colors mt-1">
                                  <Mail size={14} /> yiran.ke@aimorelogy.com
                                </a>
                             </div>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Hong Kong Office */}
                <div className="bg-white p-10 border border-gray-200 shadow-sm hover:border-[#4f4398] transition-all duration-300 group">
                   <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-100">
                      <div className="bg-gray-100 p-3 rounded-sm group-hover:bg-[#4f4398] transition-colors">
                        <Building2 className="text-[#4f4398] group-hover:text-white transition-colors" size={32} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 uppercase">Hong Kong</h3>
                        <p className="text-xs text-[#4f4398] font-bold uppercase tracking-widest">Overseas Business Dept</p>
                      </div>
                   </div>

                   <div className="space-y-8">
                      <div>
                         <h4 className="font-bold text-xs text-gray-500 uppercase tracking-wider mb-2">Company Name</h4>
                         <p className="text-gray-900 font-bold text-lg">AIMORELOGY LIMITED</p>
                      </div>

                      <div className="flex gap-4">
                         <MapPin className="text-[#4f4398] shrink-0 mt-1" size={20} />
                         <div>
                            <h4 className="font-bold text-xs text-gray-500 uppercase tracking-wider mb-2">Address</h4>
                            <p className="text-gray-700 leading-relaxed uppercase">
                              Room H2 4/F, Century Industrial Centre,<br/>
                              33-35 Au Pui Wan Street Fotan,<br/>
                              Sha Tin, Hong Kong
                            </p>
                         </div>
                      </div>

                      <div className="bg-gray-50 p-6 border border-gray-100">
                         <h4 className="font-bold text-xs text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                           <User size={14} /> Key Contacts
                         </h4>
                         <div className="grid grid-cols-1 gap-6">
                             <div>
                                <p className="font-bold text-gray-900 mb-1">Jeff Xie</p>
                                <a href="mailto:jeff@aimorelogy.com" className="text-gray-600 hover:text-[#4f4398] text-sm flex items-center gap-2 font-medium transition-colors mt-1">
                                  <Mail size={14} /> jeff@aimorelogy.com
                                </a>
                             </div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>

       {/* Contact CTA */}
       <div className="bg-[#4f4398] py-16">
         <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-black text-white uppercase mb-4">Ready to Innovate?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Contact our sales team today to discuss how our AI solutions can accelerate your business.
            </p>
            <a href="mailto:info@aimorelogy.com" className="inline-block bg-white text-[#4f4398] px-8 py-3 font-bold text-sm uppercase hover:bg-gray-100 transition-colors">
               Email Us Now
            </a>
         </div>
       </div>
    </div>
  );
};

export default About;
