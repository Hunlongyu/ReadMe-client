import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import i18n from './locales/index'
import Register from './components/register'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Register.registerComponents()
Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')