import { createRouter, createWebHistory } from 'vue-router'

import LoginView from "../views/LoginView.vue";
import AddArticle from "../views/AddArticle.vue";
import ArticleList from "../views/ArticleList.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/login",
      component:LoginView,
    },{
      path:"/add",
      component:AddArticle,
    },{
      path:"/list",
      component:ArticleList,
    }
  ]
})

export default router
