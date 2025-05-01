import { defineConfig } from 'vite';

export default defineConfig({
  base: '/frontend-project-v2b_letsgo/',
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