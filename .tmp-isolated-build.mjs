import { build } from 'astro';
import baseConfigModule from './astro.config.mjs';

const baseConfig = baseConfigModule.default ?? baseConfigModule;

await build({
  ...baseConfig,
  vite: {
    ...(baseConfig.vite || {}),
    cacheDir: './.vite-cache-local',
  },
});
