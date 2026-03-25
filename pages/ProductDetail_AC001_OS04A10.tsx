import React from 'react';
import Seo from '../components/Seo';
import { useTranslation } from 'react-i18next';
import { useLang, withLang } from '../i18n-routing';
import { RoutePath } from '../types';
import { Link } from 'react-router-dom';
import { Aperture, Cpu, Eye, Maximize, Zap, Scan, CheckCircle2 } from 'lucide-react';

const ProductDetail_AC001_OS04A10: React.FC = () => {
  const { t } = useTranslation();
  const lang = useLang();

  return (
    <div className="bg-white animate-fadeIn">
      <Seo 
        title={t('products.ac001.metaTitle')}
        description={t('products.ac001.metaDescription')}
        keywords="AC-001-OS04A10, OS04A10 Camera Module, F1.0 Lens, Starlight Camera, Night Vision Module, 1/1.8 inch Sensor"
      />

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-gray-900">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/Cam/AC-001-OS04A10/AC-001-OS04A10-BANNER.jpg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <span className="inline-block py-1 px-3 border border-[#a094e3] text-[#a094e3] font-bold uppercase tracking-widest text-xs mb-6">
              {t('products.ac001.hero.category')}
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight uppercase tracking-tight">
              {t('products.ac001.hero.title')}
            </h1>
            <p className="text-2xl md:text-3xl text-white/95 mb-8 max-w-2xl font-light leading-snug">
              {t('products.ac001.hero.subtitle')}
            </p>
            <p className="text-gray-400 mb-12 max-w-xl leading-relaxed text-lg">
              {t('products.ac001.hero.description')}
            </p>
            <div className="flex gap-4">
              <Link 
                to={withLang(lang, RoutePath.CONTACT)}
                className="inline-block bg-[#4f4398] text-white hover:bg-[#3e3479] px-10 py-4 font-bold text-sm uppercase tracking-wide transition-colors"
              >
                {t('products.ac001.hero.cta')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
            {[
              { 
                icon: <Maximize strokeWidth={1.5} size={40} className="text-[#4f4398]" />,
                title: t('products.ac001.highlights.format.title'),
                desc: t('products.ac001.highlights.format.desc')
              },
              { 
                icon: <Zap strokeWidth={1.5} size={40} className="text-[#4f4398]" />,
                title: t('products.ac001.highlights.pixel.title'),
                desc: t('products.ac001.highlights.pixel.desc')
              },
              { 
                icon: <Aperture strokeWidth={1.5} size={40} className="text-[#4f4398]" />,
                title: t('products.ac001.highlights.lens.title'),
                desc: t('products.ac001.highlights.lens.desc')
              },
              { 
                icon: <Eye strokeWidth={1.5} size={40} className="text-[#4f4398]" />,
                title: t('products.ac001.highlights.res.title'),
                desc: t('products.ac001.highlights.res.desc')
              }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-start">
                <div className="mb-6 p-4 bg-gray-50 rounded-full">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 uppercase mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase Image 1 */}
      <section className="bg-[#f8f9fa] py-24">
        <div className="container mx-auto px-6 text-center">
           <div className="max-w-5xl mx-auto">
              <img src="/Cam/AC-001-OS04A10/AC-001-OS04A10-01.jpg" alt="AC-001-OS04A10 Front View" className="w-full h-auto mx-auto" />
           </div>
        </div>
      </section>

      {/* Core Imaging Advantages */}
      <section className="py-24 bg-[#111] text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-800 pb-8">
            <h2 className="text-3xl md:text-5xl font-black uppercase">
              {t('products.ac001.advantages.title')}
            </h2>
            <div className="text-[#76b900] font-mono text-sm tracking-wider mt-4 md:mt-0">
              // IMAGING ARCHITECTURE
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-800 border border-gray-800">
             <div className="bg-[#1a1a1a] p-12 hover:bg-[#222] transition-colors">
                <div className="text-[#76b900] mb-6"><CheckCircle2 size={32} /></div>
                <h3 className="text-2xl font-bold uppercase mb-4 text-white">
                  {t('products.ac001.advantages.starlight.title')}
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {t('products.ac001.advantages.starlight.desc')}
                </p>
             </div>
             <div className="bg-[#1a1a1a] p-12 hover:bg-[#222] transition-colors">
                <div className="text-[#a094e3] mb-6"><Maximize size={32} /></div>
                <h3 className="text-2xl font-bold uppercase mb-4 text-white">
                  {t('products.ac001.advantages.format.title')}
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {t('products.ac001.advantages.format.desc')}
                </p>
             </div>
             <div className="bg-[#1a1a1a] p-12 hover:bg-[#222] transition-colors">
                <div className="text-[#a094e3] mb-6"><Aperture size={32} /></div>
                <h3 className="text-2xl font-bold uppercase mb-4 text-white">
                  {t('products.ac001.advantages.optics.title')}
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {t('products.ac001.advantages.optics.desc')}
                </p>
             </div>
             <div className="bg-[#1a1a1a] p-12 hover:bg-[#222] transition-colors">
                <div className="text-[#76b900] mb-6"><Scan size={32} /></div>
                <h3 className="text-2xl font-bold uppercase mb-4 text-white">
                  {t('products.ac001.advantages.clarity.title')}
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {t('products.ac001.advantages.clarity.desc')}
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* Sensor + Lens Pairing */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="order-2 lg:order-1">
               <div className="sticky top-24">
                 <h2 className="text-4xl font-black text-gray-900 uppercase mb-12">
                   {t('products.ac001.pairing.title')}
                 </h2>
                 
                 <div className="space-y-12">
                   <div className="group">
                     <h3 className="text-2xl font-bold text-gray-900 uppercase mb-4 flex items-center gap-3 group-hover:text-[#4f4398] transition-colors">
                       <Cpu className="text-[#4f4398]" size={28} />
                       {t('products.ac001.pairing.sensor.title')}
                     </h3>
                     <p className="text-gray-600 mb-6 text-lg">{t('products.ac001.pairing.sensor.desc')}</p>
                     <ul className="space-y-3 pl-2 border-l-2 border-gray-100">
                       {[
                         '4MP / 2688 x 1520',
                         '30 fps Max Frame Rate',
                         '3.0 µm Pixel Size',
                         '1/1.8-inch Class Format',
                         'High Sensitivity'
                       ].map((item, i) => (
                         <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                           <span className="w-1.5 h-1.5 bg-[#4f4398] rounded-full"></span>
                           {item}
                         </li>
                       ))}
                     </ul>
                   </div>
                   
                   <div className="w-full h-px bg-gray-100"></div>

                   <div className="group">
                     <h3 className="text-2xl font-bold text-gray-900 uppercase mb-4 flex items-center gap-3 group-hover:text-[#4f4398] transition-colors">
                       <Aperture className="text-[#4f4398]" size={28} />
                       {t('products.ac001.pairing.lens.title')}
                     </h3>
                     <p className="text-gray-600 mb-6 text-lg">{t('products.ac001.pairing.lens.desc')}</p>
                     <ul className="space-y-3 pl-2 border-l-2 border-gray-100">
                       {[
                         'F1.0 Large Aperture',
                         '4.37 mm Focal Length',
                         'H 109.0° / V 57.5° / D 131.6°',
                         'M16 Mount',
                         'Manual Focus / Fixed Iris'
                       ].map((item, i) => (
                         <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                           <span className="w-1.5 h-1.5 bg-[#4f4398] rounded-full"></span>
                           {item}
                         </li>
                       ))}
                     </ul>
                   </div>
                 </div>
               </div>
            </div>
            
            <div className="order-1 lg:order-2 flex flex-col gap-8">
               <div className="bg-gray-50 p-8 flex items-center justify-center">
                  <img src="/Cam/Cam_01.jpeg" alt="Sensor Detail" className="w-full h-auto max-w-md mix-blend-multiply" />
               </div>
               <div className="bg-gray-50 p-8 flex items-center justify-center">
                  <img src="/Cam/Cam_02.jpeg" alt="Lens Detail" className="w-full h-auto max-w-md mix-blend-multiply" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-24 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-black text-white uppercase mb-12 text-center">
            {t('products.ac001.applications.title')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
             {[
               t('products.ac001.applications.uav'),
               t('products.ac001.applications.edge'),
               t('products.ac001.applications.robotics'),
               t('products.ac001.applications.action')
             ].map((app, i) => (
               <div key={i} className="bg-transparent border border-gray-700 p-8 text-center hover:border-[#4f4398] transition-colors group">
                 <div className="text-gray-400 font-bold uppercase tracking-widest text-sm group-hover:text-white transition-colors">
                   {app}
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase">
              {t('products.ac001.specs.title')}
            </h2>
            <div className="w-24 h-1 bg-[#4f4398] mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Sensor Specs */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Scan size={24} className="text-[#4f4398]" />
                <h3 className="text-xl font-bold text-gray-900 uppercase tracking-wide">
                  {t('products.ac001.specs.sensor.title')}
                </h3>
              </div>
              <div className="border-t-2 border-gray-900">
                <table className="w-full text-sm text-left">
                  <tbody>
                    {[
                      { l: 'Sensor', v: 'OS04A10' },
                      { l: 'Resolution', v: '2688 x 1520' },
                      { l: 'Optical Format', v: '1/1.8-inch class' },
                      { l: 'Pixel Size', v: '3.0 µm' },
                      { l: 'Max Frame Rate', v: '30 fps' },
                      { l: 'Scan Type', v: 'Progressive Scan' },
                      { l: 'Shutter Type', v: 'Rolling Shutter' },
                      { l: 'HDR', v: 'Supported' }
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-gray-100">
                        <td className="py-4 font-semibold text-gray-500 w-1/3 uppercase text-xs tracking-wider">{row.l}</td>
                        <td className="py-4 font-bold text-gray-900 font-mono">{row.v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Optical Specs */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Eye size={24} className="text-[#4f4398]" />
                <h3 className="text-xl font-bold text-gray-900 uppercase tracking-wide">
                  {t('products.ac001.specs.optical.title')}
                </h3>
              </div>
              <div className="border-t-2 border-gray-900">
                <table className="w-full text-sm text-left">
                  <tbody>
                    {[
                      { l: 'Lens Aperture', v: 'F1.0' },
                      { l: 'Focal Length', v: '4.37 mm' },
                      { l: 'Mount', v: 'M16 x P0.5' },
                      { l: 'FOV (H/V/D)', v: '109.0° / 57.5° / 131.6°' },
                      { l: 'Focus', v: 'Manual' },
                      { l: 'Iris', v: 'Fixed' },
                      { l: 'Image Circle', v: 'Ø9.2 max' },
                      { l: 'TTL', v: '22.3 ± 0.2' }
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-gray-100">
                        <td className="py-4 font-semibold text-gray-500 w-1/3 uppercase text-xs tracking-wider">{row.l}</td>
                        <td className="py-4 font-bold text-gray-900 font-mono">{row.v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-[#4f4398] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase mb-8">
            {t('products.ac001.cta.title')}
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-light">
            {t('products.ac001.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to={withLang(lang, RoutePath.CONTACT)}
              className="inline-block bg-white text-[#4f4398] px-12 py-5 font-bold text-sm uppercase hover:bg-gray-100 transition-all transform hover:-translate-y-1 shadow-2xl"
            >
              {t('common.contactSales')}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProductDetail_AC001_OS04A10;
