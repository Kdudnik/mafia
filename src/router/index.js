import { createRouter, createWebHistory } from 'vue-router'
import Hero from '../views/Hero.vue'

const routes = [
    {path: '/', name: 'Hero', component: Hero},
    {
        path: '/docs/rules',
        name: 'Docs',
        component: ()=>import("../views/Docs.vue"),
        children: [
            {
                path: '/docs/rules',
                name: "Rules",
                component: ()=>import("../views/Rules.vue")
            },
            {
                path: '/docs/game',
                name: "Game",
                component: ()=>import("../views/Game.vue")
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: "active-page",
})

export default router