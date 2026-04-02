/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "path";

// vite.config.ts
export default defineConfig({
  plugins: [react(), dts({ insertTypesEntry: true })],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "MyUiKit",
      fileName: "index",
      formats: ["es"],
    },
    rollupOptions: {
      // КРИТИЧНО: Добавляем jsx-runtime в external
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          // "react/jsx-runtime": "jsxRuntime", // На всякий случай для UMD, если добавишь // раскоментить если сломалась сборка
        },
        exports: "named",
      },
    },
    // Убираем commonjsOptions: { include: [] }, если оно не помогает.
    // Лучше вернуть стандартное поведение или вообще не трогать.
  },
});
