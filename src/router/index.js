import { createRouter, createWebHistory } from "vue-router";
import Hero from "../views/Hero.vue";

const routes = [
  { path: "/", name: "Hero", component: Hero },
  {
    path: "/docs",
    name: "Docs",
    component: () => import("../views/Docs.vue"),
    children: [
      {
        path: "/docs/rules",
        name: "Rules",
        component: () => import("../views/Rules.vue"),
      },
      {
        path: "/docs/stages",
        name: "Stages",
        component: () => import("../views/Stages.vue"),
      },
      {
        path: "/docs/roles",
        name: "Roles",
        component: () => import("../views/Roles.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active-page",
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 160
      };
    }
  },
});

export default router;
