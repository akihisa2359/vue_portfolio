import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import VueScrollTo from 'vue-scrollto'
import './css/style.css'

const VueTypedJs = window['VueTypedJs'].default;
Vue.use(VueTypedJs)
Vue.config.productionTip = false
Vue.use(VueScrollTo)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
