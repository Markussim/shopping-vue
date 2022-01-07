import { createRouter, createWebHistory } from 'vue-router'
//import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    redirect: '/list'
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/list',
    name: 'List',
    component: () => import('../views/List.vue')
  },
  {
    path: '/pucko',
    name: 'Pucko',
    component: () => import('../views/Pucko.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
