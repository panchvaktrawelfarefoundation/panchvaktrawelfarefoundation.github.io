import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { cloudflare } from "@cloudflare/vite-plugin";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const NOT_PREBUNDLED = new Set([
  "react",
  "react-dom",
  "@tanstack/react-start",
  "@tanstack/react-router",
  "@tanstack/react-router-ssr-query",
  "tailwindcss-animate",
]);
const { dependencies } = JSON.parse(readFileSync(new URL("./package.json", import.meta.url), "utf8"));
const PREBUNDLE = Object.keys(dependencies).filter((name) => !NOT_PREBUNDLED.has(name) && !name.startsWith("@base44/"));

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: { include: PREBUNDLE },
  environments: {
    ssr: {
      optimizeDeps: { include: PREBUNDLE },
      build: { sourcemap: true, rolldownOptions: { output: { sourcemapExcludeSources: true } } },
    },
  },
  plugins: [
    cloudflare({ viteEnvironment: { name: "ssr" }, inspectorPort: false }),
    tanstackStart({ srcDirectory: "src" }),
    react(),
  ],
});
