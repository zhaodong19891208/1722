import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/homepage/index'
import City from '@/city/city'
import Details from '@/details/details'
import List from '@/list/list'
import Indent from '@/indent/indent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }, {
      path: '/city',
      name: 'City',
      component: City
    }, {
      path: '/details',
      name: 'Details',
      component: Details
    }, {
      path: '/list',
      name: 'List',
      component: List
    }, {
      path: '/indent',
      name: 'Indent',
      component: Indent
    }
  ]
})
