import Vue from "vue";
import VueRouter from "vue-router";

const About = () => import("@/views/About");
const Layout = () => import("@/layout");
const Home = () => import("@/views/home");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
    component: Layout,
    children: [
      {
        path: "about",
        component: About,
      },
      {
        path: "home",
        component: Home,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
