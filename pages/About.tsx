import React, { useEffect, useState } from 'react';
import { MapPin, User, Building2, Mail, Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Seo from '../components/Seo';

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
  const { t } = useTranslation();
  const seoTitle = t('about.metaTitle');
  const seoDescription = t('about.metaDescription');
  const seoKeywords = 'AIMORELOGY, 爱谋科技, company, partners, SOPHGO, RT-Thread, RISC-V, edge AI, FPV, UAV, drone, Shenzhen, Hong Kong';

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
       <Seo title={seoTitle} description={seoDescription} keywords={seoKeywords} />
       {/* Hero Section */}
       <div className="bg-[#111] text-white py-24 relative overflow-hidden">
          {/* Abstract Background */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-[#111] to-transparent"></div>

          <div className="container mx-auto px-6 relative z-10">
             <div className="max-w-3xl">
                <span className="text-[#4f4398] font-bold uppercase tracking-widest mb-4 block">{t('about.hero.kicker')}</span>
                <h1 className="text-5xl md:text-6xl font-black uppercase mb-6 leading-tight">
                  {t('about.hero.titleLine1')} <br/> {t('about.hero.titleLine2')}
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed border-l-4 border-[#4f4398] pl-6">
                  {t('about.hero.subtitle')}
                </p>
             </div>
          </div>
       </div>

       {/* Introduction */}
       <div className="py-20 container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16">
             <div className="md:w-1/3">
                <h2 className="text-3xl font-bold text-gray-900 uppercase mb-6">{t('about.mission.title')}</h2>
                <div className="h-1 w-20 bg-[#4f4398]"></div>
             </div>
             <div className="md:w-2/3">
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                   {t('about.mission.p1')}
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                   {t('about.mission.p2')}
                </p>
             </div>
          </div>
       </div>

       {/* PARTNERS SECTION */}
       <div className="bg-white py-24 border-t border-gray-100">
           <div className="container mx-auto px-6">
               <div className="mb-16 text-center md:text-left">
                   <h2 className="text-3xl font-bold text-gray-900 uppercase mb-6">{t('about.partners.title')}</h2>
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

       {/* Leadership Section */}
       <div className="bg-gray-50 py-24 border-t border-gray-200">
          <div className="container mx-auto px-6">
             <h2 className="text-3xl font-bold text-gray-900 uppercase mb-16 text-center md:text-left">
               {t('about.leadership.title')}
             </h2>
             
             <div className="flex flex-col lg:flex-row gap-16 items-start">
                {/* Left: Identity Column */}
                <div className="lg:w-1/3 lg:sticky lg:top-24">
                   <div className="border-l-8 border-[#4f4398] pl-8">
                      <h3 className="text-6xl font-black text-gray-900 uppercase leading-none mb-4">{t('about.leadership.name')}</h3>
                      <p className="text-[#4f4398] font-bold uppercase tracking-[0.2em] text-sm">{t('about.leadership.role')}</p>
                   </div>
                   <div className="mt-8 hidden lg:block">
                        <div className="space-y-2 text-xs font-mono text-gray-400">
                           <p>{t('about.leadership.tags.0')}</p>
                           <p>{t('about.leadership.tags.1')}</p>
                           <p>{t('about.leadership.tags.2')}</p>
                        </div>
                        <div className="mt-8 w-16 h-16 border-t-2 border-l-2 border-gray-200"></div>
                   </div>
                </div>

                {/* Right: Bio Column */}
                <div className="lg:w-2/3">
                    <div className="prose prose-lg text-gray-600 max-w-none space-y-8">
                       <p className="text-xl text-gray-900 font-medium leading-relaxed">
                          {t('about.leadership.bio.intro')}
                       </p>
                       
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
                          <div>
                             <h4 className="font-bold text-gray-900 uppercase text-sm mb-3">{t('about.leadership.bio.backgroundTitle')}</h4>
                             <p className="text-base">
                                {t('about.leadership.bio.background')}
                             </p>
                          </div>
                          <div>
                             <h4 className="font-bold text-gray-900 uppercase text-sm mb-3">{t('about.leadership.bio.trackTitle')}</h4>
                             <p className="text-base">
                                {t('about.leadership.bio.track')}
                             </p>
                          </div>
                       </div>

                       <p>
                          {t('about.leadership.bio.p1')}
                       </p>
                       
                       <p>
                          {t('about.leadership.bio.p2')}
                       </p>

                       {/* Philosophy Card */}
                       <div className="bg-white p-8 border border-gray-200 shadow-sm mt-8">
                          <div className="flex items-center gap-2 mb-6">
                               <Quote className="text-[#4f4398] fill-current" size={24} />
                               <span className="font-bold text-gray-900 uppercase text-sm tracking-wider">{t('about.leadership.philosophy.title')}</span>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                              <div className="border-l-2 border-gray-100 pl-4">
                                  <p className="font-bold text-gray-900 text-sm mb-1">{t('about.leadership.philosophy.items.0.title')}</p>
                                  <p className="text-sm text-gray-500">{t('about.leadership.philosophy.items.0.desc')}</p>
                              </div>
                              <div className="border-l-2 border-gray-100 pl-4">
                                  <p className="font-bold text-gray-900 text-sm mb-1">{t('about.leadership.philosophy.items.1.title')}</p>
                                  <p className="text-sm text-gray-500">{t('about.leadership.philosophy.items.1.desc')}</p>
                              </div>
                              <div className="border-l-2 border-gray-100 pl-4">
                                  <p className="font-bold text-gray-900 text-sm mb-1">{t('about.leadership.philosophy.items.2.title')}</p>
                                  <p className="text-sm text-gray-500">{t('about.leadership.philosophy.items.2.desc')}</p>
                              </div>
                              <div className="border-l-2 border-gray-100 pl-4">
                                  <p className="font-bold text-gray-900 text-sm mb-1">{t('about.leadership.philosophy.items.3.title')}</p>
                                  <p className="text-sm text-gray-500">{t('about.leadership.philosophy.items.3.desc')}</p>
                              </div>
                          </div>
                       </div>

                       <p className="text-sm text-gray-500 italic mt-8">
                          {t('about.leadership.bio.footer')}
                       </p>
                    </div>
                </div>
             </div>
          </div>
       </div>

       {/* Locations */}
       <div className="bg-white py-24 border-t border-gray-200">
          <div className="container mx-auto px-6">
             <h2 className="text-3xl font-bold text-gray-900 uppercase mb-12 text-center">{t('about.locations.title')}</h2>
             
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Shenzhen Office */}
                <div className="bg-white p-10 border border-gray-200 shadow-sm hover:border-[#4f4398] transition-all duration-300 group">
                   <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-100">
                      <div className="bg-gray-100 p-3 rounded-sm group-hover:bg-[#4f4398] transition-colors">
                        <Building2 className="text-[#4f4398] group-hover:text-white transition-colors" size={32} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 uppercase">{t('about.locations.shenzhen.title')}</h3>
                        <p className="text-xs text-[#4f4398] font-bold uppercase tracking-widest">{t('about.locations.shenzhen.tag')}</p>
                      </div>
                   </div>

                   <div className="space-y-8">
                      <div>
                         <h4 className="font-bold text-xs text-gray-500 uppercase tracking-wider mb-2">{t('about.locations.companyName')}</h4>
                         <p className="text-gray-900 font-bold text-lg">{t('about.locations.shenzhen.company')}</p>
                      </div>

                      <div className="flex gap-4">
                         <MapPin className="text-[#4f4398] shrink-0 mt-1" size={20} />
                         <div>
                            <h4 className="font-bold text-xs text-gray-500 uppercase tracking-wider mb-2">{t('about.locations.address')}</h4>
                            <p className="text-gray-700 leading-relaxed">
                              {t('about.locations.shenzhen.addressLine1')}<br/>
                              {t('about.locations.shenzhen.addressLine2')}
                            </p>
                         </div>
                      </div>

                      <div className="bg-gray-50 p-6 border border-gray-100">
                         <h4 className="font-bold text-xs text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                           <User size={14} /> {t('about.locations.contacts')}
                         </h4>
                         <div className="grid grid-cols-1 gap-6">
                             <div>
                                <p className="font-bold text-gray-900 mb-1">{t('about.locations.shenzhen.contactName')}</p>
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
                        <h3 className="text-2xl font-bold text-gray-900 uppercase">{t('about.locations.hk.title')}</h3>
                        <p className="text-xs text-[#4f4398] font-bold uppercase tracking-widest">{t('about.locations.hk.tag')}</p>
                      </div>
                   </div>

                   <div className="space-y-8">
                      <div>
                         <h4 className="font-bold text-xs text-gray-500 uppercase tracking-wider mb-2">{t('about.locations.companyName')}</h4>
                         <p className="text-gray-900 font-bold text-lg">{t('about.locations.hk.company')}</p>
                      </div>

                      <div className="flex gap-4">
                         <MapPin className="text-[#4f4398] shrink-0 mt-1" size={20} />
                         <div>
                            <h4 className="font-bold text-xs text-gray-500 uppercase tracking-wider mb-2">{t('about.locations.address')}</h4>
                            <p className="text-gray-700 leading-relaxed uppercase">
                              {t('about.locations.hk.addressLine1')}<br/>
                              {t('about.locations.hk.addressLine2')}<br/>
                              {t('about.locations.hk.addressLine3')}
                            </p>
                         </div>
                      </div>

                      <div className="bg-gray-50 p-6 border border-gray-100">
                         <h4 className="font-bold text-xs text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                           <User size={14} /> {t('about.locations.contacts')}
                         </h4>
                         <div className="grid grid-cols-1 gap-6">
                             <div>
                                <p className="font-bold text-gray-900 mb-1">{t('about.locations.hk.contactName')}</p>
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
            <h2 className="text-3xl font-black text-white uppercase mb-4">{t('about.cta.title')}</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              {t('about.cta.subtitle')}
            </p>
            <a href="mailto:info@aimorelogy.com" className="inline-block bg-white text-[#4f4398] px-8 py-3 font-bold text-sm uppercase hover:bg-gray-100 transition-colors">
               {t('about.cta.email')}
            </a>
         </div>
       </div>
    </div>
  );
};

export default About;
