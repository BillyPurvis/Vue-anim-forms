<template>
  <div id="app">
    <!-- <router-link to="/sign-up">Go to Sign Up Form</router-link>
    <router-link to="/profile">Go to Profile</router-link>
    <router-link to="/forgotten-password">Go to Forgotten Password</router-link> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  },
  data () {
    return {
      msg: 'Welome to Vue-Cli'
    }
  }
}
</script>

<style lang="sass">
body 
  margin: 0
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
</style>
