import { defineConfig } from 'astro/config';
import htaccessRedirects from './integrations/htaccess-redirects.mjs';

export default defineConfig({
  site: 'https://futurecareerschool.com',
  devToolbar: {
    enabled: false,
  },
  integrations: [htaccessRedirects()],
  build: {
    format: 'directory',
  },
});
