// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vuetify from 'vuetify'
// index.js or main.js
import('vuetify/dist/vuetify.min.css') // Ensure you are using css-loader
Vue.config.productionTip = false

Vue.prototype.$http = axios.create({
  baseURL : 'http://35.197.150.212:3001'
})

Vue.use(Vuetify)



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
