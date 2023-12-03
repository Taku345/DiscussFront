import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// import basicSsl from '@vitejs/plugin-basic-ssl'
// import mkcert from 'vite-plugin-mkcert';
// import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // mkcert(),
    //  basicSsl(),
  ],
  server: {
    // proxy: {
    //   // APIのエンドポイントを指定し、CORSを有効にする
    //   '/api': {
    //     // target: 'http://127.0.0.1:8000', // APIのURLを指定
    //     target: 'https://www.takuma432.shop', // APIのURLを指定
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, ''),
    //   },
    // },
    // port: { 3031 },
    // https: {
    //   key: fs.readFileSync('./local172-20-176-1-key.pem'),
    //   cert: fs.readFileSync('./local172-20-176-1.pem'),
    // },
    hmr: {
      host: process.env.VITE_API_URL,
    },
    host: '127.0.0.1'
  },
})
