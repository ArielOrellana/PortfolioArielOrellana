import { createRouter, createWebHistory } from 'vue-router'

const BASE_URL = import.meta.env.BASE_URL
const SITE_URL = 'https://arielorellana.github.io/PortfolioArielOrellana'

declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    description?: string
  }
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    meta: {
      title: 'Ariel E. Orellana — Full Stack Developer | PHP, Laravel, React, Vue',
      description:
        'Full Stack Developer en Tucumán, Argentina. Más de 4 años creando y modernizando sistemas web con PHP, Laravel, React, Vue y Docker. Descargá mi CV y contactame.',
    },
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import('../views/PortfolioView.vue'),
    meta: {
      title: 'Portfolio de proyectos — Ariel Orellana | Full Stack Developer',
      description:
        'Proyectos de Ariel Orellana: sistemas de gestión, e-commerce, APIs REST y aplicaciones desarrolladas con Laravel, Vue.js, React y React Native.',
    },
  },
  {
    path: '/experiencia',
    name: 'experiencia',
    component: () => import('../views/ExpView.vue'),
    meta: {
      title: 'Experiencia laboral — Ariel Orellana | Full Stack Developer',
      description:
        'Más de 4 años de experiencia profesional: migración de sistemas legacy a stacks modernos con PHP, Laravel, React y Docker, APIs REST, microservicios y liderazgo de equipo.',
    },
  },
  {
    path: '/estudios',
    name: 'estudios',
    component: () => import('../views/EstView.vue'),
    meta: {
      title: 'Estudios y cursos — Ariel Orellana | Full Stack Developer',
      description:
        'Formación de Ariel Orellana: Tecnicatura de Programación (UTN), Técnico Electromecánico y cursos de PHP, React Native y QA testing.',
    },
  },
  {
    path: '/habilidades',
    name: 'habilidades',
    component: () => import('../views/HabView.vue'),
    meta: {
      title: 'Habilidades técnicas — Ariel Orellana | Full Stack Developer',
      description:
        'Stack técnico de Ariel Orellana: PHP, Laravel, MySQL, JavaScript, React, Vue.js, Docker, Git y tecnologías legacy como CodeIgniter y AngularJS.',
    },
  },
  {
    path: '/certificados',
    name: 'certificados',
    component: () => import('../views/CertView.vue'),
    meta: {
      title: 'Certificados — Ariel Orellana | Full Stack Developer',
      description:
        'Certificaciones y cursos completados por Ariel E. Orellana en desarrollo web, testing y aplicaciones móviles.',
    },
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: () => import('../views/ContactView.vue'),
    meta: {
      title: 'Contacto — Ariel Orellana | Full Stack Developer',
      description:
        'Contactá a Ariel E. Orellana: email, teléfono, LinkedIn, GitHub y GitLab. San Miguel de Tucumán, Argentina.',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/NotFoundView.vue'),
    meta: {
      title: 'Página no encontrada — Ariel Orellana',
      description: 'La página que buscas no existe en este sitio.',
    },
  },
]

const router = createRouter({
  history: createWebHistory(BASE_URL),
  routes,
})

function setMetaContent(name: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(href: string) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

router.afterEach((to) => {
  document.title = to.meta.title ?? 'Ariel E. Orellana — Full Stack Developer'
  if (to.meta.description) setMetaContent('description', to.meta.description)

  const notFound = to.name === 'not-found'
  setMetaContent('robots', notFound ? 'noindex, follow' : 'index, follow, max-image-preview:large')

  if (!import.meta.env.DEV) {
    if (notFound) {
      document.querySelector('link[rel="canonical"]')?.remove()
    } else {
      const path = to.path === '/' ? '/' : to.path.replace(/\/$/, '')
      setCanonical(SITE_URL + path)
    }
  }
})

// Compatibilidad con enlaces antiguos con hash (#/experiencia → /experiencia)
const legacyHash = window.location.hash
if (legacyHash.startsWith('#/')) {
  void router.replace(legacyHash.slice(1) || '/')
}

export default router
