import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/ebrigade-api': {
        target: 'https://ebrigade.online/groupementmabellefrance/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/ebrigade-api/, ''),
      },
    },
  },
})
