import { fileURLToPath } from "url"
import { defineConfig } from 'vite'
import { resolve } from "path"
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      // src/indext.ts aquí es donde tenemos exportado todos los componentes
      entry: resolve(__dirname, "src/index.ts"),
      name: "DaniComponentsLibrary",
      // El nombre de los archivos de salida cuando se ejecuta la compilación
      fileName: "dani-component-lib",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
    ]
  }
})
