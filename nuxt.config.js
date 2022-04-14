export default {
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/less/main.less'
  ],

  /*
     ** Customize the progress bar color
     */
  loading: { color: '#3B8070' },

  head: {
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css'
      }
    ]
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vuetify.js',
    '~/plugins/base.js',
    '~/plugins/chartist.js',
    '~/plugins/components.js',
    { src: '~/plugins/ckeditor.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/vuetify',
    ['nuxt-i18n', {
      locales: [
        {
          name: 'Japanese',
          code: 'jp',
          iso: 'ja-JP',
          file: 'ja-JP.js'
        },
        {
          name: 'English',
          code: 'en',
          iso: 'en-US',
          file: 'en-US.js'
        },
        {
          name: 'Chinese (Simplified)',
          code: 'cn',
          iso: 'zh-CN',
          file: 'zh-CN.js'
        },
        {
          name: 'Chinese (Traditional)',
          code: 'tw',
          iso: 'zh-TW',
          file: 'zh-TW.js'
        }
      ],
      langDir: 'lang/',
      defaultLocale: 'jp',
    }]
  ],

  axios: {
    baseURL: process.env.API_URL,
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${process.env.API_KEY}`,
      'Access-Control-Allow-Origin': '*'
    }
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'login', method: 'post' },
          logout: false,
          user: false
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
        optimization: {
            splitChunks: {
                cacheGroups: {
                    styles: {
                        name: 'styles',
                        test: /\.(css|vue)$/,
                        chunks: 'all',
                        enforce: true,
                    },
                },
            },
        },
        extend(config, ctx) {
            // Run ESLint on save
            if (ctx.isDev && ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/,
                });
            }
            if (ctx.isClient) {
                config.devtool = 'source-map';
            }
        },
    transpile: [/^vuetify/],
  }
}
