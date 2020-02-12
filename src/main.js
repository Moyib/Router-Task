import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'
import App from './App.vue'
import router from './router'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
