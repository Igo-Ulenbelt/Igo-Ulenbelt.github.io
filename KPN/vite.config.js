import { defineConfig } from 'vite';

export default defineConfig({
  base: '/kpn/',
  server: {
    fs: {
      strict: false  
    }
  },
  build: {
    assetsInclude: ['**/*.json'],
    rollupOptions: {
      output: {
        manualChunks: {
          translations: ['./public/json/translations/**/*.json']
        }
      }
    }
  }
});