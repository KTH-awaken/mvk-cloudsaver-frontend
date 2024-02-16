import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LandingPage.vue')
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/Overview',
      name: 'Overview',
      component: () => import('../views/Overview.vue')
    },
    {
      path: '/Tutorial',
      name: 'Tutorial',
      component: () => import('../views/TutorialView.vue')
    }
  ]
})

export default router
