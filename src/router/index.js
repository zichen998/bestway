import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Home from '@/views/Home'
import My from '@/views/My'
import Login from '@/views/login'
import register from '@/views/register'
import found from '@/views/found'
import articlePage from '@/views/article-page'
import comment from '@/views/comment'
import map from '@/views/map'
import translate from '@/views/translate'
import direction from '@/views/direction'
import searchResult from '@/views/searchResult'
import pchome from '@/views/pc'
import goWhere from '@/views/goWhere'
import loginPc from '@/views/login-pc'
import registerPc from '@/views/register-pc'
import searchResultPc from '@/views/searchResult-pc'
import commentPc from '@/views/comment-pc'
import newPassword from '@/views/new-password'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/my',
      name: 'my',
      component: My
    },
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/found',
      name: 'found',
      component: found
    },
    {
      path: '/articlePage',
      name: '/articlePage',
      component: articlePage
    },
    {
      path: '/comment',
      name: '/comment',
      component: comment
    },
    {
      path: '/translate',
      name: '/translate',
      component: translate
    },
    {
      path: '/map',
      name: '/map',
      component: map
    },
    {
      path: '/direction',
      name: '/direction',
      component: direction
    },
    {
      path: '/searchResult',
      name: '/searchResult',
      component: searchResult
    },
    {
      path: '/pchome',
      name: '/pchome',
      component: pchome
    },
    {
      path: '/goWhere',
      name: '/goWhere',
      component: goWhere
    },
    {
      path: '/register-pc',
      name: '/register-pc',
      component: registerPc
    },
    {
      path: '/login-pc',
      name: '/login-pc',
      component: loginPc
    },
    {
      path: '/searchResult-pc',
      name: '/searchResult-pc',
      component: searchResultPc
    },
    {
      path: '/comment-pc',
      name: '/comment-pc',
      component: commentPc
    },
    {
      path: '/new-password',
      name: 'newPassword',
      component: newPassword
    }
  ]
})
