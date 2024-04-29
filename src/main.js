import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/index.css'
import { Form, Field, Toast, Swipe, SwipeItem, Icon, Button, Tabbar, TabbarItem, Search } from 'vant'

Vue.config.productionTip = false
Vue.use(Form)
Vue.use(Field)
Vue.use(Toast)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Icon)
Vue.use(Button)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Search)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
