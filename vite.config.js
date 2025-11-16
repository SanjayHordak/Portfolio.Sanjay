import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Node modules chunking
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor';
            }
            if (id.includes('three') || id.includes('@react-three')) {
              return 'three-vendor';
            }
            if (id.includes('motion')) {
              return 'motion-vendor';
            }
            if (id.includes('cobe') || id.includes('maath') || id.includes('tailwind-merge')) {
              return 'utils-vendor';
            }
            if (id.includes('@emailjs') || id.includes('react-responsive')) {
              return 'misc-vendor';
            }
            // Other node modules
            return 'vendor';
          }
          
          // Component chunking
          if (id.includes('/components/')) {
            if (id.includes('Globe') || id.includes('Astronaut') || id.includes('Timeline')) {
              return 'heavy-components';
            }
            return 'components';
          }
          
          // Sections chunking
          if (id.includes('/Sections/')) {
            return 'sections';
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    target: 'esnext',
    minify: 'esbuild',
    sourcemap: false,
    reportCompressedSize: false
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'three', '@react-three/fiber', '@react-three/drei']
  }
})
