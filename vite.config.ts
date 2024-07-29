import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as Path from 'path'
import autoprefixer from 'autoprefixer'
import postcss from 'postcss'

declare const __dirname: string
const alias = {
  '@': Path.resolve(__dirname, 'src'),
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        additionalData: "@import '@/assets/less/variables.less';",
      },
    },
    postcss: {
      plugins: [autoprefixer()],
    },
  },
  resolve: {
    alias,
  },
  server: {
    host: true,
  },
})
