import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "flowbite";

//pattern styles
import "animate.css";
import "@/assets/styles/main.css";
import "@/assets/styles/fonts.css";

import VueApexCharts from "vue3-apexcharts";
import VueGtag from "vue-gtag";

createApp(App).use(router).use(VueApexCharts).use(VueGtag, {config: {id: 'G-W3TYTKSHVG'}}, router).mount("#app");
