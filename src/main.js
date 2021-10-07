import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import axios from "axios";
import VueAOS from "@dcasia/vue-aos";
import "@dcasia/vue-aos/dist/vue-aos.css";

window.axios = require("axios");

createApp(App)
  .use(router)
  .use(VueAOS)
  .mount("#app");
