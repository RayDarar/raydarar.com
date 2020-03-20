import Vue from "vue";
import VueRouter from "vue-router";
import NotFound from "@/components/NotFound";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("@/components/Home"),
      meta: { index: 0 }
    },
    {
      path: "/about-me",
      component: () => import("@/components/About"),
      meta: { index: 1 }
    },
    {
      path: "/contacts",
      component: () => import("@/components/Contacts"),
      meta: { index: 4 }
    },
    {
      path: "*",
      component: NotFound
    }
  ]
});

export default router;
