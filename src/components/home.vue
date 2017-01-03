<template>
	<div class="panel">
		<h2>The Idea...</h2>
		<p>Long gone are the days of fiddly sign up forms, constant reloading of entire pages. Vue Animation Forms aims to create a simple and clean user journey. From sign up, to login to user creation.</p>
		<p>Making use of Vue, VueRouter and more, we can preview user profiles before they're stored, making it a breeze to perfect that user selfie upload...</p>
		<router-link  class="panel-login login-btn" to="login">Demo</router-link>
	</div>
</template>

<script>
	export default {
	  name: 'home',
	  data () {
	    return {
	    }
	  }
	}
</script>

<style lang="sass" scoped>
	.panel
		top: 50%
		left: 50%
		transform: translate(-50%, -50%);
		height: auto
		width: 100%
		padding: 30px
		max-width: 800px
		background: #fff
		border-radius: 7px
		position: absolute
		p 
			line-height: 1.5rem
			font-size: 1.05rem
</style>