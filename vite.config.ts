import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
// https://vitejs.dev/config/
export default ({mode}) => {
return {
  plugins: [react()],
  resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      },
  },
  define: {
    PROJECT: JSON.stringify({
      mode
    })
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:5678/data'
      }
    }
  }
}
}