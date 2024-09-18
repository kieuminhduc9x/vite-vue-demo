import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'


export default defineConfig({
    plugins: [vue()],
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true
            }
        }
    },
    define: {
        'process.env': {
            VUE_APP_API_URL: process.env.VUE_APP_API_SERVER_URL
        }
    },
    server: {
        port: 3000,
        proxy: {
            '/socket.io': {
                target: 'http://localhost:4000',
                ws: true,
                changeOrigin: true
            }
        }
    }
})
