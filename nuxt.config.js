const ALLOWED_HOSTS = ['*.google-analytics.com', '*.doubleclick.net', '*.googleusercontent.com']

export default {
  mode: 'spa',

  render: {
    csp: {
      reportOnly: false,
      addMeta: true,
      hashAlgorithm: 'sha256',
      unsafeInlineCompatiblity: true,
      policies: {
        'default-src': ["'self'", 'https:', ...ALLOWED_HOSTS],
        'script-src': ["'self'", "'strict-dynamic'", 'https:'],
        'style-src': ["'self'", "'strict-dynamic'", 'https:'],
        'frame-src': [],
        'object-src': ["'none'"],
        'base-uri': ["'self"]
      /* "report-uri": [
        "https://sentry.io/api/<project>/security/?sentry_key=<key>",
      ], */
      }
    }
  },

  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
