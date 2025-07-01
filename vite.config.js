import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env.SUPABASE_URL": JSON.stringify(env.SUPABASE_URL),
      "process.env.SERVICE_KEY": JSON.stringify(env.SERVICE_KEY),
    },
    plugins: [vue(), tailwindcss()],
    build: {
      target: "esnext",
    },
  };
});
