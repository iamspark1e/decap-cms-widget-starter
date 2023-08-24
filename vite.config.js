import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import replace from '@rollup/plugin-replace'
import copy from 'rollup-plugin-copy'

export default defineConfig(({ command, mode }) => {
    if (mode !== 'production' || command === 'serve') {
        return {
            plugins: [react()],
            server: {
                port: process.env.PORT || 8080,
                host: '0.0.0.0'
            },
            preview: {
                port: process.env.PORT || 8080,
                host: '0.0.0.0'
            },
            publicDir: 'public'
        }
    }
    return {
        plugins: [
            react(),
            cssInjectedByJsPlugin(),
            replace({
                'process.env.NODE_ENV': JSON.stringify(mode),
            }),
            // The `rollup-plugin-copy` plugin is not necessary if you are not need to run in `preview` mode, but I suggest to test in this mode for safe.
            copy({
                targets: [{
                    src: 'index.html',
                    dest: 'dist',
                    transform: (contents, filename) => contents.toString().replace('<script type="module" src="./src/main.js"></script>', '<script src="./main.js"></script><script>CMS.registerWidget("test", window.StarterControl, window.StarterPreview);</script>')
                }],
                hook: "writeBundle"
            })
        ],
        build: {
            lib: {
                entry: resolve(__dirname, 'src/main.js'),
                name: 'main',
                fileName: (format, entryName) => {
                    return format === 'iife' ? "main.js" : `main.${format}.js`
                },
                formats: ['iife'], // You can add other formats if you need.
            },
            sourcemap: true
        }
    }
})