import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // APIのエンドポイントを指定し、CORSを有効にする
      '/api': {
        // target: 'http://127.0.0.1:8000', // APIのURLを指定
        target: 'https://www.takuma432.shop', // APIのURLを指定
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
    // hmr: {
    //   host: '127.0.0.1:8000',
    // },
    host: true
  },
})
