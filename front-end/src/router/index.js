import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/Home";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home,
      meta: { index: 0 }
    },
    {
      path: "/about-me",
      component: () => import("@/components/About"),
      meta: { index: 1 }
    },
    {
      path: "/history",
      component: () => import("@/components/Timelapse"),
      meta: { index: 2 }
    },
    {
      path: "/projects",
      component: () => import("@/components/Projects"),
      meta: { index: 3 }
    },
    {
      path: "/contacts",
      component: () => import("@/components/Contacts"),
      meta: { index: 4 }
    }
  ]
});

export default router;
