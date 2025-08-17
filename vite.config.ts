import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Use a function to apply conditional logic
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'client', 'src'),
        '@shared': path.resolve(__dirname, 'shared'),
        '@assets': path.resolve(__dirname, 'attached_assets'),
      },
    },
    root: path.resolve(__dirname, 'client'), // Your code lives in 'client'
    build: {
      outDir: path.resolve(__dirname, 'dist'), // Build to 'dist', not 'dist/public'
      emptyOutDir: true,
    },
    server: {
      fs: {
        strict: true,
        deny: ['**/.*'],
      },
    },
  };

  // This is the key: only apply the 'base' for the production build
  if (command === 'build') {
    config.base = '/granite1/';
  }

  return config;
});