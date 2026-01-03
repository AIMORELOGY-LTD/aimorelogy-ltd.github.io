
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Seo from '../components/Seo';

const TermsOfService: React.FC = () => {
  const { t } = useTranslation();
  const seoTitle = t('terms.metaTitle');
  const seoDescription = t('terms.metaDescription');
  const seoKeywords = 'AIMORELOGY, terms of service, 服务条款, legal, website terms';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen py-20">
      <Seo title={seoTitle} description={seoDescription} keywords={seoKeywords} />
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-12 border-b border-gray-100 pb-8">
          <h1 className="text-4xl font-black text-gray-900 uppercase mb-4">{t('terms.title')}</h1>
          <p className="text-gray-500 text-sm">{t('legal.lastUpdated', { date: 'March 10, 2025' })}</p>
        </div>

        <div className="prose prose-lg text-gray-600 max-w-none">
          <p>{t('terms.intro')}</p>

          <h3 className="text-gray-900 font-bold uppercase text-xl mt-8 mb-4">{t('terms.sections.license.title')}</h3>
          <p>{t('terms.sections.license.p1')}</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>{t('terms.sections.license.items.0')}</li>
            <li>{t('terms.sections.license.items.1')}</li>
            <li>{t('terms.sections.license.items.2')}</li>
            <li>{t('terms.sections.license.items.3')}</li>
            <li>{t('terms.sections.license.items.4')}</li>
          </ul>

          <h3 className="text-gray-900 font-bold uppercase text-xl mt-8 mb-4">{t('terms.sections.disclaimer.title')}</h3>
          <p>{t('terms.sections.disclaimer.p1')}</p>

          <h3 className="text-gray-900 font-bold uppercase text-xl mt-8 mb-4">{t('terms.sections.limitations.title')}</h3>
          <p>{t('terms.sections.limitations.p1')}</p>

          <h3 className="text-gray-900 font-bold uppercase text-xl mt-8 mb-4">{t('terms.sections.usage.title')}</h3>
          <p>{t('terms.sections.usage.p1')}</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>{t('terms.sections.usage.items.0')}</li>
            <li>{t('terms.sections.usage.items.1')}</li>
            <li>{t('terms.sections.usage.items.2')}</li>
          </ul>

          <h3 className="text-gray-900 font-bold uppercase text-xl mt-8 mb-4">{t('terms.sections.law.title')}</h3>
          <p>{t('terms.sections.law.p1')}</p>

          <h3 className="text-gray-900 font-bold uppercase text-xl mt-8 mb-4">{t('terms.sections.changes.title')}</h3>
          <p>{t('terms.sections.changes.p1')}</p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
