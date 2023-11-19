import { createRouter, createWebHashHistory } from 'vue-router'

import LoginView from "../views/LoginView.vue";
import AddArticle from "../views/AddArticle.vue";
import ArticleList from "../views/ArticleList.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/",
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
