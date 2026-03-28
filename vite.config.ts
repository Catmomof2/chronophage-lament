
import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "path";
import { defineConfig } from "vite";
import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";

const plugins = [react(), tailwindcss(), jsxLocPlugin(), vitePluginManusRuntime()];

export default defineConfig({
  plugins,
  resolve: {
    alias: {
      // Points to your main source code
      "@": path.resolve(import.meta.dirname, "client", "src"),
      // Points to shared logic (Adjusted to look inside client/src if needed)
      "@shared": path.resolve(import.meta.dirname, "client", "src", "shared"),
      // Points to your asset folder
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  envDir: path.resolve(import.meta.dirname),
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    // Ensures modern JS features like Top-level Await or import.meta are supported
    target: 'esnext',
  },
  server: {
    port: 3000,
    // Set to true so you always know exactly where the app is running
    strictPort: true, 
    host: true,
    allowedHosts: [
      ".manuspre.computer",
      ".manus.computer",
      ".manus-asia.computer",
      ".manuscomputer.ai",
      ".manusvm.computer",
      "localhost",
      "127.0.0.1",
    ],
    fs: {
      strict: true,
      deny: ["/**/.**"],
    },
  },
});
