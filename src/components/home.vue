<template>
<div class="cont">
	<!-- Header -->
	<header class="header-bar">
		<router-link class="header-login login-btn" to="/login">Login</router-link>
		<h1 class="page-title">Vue Animated Forms</h1>
	</header>
	<div class="panel">
		<h2>The Idea...</h2>
		<p>Long gone are the days of fiddly sign up forms, constant reloading of entire pages. Vue Animation Forms aims to create a simple and clean user journey. From sign up, to login to user creation.</p>
		<p>Making use of Vue, VueRouter and more, we can preview user profiles before they're stored, making it a breeze to perfect that user selfie upload...</p>
		<router-link  class="panel-login login-btn" to="login">Demo</router-link>
	</div>
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
		display: inline-block;
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
	.panel
		top: 50%
		left: 50%
		transform: translate(-50%, -50%);
		height: auto
		width: 100%
		padding: 30px
		box-sizing: border-box
		max-width: 800px
		background: #fff
		border-radius: 7px
		position: absolute
		p 
			line-height: 1.5rem
			font-size: 1.05rem
</style>