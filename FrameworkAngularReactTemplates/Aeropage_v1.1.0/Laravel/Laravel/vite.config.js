import {defineConfig} from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                //css
                'resources/css/style.css',
                'resources/css/icons.css',

                //js
                'resources/js/theme.js',
                'resources/js/head.js',
                'resources/js/admin.js',
                'resources/js/auth.js',
                'resources/js/swiper.js',
                'resources/js/gallery.js',
                'resources/js/glightbox.js'
            ],
            refresh: true,
        }),
    ],
});
