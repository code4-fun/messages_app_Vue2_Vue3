import { createRouter, createWebHistory } from 'vue-router'
import Main from "@/pages/Main";
import PostsPage from "@/pages/PostsPage";
import About from "@/pages/About";
import Post from "@/pages/Post";
import PostsPageWithStore from "@/pages/PostsPageWithStore";
import PostsPageCompositionApi from "@/pages/PostsPageCompositionApi";

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/posts',
    component: PostsPage
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/posts/:id',
    component: Post
  },
  {
    path: '/store',
    component: PostsPageWithStore
  },
  {
    path: '/composition',
    component: PostsPageCompositionApi
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
