export default {
  ssr: false,
  head: {
    title: 'HOB-App',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [],
  plugins: [
  ],
  components: true,
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/tailwindcss', '@nuxtjs/moment'],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/firebase',
    '@nuxtjs/toast',
    ['nuxt-validate', {
      lang: 'nl',
      nuxti18n: {
        locale: {
          'nl': 'nl'
        }
      }
    }]
  ],
  axios: {},
  pwa: {
    manifest: {
      name: 'HOB-App',
      lang: 'nl',
      background_color: '#3855a5',
      dir: 'ltr',
      display: 'minimal-ui',
      theme_color: '#3855a5',
    },
  },
  firebase: {
    config: {
      apiKey: 'AIzaSyAqJVEk9lF4M9QUTPikPvHevgaEDhBWb9U',
      authDomain: 'hob-system-8ab65.firebaseapp.com',
      databaseURL: 'https://hob-system-8ab65.firebaseio.com',
      projectId: 'hob-system-8ab65',
      storageBucket: 'hob-system-8ab65.appspot.com',
      messagingSenderId: '1058288639124',
      appId: '1:1058288639124:web:7d3b96861c91282ec3e881',
      measurementId: 'G-J069ZHS90L',
    },
    services: {
      auth: true,
      firestore: true,
      messaging: true,
      storage: true,
    },
    injectModule: false
  },
  toast: {},
  io: {},
  moment: {
    defaultLocale: 'nl',
    locales: ['nl']
  },
  sentry: {
    // TODO: integrate sentry. (setup new organization)
  },
  build: {}
}
