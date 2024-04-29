import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'
import Myhome from '../views/home/childrens/myhome/Myhome.vue'
import Mine from '../views/home/childrens/mine/Mine.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/myhome',
    children: [
      { path: '/myhome', name: 'myhome', component: Myhome },
      { path: '/mine', name: 'mine', component: Mine }
    ]
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
