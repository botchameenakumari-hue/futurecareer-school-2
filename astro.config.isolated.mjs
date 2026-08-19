import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://futurecareerschool.com',
  build: {
    format: 'directory',
  },
  vite: {
    cacheDir: 'node_modules/.vite-isolated-mech-task',
  },
});
