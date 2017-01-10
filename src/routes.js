// Import components
import Home from './components/Home'
import LoginForm from './components/userComponents/LoginForm'
import SignUpForm from './components/userComponents/SignUpForm'
import userProfile from './components/userComponents/userProfile'
import passwordForgotten from './components/userComponents/passwordForgotten'

// export routes as object array
export default [
  { path: '/', component: Home, name: 'Home' },
  { path: '/login', component: LoginForm, name: 'LoginForm' },
  { path: '/sign-up', component: SignUpForm, name: 'SignUpForm' },
  { path: '/profile', component: userProfile, name: 'userProfile' },
  { path: '/forgotten-password', component: passwordForgotten, name: 'passwordForgotten' }
]

