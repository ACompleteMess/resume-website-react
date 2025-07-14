import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/experience",
      name: "experience",
      component: () => import("../views/ExperienceView.vue"),
    },
    {
      path: "/experience/:id",
      name: "experience-detail",
      component: () => import("../views/ExperienceDetailView.vue"),
    },
    {
      path: "/skills",
      name: "skills",
      component: () => import("../views/SkillsView.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/ContactView.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // Preserve scroll position when navigating
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
