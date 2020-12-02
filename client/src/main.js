import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueSweetalert2 from 'vue-sweetalert2'

Vue.use(BootstrapVue);
Vue.use(VueSweetalert2)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
