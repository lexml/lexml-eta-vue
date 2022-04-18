import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

import "./assets/js/lexml-eta/index.min.js";

const app = createApp(App);
app.use(createPinia()).use(router);
app.mount("#app");
