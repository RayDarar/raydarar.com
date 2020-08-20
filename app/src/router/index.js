import Vue from "vue";
import VueRouter from "vue-router";
import NotFound from "@/components/NotFound";
import store from "@/store";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("@/components/Home"),
      meta: { index: 0, title: "TITLE_HOME" },
    },
    {
      path: "/about-me",
      component: () => import("@/components/About"),
      meta: { index: 1, title: "TITLE_ABOUT" },
    },
    {
      path: "/contacts",
      component: () => import("@/components/Contacts"),
      meta: { index: 2, title: "TITLE_CONTACTS" },
    },
    {
      path: "*",
      component: NotFound,
    },
  ],
});

router.beforeEach((to, _from, next) => {
  const { title } = to.meta;
  store.dispatch("updateTitle", title);
  
  next();
});

export default router;
