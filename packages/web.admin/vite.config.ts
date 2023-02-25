import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import { defineConfig, loadEnv } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [vue()],
    base: '/admin/',
    build: {
      outDir: path.resolve(__dirname, '../../dist/packages/web.admin'),
      cssCodeSplit: false
    },
    server: {
      proxy: { '/api': 'http://localhost:8080' }
    }
  }
})
