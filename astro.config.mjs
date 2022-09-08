import react from '@astrojs/react';
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind({
      config: { applyBaseStyles: false, path: 'tailwind.config.cjs' },
    }),
  ],
});
