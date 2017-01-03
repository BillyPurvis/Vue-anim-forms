<template>
  <div id="app">
    <!-- <router-link to="/sign-up">Go to Sign Up Form</router-link>
    <router-link to="/profile">Go to Profile</router-link>
    <router-link to="/forgotten-password">Go to Forgotten Password</router-link> -->
    <div class="cont">
    <!-- Header -->
  <header class="header-bar">
    <router-link class="header-login login-btn" to="/login">Login</router-link>
    <h1 class="page-title">Vue Animated Forms</h1>
  </header>
    <router-view></router-view>
  </div>
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
// Import Variables
@import './assets/sass/variables'

// Core Structure CSS
html
  box-sizing: border-box
* 
  box-sizing: border-box
button 
  cursor: pointer
*:focus
  outline: 0
body
  margin: 0
header
  width: 100%
  height: auto
  padding-top: 50px
  position: relative
  h1 
    left: 75px
    margin: 0
    width: auto
    position: absolute
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
.cont 
  width: 100%
  height: 100vh
  @extend .gradient
.header-login
  top: 50px
  right: 75px
  color: #fff
  position: absolute
  border: 2.5px solid #fff
.panel-login
  color: #2c3e50
  margin-top: 10px
  display: inline-block
  border: 2.5px solid lighten(#2c3e50, 5%)
.login-btn 
  width: auto
  font-weight: 500
  font-size: 1.2rem
  padding: 8px 22px
  border-radius: 7px
  text-decoration: none
  transition: all .3s ease
  &:hover
    color: #2c3e50
    background: #f7f7f7
.gradient
  background: #83a4d4 /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #83a4d4 , #b6fbff) /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #83a4d4 , #b6fbff) /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

// Form global styles
.cross-x
  top: 25px
  right: 25px
  width: 22px
  height: 24px
  cursor: pointer
  position: absolute
.card-cont
  top: 0
  left: 0
  right: 0
  bottom: 0
  margin: auto
  max-width: 514px
  min-width: 280px
  min-height: 540px
  max-height: 630px
  background: $navy
  position: absolute
.form-inner
  margin: 0 auto
  max-width: 414px
label
  height: 0
  opacity: 0
  display: block

// Form Elements
.form-head
  width: 100%
  height: 130px
  padding-top: 98px
  margin-bottom: 93px
.form-name
  margin: 0
  color: $grey
  font-size: 1.4em
  font-family: $Mont
.input-wrap
  width: 100%
  height: calc(57px + 4px)
  border-radius: 2px
  @extend .gradient
  &:first-child
    margin-bottom: 35px
.input
  top: 2px
  //left: 2px
  border: 0
  height: 57px
  color: $grey
  font-size: 1em
  background: $navy
  padding-left: 20px
  position: relative
  font-family: $Mont
  width: calc(100% - 4px)
.btn-wraps
  width: 100%
  clear: both
  margin-top: 88px
.button
  height: 56px
  width: 184px
  cursor: pointer
  position: relative
  border-radius: 10px
  display: inline-block

// Special globals
#password-reset
  color: $grey
  float: right
  font-size: 0.8em
  margin-top: 20px
  display: inline-block
#submit-wrap
  float: left
  @extend .button
  @extend .gradient
  input
    top: 2px
    left: 2px
    border: 0
    cursor: pointer
    border-radius: 10px
    width: calc(100% - 4px)
    height: calc(100% - 4px)
    background: $navy
    position: absolute
    display: inline-block
    font-family: $Mont
    color: $grey
    font-size: 1em
    letter-spacing: 0.5px
    text-transform: uppercase
#sign-up-wrap
  float: right
  @extend .button
  button
    border: 0
    width: 100%
    height: 100%
    color: $grey
    opacity: 0.18
    font-size: 1em
    font-family: $Mont
    border-radius: 10px
    background: #737F90
    text-transform: uppercase
</style>
