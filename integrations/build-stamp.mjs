// Writes /build-info.json into the finished site so anyone can check, in ten seconds, which build is live:
// open https://futurecareerschool.com/build-info.json and compare the commit and the sitemap URL count.
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

export default function buildStamp() {
  return {
    name: 'build-stamp',
    hooks: {
      'astro:build:done': ({ dir }) => {
        const distDir = fileURLToPath(dir);
        let commit = 'unknown';
        try { commit = execSync('git rev-parse --short HEAD', { stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim(); } catch {}
        let sitemapUrls = 0;
        try { sitemapUrls = (fs.readFileSync(path.join(distDir, 'sitemap.xml'), 'utf8').match(/<loc>/g) || []).length; } catch {}
        const info = { builtAt: new Date().toISOString(), commit, sitemapUrls };
        fs.writeFileSync(path.join(distDir, 'build-info.json'), JSON.stringify(info, null, 2) + '\n');
        console.log(`[build-stamp] commit ${commit}, ${sitemapUrls} sitemap URLs`);
      },
    },
  };
}
