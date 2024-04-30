const { resolve } = require('path');
import path from "path";

import {sync} from 'glob';

module.exports = {
  plugins: [],
  root: 'src',
  server: {
    host: 'localhost',
    port: 3000,
    open: false,
    watch: {
      usePolling: true,
      disableGlobbing: false,
    },
  },
  resolve: {
    extensions: ['.js', '.json'],
  },
  build: {
    outDir: "../../static/dist",
    manifest: true,
    emptyOutDir: true,
    target: 'es2015',
    rollupOptions: {
      input: [
        ...sync('src/**/*.js')
      ]
    }
  },
};
