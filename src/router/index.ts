import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeComponent.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/AboutUs.vue"),
    },
    {
      path: "/news",
      name: "Latest News",
      component: () => import("@/views/LatestNews.vue"),
    },
    {
      path: "/team",
      name: "Team",
      component: () => import("@/views/TeamComponent.vue"),
    },
    {
      path: "/join-club",
      name: "Join Us",
      component: () => import("@/views/JoinUs.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("@/views/ContactUs.vue"),
    },
  ],
});

export default router;
