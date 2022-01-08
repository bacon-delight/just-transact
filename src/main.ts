import { createApp } from "vue";
import { store } from "./store";
import App from "./App.vue";

import router from "./router.js";

const app = createApp(App);
app.use(store);
app.use(router);
app.provide("$store", store);
app.mount("#app");
