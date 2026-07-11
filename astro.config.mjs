import { defineConfig, fontProviders } from 'astro/config';
import purgeCSSPlugin from '@fullhuman/postcss-purgecss';
const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  prefetch: true,
  fonts: [
    {
      name: "Fraunces",
      cssVariable: "--headings",
      provider: fontProviders.google(),
    }
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          quietDeps: true,
          silenceDeprecations: ['import']
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
