// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueSocketio from 'vue-socket.io'
import socketio from 'socket.io-client'
import Chartkick from 'chartkick'
import VueChartkick from 'vue-chartkick'

Vue.config.productionTip = false

let ioInstance = socketio(process.env.SERVER_URL)
Vue.use(VueSocketio, ioInstance)

Vue.use(VueChartkick, { Chartkick })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
