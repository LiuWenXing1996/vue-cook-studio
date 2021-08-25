import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('../views/Home.vue'),
        },
        {
            path: '/vsc',
            name: 'Vsc',
            component: () => import('../views/Vsc.vue'),
        },
        {
            path: '/win',
            name: 'Win',
            component: () => import('../views/Win.vue'),
        },
    ]
})

export default router