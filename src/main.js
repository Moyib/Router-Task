import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store.js'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css'



Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router, store,
}).$mount('#app')
