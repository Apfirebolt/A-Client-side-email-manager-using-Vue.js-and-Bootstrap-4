import { createRouter, createWebHashHistory } from 'vue-router';
import Dashboard from './components/Dashboard.vue';

const routes = [
    {
        path: '/',
        name: 'dashboard',
        component: Dashboard,
    },
    {
        path: '/sent',
        name: 'dashboard',
        component: () => import('./pages/Sent.vue'),
    },
    {
        path: '/important',
        name: 'important',
        component: () => import('./pages/Important.vue'),
    },
    {
        path: '/inbox',
        name: 'inbox',
        component: () => import('./pages/Inbox.vue'),
    },
    {
        path: '/compose',
        name: 'compose',
        component: () => import('./pages/Compose.vue'),
    },
    {
        path: '/trash',
        name: 'trash',
        component: () => import('./pages/Trash.vue'),
    },
    {
        path: '/empty',
        name: 'empty',
        component: () => import('./components/EmptyPage.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
