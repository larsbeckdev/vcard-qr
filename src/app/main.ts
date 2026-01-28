import { createApp } from "vue";
import App from "./App.vue";
import { router } from "@/router/router.index";

import "@/app/app.css";

createApp(App).use(router).mount("#app");
