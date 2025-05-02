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
    // Simplified rollup options without manual chunks to avoid the TypeError
    rollupOptions: {
      output: {
        // Using automatic chunking instead of manual specification
        manualChunks(id) {
          // Core dependencies
          if (id.includes('node_modules')) {
            if (id.includes('react')) {
              return 'vendor-react';
            }
            
            // Other node modules
            return 'vendor';
          }
        }
      }
    },
    // Increase the warning limit
    chunkSizeWarningLimit: 600,
  }
})