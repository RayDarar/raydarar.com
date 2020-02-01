import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/Home";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/contacts",
      component: () => import("@/components/Contacts")
    },
    {
      path: "/about",
      component: () => import("@/components/About")
    },
    {
      path: "/projects",
      component: () => import("@/components/Projects")
    },
    {
      path: "/timelapse",
      component: () => import("@/components/Timelapse")
    }
  ]
});

export default router;
