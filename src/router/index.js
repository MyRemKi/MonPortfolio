import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { 
      path: '/', 
      name: 'home', 
      component: Home 
    },

    { 
      path: '/projets', 
      name: 'projets', 
      component: () => import('../views/Projets.vue') 
    },

    { 
      path: '/projet/:id',
      name: 'projet-detail',
      component: () => import('../views/ProjetDetail.vue'),
      props: true 
    },

    { 
      path: '/formations', 
      name: 'formations', 
      component: () => import('../views/Formations.vue') 
    },

    { 
      path: '/formation/:id', 
      name: 'formation-detail', 
      component: () => import('../views/FormationsDetail.vue'),
      props: true 
    },

    { 
      path: '/experiences', 
      name: 'experiences', 
      component: () => import('../views/Experiences.vue') 
    },

    { 
      path: '/experience/:id',
      name: 'experience-detail',
      component: () => import('../views/ExperienceDetail.vue'),
      props: true
    },

    { 
      path: '/contact', 
      name: 'contact', 
      component: () => import('../views/Contact.vue') 
    }
  ]
})

export default router