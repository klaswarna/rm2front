import Vue from 'vue'
import Router from 'vue-router'
//import VueNativeSock from 'vue-native-websocket'
import Start from '@/components/Start'
import Om from '@/components/Om'
import Signin from '@/components/Signin'
import Login from '@/components/Login'
import Main from '@/components/Main'
import AlreadyExists from '@/components/AlreadyExists'
import NoSuchUser from '@/components/NoSuchUser'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'Start',
        component: Start,
    },
    {
        path: '/om',
        name: 'Om',
        component: Om,
        meta: {title: "Sune"}
    },
    {
        path: '/signin',
        name: 'Signin',
        component: Signin
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/main',
        name: 'Main',
        component: Main
    },
    {
        path: '/alreadyexists',
        name: 'AlreadyExists',
        component: AlreadyExists
    },
    {
        path: '/nosuchuser',
        name: 'NoSuchUser',
        component: NoSuchUser
    }

  ]
})
