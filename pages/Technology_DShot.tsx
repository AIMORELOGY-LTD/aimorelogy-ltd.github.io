import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Zap, Activity, Cpu, Sliders, Layers, CheckCircle } from 'lucide-react';
import { RoutePath } from '../types';
import { useTranslation } from 'react-i18next';
import { useLang, withLang } from '../i18n-routing';

const Technology_DShot: React.FC = () => {
  const { t } = useTranslation();
  const lang = useLang();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = t('dshot.metaTitle');
  }, [t]);

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
              <Link to={withLang(lang, RoutePath.HOME)} className="hover:text-white transition-colors">{t('common.home')}</Link>
              <ChevronRight size={12} />
              <span>{t('common.technology')}</span>
              <ChevronRight size={12} />
              <span className="text-[#4f4398]">{t('dshot.breadcrumb')}</span>
           </div>

           <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                  <div className="inline-flex items-center gap-2 border border-[#4f4398] rounded-full px-4 py-1 mb-6">
                      <Zap size={14} className="text-[#4f4398]" />
                      <span className="text-[#4f4398] font-bold text-xs uppercase tracking-widest">{t('dshot.hero.badge')}</span>
                  </div>
                  
                  <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-none">
                    {t('dshot.hero.titleLine1')} <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f4398] to-[#8075cc]">{t('dshot.hero.titleLine2')}</span>
                  </h1>
                  
                  <h2 className="text-xl text-gray-400 font-medium mb-8 max-w-lg leading-relaxed">
                    {t('dshot.hero.subtitle')}
                  </h2>

                  <div className="grid grid-cols-2 gap-6 mb-10">
                      <div>
                          <div className="text-3xl font-black text-white mb-1">0<span className="text-sm text-gray-500"> DMA</span></div>
                          <div className="text-xs font-bold text-[#4f4398] uppercase">{t('dshot.hero.stats.0')}</div>
                      </div>
                      <div>
                          <div className="text-3xl font-black text-white mb-1">{t('dshot.hero.stats.1.value')}<span className="text-sm text-gray-500">{t('dshot.hero.stats.1.unit')}</span></div>
                          <div className="text-xs font-bold text-[#4f4398] uppercase">{t('dshot.hero.stats.1.label')}</div>
                      </div>
                  </div>
              </div>

              {/* Visualization: Static Diagram (Direct Image) */}
              <div className="lg:w-1/2 w-full flex justify-center">
                  <img 
                     src="/DSHOT-WAVE.webp" 
                     alt={t('dshot.hero.imageAlt')} 
                     className="w-full h-auto object-contain max-h-[300px]" 
                     style={{ filter: 'invert(1) brightness(1.05)' }}
                  />
              </div>
           </div>
         </div>
      </section>

      {/* 2. CORE INNOVATIONS */}
      <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
              <div className="max-w-3xl mx-auto text-center mb-16">
                  <h2 className="text-3xl font-black text-gray-900 uppercase mb-4">{t('dshot.core.title')}</h2>
                  <p className="text-gray-600 text-lg">
                      {t('dshot.core.subtitle')}
                  </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="bg-gray-50 p-8 border border-gray-100 hover:border-[#4f4398] transition-all group">
                      <Cpu size={32} className="text-[#4f4398] mb-6" />
                      <h3 className="text-lg font-bold text-gray-900 uppercase mb-3">{t('dshot.core.cards.0.title')}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                          {t('dshot.core.cards.0.desc')}
                      </p>
                  </div>

                  <div className="bg-gray-50 p-8 border border-gray-100 hover:border-[#4f4398] transition-all group">
                      <Sliders size={32} className="text-[#4f4398] mb-6" />
                      <h3 className="text-lg font-bold text-gray-900 uppercase mb-3">{t('dshot.core.cards.1.title')}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                          {t('dshot.core.cards.1.desc')}
                      </p>
                  </div>

                  <div className="bg-gray-50 p-8 border border-gray-100 hover:border-[#4f4398] transition-all group">
                      <Activity size={32} className="text-[#4f4398] mb-6" />
                      <h3 className="text-lg font-bold text-gray-900 uppercase mb-3">{t('dshot.core.cards.2.title')}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                          {t('dshot.core.cards.2.desc')}
                      </p>
                  </div>

                  <div className="bg-gray-50 p-8 border border-gray-100 hover:border-[#4f4398] transition-all group">
                      <Layers size={32} className="text-[#4f4398] mb-6" />
                      <h3 className="text-lg font-bold text-gray-900 uppercase mb-3">{t('dshot.core.cards.3.title')}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                          {t('dshot.core.cards.3.desc')}
                      </p>
                  </div>
              </div>
          </div>
      </section>

      {/* 3. COMPARISON TABLE */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
          <div className="container mx-auto px-6">
              <h3 className="text-2xl font-black text-gray-900 uppercase mb-10 text-center">{t('dshot.comparison.title')}</h3>
              
              <div className="max-w-5xl mx-auto overflow-hidden bg-white shadow-sm border border-gray-200 rounded-sm">
                  <table className="w-full text-left border-collapse">
                      <thead>
                          <tr className="bg-[#111] text-white">
                              <th className="p-6 font-bold uppercase text-xs tracking-wider w-1/4">{t('dshot.comparison.headers.feature')}</th>
                              <th className="p-6 font-bold uppercase text-xs tracking-wider w-1/4">{t('dshot.comparison.headers.pwm')}</th>
                              <th className="p-6 font-bold uppercase text-xs tracking-wider w-1/4">{t('dshot.comparison.headers.hardware')}</th>
                              <th className="p-6 font-bold uppercase text-xs tracking-wider w-1/4 bg-[#4f4398]">{t('dshot.comparison.headers.adaptive')}</th>
                          </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                          <tr className="hover:bg-gray-50">
                              <td className="p-6 text-sm font-bold text-gray-900">{t('dshot.comparison.rows.0.feature')}</td>
                              <td className="p-6 text-sm text-gray-600">{t('dshot.comparison.rows.0.pwm')}</td>
                              <td className="p-6 text-sm text-gray-600">{t('dshot.comparison.rows.0.hardware')}</td>
                              <td className="p-6 text-sm font-bold text-[#4f4398]">{t('dshot.comparison.rows.0.adaptive')}</td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                              <td className="p-6 text-sm font-bold text-gray-900">{t('dshot.comparison.rows.1.feature')}</td>
                              <td className="p-6 text-sm text-gray-600">{t('dshot.comparison.rows.1.pwm')}</td>
                              <td className="p-6 text-sm text-gray-600">{t('dshot.comparison.rows.1.hardware')}</td>
                              <td className="p-6 text-sm font-bold text-[#4f4398]">{t('dshot.comparison.rows.1.adaptive')}</td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                              <td className="p-6 text-sm font-bold text-gray-900">{t('dshot.comparison.rows.2.feature')}</td>
                              <td className="p-6 text-sm text-gray-600">{t('dshot.comparison.rows.2.pwm')}</td>
                              <td className="p-6 text-sm text-gray-600">{t('dshot.comparison.rows.2.hardware')}</td>
                              <td className="p-6 text-sm font-bold text-[#4f4398]">{t('dshot.comparison.rows.2.adaptive')}</td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                              <td className="p-6 text-sm font-bold text-gray-900">{t('dshot.comparison.rows.3.feature')}</td>
                              <td className="p-6 text-sm text-gray-600">{t('dshot.comparison.rows.3.pwm')}</td>
                              <td className="p-6 text-sm text-gray-600">{t('dshot.comparison.rows.3.hardware')}</td>
                              <td className="p-6 text-sm font-bold text-[#4f4398]">{t('dshot.comparison.rows.3.adaptive')}</td>
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
                              <h4 className="font-bold text-gray-900 text-sm uppercase">{t('dshot.deepDive.steps.0.title')}</h4>
                              <p className="text-xs text-gray-600">{t('dshot.deepDive.steps.0.desc')}</p>
                          </div>
                      </div>
                      <div className="w-px h-8 bg-gray-300 ml-5"></div>
                      <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-[#4f4398] text-white flex items-center justify-center font-bold">2</div>
                          <div>
                              <h4 className="font-bold text-gray-900 text-sm uppercase">{t('dshot.deepDive.steps.1.title')}</h4>
                              <p className="text-xs text-gray-600">{t('dshot.deepDive.steps.1.desc')}</p>
                          </div>
                      </div>
                      <div className="w-px h-8 bg-gray-300 ml-5"></div>
                      <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-[#4f4398] text-white flex items-center justify-center font-bold">3</div>
                          <div>
                              <h4 className="font-bold text-gray-900 text-sm uppercase">{t('dshot.deepDive.steps.2.title')}</h4>
                              <p className="text-xs text-gray-600">{t('dshot.deepDive.steps.2.desc')}</p>
                          </div>
                      </div>
                  </div>
               </div>
            </div>
            
            <div className="lg:w-1/2">
               <h3 className="text-3xl font-black text-gray-900 uppercase mb-6">{t('dshot.deepDive.title')}</h3>
               <p className="text-gray-600 mb-6 leading-relaxed">
                  {t('dshot.deepDive.p1')}
               </p>
               <p className="text-gray-600 mb-8 leading-relaxed">
                  {t('dshot.deepDive.p2')}
               </p>
               <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm font-bold text-gray-900">
                     <CheckCircle size={16} className="text-[#4f4398]" />
                     {t('dshot.deepDive.bullets.0')}
                  </li>
                  <li className="flex items-center gap-3 text-sm font-bold text-gray-900">
                     <CheckCircle size={16} className="text-[#4f4398]" />
                     {t('dshot.deepDive.bullets.1')}
                  </li>
                  <li className="flex items-center gap-3 text-sm font-bold text-gray-900">
                     <CheckCircle size={16} className="text-[#4f4398]" />
                     {t('dshot.deepDive.bullets.2')}
                  </li>
               </ul>
            </div>
         </div>
      </section>

      {/* 5. CTA */}
      <section className="bg-[#111] py-20 text-center">
          <div className="container mx-auto px-6">
              <h2 className="text-3xl font-black text-white uppercase mb-4">{t('dshot.cta.title')}</h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                  {t('dshot.cta.subtitle')}
              </p>
              <div className="flex justify-center gap-4">
                <Link to={withLang(lang, RoutePath.CONTACT)} className="inline-block bg-[#4f4398] text-white px-10 py-4 font-bold uppercase hover:bg-[#5f51b0] transition-colors">
                    {t('dshot.cta.primary')}
                </Link>
              </div>
          </div>
      </section>

    </div>
  );
};

export default Technology_DShot;
