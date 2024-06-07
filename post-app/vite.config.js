import {defineConfig} from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: 'catalog.html',
        }
    },
    server: {
        open: 'catalog.html'
    }
})