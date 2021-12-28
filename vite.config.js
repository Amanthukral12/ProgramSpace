import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgrPlugin from 'vite-plugin-svgr'
import viteCompression from 'vite-plugin-compression';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCompression(), 
    svgrPlugin({
      svgrOptions: {
        icon: true,
      },
    }),  
  ]
})
