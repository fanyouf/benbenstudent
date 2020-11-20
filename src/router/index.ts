import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/home/home.vue'

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
        path: '/note/:id',
        name: 'note',
        component: () => import(/* webpackChunkName: "note" */ '../views/note/note.vue')
      },
      {
        path: '/task/:id',
        name: 'task',
        component: () => import(/* webpackChunkName: "task" */ '../views/task/task.vue')
      },
      {
        path: '/taskresult',
        name: 'taskresult',
        component: () => import(/* webpackChunkName: "taskresult" */ '../views/task/taskResult.vue')
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
            path: '/m/collectNote',
            component: () => import(/* webpackChunkName: "collectNote" */ '../views/my/collectNote.vue')
          },
          {
            path: '/m/skilltree',
            component: () => import(/* webpackChunkName: "error" */ '../views/my/skillTree.vue')
          },
          {
            path: '/m/collectTask',
            component: () => import(/* webpackChunkName: "collectTask" */ '../views/my/collectTask.vue')
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
