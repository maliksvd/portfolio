// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxt/ui', '@nuxt/content', '@nuxtseo/module', '@nuxthq/studio'],

  ui: {
    icons: ['solar', 'logos'],
    primary: 'zinc',
  },

  colorMode: {
    preference: 'dark'
  },

  content: {
    highlight: {
      preload: [
        'swift',
        'vue',
        'vue-html',
        'javascript',
        'typescript',
        'bash',
        'json',
        'markdown',
      ],
      theme: {
        default: 'github-light',
        dark: 'github-dark',
        sepia: 'monokai'
      }
    }
  },

  css: [ '~/assets/css/main.css' ],

  site: {
    url: 'https://maliksvd.ca',
    name: 'Malik Krechiche',
    description: 'Passionate developer based in Montreal, Canada.',
    defaultLocale: 'en',
    identity: {
      type: 'Person'
    },
    twitter: '@maliksvd',
  }
})
