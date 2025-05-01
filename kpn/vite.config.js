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

    }
  }
});