import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import (/* webpackChunkName: "login" */ '../views/login/Login.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import(/**/ '../views/search/Search.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
