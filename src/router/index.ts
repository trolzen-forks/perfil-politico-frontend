import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/sobre",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/listagem-pleitos-2022",
    name: "Listagem de pessoas candidatas",
    // route level code-splitting
    // this generates a separate chunk (CandidateList.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "CandidateList" */ "../views/CandidateList.vue"
      ),
  },
  {
    path: "/pessoa-candidata",
    name: "Página sobre a pessoa candidata",
    // route level code-splitting
    // this generates a separate chunk (CandidateList.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "CandidateList" */ "../views/Candidate.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
