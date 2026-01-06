import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { setTimeout as delay } from 'node:timers/promises';
import puppeteer from 'puppeteer-core';
import { buildSitemapXml, getPrerenderPaths } from './sitemap-utils.mjs';

const DIST_DIR = path.resolve('dist');
const PUBLIC_DIR = path.resolve('public');

const ORIGIN = process.env.PRERENDER_ORIGIN || 'http://127.0.0.1:4173';
const ORIGIN_URL = new URL(ORIGIN);
const HOST = ORIGIN_URL.hostname;
const PORT = ORIGIN_URL.port || '4173';

const SUPPORTED_LANGS = new Set(['en', 'zh', 'ru']);

const getViteBin = () => {
  const bin = path.resolve('node_modules', '.bin', process.platform === 'win32' ? 'vite.cmd' : 'vite');
  if (!fs.existsSync(bin)) {
    throw new Error('vite binary not found. Run npm install first.');
  }
  return bin;
};

const findChrome = () => {
  const candidates = [
    process.env.PUPPETEER_EXECUTABLE_PATH,
    process.env.CHROME_BIN,
    process.platform === 'win32' ? 'C:\\\\Program Files\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe' : '/usr/bin/google-chrome',
    process.platform === 'win32' ? 'C:\\\\Program Files (x86)\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe' : '/usr/bin/google-chrome-stable',
    '/usr/bin/chromium-browser',
    '/usr/bin/chromium'
  ].filter(Boolean);

  for (const candidate of candidates) {
    if (candidate && fs.existsSync(candidate)) {
      return candidate;
    }
  }

  throw new Error(
    'Chrome executable not found. Set CHROME_BIN or PUPPETEER_EXECUTABLE_PATH.'
  );
};

const waitForServer = async (origin) => {
  const maxAttempts = 60;
  for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
    try {
      const res = await fetch(origin, { method: 'GET' });
      if (res.ok) {
        return;
      }
    } catch (err) {
      // Keep retrying until the server is ready.
    }
    await delay(500);
  }
  throw new Error('Preview server did not start in time.');
};

const detectLang = (pathname) => {
  const [first] = pathname.split('/').filter(Boolean);
  if (SUPPORTED_LANGS.has(first)) {
    return first;
  }
  return 'en';
};

const toOutputPath = (pathname) => {
  if (pathname === '/') {
    return path.join(DIST_DIR, 'index.html');
  }
  const normalized = pathname.replace(/\/$/, '').replace(/^\/+/, '');
  return path.join(DIST_DIR, normalized, 'index.html');
};

const copyIfExists = async (src, dest) => {
  try {
    await fsp.access(src);
    await fsp.mkdir(path.dirname(dest), { recursive: true });
    await fsp.copyFile(src, dest);
  } catch (err) {
    if (err && err.code !== 'ENOENT') {
      throw err;
    }
  }
};

const copyDirIfExists = async (src, dest) => {
  try {
    await fsp.access(src);
    await fsp.cp(src, dest, { recursive: true });
  } catch (err) {
    if (err && err.code !== 'ENOENT') {
      throw err;
    }
  }
};

const run = async () => {
  const routes = await getPrerenderPaths();
  const orderedRoutes = ['/', ...routes.filter((route) => route !== '/').sort()];

  const viteBin = getViteBin();
  const server = spawn(
    viteBin,
    ['preview', '--host', HOST, '--port', PORT, '--strictPort'],
    { stdio: 'inherit' }
  );

  const stopServer = () => {
    if (!server.killed) {
      server.kill('SIGTERM');
    }
  };
  process.on('exit', stopServer);
  process.on('SIGINT', () => {
    stopServer();
    process.exit(1);
  });
  process.on('SIGTERM', () => {
    stopServer();
    process.exit(1);
  });

  await waitForServer(ORIGIN);

  const executablePath = findChrome();
  const browser = await puppeteer.launch({
    executablePath,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  for (const route of orderedRoutes) {
    const expectedLang = detectLang(route);
    const url = `${ORIGIN}${route}`;

    await page.goto(url, { waitUntil: 'networkidle2' });
    await page.waitForSelector('#root > *', { timeout: 20000 });
    await page.waitForFunction(
      (lang) => document.documentElement.lang === lang,
      { timeout: 20000 },
      expectedLang
    );
    await delay(200);

    const html = await page.content();
    const outputPath = toOutputPath(route);
    await fsp.mkdir(path.dirname(outputPath), { recursive: true });
    await fsp.writeFile(outputPath, html, 'utf-8');
    console.log(`prerendered ${route} -> ${path.relative(DIST_DIR, outputPath)}`);
  }

  await browser.close();
  stopServer();
  const sitemapXml = await buildSitemapXml();
  await fsp.writeFile(path.join(DIST_DIR, 'sitemap.xml'), sitemapXml, 'utf-8');

  await copyIfExists(path.join(PUBLIC_DIR, 'llms.txt'), path.join(DIST_DIR, 'llms.txt'));
  await copyDirIfExists(path.join(PUBLIC_DIR, 'llms'), path.join(DIST_DIR, 'llms'));
};

run().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
