import { createApp } from "vue";
import App from "./App.vue";
import VueApexCharts from "vue3-apexcharts";
import router from './router'

createApp(App).use(router).use(VueApexCharts).mount("#app");
