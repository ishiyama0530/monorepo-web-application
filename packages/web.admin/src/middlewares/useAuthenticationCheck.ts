import { Router } from 'vue-router'
import { useSessionStore } from '../store/SessionStore'

export const useAuthenticationCheck = (router: Router) => {
  const sessionStore = useSessionStore()

  router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
      if (!sessionStore.token || !sessionStore.user) {
        next({
          path: '/signin',
          query: { n: to.fullPath }
        })
      } else {
        next()
      }
    } else {
      next()
    }
  })
}
