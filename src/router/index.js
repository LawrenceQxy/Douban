import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/Index/index'
import Broadcast from '../pages/Broadcast/Broadcast'
import AudioBook from '../pages/AudioBook/AudioBook'
import Group from '../pages/Group/Group'
import Mine from '../pages/Mine/Mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Broadcast',
      name: 'Broadcast',
      component: Broadcast
    },
    {
      path: '/AudioBook',
      name: 'AudioBook',
      component: AudioBook
    },
    {
      path: '/Group',
      name: 'Group',
      component: Group
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/Index',
      redirect: '/'
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
