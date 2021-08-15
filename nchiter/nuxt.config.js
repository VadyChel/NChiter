import en from './locales/en'
import ru from './locales/ru'
import ua from './locales/ua'


export default {
  server: {
    port: 5000
  },
  head: {
    titleTemplate: '%s - NChiter',
    title: 'NChiter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '~/assets/main.css'
  ],
  plugins: [],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
  ],
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/universal-storage',
  ],
  axios: {},
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English'
      },
      {
        code: 'ru',
        name: 'Русский'
      },
      {
        code: 'ua',
        name: 'Український'
      }
    ],
    defaultLocale: 'en',
    strategy: 'no_prefix',
    vueI18n: {
      fallbackLocale: 'en',
      messages: { ru, ua, en }
    }
  },
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: { dark: true }
  },
  build: {
  }
}
