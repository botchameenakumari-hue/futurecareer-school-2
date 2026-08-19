import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://futurecareerschool.com',
  devToolbar: {
    enabled: false,
  },
  build: {
    format: 'directory',
  },
});
