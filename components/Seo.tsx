import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLang } from '../i18n-routing';

const BASE_URL = 'https://aimorelogy.com';
const DEFAULT_IMAGE = `${BASE_URL}/icon.webp`;
const LOCALE_MAP: Record<string, string> = {
  en: 'en_US',
  zh: 'zh_CN',
  ru: 'ru_RU'
};

type JsonLd = Record<string, unknown> | Array<Record<string, unknown>>;

export interface SeoProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  type?: string;
  noindex?: boolean;
  jsonLd?: JsonLd;
}

const ensureMeta = (attr: 'name' | 'property', key: string, content: string) => {
  if (!content && content !== '') return;
  const selector = `meta[${attr}="${key}"]`;
  let tag = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
};

const ensureLink = (rel: string, href: string, hreflang?: string) => {
  const selector = hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]`;
  let link = document.head.querySelector(selector) as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.rel = rel;
    if (hreflang) {
      link.hreflang = hreflang;
    }
    document.head.appendChild(link);
  }
  link.href = href;
};

const ensureJsonLd = (id: string, data: JsonLd) => {
  const payload = JSON.stringify(data);
  let script = document.head.querySelector(`script#${id}`) as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = id;
    document.head.appendChild(script);
  }
  if (script.textContent !== payload) {
    script.textContent = payload;
  }
};

const normalizePathname = (pathname: string) => {
  if (!pathname || pathname === '/') {
    return '/';
  }
  return pathname.endsWith('/') ? pathname : `${pathname}/`;
};

const buildAlternateLinks = (pathname: string) => {
  const parts = pathname.split('/').filter(Boolean);
  const rest = parts.slice(1).join('/');
  const suffix = rest ? `/${rest}/` : '/';

  return {
    en: `${BASE_URL}/en${suffix}`,
    zh: `${BASE_URL}/zh${suffix}`,
    ru: `${BASE_URL}/ru${suffix}`,
    'x-default': `${BASE_URL}/en${suffix}`
  };
};

const normalizeImageUrl = (image?: string) => {
  if (!image) return DEFAULT_IMAGE;
  if (image.startsWith('http://') || image.startsWith('https://')) return image;
  if (image.startsWith('/')) return `${BASE_URL}${image}`;
  return `${BASE_URL}/${image}`;
};

const Seo: React.FC<SeoProps> = ({
  title,
  description,
  keywords,
  image,
  type = 'website',
  noindex = false,
  jsonLd
}) => {
  const location = useLocation();
  const lang = useLang();

  useEffect(() => {
    const normalizedPath = normalizePathname(location.pathname);
    const canonical = `${BASE_URL}${normalizedPath}`;
    const imageUrl = normalizeImageUrl(image);
    const alternates = buildAlternateLinks(normalizedPath);
    const locale = LOCALE_MAP[lang] || 'en_US';
    const siteName = lang === 'zh' ? 'AIMORELOGY 爱谋科技' : 'AIMORELOGY';
    const defaultKeywords = 'AIMORELOGY,FPV,UAV,flight controller,edge AI,AI tracking,adaptive DShot,vision processor';

    document.title = title;

    ensureMeta('name', 'description', description);
    ensureMeta('name', 'keywords', keywords || defaultKeywords);
    ensureMeta('name', 'robots', noindex ? 'noindex,nofollow' : 'index,follow');

    ensureMeta('property', 'og:type', type);
    ensureMeta('property', 'og:site_name', siteName);
    ensureMeta('property', 'og:title', title);
    ensureMeta('property', 'og:description', description);
    ensureMeta('property', 'og:url', canonical);
    ensureMeta('property', 'og:image', imageUrl);
    ensureMeta('property', 'og:locale', locale);

    ensureMeta('name', 'twitter:card', 'summary_large_image');
    ensureMeta('name', 'twitter:title', title);
    ensureMeta('name', 'twitter:description', description);
    ensureMeta('name', 'twitter:image', imageUrl);

    ensureLink('canonical', canonical);
    ensureLink('alternate', alternates.en, 'en');
    ensureLink('alternate', alternates.zh, 'zh');
    ensureLink('alternate', alternates.ru, 'ru');
    ensureLink('alternate', alternates['x-default'], 'x-default');

    const baseJsonLd: JsonLd = [
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: siteName,
        url: BASE_URL,
        logo: DEFAULT_IMAGE
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: siteName,
        url: BASE_URL,
        inLanguage: lang
      }
    ];

    if (jsonLd) {
      const extra = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      ensureJsonLd('seo-jsonld', [...baseJsonLd, ...extra]);
    } else {
      ensureJsonLd('seo-jsonld', baseJsonLd);
    }
  }, [title, description, image, type, noindex, jsonLd, location.pathname, lang]);

  return null;
};

export default Seo;
