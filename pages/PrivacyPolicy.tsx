
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Seo from '../components/Seo';

const PrivacyPolicy: React.FC = () => {
  const { t } = useTranslation();
  const seoTitle = t('privacy.metaTitle');
  const seoDescription = t('privacy.metaDescription');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen py-20">
      <Seo title={seoTitle} description={seoDescription} />
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-12 border-b border-gray-100 pb-8">
          <h1 className="text-4xl font-black text-gray-900 uppercase mb-4">{t('privacy.title')}</h1>
          <p className="text-gray-500 text-sm">{t('legal.lastUpdated', { date: 'March 10, 2025' })}</p>
        </div>

        <div className="prose prose-lg text-gray-600 max-w-none">
          <p>{t('privacy.intro.p1')}</p>
          <p>{t('privacy.intro.p2')}</p>

          <h3 className="text-gray-900 font-bold uppercase text-xl mt-8 mb-4">{t('privacy.sections.collection.title')}</h3>
          <p>{t('privacy.sections.collection.p1')}</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>{t('privacy.sections.collection.items.0.title')}:</strong> {t('privacy.sections.collection.items.0.desc')}
            </li>
            <li>
              <strong>{t('privacy.sections.collection.items.1.title')}:</strong> {t('privacy.sections.collection.items.1.desc')}
            </li>
          </ul>

          <h3 className="text-gray-900 font-bold uppercase text-xl mt-8 mb-4">{t('privacy.sections.use.title')}</h3>
          <p>{t('privacy.sections.use.p1')}</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>{t('privacy.sections.use.items.0')}</li>
            <li>{t('privacy.sections.use.items.1')}</li>
            <li>{t('privacy.sections.use.items.2')}</li>
            <li>{t('privacy.sections.use.items.3')}</li>
            <li>{t('privacy.sections.use.items.4')}</li>
            <li>{t('privacy.sections.use.items.5')}</li>
          </ul>

          <h3 className="text-gray-900 font-bold uppercase text-xl mt-8 mb-4">{t('privacy.sections.disclosure.title')}</h3>
          <p>{t('privacy.sections.disclosure.p1')}</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>{t('privacy.sections.disclosure.items.0.title')}:</strong> {t('privacy.sections.disclosure.items.0.desc')}
            </li>
            <li>
              <strong>{t('privacy.sections.disclosure.items.1.title')}:</strong> {t('privacy.sections.disclosure.items.1.desc')}
            </li>
          </ul>

          <h3 className="text-gray-900 font-bold uppercase text-xl mt-8 mb-4">{t('privacy.sections.security.title')}</h3>
          <p>{t('privacy.sections.security.p1')}</p>

          <h3 className="text-gray-900 font-bold uppercase text-xl mt-8 mb-4">{t('privacy.sections.contact.title')}</h3>
          <p>{t('privacy.sections.contact.p1')}</p>
          <div className="bg-gray-50 p-6 border border-gray-200 mt-4 rounded-sm">
            <p className="font-bold text-gray-900">{t('privacy.contact.company')}</p>
            <p>{t('privacy.contact.addressLine1')}</p>
            <p>{t('privacy.contact.addressLine2')}</p>
            <p className="mt-4"><span className="font-bold">{t('privacy.contact.emailLabel')}:</span> {t('privacy.contact.email')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
