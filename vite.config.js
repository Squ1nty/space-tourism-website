import { defineConfig } from 'vite'

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: './index.html',
        destination: './starter-code/html/destination.html',
        crew: './starter-code/html/crew.html',
        technology: './starter-code/html/technology.html',
      }
    }
  }
})