
import React, { useEffect } from 'react';
import { MapPin, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { RoutePath } from '../types';
import { useTranslation } from 'react-i18next';
import { useLang, withLang } from '../i18n-routing';
import Seo from '../components/Seo';

const Careers: React.FC = () => {
  const { t } = useTranslation();
  const lang = useLang();
  const seoTitle = t('careers.metaTitle');
  const seoDescription = t('careers.metaDescription');
  const seoKeywords = 'AIMORELOGY, 爱谋科技, careers, jobs, hiring, engineer, FPV, UAV, drone, edge AI';
  const positions = t('careers.positions', { returnObjects: true, defaultValue: [] }) as Array<{
    title: string;
    location: string;
    responsibilities: string[];
    requirements: string[];
  }>;
  const applyEmail = t('careers.applyEmail', { defaultValue: 'careers@aimorelogy.com' });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen flex flex-col font-sans text-gray-900">
      <Seo title={seoTitle} description={seoDescription} keywords={seoKeywords} />
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
            <span className="text-[#4f4398] font-bold uppercase tracking-widest mb-4 block">{t('careers.hero.kicker')}</span>
            <h1 className="text-5xl md:text-6xl font-black uppercase mb-6 leading-tight">
              {t('careers.hero.titleLine1')} <br/> {t('careers.hero.titleLine2')}
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed border-l-4 border-[#4f4398] pl-6">
              {t('careers.hero.subtitle')}
            </p>
         </div>
      </section>

      {/* Main Content */}
      <section className="py-20 flex-grow">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
             <div className="mb-16 text-center">
               <h2 className="text-3xl font-bold uppercase mb-4">{t('careers.openPositions')}</h2>
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
                    <h3 className="text-2xl font-bold uppercase mb-2">{t('careers.locations.shenzhen')}</h3>
                    <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-8">{t('careers.locations.shenzhenTag')}</p>
                    
                    <div className="bg-white p-6 border border-gray-100 inline-block w-full mt-auto text-left">
                      {positions.length > 0 ? (
                        <div className="space-y-6">
                          {positions.map((position) => (
                            <div key={position.title} className="border border-gray-200 p-5">
                              <div className="flex flex-wrap items-start justify-between gap-3">
                                <div>
                                  <h4 className="text-lg font-bold uppercase text-gray-900">{position.title}</h4>
                                  <p className="text-sm text-gray-500 mt-1">{position.location}</p>
                                </div>
                                <Briefcase className="text-gray-300" size={22} />
                              </div>
                              <div className="mt-4">
                                <p className="text-xs font-bold uppercase text-gray-500">{t('careers.labels.responsibilities')}</p>
                                <ul className="mt-2 list-disc pl-5 text-sm text-gray-600 space-y-1">
                                  {position.responsibilities.map((item) => (
                                    <li key={item}>{item}</li>
                                  ))}
                                </ul>
                              </div>
                              <div className="mt-4">
                                <p className="text-xs font-bold uppercase text-gray-500">{t('careers.labels.requirements')}</p>
                                <ul className="mt-2 list-disc pl-5 text-sm text-gray-600 space-y-1">
                                  {position.requirements.map((item) => (
                                    <li key={item}>{item}</li>
                                  ))}
                                </ul>
                              </div>
                              <div className="mt-4 border-t border-gray-100 pt-4 text-sm text-gray-600">
                                <span className="font-semibold text-gray-900">{t('careers.labels.apply')}</span>{' '}
                                <a href={`mailto:${applyEmail}`} className="text-[#4f4398] font-semibold hover:underline">
                                  {applyEmail}
                                </a>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center">
                          <Briefcase className="mx-auto text-gray-400 mb-3" size={24} />
                          <p className="text-gray-600 font-medium">{t('careers.none')}</p>
                          <p className="text-xs text-gray-400 mt-2">{t('careers.shenzhenNote')}</p>
                        </div>
                      )}
                    </div>
                </div>

                {/* Hong Kong Office */}
                <div className="bg-gray-50 border border-gray-200 p-10 text-center rounded-sm hover:border-[#4f4398] transition-colors group flex flex-col">
                    <div className="flex justify-center mb-6">
                       <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm text-[#4f4398] group-hover:bg-[#4f4398] group-hover:text-white transition-colors">
                          <MapPin size={32} />
                       </div>
                    </div>
                    <h3 className="text-2xl font-bold uppercase mb-2">{t('careers.locations.hongkong')}</h3>
                    <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-8">{t('careers.locations.hongkongTag')}</p>
                    
                    <div className="bg-white p-6 border border-gray-100 inline-block w-full mt-auto">
                       <Briefcase className="mx-auto text-gray-400 mb-3" size={24} />
                       <p className="text-gray-600 font-medium">{t('careers.none')}</p>
                       <p className="text-xs text-gray-400 mt-2">{t('careers.hongkongNote')}</p>
                    </div>
                </div>
             </div>

             <div className="mt-16 text-center">
                <p className="text-gray-600 mb-4">
                  {t('careers.ctaText')}
                </p>
                <Link to={withLang(lang, RoutePath.CONTACT)} className="text-[#4f4398] font-bold uppercase hover:underline">
                  {t('careers.ctaLink')}
                </Link>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
