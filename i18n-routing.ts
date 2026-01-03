import { useParams } from 'react-router-dom';

export const supportedLangs = ['en', 'zh', 'ru'] as const;
export type Lang = typeof supportedLangs[number];

export const normalizeLang = (lang?: string): Lang => {
  if (lang === 'en' || lang === 'zh' || lang === 'ru') {
    return lang;
  }
  return 'en';
};

export const withLang = (lang: Lang, path: string) => {
  if (path === '/') {
    return `/${lang}/`;
  }
  return `/${lang}${path}`;
};

export const getStoredLang = (): Lang => {
  if (typeof window === 'undefined') {
    return 'en';
  }
  const stored = window.localStorage.getItem('lang');
  return normalizeLang(stored || undefined);
};

export const saveLang = (lang: Lang) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem('lang', lang);
  }
};

export const useLang = (): Lang => {
  const { lang } = useParams();
  return normalizeLang(lang);
};
