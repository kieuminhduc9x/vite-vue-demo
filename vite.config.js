import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'


export default defineConfig({
    plugins: [
        vue(),
    ],
    server: {
        port: 3000
    },
    define: {
        'process.env': {
            VUE_APP_API_URL: process.env.VUE_APP_API_SERVER_URL
        }
    }
})
