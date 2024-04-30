// View your website at your own local server
// for example http://vite-php-setup.test

// http://localhost:5133 is serving Vite on development
// but accessing it directly will be empty
// TIP: consider changing the port for each project, see below

// IMPORTANT image urls in CSS works fine
// BUT you need to create a symlink on dev server to map this folder during dev:
// ln -s {path_to_project_source}/src/assets {path_to_public_html}/assets
// on production everything will work just fine
// (this happens because our Vite code is outside the server public access,
// if it where, we could use https://vitejs.dev/config/server-options.html#server-origin)

import {defineConfig, splitVendorChunkPlugin} from "vite";
import liveReload from "vite-plugin-live-reload";
import path from "path";
import {sync} from 'glob';

// https://vitejs.dev/config/
export default defineConfig({

    plugins: [
        // liveReload([
        //   // edit live reload paths according to your source code
        //   // for example:
        //   __dirname + '/../(app|config|views)/**/*.php',
        //   // using this for our example:
        //   __dirname + '/../public/*.php',
        // ]),
        // splitVendorChunkPlugin(),
    ],

    // config
    root: ".",
    base: process.env.APP_ENV === "development"
        ? "/"
        : "/AeroPage/public/dist/",

    build: {
        // output dir for production build
        outDir: "public/dist",
        copyPublicDir: false,
        emptyOutDir: true,

        // emit manifest so PHP can find the hashed files
        manifest: true,

        // our entry
        rollupOptions: {
            input: [
                path.resolve(__dirname, "public/assets/css/style.css"),
                path.resolve(__dirname, "public/assets/css/icons.css"),
                ...sync('public/assets/js/**/*.js').map((file) => path.resolve(__dirname, file),)
            ]
        }
    },

    server: {
        // we need a strict port to match on PHP side
        // change freely, but update on PHP to match the same port
        // tip: choose a different port per project to run them at the same time
        strictPort: true,
        port: process.env.VITE_PORT ?? 5133
    },

    // required for in-browser template compilation
    // https://vuejs.org/guide/scaling-up/tooling.html#note-on-in-browser-template-compilation
    resolve: {}
});