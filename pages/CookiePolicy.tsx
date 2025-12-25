
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Seo from '../components/Seo';

const CookiePolicy: React.FC = () => {
  const { t } = useTranslation();
  const seoTitle = t('cookies.metaTitle');
  const seoDescription = t('cookies.metaDescription');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen py-20">
      <Seo title={seoTitle} description={seoDescription} />
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-12 border-b border-gray-100 pb-8">
          <h1 className="text-4xl font-black text-gray-900 uppercase mb-4">{t('cookies.title')}</h1>
          <p className="text-gray-500 text-sm">{t('legal.lastUpdated', { date: 'March 10, 2025' })}</p>
        </div>

        <div className="prose prose-lg text-gray-600 max-w-none">
          <p>{t('cookies.intro')}</p>

          <h3 className="text-gray-900 font-bold uppercase text-xl mt-8 mb-4">{t('cookies.sections.what.title')}</h3>
          <p>{t('cookies.sections.what.p1')}</p>

          <h3 className="text-gray-900 font-bold uppercase text-xl mt-8 mb-4">{t('cookies.sections.use.title')}</h3>
          <p>{t('cookies.sections.use.p1')}</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>{t('cookies.sections.use.items.0.title')}:</strong> {t('cookies.sections.use.items.0.desc')}
            </li>
            <li>
              <strong>{t('cookies.sections.use.items.1.title')}:</strong> {t('cookies.sections.use.items.1.desc')}
            </li>
            <li>
              <strong>{t('cookies.sections.use.items.2.title')}:</strong> {t('cookies.sections.use.items.2.desc')}
            </li>
          </ul>

          <h3 className="text-gray-900 font-bold uppercase text-xl mt-8 mb-4">{t('cookies.sections.third.title')}</h3>
          <p>{t('cookies.sections.third.p1')}</p>

          <h3 className="text-gray-900 font-bold uppercase text-xl mt-8 mb-4">{t('cookies.sections.choices.title')}</h3>
          <p>{t('cookies.sections.choices.p1')}</p>
          <p className="mt-4">{t('cookies.sections.choices.p2')}</p>

          <div className="mt-8 bg-gray-50 p-6 border border-gray-200">
             <h4 className="font-bold text-gray-900 mb-2">{t('cookies.help.title')}</h4>
             <ul className="text-sm space-y-1">
               <li><a href="#" className="text-[#4f4398] hover:underline">Chrome</a></li>
               <li><a href="#" className="text-[#4f4398] hover:underline">Internet Explorer / Edge</a></li>
               <li><a href="#" className="text-[#4f4398] hover:underline">Firefox</a></li>
               <li><a href="#" className="text-[#4f4398] hover:underline">Safari</a></li>
             </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
