import { createRouter, createWebHistory } from 'vue-router'
import { allRoute } from './routes'
import { type IStaticMethods } from 'preline/preline'
import { useFakeAuthStore } from '@/stores/fakeAuth'

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: allRoute,
})

// Before each route for page title
router.beforeEach((to, from, next) => {
  const title = to.meta.title
  if (title) {
    document.title = title.toString()
  } else {
    document.title = 'AeroPage - Tailwind CSS Multipurpose One Page Landing Template'
  }
  next()
})

// Before each route evaluates...
router.beforeEach((routeTo, routeFrom, next) => {
  // Check if auth is required on this route
  // (including nested routes).
  const authRequired = routeTo.matched.some((route) => route.meta.authRequired)

  // If auth isn't required for the route, just continue.
  if (!authRequired) return next()

  const useAuth = useFakeAuthStore()
  // If auth is required and the user is logged in...
  if (useAuth.isAuthenticated) {
    return next()
  }

  // If auth is required and the user is NOT currently logged in,
  // redirect to login.
  redirectToLogin()

  function redirectToLogin() {
    // Pass the original route to the login component
    next({ name: 'auth.login', query: { redirectFrom: routeTo.fullPath } })
  }
})

router.afterEach((to, from, failure) => {
  if (!failure) {
    setTimeout(() => {
      window.HSStaticMethods.autoInit()
    }, 100)
  }
})

export default router
