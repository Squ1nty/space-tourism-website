import { defineConfig } from 'vite'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? 'space-tourism-website' : '/',
  build: {
    outDir: 'root',
    assetsDir: 'assets'
  }
})