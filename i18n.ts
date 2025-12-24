import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import zh from './locales/zh.json';
import ru from './locales/ru.json';

const resources = {
  en: { translation: en },
  zh: { translation: zh },
  ru: { translation: ru },
};

const getInitialLang = () => {
  if (typeof window === 'undefined') {
    return 'en';
  }
  const stored = window.localStorage.getItem('lang');
  if (stored === 'en' || stored === 'zh' || stored === 'ru') {
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
