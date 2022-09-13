import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const Home = () => import("@/views/Home/index.vue");
const About = () => import("@/views/About/index.vue");
const Candidate = () => import("@/views/Candidate/index.vue");
const CandidateList = () => import("@/views/CandidateList/index.vue");

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
    path: "/pessoa-candidata/:year/:locale/:role/:keyCandidate",
    name: "Candidate",
    component: Candidate,
  },
  {
    path: "/candidaturas/:year/:locale/:role",
    name: "CandidateList",
    component: CandidateList,
  },
  {
    path: "/:pathMath(.*)*",
    redirect: { name: "Home" },
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    else {
      return { top: 0 }
    }
  },
});

export default router;
