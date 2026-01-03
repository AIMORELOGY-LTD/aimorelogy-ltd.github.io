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
  Shield
} from 'lucide-react';
import { RoutePath } from '../types';
import { useTranslation } from 'react-i18next';
import { useLang, withLang } from '../i18n-routing';
import Seo from '../components/Seo';

const SolutionDetail_AICamera: React.FC = () => {
  const { t } = useTranslation();
  const lang = useLang();
  const cloudItems = t('aiCamera.software.cloudItems', { returnObjects: true }) as string[];
  const appTags = t('aiCamera.software.appTags', { returnObjects: true }) as string[];
  const seoTitle = t('aiCamera.metaTitle');
  const seoDescription = t('aiCamera.metaDescription');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      <Seo title={seoTitle} description={seoDescription} />
      {/* 1. HERO SECTION */}
      <section className="pt-24 pb-16 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-6">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500 mb-8">
            <Link to={withLang(lang, RoutePath.HOME)} className="hover:text-[#4f4398]">{t('common.home')}</Link>
            <ArrowRight size={10} />
            <span>{t('common.solutions')}</span>
            <ArrowRight size={10} />
            <span className="text-[#4f4398]">{t('aiCamera.breadcrumb')}</span>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#4f4398] text-white px-3 py-1 text-xs font-bold uppercase">{t('aiCamera.hero.kicker')}</div>
                <div className="text-gray-500 font-bold tracking-widest text-sm uppercase">{t('aiCamera.hero.badge')}</div>
              </div>

              <h1 className="text-4xl md:text-6xl font-black text-gray-900 uppercase mb-6 leading-tight">
                {t('aiCamera.hero.titleLine1')} <br/><span className="text-[#4f4398]">{t('aiCamera.hero.titleLine2')}</span>
              </h1>

              <p className="text-gray-600 text-lg mb-8 max-w-xl leading-relaxed">
                {t('aiCamera.hero.desc')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to={withLang(lang, RoutePath.CONTACT)} className="bg-[#4f4398] text-white px-8 py-4 font-bold text-sm uppercase hover:bg-[#3e3479] transition-all flex items-center justify-center gap-2 shadow-sm">
                  {t('aiCamera.hero.cta')} <ArrowRight size={16} />
                </Link>
                <div className="flex items-center gap-4 px-6 text-sm text-gray-500 font-medium">
                  <CheckCircle size={16} className="text-[#76b900]" />
                  <span>{t('aiCamera.hero.ready')}</span>
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
                  <span className="ml-2 text-xs font-mono text-gray-500">{t('aiCamera.hero.uiVersion')}</span>
                </div>
                <div className="flex-1 bg-gray-900 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src="https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&q=80&w=800"
                      alt={t('aiCamera.hero.imageAlt')}
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute top-4 left-4 bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">{t('aiCamera.hero.overlay')}</div>
                    <div className="absolute bottom-8 flex gap-8">
                      <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center bg-white/20 hover:bg-white/40 cursor-pointer">
                        <div className="w-10 h-10 rounded-full bg-white"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 shadow-lg border border-gray-100 max-w-xs hidden md:block">
                <div className="flex items-center gap-3">
                  <Cpu size={32} className="text-[#4f4398]" />
                  <div>
                    <div className="text-xs text-gray-500 uppercase font-bold">{t('aiCamera.hero.chipLabel')}</div>
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
              <h3 className="text-xl font-black text-gray-900 uppercase mb-3">{t('aiCamera.value.0.title')}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{t('aiCamera.value.0.desc')}</p>
            </div>

            <div className="bg-white p-8 border border-gray-100 hover:border-[#4f4398] transition-colors group shadow-sm">
              <div className="w-12 h-12 bg-[#4f4398]/10 flex items-center justify-center mb-6 group-hover:bg-[#4f4398] transition-colors">
                <Layers className="text-[#4f4398] group-hover:text-white" size={24} />
              </div>
              <h3 className="text-xl font-black text-gray-900 uppercase mb-3">{t('aiCamera.value.1.title')}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{t('aiCamera.value.1.desc')}</p>
            </div>

            <div className="bg-white p-8 border border-gray-100 hover:border-[#4f4398] transition-colors group shadow-sm">
              <div className="w-12 h-12 bg-[#4f4398]/10 flex items-center justify-center mb-6 group-hover:bg-[#4f4398] transition-colors">
                <Camera className="text-[#4f4398] group-hover:text-white" size={24} />
              </div>
              <h3 className="text-xl font-black text-gray-900 uppercase mb-3">{t('aiCamera.value.2.title')}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{t('aiCamera.value.2.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HARDWARE SPECIFICATIONS */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
              <h2 className="text-3xl font-black text-gray-900 uppercase mb-6">{t('aiCamera.specs.title')}</h2>
              <p className="text-gray-600 mb-6">{t('aiCamera.specs.subtitle')}</p>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="font-bold text-gray-500 text-sm uppercase">{t('aiCamera.specs.items.0.label')}</span>
                  <span className="font-bold text-gray-900">CV1842C-P</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="font-bold text-gray-500 text-sm uppercase">{t('aiCamera.specs.items.1.label')}</span>
                  <span className="font-bold text-gray-900 text-right">{t('aiCamera.specs.items.1.value')}</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="font-bold text-gray-500 text-sm uppercase">{t('aiCamera.specs.items.2.label')}</span>
                  <span className="font-bold text-gray-900">{t('aiCamera.specs.items.2.value')}</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="font-bold text-gray-500 text-sm uppercase">{t('aiCamera.specs.items.3.label')}</span>
                  <span className="font-bold text-gray-900">{t('aiCamera.specs.items.3.value')}</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="font-bold text-gray-500 text-sm uppercase">{t('aiCamera.specs.items.4.label')}</span>
                  <span className="font-bold text-gray-900">{t('aiCamera.specs.items.4.value')}</span>
                </div>
              </div>
            </div>

            <div className="md:w-2/3">
              <div className="bg-white p-8 border border-gray-200 h-full">
                <h3 className="font-bold text-[#4f4398] uppercase mb-6 tracking-widest text-sm">{t('aiCamera.specs.diagram')}</h3>
                <div className="relative border-2 border-dashed border-gray-300 p-8 rounded-lg flex items-center justify-center bg-gray-50">
                  <div className="bg-[#4f4398] text-white p-8 w-64 text-center shadow-lg relative z-10">
                    <div className="font-black text-xl mb-1">CV1842C-P</div>
                    <div className="text-xs opacity-80">{t('aiCamera.specs.sip')}</div>
                  </div>

                  <div className="absolute inset-0 flex flex-col justify-between p-4">
                    <div className="flex justify-between w-full px-12">
                      <div className="flex flex-col items-center gap-1">
                        <div className="bg-gray-200 text-xs font-bold px-2 py-1">{t('aiCamera.specs.blocks.0.title')}</div>
                        <div className="h-8 w-px bg-gray-400"></div>
                        <div className="text-[10px] text-gray-500">{t('aiCamera.specs.blocks.0.bus')}</div>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <div className="bg-gray-200 text-xs font-bold px-2 py-1">{t('aiCamera.specs.blocks.1.title')}</div>
                        <div className="h-8 w-px bg-gray-400"></div>
                        <div className="text-[10px] text-gray-500">{t('aiCamera.specs.blocks.1.bus')}</div>
                      </div>
                    </div>

                    <div className="flex justify-between w-full items-center">
                      <div className="flex items-center gap-1">
                        <div className="bg-gray-200 text-xs font-bold px-2 py-1">{t('aiCamera.specs.blocks.2.title')}</div>
                        <div className="w-8 h-px bg-gray-400"></div>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-8 h-px bg-gray-400"></div>
                        <div className="bg-gray-200 text-xs font-bold px-2 py-1">{t('aiCamera.specs.blocks.3.title')}</div>
                      </div>
                    </div>

                    <div className="flex justify-between w-full px-12">
                      <div className="flex flex-col items-center gap-1">
                        <div className="text-[10px] text-gray-500">{t('aiCamera.specs.blocks.4.bus')}</div>
                        <div className="h-8 w-px bg-gray-400"></div>
                        <div className="bg-gray-200 text-xs font-bold px-2 py-1">{t('aiCamera.specs.blocks.4.title')}</div>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <div className="text-[10px] text-gray-500">{t('aiCamera.specs.blocks.5.bus')}</div>
                        <div className="h-8 w-px bg-gray-400"></div>
                        <div className="bg-gray-200 text-xs font-bold px-2 py-1">{t('aiCamera.specs.blocks.5.title')}</div>
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
          <h2 className="text-3xl font-black text-gray-900 uppercase mb-12 text-center">{t('aiCamera.software.title')}</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="border border-orange-100 bg-orange-50/30 p-8 rounded-sm">
              <h3 className="flex items-center gap-2 text-orange-600 font-bold uppercase mb-6">
                <Cloud size={24} /> {t('aiCamera.software.cloudTitle')}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {cloudItems.map((item, idx) => (
                  <div key={idx} className="bg-white border border-orange-200 px-4 py-3 text-sm font-medium text-gray-700 shadow-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-green-100 bg-green-50/30 p-8 rounded-sm">
              <h3 className="flex items-center gap-2 text-green-600 font-bold uppercase mb-6">
                <Smartphone size={24} /> {t('aiCamera.software.deviceTitle')}
              </h3>
              <div className="space-y-4">
                <div className="bg-white border border-green-200 p-4 shadow-sm">
                  <div className="text-xs text-gray-500 font-bold uppercase mb-2">{t('aiCamera.software.appTitle')}</div>
                  <div className="flex flex-wrap gap-2">
                    {appTags.map((tag, i) => (
                      <span key={i} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-sm">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="bg-gray-100 border border-gray-200 p-3 text-center text-xs font-bold text-gray-500">
                  {t('aiCamera.software.hal')}
                </div>
                <div className="bg-gray-800 text-white p-3 text-center text-xs font-bold uppercase tracking-widest rounded-sm">
                  {t('aiCamera.software.os')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CAPABILITIES LIST */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-black uppercase mb-12">{t('aiCamera.capabilities.title')}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 border border-gray-700 hover:border-[#4f4398] transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="text-[#4f4398]" size={24} />
                <h4 className="font-bold uppercase">{t('aiCamera.capabilities.items.0.title')}</h4>
              </div>
              <p className="text-gray-400 text-sm">{t('aiCamera.capabilities.items.0.desc')}</p>
            </div>

            <div className="bg-gray-800 p-6 border border-gray-700 hover:border-[#4f4398] transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <ImageIcon className="text-[#4f4398]" size={24} />
                <h4 className="font-bold uppercase">{t('aiCamera.capabilities.items.1.title')}</h4>
              </div>
              <p className="text-gray-400 text-sm">{t('aiCamera.capabilities.items.1.desc')}</p>
            </div>

            <div className="bg-gray-800 p-6 border border-gray-700 hover:border-[#4f4398] transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="text-[#4f4398]" size={24} />
                <h4 className="font-bold uppercase">{t('aiCamera.capabilities.items.2.title')}</h4>
              </div>
              <p className="text-gray-400 text-sm">{t('aiCamera.capabilities.items.2.desc')}</p>
            </div>

            <div className="bg-gray-800 p-6 border border-gray-700 hover:border-[#4f4398] transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="text-[#4f4398]" size={24} />
                <h4 className="font-bold uppercase">{t('aiCamera.capabilities.items.3.title')}</h4>
              </div>
              <p className="text-gray-400 text-sm">{t('aiCamera.capabilities.items.3.desc')}</p>
            </div>

            <div className="bg-gray-800 p-6 border border-gray-700 hover:border-[#4f4398] transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="text-[#4f4398]" size={24} />
                <h4 className="font-bold uppercase">{t('aiCamera.capabilities.items.4.title')}</h4>
              </div>
              <p className="text-gray-400 text-sm">{t('aiCamera.capabilities.items.4.desc')}</p>
            </div>

            <div className="bg-gray-800 p-6 border border-gray-700 hover:border-[#4f4398] transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="text-[#4f4398]" size={24} />
                <h4 className="font-bold uppercase">{t('aiCamera.capabilities.items.5.title')}</h4>
              </div>
              <p className="text-gray-400 text-sm">{t('aiCamera.capabilities.items.5.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="bg-white py-24 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-black text-gray-900 uppercase mb-4">{t('aiCamera.cta.title')}</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">{t('aiCamera.cta.subtitle')}</p>
          <div className="flex justify-center gap-4">
            <Link to={withLang(lang, RoutePath.CONTACT)} className="bg-[#4f4398] text-white px-10 py-4 font-bold uppercase hover:bg-[#5f51b0] transition-colors">
              {t('common.contactSales')}
            </Link>
            <Link to={withLang(lang, '/products/sophgo/cv184x/')} className="border border-gray-300 text-gray-700 px-10 py-4 font-bold uppercase hover:border-gray-900 transition-colors">
              {t('aiCamera.cta.secondary')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionDetail_AICamera;
