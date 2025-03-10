// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        createEntry: resolve(__dirname, 'create-entry.html'),
        entries: resolve(__dirname, 'entries.html'),
        register: resolve(__dirname, 'register.html'),
        userinfo: resolve(__dirname, 'userinfo.html'),
        etusivu: resolve(__dirname, 'etusivu.html')
      },
    },
  },
  base: './',
});
