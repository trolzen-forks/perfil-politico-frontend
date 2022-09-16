import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "flowbite";

//pattern styles
import "animate.css";
import "@/assets/styles/main.css";
import "@/assets/styles/fonts.css";
import VueApexCharts from "vue3-apexcharts";

createApp(App).use(router).use(VueApexCharts).mount("#app");
