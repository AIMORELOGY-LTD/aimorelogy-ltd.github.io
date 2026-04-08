import React from 'react';
import Seo from '../components/Seo';
import { useTranslation } from 'react-i18next';
import { useLang, withLang } from '../i18n-routing';
import { RoutePath } from '../types';
import { Link } from 'react-router-dom';
import { Aperture, Cpu, Eye, Maximize, Zap, Scan, CheckCircle2, Cable, Thermometer, MoonStar } from 'lucide-react';

interface InfoItem {
  title: string;
  desc: string;
}

interface SpecRow {
  label: string;
  value: string;
}

const ProductDetail_AC001_OS04A10: React.FC = () => {
  const { t } = useTranslation();
  const lang = useLang();
  const isAr = lang === 'ar';

  const highlights = t('products.ac001.highlights.items', { returnObjects: true }) as InfoItem[];
  const capabilities = t('products.ac001.capabilities.items', { returnObjects: true }) as InfoItem[];
  const interfaceItems = t('products.ac001.interface.items', { returnObjects: true }) as InfoItem[];
  const applications = t('products.ac001.applications.items', { returnObjects: true }) as string[];
  const sensorRows = t('products.ac001.specs.sensorRows', { returnObjects: true }) as SpecRow[];
  const opticalRows = t('products.ac001.specs.opticalRows', { returnObjects: true }) as SpecRow[];
  const notes = t('products.ac001.integrationNotes.items', { returnObjects: true }) as string[];

  const highlightIcons = [
    <Maximize strokeWidth={1.5} size={40} className="text-[#4f4398]" />,
    <Zap strokeWidth={1.5} size={40} className="text-[#4f4398]" />,
    <Aperture strokeWidth={1.5} size={40} className="text-[#4f4398]" />,
    <MoonStar strokeWidth={1.5} size={40} className="text-[#4f4398]" />
  ];

  const capabilityIcons = [
    <Eye size={32} />,
    <Scan size={32} />,
    <MoonStar size={32} />,
    <Cable size={32} />
  ];

  const interfaceIcons = [
    <Cable size={28} className="text-[#4f4398]" />,
    <Cpu size={28} className="text-[#4f4398]" />,
    <Zap size={28} className="text-[#4f4398]" />,
    <Thermometer size={28} className="text-[#4f4398]" />
  ];

  return (
    <div className="bg-white animate-fadeIn">
      <Seo
        title={t('products.ac001.metaTitle')}
        description={t('products.ac001.metaDescription')}
        keywords={t('products.ac001.seoKeywords')}
      />

      <section className="relative h-[78vh] min-h-[620px] flex items-center justify-center overflow-hidden bg-gray-900">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/Cam/AC-001-OS04A10/AC-001-OS04A10-BANNER.webp)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className={`max-w-4xl ${isAr ? 'text-right ml-auto' : ''}`}>
            <span className="inline-block py-1 px-3 border border-[#a094e3] text-[#a094e3] font-bold uppercase tracking-widest text-xs mb-6">
              {t('products.ac001.hero.category')}
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight uppercase tracking-tight">
              {t('products.ac001.hero.title')}
            </h1>
            <p className="text-2xl md:text-3xl text-white/95 mb-8 max-w-3xl font-light leading-snug">
              {t('products.ac001.hero.subtitle')}
            </p>
            <p className="text-gray-300 mb-12 max-w-3xl leading-relaxed text-lg">
              {t('products.ac001.hero.description')}
            </p>
            <div className={`flex gap-4 ${isAr ? 'justify-end' : ''}`}>
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

      <section className="py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className={`mb-14 ${isAr ? 'text-right' : 'text-center'}`}>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase">
              {t('products.ac001.highlights.title')}
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              {t('products.ac001.highlights.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
            {highlights.map((item, idx) => (
              <div key={idx} className={`flex flex-col ${isAr ? 'items-end text-right' : 'items-start'}`}>
                <div className="mb-6 p-4 bg-gray-50 rounded-full">{highlightIcons[idx]}</div>
                <h3 className="text-xl font-bold text-gray-900 uppercase mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f9fa] py-24">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-5xl mx-auto">
            <img
              src="/Cam/AC-001-OS04A10/AC-001-OS04A10-01.webp"
              alt="AC-001-OS04A10 module front view"
              className="w-full h-auto mx-auto"
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#111] text-white">
        <div className="container mx-auto px-6">
          <div className={`flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-800 pb-8 ${isAr ? 'md:flex-row-reverse text-right' : ''}`}>
            <div>
              <h2 className="text-3xl md:text-5xl font-black uppercase">
                {t('products.ac001.capabilities.title')}
              </h2>
              <p className="mt-4 text-gray-400 max-w-3xl">{t('products.ac001.capabilities.subtitle')}</p>
            </div>
            <div className="text-[#76b900] font-mono text-sm tracking-wider mt-4 md:mt-0">
              // LOW LIGHT / HDR / NIR
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-800 border border-gray-800">
            {capabilities.map((item, idx) => (
              <div key={idx} className={`bg-[#1a1a1a] p-12 hover:bg-[#222] transition-colors ${isAr ? 'text-right' : ''}`}>
                <div className={`mb-6 ${idx % 2 === 0 ? 'text-[#76b900]' : 'text-[#a094e3]'}`}>{capabilityIcons[idx]}</div>
                <h3 className="text-2xl font-bold uppercase mb-4 text-white">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed text-lg">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className={`text-4xl font-black text-gray-900 uppercase mb-12 ${isAr ? 'text-right' : ''}`}>
            {t('products.ac001.specs.title')}
          </h2>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 max-w-7xl mx-auto">
            <div className={isAr ? 'text-right' : ''}>
              <div className={`flex items-center gap-3 mb-8 ${isAr ? 'flex-row-reverse' : ''}`}>
                <Scan size={24} className="text-[#4f4398]" />
                <h3 className="text-xl font-bold text-gray-900 uppercase tracking-wide">
                  {t('products.ac001.specs.sensor.title')}
                </h3>
              </div>
              <div className="border-t-2 border-gray-900">
                <table className={`w-full text-sm ${isAr ? 'text-right' : 'text-left'}`}>
                  <tbody>
                    {sensorRows.map((row, i) => (
                      <tr key={i} className="border-b border-gray-100">
                        <td className="py-4 font-semibold text-gray-500 w-1/3 uppercase text-xs tracking-wider">{row.label}</td>
                        <td className="py-4 font-bold text-gray-900">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className={isAr ? 'text-right' : ''}>
              <div className={`flex items-center gap-3 mb-8 ${isAr ? 'flex-row-reverse' : ''}`}>
                <Aperture size={24} className="text-[#4f4398]" />
                <h3 className="text-xl font-bold text-gray-900 uppercase tracking-wide">
                  {t('products.ac001.specs.optical.title')}
                </h3>
              </div>
              <div className="border-t-2 border-gray-900">
                <table className={`w-full text-sm ${isAr ? 'text-right' : 'text-left'}`}>
                  <tbody>
                    {opticalRows.map((row, i) => (
                      <tr key={i} className="border-b border-gray-100">
                        <td className="py-4 font-semibold text-gray-500 w-1/3 uppercase text-xs tracking-wider">{row.label}</td>
                        <td className="py-4 font-bold text-gray-900">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-6">
          <div className={`mb-14 ${isAr ? 'text-right' : 'text-center'}`}>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase">
              {t('products.ac001.interface.title')}
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              {t('products.ac001.interface.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {interfaceItems.map((item, idx) => (
              <div key={idx} className={`bg-white border border-gray-200 p-8 shadow-sm ${isAr ? 'text-right' : ''}`}>
                <div className={`mb-5 ${isAr ? 'flex justify-end' : ''}`}>{interfaceIcons[idx]}</div>
                <h3 className="text-lg font-bold text-gray-900 uppercase mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className={`mb-14 ${isAr ? 'text-right' : 'text-center'}`}>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase">
              {t('products.ac001.applications.title')}
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              {t('products.ac001.applications.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {applications.map((app, i) => (
              <div key={i} className={`bg-transparent border border-gray-200 p-8 ${isAr ? 'text-right' : 'text-center'} hover:border-[#4f4398] transition-colors`}>
                <div className="text-gray-800 font-bold uppercase tracking-wide text-sm">{app}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#111] text-white">
        <div className="container mx-auto px-6">
          <div className={`max-w-5xl ${isAr ? 'ml-auto text-right' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-black uppercase mb-6">
              {t('products.ac001.integrationNotes.title')}
            </h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-10">
              {t('products.ac001.integrationNotes.subtitle')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {notes.map((item, idx) => (
                <div key={idx} className={`flex items-start gap-3 ${isAr ? 'flex-row-reverse text-right' : ''}`}>
                  <CheckCircle2 size={18} className="text-[#76b900] mt-1 shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#4f4398] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className={`container mx-auto px-6 relative z-10 ${isAr ? 'text-right' : 'text-center'}`}>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase mb-8">
            {t('products.ac001.cta.title')}
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-light">
            {t('products.ac001.cta.subtitle')}
          </p>
          <div className={`flex flex-col sm:flex-row gap-6 ${isAr ? 'justify-end' : 'justify-center'}`}>
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
