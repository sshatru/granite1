// vite.config.ts

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// We use a function with 'command' to apply different settings for dev vs. build
export default defineConfig(({ command }) => {
  // This object holds all the settings common to both dev and build
  const config = {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'client', 'src'),
        '@shared': path.resolve(__dirname, 'shared'),
        '@assets': path.resolve(__dirname, 'attached_assets'),
      },
    },
    // This tells Vite your source code is in the 'client' folder
    root: path.resolve(__dirname, 'client'),
    build: {
      // Vite will build files into 'dist/public' at the project root
      outDir: path.resolve(__dirname, 'dist', 'public'),
      emptyOutDir: true,
    },
    server: {
      fs: {
        strict: true,
        deny: ['**/.*'],
      },
    },
  };

  // This conditional block applies settings ONLY for the 'npm run build' command
  if (command === 'build') {
    // Set the base path for GitHub Pages deployment
    config.base = '/granite1/';
  }

  return config;
});