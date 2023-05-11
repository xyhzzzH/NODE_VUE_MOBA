import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import CategoryEdit from '../views/category/CategoryEdit'
import CategoryList from '../views/category/CategoryList'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      {
        path: '/categories/create',
        component: CategoryEdit,
      },
      {
        path: '/categories/list',
        component: CategoryList,
      },
      {
        path: '/categories/edit/:id',
        component: CategoryEdit,
        props:true
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
