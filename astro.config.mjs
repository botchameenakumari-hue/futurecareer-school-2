import { defineConfig } from 'astro/config';
import htaccessRedirects from './integrations/htaccess-redirects.mjs';
import placePageMedia from './integrations/place-page-media.mjs';

export default defineConfig({
  site: 'https://futurecareerschool.com',
  devToolbar: {
    enabled: false,
  },
  integrations: [htaccessRedirects(), placePageMedia()],
  build: {
    format: 'directory',
  },
});
