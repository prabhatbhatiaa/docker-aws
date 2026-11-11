import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],

  resolve: {
    alias: {
      'monaco-editor/esm/vs/editor/editor.api.js':
        '/node_modules/monaco-editor/esm/vs/editor/editor.api.js',
    },
  },

  optimizeDeps: {
    exclude: ['y-monaco'],
  },
})
