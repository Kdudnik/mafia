import { createApp } from 'vue'
import './style.css'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Hero from './views/Hero.vue'
import Docs from './views/Docs.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'Hero', component: Hero},
        {path: '/docs', name: 'Docs', component: Docs}
    ],
})

createApp(App)
.use(router)
.mount('#app')
