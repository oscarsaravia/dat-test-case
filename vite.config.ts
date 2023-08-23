import { build, defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'assets/plugin.js',
        chunkFileNames: 'assets/plugin.js',
        assetFileNames: 'assets/plugin.[ext]'
      }
    }
  }
})
