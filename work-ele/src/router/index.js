import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Table from "../components/Table";
import UE from "../components/UE";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/table',
      component: Table
    },
    {
      path: '/myue',
      component: UE
    }
  ]
})
