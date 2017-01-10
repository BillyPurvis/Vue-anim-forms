<template v-cloak>
<div class="root-component-wrap">
  <div v-if="show" class="panel small-panel">
    <p>Are you sure?</p>
    <button @click="redirect">Yes</button>
    <button @click="toggleLeaveFormState">No</button>
  </div>
	<div id="login-form" class="card-cont">
    <div class="form-inner">
      <div class="form-head">
        <div @click="toggleLeaveFormState" class="cross-x">
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
        <h1 class="form-name">Login to My Account</h1>
      </div>
      <!-- Form -->
      <form action="">
        <div class="input-wrap">
          <label for="username">Username/Email</label>
          <input id="username" placeholder="Username" class="input" type="text" />
        </div>
        <div class="input-wrap">
          <label for="password">Username/Email</label>
          <input id="password" placeholder="Password" class="input gradient" type="password" />
          <a href="" id="password-reset">Forgotten password?</a>
        </div>
        <div class="btn-wraps">
          <div id="submit-wrap">
            <input id="submit" class="btn" type="submit" value="Log in"/>
          </div>
          <div id="sign-up-wrap">
            <router-link to="/sign-up">
            <button @click="" type="button" id="sign-up">Sign Up</button>
            </router-link>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'LoginForm',
  data () {
    return {
      msg: 'Login Form Route',
      show: false
    }
  },
  methods: {
    toggleLeaveFormState: function () {
      // Toggle show status
      this.show = !this.show
    },
    redirect: function () {
      /*
       * Attach to instance of router, then
       * push path into history obj and re-direct
      */
      this.$router.push('/')
    }
  }
}
</script>

<!-- Keep CSS limited to this component only -->
<style lang="sass" scoped>
  
</style>