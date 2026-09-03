// Point PLUTO_UTILS_PATH at a local checkout (e.g. `../utils`) to test
// unpublished changes; unset, it resolves to the published npm package.
const utilsLayer = process.env.PLUTO_UTILS_PATH || '@plutocms/utils'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [utilsLayer],

  modules: ['@nuxt/ui'],

  $meta: {
    name: 'ui',
  },

  devtools: { enabled: true },

  css: ['#layers/ui/app/assets/css/tailwind.css'],

  compatibilityDate: '2025-07-15',
})
