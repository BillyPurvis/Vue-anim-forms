<template>
	<div id="signup-form" class="card-cont">
    <div v-cloak class="form-inner">
      <div class="form-head">
        <div class="cross-x">
          <svg width="100%" height="100%" viewBox="0 0 22 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
            <g transform="matrix(0.777014,0,0,0.777014,-922.517,-186.157)">
                <g transform="matrix(0.529032,0.587118,-0.588247,0.530049,1244.79,-78.6969)">
                    <rect x="251.781" y="321.519" width="50.484" height="2.708" style="fill:rgb(203,209,213);fill-opacity:0.980392;"/>
                </g>
                <g transform="matrix(-0.529032,0.587118,0.588247,0.530049,1158.04,-78.6969)">
                    <rect x="251.781" y="321.519" width="50.484" height="2.708" style="fill:rgb(203,209,213);fill-opacity:0.980392;"/>
                </g>
            </g>
        </svg>
        </div>
        <h1 class="form-name">Sign Up</h1>
      </div>
      <!-- Form -->
      <form action="">
        <div class="input-wrap half-input">
          <label for="firstName">First Name</label>
          <input id="first-name" placeholder="First Name" class="input" type="text" />
        </div>
        <div class="input-wrap half-input">
          <label for="surname">Surname</label>
          <input id="surname" placeholder="Surname" class="input gradient" type="text" />
        </div>
        <div class="input-wrap">
          <label for="signup-email-field">Email</label>
          <input id="signup-email-field" placeholder="Email" class="input gradient" type="text" />
        </div>
        <div class="input-wrap">
          <label for="signup-password">Username/Email</label>
          <input id="signup-password" placeholder="Password" class="input gradient" type="text" />
        </div>
        <div class="input-wrap">
          <label for="signup-re-password">Username/Email</label>
          <input id="signup-re-password" placeholder="Re-type password" class="input gradient" type="text" />
        </div>
        <div class="btn-wraps">
          <div id="next-wrap">
            <a href="" class="next-btn">Next ></a>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'signUpForm',
  data () {
    return {
      msg: 'SignUp Form Route'
    }
  }
}
</script>

<!-- Keep CSS limited to this component only -->
<style lang="sass" scoped>

// Import Variables
@import '../../assets/sass/variables'
.button
  height: 56px
  width: 184px
  cursor: pointer
  position: relative
  border-radius: 10px
  display: inline-block
.gradient
  background: #83a4d4 /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #83a4d4 , #b6fbff) /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #83a4d4 , #b6fbff) /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
.form-head 
  padding-top: 70px
  margin-bottom: 60px
.input
  top: 2px
  left: 0
  border: 0
  height: 57px
  color: $grey
  font-size: 1em
  background: $navy
  padding-left: 20px
  position: relative
  font-family: $Mont
  width: calc(100% - 4px)
.form-inner
  .half-input
    width: 190px
    display: inline-block
    &:first-child
      margin-right: 28px
  .input-wrap
    margin-bottom: 30px
    &:last-child
      margin-bottom: 35px
  .btn-wraps
    margin-top: 0
    margin-bottom: 0
  #next-wrap
    width: 150px
    height: 46px
    float: right
    @extend .button
    @extend .gradient
    text-align: center
    border-radius: 15px
    margin-top: 0
    a
      top: 2px
      left: 2px
      border: 0
      cursor: pointer
      border-radius: 15px
      width: calc(100% - 4px)
      height: calc(100% - 4px)
      background: $navy
      position: absolute
      display: inline-block
      font-family: $Mont
      color: $grey
      font-size: 0.82em
      padding-top: 11px
      text-decoration: none
      letter-spacing: 0.5px
      text-transform: uppercase
</style>