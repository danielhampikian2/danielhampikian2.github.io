// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  plugins: ['@/plugins/preline.client.ts'],
  css: ['@/assets/css/style.css'],
  ignore: ['pages/landings/**/components/*'],
  router: {
    options: {
      linkActiveClass: 'active'
    }
  },
  pinia: {
    storesDirs: ['stores/**']
  }
})
