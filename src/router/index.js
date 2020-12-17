import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/uthyrning",
    name: "uthyrning",
    component: () => import("@/views/Uthyrning.vue"),
    },
    {
    path: "/contact",
    name: "contact",
    component: () => import("@/views/Contact.vue"),
    },
      {
    path: "/info",
    name: "info",
    component: () => import("@/views/Info.vue"),
    },
        {
    path: "/infomaklare",
    name: "infomaklare",
    component: () => import("@/views/Infomaklare.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
