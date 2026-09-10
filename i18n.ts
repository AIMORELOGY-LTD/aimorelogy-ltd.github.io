import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import zh from './locales/zh.json';
import ru from './locales/ru.json';
import ar from './locales/ar.json';
import ovisEn from './locales/ovis/en.json';
import ovisZh from './locales/ovis/zh.json';
import ovisRu from './locales/ovis/ru.json';
import ovisAr from './locales/ovis/ar.json';

const resources = {
  en: { translation: { ...en, ovis: ovisEn } },
  zh: { translation: { ...zh, ovis: ovisZh } },
  ru: { translation: { ...ru, ovis: ovisRu } },
  ar: { translation: { ...ar, ovis: ovisAr } },
};

const getInitialLang = () => {
  if (typeof window === 'undefined') {
    return 'en';
  }
  const stored = window.localStorage.getItem('lang');
  if (stored === 'en' || stored === 'zh' || stored === 'ru' || stored === 'ar') {
    return stored;
  }
  return 'en';
};

i18n.use(initReactI18next).init({
  resources,
  lng: getInitialLang(),
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
  returnObjects: true,
});

export default i18n;
