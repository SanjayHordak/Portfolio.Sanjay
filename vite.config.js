import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  esbuild: {
    target: 'es2020'
  },
  build: {
    chunkSizeWarningLimit: 1000,
    target: 'es2020',
    minify: 'esbuild'
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'three', '@react-three/fiber', '@react-three/drei', 'motion', '@emailjs/browser'],
    force: true
  },
  define: {
    global: 'globalThis'
  }
})
