import { createRouter, createWebHistory } from 'vue-router'

import FrontendLayout from '@/layouts/FrontendLayout.vue'

import Home from '@/views/frontend/Home.vue'
import About from '@/views/frontend/About.vue'
import Contact from '@/views/frontend/Contact.vue'
import ForgotPassword from '@/views/frontend/ForgotPassword.vue'
import Login from '@/views/frontend/login.vue'
import Portfolio from '@/views/frontend/Portfolio.vue'
import Register from '@/views/frontend/Register.vue'
import Service from '@/views/frontend/Service.vue'
import Notfound from '@/views/frontend/Notfound.vue'

import BackendLayout from '@/layouts/BackendLayout.vue'

import Dashboard from '@/views/backend/Dashboard.vue'
import Product from '@/views/backend/Product.vue'

const routes = [
  {
    path: '/',
    component: FrontendLayout,
    children:[
      {
        path: '',
        name: 'Home',
        component: Home
      }
    ],
    meta: {
      title: 'หน้าหลัก',
      description: 'หน้าหลัก ระบบคงคลังสินค้า'
    }
  },
  {
    path: '/about',
    component: FrontendLayout,
    children:[
      {
        path: '',
        name: 'About',
        component: About
      }
    ],
    meta: {
      title: 'เกี่ยวกับเรา',
      description: 'รายละเอียดเกี่ยวกับเรา ระบบคงคลังสินค้า'
    }
  },
  {
    path: '/portfolio',
    component: FrontendLayout,
    children:[
      {
        path: '',
        name: 'Portfolio',
        component: Portfolio
      }
    ],
    meta: {
      title: 'ผลงาน',
      description: 'รายละเอียดผลงาน ระบบคงคลังสินค้า'
    }
  },
  {
    path: '/service',
    component: FrontendLayout,
    children:[
      {
        path: '',
        name: 'Service',
        component: Service
      }
    ],
    meta: {
      title: 'บริการของเรา',
      description: 'รายละเอียดบริการของเรา ระบบคงคลังสินค้า'
    }
  },
  {
    path: '/contact',
    component: FrontendLayout,
    children:[
      {
        path: '',
        name: 'Contact',
        component: Contact
      }
    ],
    meta: {
      title: 'ติดต่อเรา',
      description: 'รายละเอียดติดต่อเรา ระบบคงคลังสินค้า'
    }
  },
  {
    path: '/register',
    component: FrontendLayout,
    children:[
      {
        path: '',
        name: 'Register',
        component: Register
      }
    ],
    meta: {
      title: 'สมัครสมาชิกใหม่',
      description: 'รายละเอียดสมัครสมาชิกใหม่ ระบบคงคลังสินค้า'
    }
  },
  {
    path: '/login',
    component: FrontendLayout,
    children:[
      {
        path: '',
        name: 'Login',
        component: Login
      }
    ],
    meta: {
      title: 'เข้าสู่ระบบ',
      description: 'รายละเอียดเข้าสู่ระบบ ระบบคงคลังสินค้า'
    }
  },
  {
    path: '/forgotpassword',
    component: FrontendLayout,
    children:[
      {
        path: '',
        name: 'ForgotPassword',
        component: ForgotPassword
      }
    ],
    meta: {
      title: 'ลืมรหัสผ่าน',
      description: 'รายละเอียดลืมรหัสผ่าน ระบบคงคลังสินค้า'
    }
  },

  { // error 404 ไม่พบ page
    path: '/:catchAll(.*)',
    component: Notfound,
    meta: {
      title: '404 ไม่พบหน้านี้',
      description: 'รายละเอียด 404 ไม่พบหน้านี้ ระบบคงคลังสินค้า'
    }
  },

  {
    path: '/backend',
    component: BackendLayout,
    children:[
      {
        path: '',
        name: 'Dashboard',
        component: Dashboard,
        meta: {
          title: 'Dashboard'
        }
      },
      {
        path: 'dashboard',
        name: 'Dashboard2',
        component: Dashboard,
        meta: {
          title: 'Dashboard'
        }
      },
      {
        path: 'products',
        name: 'Product',
        component: Product,
        meta: {
          title: 'Product'
        }
      }
    ]
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: About
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
