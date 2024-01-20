import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
    preview:{
        port: 3001,
        host: '0.0.0.0',
    },
    plugins: [
        react(),
        federation({
            name: "todo-components",
            filename: "remoteEntry.js",
            exposes: {
                "./List": "./src/components/List",
                "./Input": "./src/components/Input",
            },
            shared: ["react"],
        })
    ],
    build:{
        modulePreload: false,
        target: 'esnext',
        minify: false,
        cssCodeSplit: false,
    }
})
