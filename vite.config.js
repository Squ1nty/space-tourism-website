import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/', // Simpler for Vercel
  build: {
    outDir: 'dist', // Recommended for Vercel
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        destination: resolve(__dirname, 'starter-code/html/destination.html'),
        crew: resolve(__dirname, 'starter-code/html/crew.html'),
        technology: resolve(__dirname, 'starter-code/html/technology.html'),
      }
    }
  }
})