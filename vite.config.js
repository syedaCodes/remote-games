import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  test:{
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.js',
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/sass/_main.scss";`
      },
    },
  },
})
