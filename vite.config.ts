import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"], // Оставляем только современный ES-формат
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "antd",
      ],
      output: {
        // КРИТИЧНО: Разделяем компоненты по отдельным файлам, предотвращая JS-циклы
        preserveModules: true, 
        preserveModulesRoot: "src",
        entryFileNames: "[name].js",
        exports: "named",
        // Указываем Rollup точные глобальные переменные
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          antd: "antd"
        },
      },
    },
  },
});