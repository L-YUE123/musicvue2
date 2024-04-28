import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Form, Field, Toast, Swipe, SwipeItem, Icon } from 'vant'

Vue.config.productionTip = false
Vue.use(Form)
Vue.use(Field)
Vue.use(Toast)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Icon)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
