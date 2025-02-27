// librerias/
import path, { resolve } from 'node:path';
import { defineConfig } from 'vite';
import * as glob from 'glob';
import htmlPurge from 'vite-plugin-purgecss';

const obtenerEntradasHTML = () => {
    return Object.fromEntries(
        [
            ...glob.sync('./**/*.html', { Ignore: ['./dist/**/*', './node_modules/**'] }

            ).map(
                filedata => [
                    filedata.slice(0, filedata.length - path.extname(filedata).length),
                        resolve(__dirname,filedata)
                ]
            )
        ]
    );
}

export default defineConfig({
    appType: 'mpa',
    build: {
        rollupOptions: {
            input: obtenerEntradasHTML()
        }
    },
    plugins: [
        htmlPurge({})
    ]
});
