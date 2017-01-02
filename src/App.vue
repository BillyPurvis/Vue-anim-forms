<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <router-link to="/login">Go to Login</router-link>
    <router-link to="/sign-up">Go to Sign Up Form</router-link>
    <router-link to="/profile">Go to Profile</router-link>
    <router-link to="/forgotten-password">Go to Forgotten Password</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello
  },
  data () {
    return {
      msg: 'Welome to Vue-Cli'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
