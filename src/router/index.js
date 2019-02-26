import Vue from 'vue'
import Router from 'vue-router'
import DefaultPage from '../layout/default';
import BlankPage from '../layout/blank';
import IndexPage from '@/page/Index'
import ChangeCityPage from '@/page/ChangeCityPage'
import Product from '@/page/Product'
import Login from '@/page/login'
import Register from '@/page/register'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'default',
      component: DefaultPage,
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'index',
          component: IndexPage
        },
        {
          path: '/changecity',
          name: 'changecity',
          component: ChangeCityPage
        },
        {
          path: '/s/:name',
          name: 'product',
          component: Product
        }

      ]
    },
    {
      path: '/blank',
      name: 'blank',
      component: BlankPage,
      children: [
        {
          path: '/login',
          name: 'login',
          component: Login
        },
        {
          path: '/register',
          name: 'register',
          component: Register
        }
      ]
    }
  ]
})
