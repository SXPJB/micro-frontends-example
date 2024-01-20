import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  preview: {
    port: 3000,
    host: '0.0.0.0',
  },
  plugins: [
      react(),
      federation({
        name: "host-app",
        remotes:{
          todo_components: "http://localhost:3001/assets/remoteEntry.js"
        },
        shared: ["react"]
      })
  ],
  build: {
    modulePreload: false,
    target: "esnext",

    minify: false,
    cssCodeSplit: false,
  },
})
