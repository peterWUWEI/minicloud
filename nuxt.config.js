export default {
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
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
    '@nuxtjs/proxy',
    '@nuxtjs/axios',
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
    proxy: true,
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${process.env.API_KEY}`
    }
  },

  proxy: {
    // Simple proxy
    "/api/": {
      target: process.env.API_URL,
      pathRewrite: { "^/api/": "" }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
