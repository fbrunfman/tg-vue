import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import VueRecaptcha from 'vue-recaptcha'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.component('v-icon', Icon)
Vue.use(VueRecaptcha)
Vue.use(VueSweetalert2)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
