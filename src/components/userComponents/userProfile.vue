<template>
	<div id="user-draft-card" class="card-cont user-profile-card">
      <div class="user-picture-cont">
        <img src="" alt="" class="user-profile-avatar" />
      </div>
      <!-- Name/Location -->
      <div class="user-data">
        <h1 class="user-name">Billy Purvis</h1>
        <p class="user-location">London, UK</p>
        <div class="gradient-divider"></div>
        <p class="user-bio">I'm a front end developer, living in London. I work on an array of projects, from PHP, Javascript, GSAP and WordPress. </p>
        <div class="gradient-divider"></div>
        <div class="user-skills">html5, css3, gsap, Affinity Designer, Wordpress, Javascript, jQuery</div>
        <div class="btn-wraps">
            <div id="progress-btn-wrap">
              <a href="" class="progress-btn">Get Started</a>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'userProfile',
  data () {
    return {
      msg: 'User Profile Form Route'
    }
  }
}
</script>

<!-- Keep CSS limited to this component only -->
<style scoped>
  
</style>