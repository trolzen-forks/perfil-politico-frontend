import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "flowbite";

//pattern styles
import "@/assets/styles/main.css";
import "@/assets/styles/fonts.css";

createApp(App).use(router).mount("#app");
