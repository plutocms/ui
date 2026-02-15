// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['github:plutocms/utils'],

  $meta: {
    name: 'ui',
  },

  devtools: { enabled: true },

  compatibilityDate: '2025-07-15',
})
