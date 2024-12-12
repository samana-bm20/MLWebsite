import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.JPG', '**/*.PNG'], 
  plugins: [react()],
  base : '/MLWebsite/',
  server : {
    host : '192.168.1.168'
  }
})
