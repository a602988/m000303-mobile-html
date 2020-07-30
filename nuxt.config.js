
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    meta: [
      { charset: 'utf-8' },
      // { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { hid: 'description', name: 'description', content: '' },
      { hid: 'og:title', propety: 'og:title', content: '' },
      { hid: 'og:url', propety: 'og:url', content: '' },
      { hid: 'og:site_name', propety: 'og:site_name', content: '' },
      { hid: 'og:description', propety: 'og:description', content: '' },
      { hid: 'og:image', propety: 'og:image', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [

  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-i18n'
  ],


  i18n: {
    locales: ['zh-Hant', 'en'],
    defaultLocale: 'zh-Hant',
    vueI18n: {
      fallbackLocale: 'zh-Hant',
      messages: {
        'zh-Hant': require('./locales/zh-Hant.json'),
        'en': require('./locales/en.json'),
      }
    }
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {

  }
}
