import { defineConfig } from 'vite'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? 'space-tourism-website' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})