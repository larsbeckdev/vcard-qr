import { createApp } from "vue";
import App from "./App.vue";
import "@/app/app.css";
import { initTheme } from "@/app/theme/theme.init";

// Initial Theme Load
initTheme();

// Create and mount Vue app
createApp(App).mount("#app");
