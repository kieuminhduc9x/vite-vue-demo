import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
// import ViteLess from 'vite-plugin-vue'


export default defineConfig({
    plugins: [
        vue(),
        // ViteLess()
    ],
    server: {
        port: 3000
    }
})
