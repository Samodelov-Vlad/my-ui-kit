/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// vite.config.ts
export default defineConfig({
  plugins: [react()],
  build: {
    // ЭТА НАСТРОЙКА ПРАВИТ ОШИБКУ DYNAMIC REQUIRE
    commonjsOptions: {
      include: [/react-draggable/, /react-resizable/, /node_modules/],
      transformMixedEsModules: true,
    },
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
        "antd", // <-- Не даем плагину "подавиться" типами Ant Design
        // Говорим Vite, чтобы он не вшивал AG Grid внутрь вашей библиотеки, а использовал ту копию, которая будет установлена в основном проекте (ведь мы уже перенесли AG Grid в peerDependencies).
        "ag-grid-community",
        "ag-grid-react",
        // "ag-grid-enterprise",
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
