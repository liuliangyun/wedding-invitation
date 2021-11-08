import Vue from 'vue'
import VueRouter from 'vue-router'
import Wedding from './Wedding.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Wedding, redirect: { path:  '/wedding-invitation' } },
]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(Wedding)
})