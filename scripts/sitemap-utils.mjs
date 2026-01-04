import fs from 'node:fs/promises';
import path from 'node:path';

const BASE_URL = process.env.SITE_URL || 'https://aimorelogy.com';
const LANGS = ['en', 'zh', 'ru'];

const DATA_FILES = {
  sophgo: path.resolve('data', 'sophgoData.ts'),
  espressif: path.resolve('data', 'espressifData.ts'),
  stm: path.resolve('data', 'stData.ts')
};

const STATIC_BASE_PATHS = [
  '/',
  '/products/afc-v1',
  '/solutions/ai-camera',
  '/technology/ai-tracking',
  '/technology/control-protocol',
  '/blog',
  '/careers',
  '/contact',
  '/about',
  '/legal/privacy-policy',
  '/legal/terms-of-service',
  '/legal/cookie-preferences'
];

const SOPHGO_SLUG_OVERRIDES = {
  cv186: 'cv186x',
  cv184: 'cv184x',
  cv181: 'cv181x',
  cv180: 'cv180x'
};

const ensureLeadingSlash = (value) => (value.startsWith('/') ? value : `/${value}`);
const ensureTrailingSlash = (value) => (value.endsWith('/') ? value : `${value}/`);

const normalizeBasePath = (value) => {
  if (value === '/') return '/';
  return ensureLeadingSlash(value.replace(/\/+$/, ''));
};

const buildLangPath = (lang, basePath) => {
  if (basePath === '/') {
    return `/${lang}/`;
  }
  const normalized = normalizeBasePath(basePath);
  return `/${lang}${ensureTrailingSlash(normalized)}`;
};

const buildAlternateUrls = (basePath) => {
  const urls = {};
  for (const lang of LANGS) {
    const localized = buildLangPath(lang, basePath);
    urls[lang] = `${BASE_URL}${localized}`;
  }
  urls['x-default'] = urls.en;
  return urls;
};

const extractKeys = async (filePath) => {
  const source = await fs.readFile(filePath, 'utf-8');
  const matches = [...source.matchAll(/'([a-z0-9-]+)'\s*:\s*{/gi)];
  const keys = new Set(matches.map((match) => match[1]));
  return Array.from(keys);
};

const getSophgoSlugs = async () => {
  const keys = await extractKeys(DATA_FILES.sophgo);
  return keys.map((key) => SOPHGO_SLUG_OVERRIDES[key] || key);
};

const getEspressifSlugs = async () => extractKeys(DATA_FILES.espressif);
const getStmSlugs = async () => extractKeys(DATA_FILES.stm);

export const getBasePaths = async () => {
  const paths = new Set(STATIC_BASE_PATHS.map(normalizeBasePath));
  const [sophgoSlugs, espressifSlugs, stmSlugs] = await Promise.all([
    getSophgoSlugs(),
    getEspressifSlugs(),
    getStmSlugs()
  ]);

  for (const slug of sophgoSlugs) {
    paths.add(`/products/sophgo/${slug}`);
  }
  for (const slug of espressifSlugs) {
    paths.add(`/products/espressif/${slug}`);
  }
  for (const slug of stmSlugs) {
    paths.add(`/products/stm/${slug}`);
  }

  return Array.from(paths).sort();
};

export const getPrerenderPaths = async () => {
  const basePaths = await getBasePaths();
  const paths = [];
  for (const basePath of basePaths) {
    for (const lang of LANGS) {
      paths.push(buildLangPath(lang, basePath));
    }
  }
  return Array.from(new Set(paths));
};

const buildUrlEntry = (loc, alternates, lastmod) => {
  const lines = [
    '  <url>',
    `    <loc>${loc}</loc>`
  ];

  for (const lang of [...LANGS, 'x-default']) {
    const href = alternates[lang];
    lines.push(`    <xhtml:link rel="alternate" hreflang="${lang}" href="${href}" />`);
  }

  if (lastmod) {
    lines.push(`    <lastmod>${lastmod}</lastmod>`);
  }

  lines.push('  </url>');
  return lines.join('\n');
};

export const buildSitemapXml = async () => {
  const basePaths = await getBasePaths();
  const lastmod = new Date().toISOString().slice(0, 10);
  const entries = [];

  for (const basePath of basePaths) {
    const alternates = buildAlternateUrls(basePath);
    for (const lang of LANGS) {
      const loc = alternates[lang];
      entries.push(buildUrlEntry(loc, alternates, lastmod));
    }
  }

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    '        xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...entries,
    '</urlset>',
    ''
  ].join('\n');
};

export const writeSitemapXml = async (targetPath) => {
  const xml = await buildSitemapXml();
  await fs.writeFile(targetPath, xml, 'utf-8');
  return xml;
};

