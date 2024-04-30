import { useFakeAuthStore } from '@/stores/fakeAuth'

export default defineNuxtRouteMiddleware((to, from) => {
  const useFakeAuth = useFakeAuthStore()

  if (!useFakeAuth.isAuthenticated() && to.path !== '/' && to.path !== '/auth/login') {
    return navigateTo(`/auth/login?redirectedFrom=${to.path}`, { replace: true })
  }
  return
})
