import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/sobre",
    name: "About",
    component: About,
  },
  {
    path: "/listagem-candidaturas",
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
