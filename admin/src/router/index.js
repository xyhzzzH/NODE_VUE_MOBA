import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import CategoryEdit from '../views/category/CategoryEdit'
import CategoryList from '../views/category/CategoryList'
import ItemEdit from '../views/category/ItemEdit'
import ItemList from '../views/category/ItemList'
import HeroEdit from '../views/category/HeroEdit'
import HeroList from '../views/category/HeroList'
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
      },
      {
        path: '/items/create',
        component: ItemEdit,
      },
      {
        path: '/items/list',
        component: ItemList,
      },
      {
        path: '/items/edit/:id',
        component: ItemEdit,
        props:true
      },
      {
        path: '/heros/create',
        component: HeroEdit,
      },
      {
        path: '/heros/list',
        component: HeroList,
      },
      {
        path: '/heros/edit/:id',
        component: HeroEdit,
        props:true
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
