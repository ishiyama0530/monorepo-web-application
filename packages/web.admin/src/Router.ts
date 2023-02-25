import { createRouter, createWebHistory } from 'vue-router'
const NotFoundPage = () => import('./pages/404.vue')
const ErrorPage = () => import('./pages/500.vue')
const HomePage = () => import('./pages/index.vue')
const UserNewPage = () => import('./pages/users/new/index.vue')
const SignInPage = () => import('./pages/signin/index.vue')

const routes = [
  { path: '/signin', component: SignInPage },
  { path: '', component: HomePage, meta: { requiresAuth: true } },
  { path: '/users/new', component: UserNewPage, meta: { requiresAuth: true } },
  { path: '/500', component: ErrorPage },
  { path: '/:catchAll(.*)', component: NotFoundPage }
]

const router = createRouter({
  history: createWebHistory('/admin'),
  routes
})

export default router
