import path from 'node:path';
import { writeSitemapXml } from './sitemap-utils.mjs';

const targetPath = path.resolve('public', 'sitemap.xml');

writeSitemapXml(targetPath)
  .then(() => {
    console.log(`sitemap generated: ${targetPath}`);
  })
  .catch((err) => {
    console.error('sitemap generation failed:', err);
    process.exit(1);
  });

