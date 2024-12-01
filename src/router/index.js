import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout/Layout.vue'
import { getToken } from '@/utils/auth'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        meta: { title: '仪表盘' }
      },
      {
        path: 'system/user',
        name: 'UserManage',
        component: () => import('@/views/system/user.vue'),
        meta: { title: '用户信息管理' }
      },
      {
        path: 'basic/device',
        name: 'DeviceManage',
        component: () => import('@/views/basic/device.vue'),
        meta: { title: '设备管理' }
      },
      {
        path: 'basic/video',
        name: 'VideoManage',
        component: () => import('@/views/basic/video.vue'),
        meta: { title: '视频数据管理' }
      },
      {
        path: 'traffic/violation',
        name: 'ViolationManage',
        component: () => import('@/views/traffic/violation.vue'),
        meta: { title: '交通违法信息管理' }
      },
      {
        path: 'weather/manage',
        name: 'WeatherManage',
        component: () => import('@/views/weather/manage.vue'),
        meta: { title: '天气数据管理' }
      },
      {
        path: 'statistics/dashboard',
        name: 'StatisticsDashboard',
        component: () => import('@/views/statistics/dashboard.vue'),
        meta: { title: '驾驶舱页面' }
      },
      {
        path: 'statistics/manage',
        name: 'ReportManage',
        component: () => import('@/views/statistics/manage.vue'),
        meta: { title: '报告管理' }
      },
      {
        path: 'notification/send',
        name: 'NotificationSend',
        component: () => import('@/views/notification/send.vue'),
        meta: { title: '发送通知' }
      },
      {
        path: 'notification/manage',
        name: 'NotificationManage',
        component: () => import('@/views/notification/manage.vue'),
        meta: { title: '通知管理' }
      },
      {
        path: 'feedback',
        name: 'FeedbackManage',
        component: () => import('@/views/feedback/index.vue'),
        meta: { title: '反馈信息管理' }
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue')
  }
]

const router = new VueRouter({
  routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
  const token = getToken()
  
  if (to.path === '/login') {
    if (token) {
      next('/')
    } else {
      next()
    }
  } else {
    if (token) {
      next()
    } else {
      next('/login')
    }
  }
})

export default router 