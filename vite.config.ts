import { resolve } from 'path'
import Pages from 'vite-plugin-pages'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Pages({
      dirs: [
        { dir: resolve(__dirname, './src/views'), baseRoute: '' },
        { dir: resolve(__dirname, './src/admin/views'), baseRoute: 'admin' },
      ],
    }),
  ],
  resolve: {},
})
