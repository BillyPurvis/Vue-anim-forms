// Import components
import Home from './components/Home'
import appLoginForm from './components/userComponents/app-login-form'
import appSignUpForm from './components/userComponents/app-signup-form'
import appUserProfile from './components/userComponents/app-user-profile'
import appResetPassword from './components/userComponents/app-reset-password'

// export routes as object array
export default [
  { path: '/', component: Home, name: 'Home' },
  { path: '/login', component: appLoginForm, name: 'appLoginForm' },
  { path: '/sign-up', component: appSignUpForm, name: 'appSignUpForm' },
  { path: '/profile', component: appUserProfile, name: 'appUserProfile' },
  { path: '/forgotten-password', component: appResetPassword, name: 'appResetPassword' }
]

