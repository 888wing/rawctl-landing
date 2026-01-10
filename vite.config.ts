import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
  // SPA fallback for dev server
  server: {
    open: true,
  },
  // Handle SPA routes in preview
  preview: {
    open: true,
  },
})
