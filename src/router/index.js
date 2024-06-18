import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import CertView from '../views/CertView.vue'
import EstView from '../views/EstView.vue'
import HabView from '../views/HabView.vue'
import PortfolioView from '../views/PortfolioView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/experiencia',
      name: 'experiencia',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ExpView.vue')
    },
    {
      path: '/habilidades',
      name: 'habilidades',
      component: HabView
    },
    {
      path: '/estudios',
      name: 'estudios',
      component: EstView
    },
    {
      path: '/certificados',
      name: 'certificados',
      component: CertView
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: ContactView
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: PortfolioView
    },
  ]
})

export default router
