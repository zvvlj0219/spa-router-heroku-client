import Vue from 'vue'
import Router from 'vue-router'
import dashboard from './components/dashboard'
import weekly from './components/weekly'
import monthly from './components/monthly'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes:[
    {
      path:'/dashboard',
      name:'dashboard',
      component:dashboard
    },
    {
      path:'/weekly',
      name:'weekly',
      component:weekly
    },
    {
      path:'/monthly',
      name:'monthly',
      component:monthly
    },
    {
      path:'*',
      redirect:'/dashboard'
    }
  ]
})


