import { fileURLToPath, URL } from "node:url";
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  console.log("DEBUG VITE_HOST:", env.VITE_HOST);
  return {
    plugins: [vue()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    server: {
      host: (() => {
        if (!env.VITE_HOST) throw new Error("VITE_HOST must be set");
        return env.VITE_HOST;
      })(),
      port: (() => {
        if (!env.VITE_PORT) throw new Error("VITE_PORT must be set");
        return parseInt(env.VITE_PORT);
      })(),
      open: true, // Open browser automatically
    },
  };
});
