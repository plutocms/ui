// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@plutocms/utils'],

  modules: ['@nuxt/ui'],

  $meta: {
    name: 'ui',
  },

  css: ['#layers/ui/app/assets/css/tailwind.css'],

  devtools: { enabled: true },

  compatibilityDate: '2025-07-15',
})
