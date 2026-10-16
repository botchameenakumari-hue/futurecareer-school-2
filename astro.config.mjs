import { defineConfig } from 'astro/config';
import htaccessRedirects from './integrations/htaccess-redirects.mjs';
import placePageMedia from './integrations/place-page-media.mjs';
import buildStamp from './integrations/build-stamp.mjs';

export default defineConfig({
  site: 'https://futurecareerschool.com',
  devToolbar: {
    enabled: false,
  },
  integrations: [htaccessRedirects(), placePageMedia(), buildStamp()],
  build: {
    format: 'directory',
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('/src/scripts/coachingWorkspace')) return 'coaching-workspace';
            if (id.includes('/src/scripts/hierarchyWorkspace')) return 'hierarchy-workspace';
            if (id.includes('/src/scripts/cohortWorkspace')) return 'cohort-workspace';
          },
        },
      },
    },
  },
});
