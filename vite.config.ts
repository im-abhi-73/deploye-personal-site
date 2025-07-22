import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // This is very important for Vercel paths
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
