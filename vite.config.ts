import { defineConfig } from 'vite';
import { VitePluginFonts } from 'vite-plugin-fonts';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePluginFonts({
      google: {
        families: ['Nanum Myeongjo'],
      },
    }),
  ],
});
