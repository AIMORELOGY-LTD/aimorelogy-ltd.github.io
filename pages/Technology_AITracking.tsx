import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Target, Zap, Layers, RefreshCcw, Activity } from 'lucide-react';
import { RoutePath } from '../types';
import { useTranslation } from 'react-i18next';
import { useLang, withLang } from '../i18n-routing';
import Seo from '../components/Seo';

const Technology_AITracking: React.FC = () => {
  const { t } = useTranslation();
  const lang = useLang();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const seoTitle = t('aiTracking.metaTitle');
  const seoDescription = t('aiTracking.metaDescription');
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: seoTitle,
    description: seoDescription
  };

  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans selection:bg-[#4f4398] selection:text-white">
      <Seo
        title={seoTitle}
        description={seoDescription}
        image="/AI-TRACKING/TRACK-AI.webp"
        type="article"
        jsonLd={jsonLd}
      />
      
      {/* 1. HERO SECTION */}
      <section className="pt-16 pb-12 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-6">
           {/* Breadcrumbs */}
           <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500 mb-8">
              <Link to={withLang(lang, RoutePath.HOME)} className="hover:text-[#4f4398]">{t('common.home')}</Link>
              <ChevronRight size={12} />
              <span>{t('common.technology')}</span>
              <ChevronRight size={12} />
              <span className="text-[#4f4398]">{t('aiTracking.breadcrumb')}</span>
           </div>

           <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                      <div className="bg-[#4f4398] text-white px-2 py-1 text-xs font-bold uppercase">{t('aiTracking.hero.kicker')}</div>
                      <div className="text-gray-500 font-bold tracking-widest text-sm uppercase">{t('aiTracking.hero.badge')}</div>
                  </div>
                  
                  <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter uppercase mb-6 leading-none">
                    {t('aiTracking.hero.titleLine1')} <br/><span className="text-[#4f4398]">{t('aiTracking.hero.titleLine2')}</span>
                  </h1>
                  
                  <h2 className="text-xl text-gray-700 font-bold mb-6 leading-tight">
                    {t('aiTracking.hero.subtitle')}
                  </h2>
                  
                  <p className="text-gray-600 text-lg mb-8 max-w-xl leading-relaxed">
                     {t('aiTracking.hero.desc')}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <Link to={withLang(lang, RoutePath.CONTACT)} className="bg-[#4f4398] text-white px-8 py-3 font-bold text-sm uppercase hover:bg-[#3e3479] transition-all flex items-center gap-2 shadow-sm">
                        {t('aiTracking.hero.cta')}
                    </Link>
                  </div>
              </div>
              
              {/* Visual Representation */}
              <div className="lg:w-1/2 flex justify-center">
                   <div className="relative w-full aspect-video bg-gray-900 rounded-sm overflow-hidden border border-gray-200 shadow-2xl">
                       <img 
                         src="/AI-TRACKING/TRACK-AI.webp" 
                         alt={t('aiTracking.hero.imageAlt')}
                         className="w-full h-full object-cover"
                       />
                   </div>
              </div>
           </div>
        </div>
      </section>

      {/* 2. PERFORMANCE METRICS */}
      <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
              <div className="flex flex-col md:flex-row gap-16">
                  <div className="md:w-1/3">
                      <h3 className="text-2xl font-black text-gray-900 uppercase mb-6 flex items-center gap-2">
                          <Activity className="text-[#4f4398]" /> {t('aiTracking.performance.title')}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                          {t('aiTracking.performance.desc')}
                      </p>
                      <div className="bg-gray-50 p-6 border border-gray-100">
                         <h4 className="font-bold text-gray-900 text-xs uppercase mb-4 tracking-wider">{t('aiTracking.performance.testTitle')}</h4>
                         <ul className="text-sm text-gray-600 space-y-2">
                             <li className="flex justify-between"><span>{t('aiTracking.performance.test.input')}:</span> <span className="font-mono font-bold">128x128 / 256x256</span></li>
                             <li className="flex justify-between"><span>{t('aiTracking.performance.test.quant')}:</span> <span className="font-mono font-bold">INT8</span></li>
                             <li className="flex justify-between"><span>{t('aiTracking.performance.test.batch')}:</span> <span className="font-mono font-bold">1</span></li>
                         </ul>
                      </div>
                  </div>

                  <div className="md:w-2/3">
                      <div className="overflow-hidden border border-gray-200 rounded-sm">
                          <table className="w-full text-left border-collapse">
                              <thead>
                                  <tr className="bg-[#4f4398] text-white">
                                      <th className="p-4 font-bold uppercase text-xs tracking-wider w-1/2">{t('aiTracking.performance.table.platform')}</th>
                                      <th className="p-4 font-bold uppercase text-xs tracking-wider w-1/2">{t('aiTracking.performance.table.latency')}</th>
                                  </tr>
                              </thead>
                              <tbody className="divide-y divide-gray-100">
                                  <tr className="hover:bg-gray-50 transition-colors group">
                                      <td className="p-6">
                                          <div className="font-black text-lg text-gray-900 group-hover:text-[#4f4398] transition-colors">CV184x</div>
                                          <div className="text-xs text-gray-500 font-bold uppercase mt-1">1.5 TOPS</div>
                                      </td>
                                      <td className="p-6">
                                          <div className="flex items-center gap-2">
                                              <span className="text-3xl font-black text-[#4f4398]">5</span>
                                              <span className="text-sm font-bold text-gray-600 uppercase mt-2">ms</span>
                                          </div>
                                      </td>
                                  </tr>
                                  <tr className="hover:bg-gray-50 transition-colors group">
                                      <td className="p-6">
                                          <div className="font-black text-lg text-gray-900 group-hover:text-[#4f4398] transition-colors">CV186x</div>
                                          <div className="text-xs text-gray-500 font-bold uppercase mt-1">7.2 TOPS</div>
                                      </td>
                                      <td className="p-6">
                                          <div className="flex items-center gap-2">
                                              <span className="text-3xl font-black text-[#76b900]">2</span>
                                              <span className="text-sm font-bold text-gray-600 uppercase mt-2">ms</span>
                                          </div>
                                          <span className="text-xs text-[#76b900] font-bold uppercase">{t('aiTracking.performance.table.ultraFast')}</span>
                                      </td>
                                  </tr>
                                  <tr className="hover:bg-gray-50 transition-colors group">
                                      <td className="p-6">
                                          <div className="font-black text-lg text-gray-900 group-hover:text-[#4f4398] transition-colors">CV181x</div>
                                          <div className="text-xs text-gray-500 font-bold uppercase mt-1">0.5 TOPS</div>
                                      </td>
                                      <td className="p-6">
                                          <div className="flex items-center gap-2">
                                              <span className="text-3xl font-black text-gray-400">9</span>
                                              <span className="text-sm font-bold text-gray-600 uppercase mt-2">ms</span>
                                          </div>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* 3. CORE CAPABILITIES */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
          <div className="container mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="text-3xl font-black text-gray-900 uppercase mb-4">{t('aiTracking.capabilities.title')}</h2>
                  <p className="text-gray-600">
                      {t('aiTracking.capabilities.subtitle')}
                  </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Step 1 */}
                  <div className="bg-white p-2 border border-gray-200 shadow-sm">
                      <div className="relative aspect-video bg-gray-200 mb-4 overflow-hidden">
                          <img src="/AI-TRACKING/image0.webp" alt={t('aiTracking.capabilities.steps.0.alt')} className="w-full h-full object-cover" />
                          <div className="absolute top-2 left-2 bg-black/50 text-white text-[10px] px-2 py-1 font-mono">{t('aiTracking.capabilities.steps.0.status')}</div>
                      </div>
                      <h4 className="font-bold text-gray-900 uppercase text-center mb-2">{t('aiTracking.capabilities.steps.0.title')}</h4>
                      <p className="text-xs text-gray-500 text-center px-4 pb-4">{t('aiTracking.capabilities.steps.0.desc')}</p>
                  </div>

                  {/* Step 2 */}
                  <div className="bg-white p-2 border border-gray-200 shadow-sm relative">
                       <div className="hidden md:block absolute top-1/2 -left-6 transform -translate-y-1/2 text-gray-300">
                          <ChevronRight size={32} />
                       </div>
                      <div className="relative aspect-video bg-gray-200 mb-4 overflow-hidden">
                          <img src="/AI-TRACKING/image1.webp" alt={t('aiTracking.capabilities.steps.1.alt')} className="w-full h-full object-cover" />
                          <div className="absolute top-2 left-2 bg-black/50 text-white text-[10px] px-2 py-1 font-mono">{t('aiTracking.capabilities.steps.1.status')}</div>
                      </div>
                      <h4 className="font-bold text-gray-900 uppercase text-center mb-2">{t('aiTracking.capabilities.steps.1.title')}</h4>
                      <p className="text-xs text-gray-500 text-center px-4 pb-4">{t('aiTracking.capabilities.steps.1.desc')}</p>
                  </div>

                  {/* Step 3 */}
                  <div className="bg-white p-2 border border-gray-200 shadow-sm relative">
                       <div className="hidden md:block absolute top-1/2 -left-6 transform -translate-y-1/2 text-gray-300">
                          <ChevronRight size={32} />
                       </div>
                      <div className="relative aspect-video bg-gray-200 mb-4 overflow-hidden">
                          <img src="/AI-TRACKING/image2.webp" alt={t('aiTracking.capabilities.steps.2.alt')} className="w-full h-full object-cover" />
                          <div className="absolute top-2 left-2 bg-[#00ff00] text-black text-[10px] px-2 py-1 font-mono">{t('aiTracking.capabilities.steps.2.status')}</div>
                      </div>
                      <h4 className="font-bold text-gray-900 uppercase text-center mb-2">{t('aiTracking.capabilities.steps.2.title')}</h4>
                      <p className="text-xs text-gray-500 text-center px-4 pb-4">{t('aiTracking.capabilities.steps.2.desc')}</p>
                  </div>
              </div>
          </div>
      </section>

      {/* 4. FEATURES GRID */}
      <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="p-6 border border-gray-100 hover:border-[#4f4398] transition-colors group">
                      <Zap className="text-[#4f4398] mb-4" size={32} />
                      <h4 className="font-bold text-gray-900 uppercase mb-2">{t('aiTracking.features.0.title')}</h4>
                      <p className="text-sm text-gray-600">
                          {t('aiTracking.features.0.desc')}
                      </p>
                  </div>
                  <div className="p-6 border border-gray-100 hover:border-[#4f4398] transition-colors group">
                      <Layers className="text-[#4f4398] mb-4" size={32} />
                      <h4 className="font-bold text-gray-900 uppercase mb-2">{t('aiTracking.features.1.title')}</h4>
                      <p className="text-sm text-gray-600">
                          {t('aiTracking.features.1.desc')}
                      </p>
                  </div>
                  <div className="p-6 border border-gray-100 hover:border-[#4f4398] transition-colors group">
                      <RefreshCcw className="text-[#4f4398] mb-4" size={32} />
                      <h4 className="font-bold text-gray-900 uppercase mb-2">{t('aiTracking.features.2.title')}</h4>
                      <p className="text-sm text-gray-600">
                         {t('aiTracking.features.2.desc')}
                      </p>
                  </div>
                  <div className="p-6 border border-gray-100 hover:border-[#4f4398] transition-colors group">
                      <Target className="text-[#4f4398] mb-4" size={32} />
                      <h4 className="font-bold text-gray-900 uppercase mb-2">{t('aiTracking.features.3.title')}</h4>
                      <p className="text-sm text-gray-600">
                          {t('aiTracking.features.3.desc')}
                      </p>
                  </div>
              </div>
          </div>
      </section>

      {/* 5. CTA */}
      <section className="bg-[#111] py-16 text-center">
          <div className="container mx-auto px-6">
              <h2 className="text-3xl font-black text-white uppercase mb-4">{t('aiTracking.cta.title')}</h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                  {t('aiTracking.cta.subtitle')}
              </p>
              <div className="flex justify-center gap-4">
                <Link to={withLang(lang, RoutePath.CONTACT)} className="inline-block bg-[#4f4398] text-white px-10 py-4 font-bold uppercase hover:bg-[#5f51b0] transition-colors">
                    {t('aiTracking.cta.primary')}
                </Link>
                <Link to={withLang(lang, RoutePath.PRODUCT_AFC)} className="inline-block border border-gray-600 text-gray-300 px-10 py-4 font-bold uppercase hover:border-white hover:text-white transition-colors">
                    {t('aiTracking.cta.secondary')}
                </Link>
              </div>
          </div>
      </section>
    </div>
  );
};

export default Technology_AITracking;
