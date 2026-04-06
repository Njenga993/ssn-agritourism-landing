import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-router-dom", "react-dom"],
          seo: ["react-helmet-async"],
        },
      },
    },
    minify: "esbuild", // Use esbuild instead of terser for simpler config
    // If you must use terser, install it: npm install --save-dev terser
    // Then uncomment below and comment out minify line above
    /*
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    */
  },
  server: {
    open: true,
  },
});
