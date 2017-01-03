// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'

// Use VueRoute
Vue.use(VueRouter)

// Import and define components
import App from './App'
import Home from './components/Home'
import LoginForm from './components/userComponents/LoginForm'
import SignUpForm from './components/userComponents/SignUpForm'
import userProfile from './components/userComponents/userProfile'
import passwordForgotten from './components/userComponents/passwordForgotten'

// Create insance of router and define routes
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home, name: 'Home' },
    { path: '/login', component: LoginForm },
    { path: '/sign-up', component: SignUpForm },
    { path: '/profile', component: userProfile },
    { path: '/forgotten-password', component: passwordForgotten }
  ]
})

// Extend vue to use router obj and mount to app
new Vue(Vue.util.extend({ router }, App)).$mount('#app')

