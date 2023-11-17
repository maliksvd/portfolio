// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxt/ui', '@nuxt/content', '@hypernym/nuxt-gsap', '@nuxtseo/module', '@nuxthq/studio', '@nuxtjs/google-fonts'],

  ui: {
    icons: ['solar', 'logos', 'ph'],
    primary: 'zinc',
  },

  colorMode: {
    preference: 'light'
  },

  googleFonts: {
    families: {
      Inter: [400, 700],
      "Plus+Jakarta+Sans": [400,500,600,700],
    }
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
