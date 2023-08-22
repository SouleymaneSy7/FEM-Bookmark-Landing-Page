import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Simple Bookmarking",
      component: () => import("@/views/SimpleBookMarking.vue"),
    },
    {
      path: "/Feature-2",
      name: "Speedy Searching ",
      component: () => import("@/views/SpeedySearching.vue"),
    },
    {
      path: "/Feature-3",
      name: "Easy Sharing",
      component: () => import("@/views/EasySharing.vue"),
    },
  ],
});

export default router;
