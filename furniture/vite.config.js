import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [
        // allow serving files from project root
        path.resolve(__dirname),
        // allow access to the parent node_modules
        path.resolve(__dirname, '../')
      ]
    }
  }
})
