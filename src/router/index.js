import Vue from 'vue'
import VueRouter from 'vue-router'
import Mine from '../views/mines/mine/Mine'
import Main from '../views/mines/mine/mineChild/main/Main'
import Footer from '../views/mines/mine/mineChild/footer/Footer'

Vue.use(VueRouter)

const routes = [
  {
    path: '/mine',
    name: 'mine',
    component: Mine,
    children: [
      {
        path: '/mine/main',
        name: 'main',
        component: Main,
      },
      {
        path: '/mine/footer',
        name: 'footer',
        component: Footer,
      }
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router
