import { createRouter, createWebHistory } from 'vue-router'

import LoginView from "../views/LoginView.vue";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/login",
      component:LoginView,
    },{
      path:"/",
      component:HomeView,
    }
  ]
})

export default router
