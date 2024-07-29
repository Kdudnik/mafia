import { createRouter, createWebHistory } from "vue-router";
import HeroView from "../views/HeroView.vue";

const routes = [
  { path: "/", name: "hero", component: HeroView },
  {
    path: "/docs",
    name: "docs",
    component: () => import("../views/DocsView.vue"),
    children: [
      {
        path: "/docs/rules",
        name: "docs.rules",
        component: () => import("../views/RulesView.vue"),
      },
      {
        path: "/docs/stages",
        name: "docs.stages",
        component: () => import("../views/StagesView.vue"),
      },
      {
        path: "/docs/roles",
        name: "docs.roles",
        component: () => import("../views/RolesView.vue"),
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
