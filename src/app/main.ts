import { createApp } from "vue";
import App from "./App.vue";
import { router } from "@/router/router.index";

import "@/app/app.css";

import "@/app/theme/tokens";

createApp(App).use(router).mount("#app");
