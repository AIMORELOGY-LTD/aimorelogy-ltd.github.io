import React from 'react';
import Seo from '../components/Seo';
import { useTranslation } from 'react-i18next';
import { useLang, withLang } from '../i18n-routing';
import { RoutePath } from '../types';
import { Link } from 'react-router-dom';
import { Aperture, Cpu, Eye, Maximize, Zap, Scan } from 'lucide-react';

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

      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-gray-900">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/Cam/AC-001-OS04A10/AC-001-OS04A10-BANNER.jpg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="text-[#a094e3] font-bold uppercase tracking-widest text-sm mb-4 block">
              {t('products.ac001.hero.category')}
            </span>
            <h1 className="text-4xl md:text-7xl font-black text-white mb-6 leading-tight uppercase">
              {t('products.ac001.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl font-light">
              {t('products.ac001.hero.subtitle')}
            </p>
            <p className="text-gray-300 mb-10 max-w-xl leading-relaxed">
              {t('products.ac001.hero.description')}
            </p>
            <div className="flex gap-4">
              <Link
                to={withLang(lang, RoutePath.CONTACT)}
                className="inline-block bg-[#4f4398] text-white hover:bg-[#3e3479] px-8 py-4 font-bold text-sm uppercase tracking-wide transition-colors"
              >
                {t('products.ac001.hero.cta')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                icon: <Maximize size={32} className="text-[#4f4398]" />,
                title: t('products.ac001.highlights.format.title'),
                desc: t('products.ac001.highlights.format.desc')
              },
              {
                icon: <Zap size={32} className="text-[#4f4398]" />,
                title: t('products.ac001.highlights.pixel.title'),
                desc: t('products.ac001.highlights.pixel.desc')
              },
              {
                icon: <Aperture size={32} className="text-[#4f4398]" />,
                title: t('products.ac001.highlights.lens.title'),
                desc: t('products.ac001.highlights.lens.desc')
              },
              {
                icon: <Eye size={32} className="text-[#4f4398]" />,
                title: t('products.ac001.highlights.res.title'),
                desc: t('products.ac001.highlights.res.desc')
              }
            ].map((item, idx) => (
              <div key={idx} className="group">
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 uppercase mb-3 group-hover:text-[#4f4398] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <div>
            <img
              src="/Cam/AC-001-OS04A10/AC-001-OS04A10-01.jpg"
              alt="AC-001-OS04A10 Front View"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#1a1a1a] text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-black uppercase mb-16 text-center">
            {t('products.ac001.advantages.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#252525] p-10 border-l-4 border-[#76b900]">
              <h3 className="text-2xl font-bold uppercase mb-4 text-[#76b900]">
                {t('products.ac001.advantages.starlight.title')}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {t('products.ac001.advantages.starlight.desc')}
              </p>
            </div>
            <div className="bg-[#252525] p-10 border-l-4 border-[#4f4398]">
              <h3 className="text-2xl font-bold uppercase mb-4 text-[#a094e3]">
                {t('products.ac001.advantages.format.title')}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {t('products.ac001.advantages.format.desc')}
              </p>
            </div>
            <div className="bg-[#252525] p-10 border-l-4 border-[#4f4398]">
              <h3 className="text-2xl font-bold uppercase mb-4 text-[#a094e3]">
                {t('products.ac001.advantages.optics.title')}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {t('products.ac001.advantages.optics.desc')}
              </p>
            </div>
            <div className="bg-[#252525] p-10 border-l-4 border-[#76b900]">
              <h3 className="text-2xl font-bold uppercase mb-4 text-[#76b900]">
                {t('products.ac001.advantages.clarity.title')}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {t('products.ac001.advantages.clarity.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-black text-gray-900 uppercase mb-8">
                {t('products.ac001.pairing.title')}
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-[#4f4398] uppercase mb-2 flex items-center gap-2">
                    <Cpu size={20} />
                    {t('products.ac001.pairing.sensor.title')}
                  </h3>
                  <p className="text-gray-600 mb-4">{t('products.ac001.pairing.sensor.desc')}</p>
                  <ul className="space-y-2">
                    {[
                      '4MP / 2688 x 1520',
                      '30 fps Max Frame Rate',
                      '3.0 μm Pixel Size',
                      '1/1.8-inch Class Format',
                      'High Sensitivity'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                        <div className="w-1.5 h-1.5 bg-[#4f4398]"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="h-px bg-gray-200"></div>

                <div>
                  <h3 className="text-xl font-bold text-[#4f4398] uppercase mb-2 flex items-center gap-2">
                    <Aperture size={20} />
                    {t('products.ac001.pairing.lens.title')}
                  </h3>
                  <p className="text-gray-600 mb-4">{t('products.ac001.pairing.lens.desc')}</p>
                  <ul className="space-y-2">
                    {[
                      'F1.0 Large Aperture',
                      '4.37 mm Focal Length',
                      'H 109.0° / V 57.5° / D 131.6°',
                      'M16 Mount',
                      'Manual Focus / Fixed Iris'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                        <div className="w-1.5 h-1.5 bg-[#4f4398]"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 flex flex-col gap-6">
              <div>
                <img src="/Cam/Cam_01.jpeg" alt="Sensor Detail" className="w-full h-auto" />
              </div>
              <div>
                <img src="/Cam/Cam_02.jpeg" alt="Lens Detail" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-gray-900 uppercase mb-16">
            {t('products.ac001.applications.title')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              t('products.ac001.applications.uav'),
              t('products.ac001.applications.edge'),
              t('products.ac001.applications.robotics'),
              t('products.ac001.applications.action')
            ].map((app, i) => (
              <div key={i} className="bg-white p-6 border border-gray-200 font-bold text-gray-800 uppercase tracking-wide">
                {app}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-black text-gray-900 uppercase mb-12">
            {t('products.ac001.specs.title')}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-[#4f4398] uppercase mb-6 flex items-center gap-2">
                <Scan size={24} />
                {t('products.ac001.specs.sensor.title')}
              </h3>
              <table className="w-full text-sm text-left">
                <tbody>
                  {[
                    { l: 'Sensor', v: 'OS04A10' },
                    { l: 'Resolution', v: '2688 x 1520' },
                    { l: 'Optical Format', v: '1/1.8-inch class' },
                    { l: 'Pixel Size', v: '3.0 μm' },
                    { l: 'Max Frame Rate', v: '30 fps' },
                    { l: 'Scan Type', v: 'Progressive Scan' },
                    { l: 'Shutter Type', v: 'Rolling Shutter' },
                    { l: 'HDR', v: 'Supported' }
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 font-medium text-gray-500 w-1/3">{row.l}</td>
                      <td className="py-3 font-bold text-gray-900">{row.v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#4f4398] uppercase mb-6 flex items-center gap-2">
                <Eye size={24} />
                {t('products.ac001.specs.optical.title')}
              </h3>
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
                    <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 font-medium text-gray-500 w-1/3">{row.l}</td>
                      <td className="py-3 font-bold text-gray-900">{row.v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#4f4398]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase mb-6">
            {t('products.ac001.cta.title')}
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            {t('products.ac001.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={withLang(lang, RoutePath.CONTACT)}
              className="inline-block bg-white text-[#4f4398] px-10 py-4 font-bold text-sm uppercase hover:bg-gray-100 transition-colors shadow-lg"
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
