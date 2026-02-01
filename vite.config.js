import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  server: {
    port: 5173,
    open: true
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        mbti: resolve(__dirname, 'mbti-job.html'),
        love: resolve(__dirname, 'love-style.html'),
        stress: resolve(__dirname, 'work-stress.html'),
        invest: resolve(__dirname, 'invest-style.html'),
        travel: resolve(__dirname, 'travel-style.html'),
        privacy: resolve(__dirname, 'privacy.html'),
        terms: resolve(__dirname, 'terms.html'),
        about: resolve(__dirname, 'about.html')
      }
    }
  }
});
