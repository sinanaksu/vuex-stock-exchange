import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Chart from "../views/Chart.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
  path: '/symbol/:symbol',
  name: 'Symbol Price Chart',
  component: Chart },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
