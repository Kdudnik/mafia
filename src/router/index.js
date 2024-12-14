import { createRouter, createWebHistory } from "vue-router";
import HeroView from "../views/HeroView.vue";
import { useAuth } from "../supabase/useAuth";
import { useUser } from "../stores/useUser";
import { useSession } from "../composables/useSession"

const { authGetUser } = useAuth()

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
  {
    path: "/stats",
    name: "stats",
    component: () => import("../views/StatsView.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: "/auth",
    name: "auth",
    component: () => import("../views/AuthPage.vue"),
    children: [
      {
        path: "/auth/signUp",
        name: "auth.signUp",
        component: () => import("../views/AuthSignUp.vue"),
      },
      {
        path: "/auth/signIn",
        name: "auth.signIn",
        component: () => import("../views/AuthSignIn.vue"),
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

router.beforeEach(async (to, from, next) => {
  const currentUser = await authGetUser()
  if (currentUser) {
    console.dir(currentUser)
    const { setCurrentUser } = useUser();
    setCurrentUser({
      authorized: true,
      id: currentUser.id,
      name: currentUser.user_metadata.name,
    });
  }
  else {
    const { clearStore } = useUser()
    clearStore()
  }

  if(to.meta.requiresAuth && !currentUser) {
    next("/auth/signIn")
  }
  else {
    next()
  }
})

const { checkExpiredSession } = useSession()

checkExpiredSession()

export default router;
