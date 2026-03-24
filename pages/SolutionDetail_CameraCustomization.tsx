import React from 'react';
import Seo from '../components/Seo';
import { useTranslation } from 'react-i18next';
import { useLang, withLang } from '../i18n-routing';
import { RoutePath } from '../types';
import { Link } from 'react-router-dom';
import { CheckCircle, Zap, Shield, Eye, Layers, DollarSign, Settings, Aperture, Activity, Cpu } from 'lucide-react';

const SolutionDetail_CameraCustomization: React.FC = () => {
  const { t } = useTranslation();
  const lang = useLang();

  // Feature list data
  const features = [
    {
      icon: <Zap size={24} className="text-[#4f4398]" />,
      title: t('solution.cameraCustomization.features.latency.title'),
      desc: t('solution.cameraCustomization.features.latency.desc')
    },
    {
      icon: <Shield size={24} className="text-[#4f4398]" />,
      title: t('solution.cameraCustomization.features.durability.title'),
      desc: t('solution.cameraCustomization.features.durability.desc')
    },
    {
      icon: <Eye size={24} className="text-[#4f4398]" />,
      title: t('solution.cameraCustomization.features.wdr.title'),
      desc: t('solution.cameraCustomization.features.wdr.desc')
    },
    {
      icon: <Layers size={24} className="text-[#4f4398]" />,
      title: t('solution.cameraCustomization.features.lightweight.title'),
      desc: t('solution.cameraCustomization.features.lightweight.desc')
    }
  ];

  const workflowSteps = [
    { num: '01', title: t('solution.cameraCustomization.workflow.steps.0.title'), desc: t('solution.cameraCustomization.workflow.steps.0.desc') },
    { num: '02', title: t('solution.cameraCustomization.workflow.steps.1.title'), desc: t('solution.cameraCustomization.workflow.steps.1.desc') },
    { num: '03', title: t('solution.cameraCustomization.workflow.steps.2.title'), desc: t('solution.cameraCustomization.workflow.steps.2.desc') },
    { num: '04', title: t('solution.cameraCustomization.workflow.steps.3.title'), desc: t('solution.cameraCustomization.workflow.steps.3.desc') }
  ];

  return (
    <div className="bg-white">
      <Seo 
        title={t('solution.cameraCustomization.metaTitle')}
        description={t('solution.cameraCustomization.metaDescription')}
        keywords="Camera Module, Customization, UAV Camera, FPV Camera, Global Shutter, 4K Camera Module, MIPI, DVP, Industrial Camera"
      />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-gray-900">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/Cam/Cam_post.jpeg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl animate-fadeIn">
            <span className="text-[#a094e3] font-bold uppercase tracking-widest text-sm mb-4 block">
              {t('solution.cameraCustomization.heroCategory')}
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight uppercase">
              {t('solution.cameraCustomization.title')}
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl font-light">
              {t('solution.cameraCustomization.subtitle')}
            </p>
            <Link 
              to={withLang(lang, RoutePath.CONTACT)}
              className="inline-block bg-[#4f4398] text-white hover:bg-[#3e3479] px-8 py-4 font-bold text-sm uppercase tracking-wide transition-colors"
            >
              {t('common.contactSales')}
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Philosophy */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 uppercase">
                {t('solution.cameraCustomization.intro.title')}
              </h2>
              <div className="h-1 w-20 bg-[#4f4398] mb-8"></div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {t('solution.cameraCustomization.intro.desc1')}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {t('solution.cameraCustomization.intro.desc2')}
              </p>
            </div>
            <div className="lg:w-1/2">
               <div className="grid grid-cols-2 gap-4">
                 <div className="bg-gray-50 p-6 border border-gray-100 h-full">
                    <DollarSign className="text-[#4f4398] mb-4" size={32} />
                    <h3 className="text-lg font-bold text-gray-900 uppercase mb-2">{t('solution.cameraCustomization.spectrum.budget.title')}</h3>
                    <p className="text-sm text-gray-600">{t('solution.cameraCustomization.spectrum.budget.desc')}</p>
                 </div>
                 <div className="bg-gray-900 p-6 border border-gray-800 h-full">
                    <Settings className="text-[#76b900] mb-4" size={32} />
                    <h3 className="text-lg font-bold text-white uppercase mb-2">{t('solution.cameraCustomization.spectrum.highEnd.title')}</h3>
                    <p className="text-sm text-gray-400">{t('solution.cameraCustomization.spectrum.highEnd.desc')}</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Showcase & Capabilities */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
           <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-black text-gray-900 uppercase mb-4">{t('solution.cameraCustomization.capabilities.title')}</h2>
              <p className="text-gray-600">{t('solution.cameraCustomization.capabilities.subtitle')}</p>
           </div>

           {/* Capability 1: High Performance */}
           <div className="flex flex-col md:flex-row gap-12 items-center mb-24">
              <div className="md:w-1/2 order-2 md:order-1">
                 <div>
                    <img src="/Cam/Cam_01.jpeg" alt="High Performance Camera Module" className="w-full h-auto" />
                 </div>
              </div>
              <div className="md:w-1/2 order-1 md:order-2">
                 <h3 className="text-2xl font-bold text-gray-900 uppercase mb-4 flex items-center gap-3">
                    <Aperture className="text-[#4f4398]" />
                    {t('solution.cameraCustomization.capabilities.cap1.title')}
                 </h3>
                 <p className="text-gray-600 leading-relaxed mb-6">
                    {t('solution.cameraCustomization.capabilities.cap1.desc')}
                 </p>
                 <ul className="space-y-2">
                    {[
                      t('solution.cameraCustomization.capabilities.cap1.point1'),
                      t('solution.cameraCustomization.capabilities.cap1.point2'),
                      t('solution.cameraCustomization.capabilities.cap1.point3')
                    ].map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle size={16} className="text-[#76b900] mt-1 shrink-0" />
                        {point}
                      </li>
                    ))}
                 </ul>
              </div>
           </div>

           {/* Capability 2: Integration & Durability */}
           <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                 <h3 className="text-2xl font-bold text-gray-900 uppercase mb-4 flex items-center gap-3">
                    <Cpu className="text-[#4f4398]" />
                    {t('solution.cameraCustomization.capabilities.cap2.title')}
                 </h3>
                 <p className="text-gray-600 leading-relaxed mb-6">
                    {t('solution.cameraCustomization.capabilities.cap2.desc')}
                 </p>
                 <ul className="space-y-2">
                    {[
                      t('solution.cameraCustomization.capabilities.cap2.point1'),
                      t('solution.cameraCustomization.capabilities.cap2.point2'),
                      t('solution.cameraCustomization.capabilities.cap2.point3')
                    ].map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle size={16} className="text-[#76b900] mt-1 shrink-0" />
                        {point}
                      </li>
                    ))}
                 </ul>
              </div>
              <div className="md:w-1/2">
                 <div>
                    <img src="/Cam/Cam_02.jpeg" alt="Compact Integration" className="w-full h-auto" />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* UAV/FPV Specific Features */}
      <section className="py-24 bg-[#1a1a1a] text-white">
        <div className="container mx-auto px-6">
           <div className="text-center mb-16">
             <h2 className="text-3xl font-black text-white uppercase">{t('solution.cameraCustomization.features.title')}</h2>
             <p className="text-gray-400 mt-4 max-w-2xl mx-auto">{t('solution.cameraCustomization.features.subtitle')}</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, idx) => (
                <div key={idx} className="bg-[#252525] p-8 border-t-4 border-[#4f4398] hover:bg-[#303030] transition-colors">
                   <div className="mb-6 inline-block p-3 bg-black/50 rounded-full">{feature.icon}</div>
                   <h3 className="text-lg font-bold text-white uppercase mb-3">{feature.title}</h3>
                   <p className="text-sm text-gray-400 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
           <h2 className="text-3xl font-black text-gray-900 uppercase text-center mb-16">{t('solution.cameraCustomization.workflow.title')}</h2>
           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {workflowSteps.map((step, idx) => (
                <div key={idx} className="relative">
                   <div className="text-6xl font-black text-gray-100 absolute -top-8 -left-4 z-0 select-none">
                     {step.num}
                   </div>
                   <div className="relative z-10 pt-4">
                      <h3 className="text-xl font-bold text-[#4f4398] uppercase mb-3">{step.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                   </div>
                   {/* Connector Line (Desktop Only) */}
                   {idx < workflowSteps.length - 1 && (
                     <div className="hidden md:block absolute top-8 -right-4 w-8 h-[2px] bg-gray-200"></div>
                   )}
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#4f4398]">
        <div className="container mx-auto px-6 text-center">
           <h2 className="text-3xl md:text-4xl font-black text-white uppercase mb-6">
             {t('solution.cameraCustomization.cta.title')}
           </h2>
           <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
             {t('solution.cameraCustomization.cta.subtitle')}
           </p>
           <Link 
             to={withLang(lang, RoutePath.CONTACT)}
             className="inline-block bg-white text-[#4f4398] px-10 py-4 font-bold text-sm uppercase hover:bg-gray-100 transition-colors shadow-lg"
           >
             {t('solution.cameraCustomization.cta.button')}
           </Link>
        </div>
      </section>

    </div>
  );
};

export default SolutionDetail_CameraCustomization;
