import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'home', component: () => import('../views/HomeView.vue'), meta: { title: 'Inicio' } },
  { path: '/portfolio', name: 'portfolio', component: () => import('../views/PortfolioView.vue'), meta: { title: 'Portfolio' } },
  { path: '/experiencia', name: 'experiencia', component: () => import('../views/ExpView.vue'), meta: { title: 'Experiencia' } },
  { path: '/estudios', name: 'estudios', component: () => import('../views/EstView.vue'), meta: { title: 'Estudios' } },
  { path: '/habilidades', name: 'habilidades', component: () => import('../views/HabView.vue'), meta: { title: 'Habilidades' } },
  { path: '/certificados', name: 'certificados', component: () => import('../views/CertView.vue'), meta: { title: 'Certificados' } },
  { path: '/contacto', name: 'contacto', component: () => import('../views/ContactView.vue'), meta: { title: 'Contacto' } },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('../views/NotFoundView.vue'), meta: { title: '404' } },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.afterEach((to) => {
  document.title = to.meta.title ? `Ariel Orellana · ${to.meta.title}` : 'Ariel Orellana'
})

export default router
