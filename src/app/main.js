import { createApp } from "vue";
import App from "./App.vue";
import "@/app/app.css";

// Initial Theme Load
initTheme();

// Create and mount Vue app
createApp(App).mount("#app");
