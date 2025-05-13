import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': process.env
  },
  plugins: [react()],
  resolve: {
    alias: {
      'react': path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
      'scheduler': path.resolve(__dirname, './node_modules/scheduler')
    }
  },
  build: {
    sourcemap: false,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    rollupOptions: {
      output: {
        // Use a simpler chunk approach
        manualChunks: {
          'vendor': [
            'react',
            'react-dom',
            'react/jsx-runtime',
            'scheduler',
            'react-router-dom'
          ],
          'ui': [
            'aos',
            'framer-motion',
            'react-slick',
            'swiper',
            'react-transition-group'
          ]
        },
        // Ensure proper output format for modules
        format: 'es'
      }
    },
    chunkSizeWarningLimit: 600,
  },
  server: {
    // Ensure correct MIME types during development
    fs: {
      strict: true,
    }
  }
})