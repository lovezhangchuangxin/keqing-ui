import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      outDir: ['es', 'lib'],
      tsconfigPath: 'tsconfig.json',
    }),
  ],
  build: {
    target: 'modules',
    outDir: 'dist',
    lib: {
      entry: './index.ts',
      name: 'KqUI',
    },
    rollupOptions: {
      external: ['vue'],
      input: './index.ts',
      output: [
        {
          format: 'es',
          entryFileNames: '[name].mjs',
          preserveModules: true,
          exports: 'named',
          dir: 'es',
          preserveModulesRoot: '.',
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          preserveModules: true,
          exports: 'named',
          dir: 'lib',
          preserveModulesRoot: '.',
        },
      ],
    },
  },
})
