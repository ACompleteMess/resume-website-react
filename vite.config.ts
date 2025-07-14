import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    host: process.env.VITE_HOST || "0.0.0.0", // Allow external connections
    port: parseInt(process.env.VITE_PORT || "9000"), // Use env var or default to 9000
    open: true, // Open browser automatically
  },
});
