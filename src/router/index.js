import { createRouter, createWebHistory } from 'vue-router'
import Hero from '../views/Hero.vue'

const routes = [
    {path: '/', name: 'Hero', component: Hero},
    {path: '/docs', name: 'Docs', component: ()=>import("../views/Docs.vue")}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: "active-page",
})

export default router