/*
 * This file runs in a Node context (it's NOT transpiled by Babel), so use only
 * the ES6 features that are supported by your Node version. https://node.green/
 */

// Configuration for your app
// https://quasar.dev/quasar-cli/quasar-conf-js

/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */
// import veauryVitePlugins from 'veaury/vite/index.js'
const veauryVitePlugins = require('veaury/vite/index');

module.exports = function (ctx) {
  return {
    supportTS: false,
    boot: ['i18n', 'ace', 'pinia', 'v3num'],
    css: ['app.scss'],
    extras: [
      // 'ionicons-v4',
      // 'mdi-v5',
      // 'fontawesome-v5',
      // 'eva-icons',
      // 'themify',
      // 'line-awesome',
      // 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!

      'roboto-font', // optional, you are not bound to it
      'material-icons', // optional, you are not bound to it
    ],
    build: {
      env: require('dotenv').config().parsed,
      publicPath: ctx.prod ? '/dbdiagram-oss/' : '/',
      vueRouterMode: 'history',
      // chainWebpack(/* chain */) {},
      vitePlugins: [
        veauryVitePlugins({
          type: 'vue',
          // Configuration of @vitejs/plugin-vue
          // vueOptions: {...},
          // Configuration of @vitejs/plugin-react
          // reactOptions: {...},
          // Configuration of @vitejs/plugin-vue-jsx
          // vueJsxOptions: {...}
        }),
      ],
    },
    // devServer: {
    //   server: {
    //     type: 'http',
    //   },
    //   port: 3210,
    //   open: true, // opens browser window automatically
    // },
    framework: {
      config: {},
      iconSet: 'material-icons',
      // lang: 'en-US', // Quasar language pack
      plugins: ['Dark', 'Notify', 'Dialog', 'Dark'],
    },

    animations: 'all',
    ssr: {
      pwa: false,

      // manualStoreHydration: true,
      // manualPostHydrationTrigger: true,

      prodPort: 3000, // The default port that the production server should use
      // (gets superseded if process.env.PORT is specified at runtime)

      maxAge: 1000 * 60 * 60 * 24 * 30,
      // Tell browser when a file from the server should expire from cache (in ms)

      // chainWebpackWebserver(/* chain */) {
      //   //
      // },

      middlewares: [
        ctx.prod ? 'compression' : '',
        'render', // keep this as last one
      ],
    },
    pwa: {
      workboxPluginMode: 'GenerateSW', // 'GenerateSW' or 'InjectManifest'
      workboxOptions: {}, // only for GenerateSW
      // chainWebpackCustomSW(/* chain */) {},
      // manifest: {
      //   name: 'DB Diagram OSS',
      //   short_name: 'DB Diagram OSS',
      //   description: 'An Open-Source dbdiagram.io',
      //   display: 'standalone',
      //   orientation: 'portrait',
      //   background_color: '#ffffff',
      //   theme_color: '#027be3',
      //   icons: [
      //     {
      //       src: 'icons/icon-128x128.png',
      //       sizes: '128x128',
      //       type: 'image/png',
      //     },
      //     {
      //       src: 'icons/icon-192x192.png',
      //       sizes: '192x192',
      //       type: 'image/png',
      //     },
      //     {
      //       src: 'icons/icon-256x256.png',
      //       sizes: '256x256',
      //       type: 'image/png',
      //     },
      //     {
      //       src: 'icons/icon-384x384.png',
      //       sizes: '384x384',
      //       type: 'image/png',
      //     },
      //     {
      //       src: 'icons/icon-512x512.png',
      //       sizes: '512x512',
      //       type: 'image/png',
      //     },
      //   ],
      // },
    },
  };
};
