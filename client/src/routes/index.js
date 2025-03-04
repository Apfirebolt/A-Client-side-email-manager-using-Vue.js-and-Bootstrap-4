import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'
import Cookie from 'js-cookie'

const authGuard = (to, from, next) => {
    const isAuthenticated = Cookie.get('user') ? true : false
    if (to.name !== 'Login' && to.name !== 'Register' && !isAuthenticated) {
        next({ name: 'Login' })
    } else {
        next()
    }
}

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login.vue')
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('../views/Register.vue')
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('../views/Dashboard.vue')
    },
    {
        path: '/compose',
        name: 'Compose',
        component: () => import('../views/Compose.vue')
    },
    {
        path: '/important',
        name: 'Important',
        component: () => import('../views/Important.vue')
    },
    {
        path: '/inbox',
        name: 'Inbox',
        component: () => import('../views/Inbox.vue')
    },
    {
        path: '/sent',
        name: 'Sent',
        component: () => import('../views/Sent.vue')
    },
    {
        path: '/trash',
        name: 'Trash',
        component: () => import('../views/Trash.vue')
    },
    {
        path: '/server-error',
        name: 'ServerError',
        component: () => import('../views/ServerError.vue')
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach(authGuard)

export default router