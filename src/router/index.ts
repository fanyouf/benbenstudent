import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login.vue')
  },
  {
    path: '/',
    component: () => import(/* webpackChunkName: "layout" */ '../views/layout/layout.vue'),
    children: [
      {
        name: 'home',
        path: '',
        component: Home
      },
      {
        path: '/subject/:id',
        name: 'subject',
        component: () => import(/* webpackChunkName: "subject" */ '../views/subject/subject.vue')
      },
      {
        path: '/video/:id',
        name: 'video',
        component: () => import(/* webpackChunkName: "video" */ '../views/video/video.vue')
      },
      {
        path: '/course/:id',
        name: 'course',
        component: () => import(/* webpackChunkName: "course" */ '../views/course/course.vue')
      },
      {
        name: 'my',
        path: '/m',
        component: () => import(/* webpackChunkName: "my" */ '../views/my/my.vue'),
        children: [
          {
            path: '',
            redirect: '/m/process'
          },
          {
            path: '/m/profile',
            component: () => import(/* webpackChunkName: "profile" */ '../views/my/profile.vue')
          },
          {
            path: '/m/process',
            component: () => import(/* webpackChunkName: "process" */ '../views/my/process.vue')
          },
          {
            path: '/m/collect',
            component: () => import(/* webpackChunkName: "collect" */ '../views/my/collect.vue')
          },
          {
            path: '/m/error',
            component: () => import(/* webpackChunkName: "error" */ '../views/my/error.vue')
          }
        ]
      }
    ]
  },

  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
