import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: 'src',
  base: '/proxy-band-test/',
  build: {
    outDir: '../build',
  },
});
