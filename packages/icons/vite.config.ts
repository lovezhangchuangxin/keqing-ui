import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      entryRoot: 'src',
      outDir: 'dist/types',
      tsconfigPath: 'tsconfig.json',
    }),
  ],
  build: {
    target: 'modules',
    outDir: 'dist',
    lib: {
      entry: 'src/index.ts',
      name: 'KqIcons',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['vue'],
    },
  },
})
