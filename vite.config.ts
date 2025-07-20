// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  // Using relative paths. This works great for GitHub Pages.
  base: './', 
  
  plugins: [
    react(),
    // The Replit-specific plugins have been removed for deployment.
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  // This tells Vite your source code is in the 'client' folder
  root: path.resolve(__dirname, "client"),
  
  build: {
    // Vite will build files into 'dist/public' at the project root
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});