import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Services from '../views/Services.vue'
import Employers from '../views/Employers.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/service',
    name: 'Service',
    component: Services
  },
  {
    path: '/employers',
    name: 'Employers',
    component: Employers
  }
]

const router = new VueRouter({
  routes
})

export default router
