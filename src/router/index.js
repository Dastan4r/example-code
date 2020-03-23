import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home";
import CreateTodo from "../views/CreateTodo";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        path: '/create',
        name: 'create',
        component: CreateTodo,
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
