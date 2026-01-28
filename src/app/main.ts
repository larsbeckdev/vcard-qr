import { createApp } from "vue";
import App from "./App.vue";
import { router } from "@/router/router.index";

import "@/app/app.css";
import { initTheme } from "@/app/theme/theme.init";

// Initial theme setup (before mount)
initTheme();

// Create and mount Vue app
createApp(App).use(router).mount("#app");
