// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'

// Use VueRoute
Vue.use(VueRouter)

// Import main component
import App from './App'

import routes from './routes.js'

// Create insance of router and define routes
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes
})

// Extend vue to use router obj and mount to app
new Vue(Vue.util.extend({ router }, App)).$mount('#app')

