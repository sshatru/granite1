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

  // Change the base path for the production build to the root of the domain.
  // The base path should be '/' for a custom domain.
  if (command === 'build') {
    config.base = '/';
  }

  return config;
});
