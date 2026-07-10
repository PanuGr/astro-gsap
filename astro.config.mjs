import { defineConfig, fontProviders } from 'astro/config';
import purgeCSSPlugin from '@fullhuman/postcss-purgecss';
const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  prefetch: true,
  fonts: [
    {
      name: "Cormorant Garamond",
      cssVariable: "--cormorant",
      provider: fontProviders.google(),
      weights: [400, 500, 600]
    }
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          quietDeps: true
        }
      },
      postcss: {
        plugins: isProduction ? [
          purgeCSSPlugin({
            content: ['./src/**/*.astro']
          })
        ] : []
      }
    }
  }
});
