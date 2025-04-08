import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': process.env
  },
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: /^~.+/,
        replacement: (val) => {
          return val.replace(/^~/, "");
        },
      },
    ],
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React dependencies
          vendor: ['react', 'react-dom', 'react-router-dom'],
          
          // UI-related libraries
          ui: ['react-helmet', 'tailwindcss', 'aos', 'react-transition-group'],
          
          // Animation-related libraries
          animations: ['framer-motion', '@react-spring/web'],
          
          // Carousel and slider libraries
          sliders: ['react-slick', 'slick-carousel', 'swiper'],
          
          // Email and utility libraries
          utils: ['@emailjs/browser', 'lucide-react'],
          
          // Components that might be large
          components: [
            './src/components/GoogleGeminiEffect.jsx',
            './src/partials/ValuePropositionMain.jsx',
            './src/partials/ChatServiceArchitecture.jsx',
            './src/pages/About.jsx',
            './src/pages/Home.jsx'
          ]
        }
      }
    },
    // Increase the warning limit if needed
    chunkSizeWarningLimit: 600,
  }
})