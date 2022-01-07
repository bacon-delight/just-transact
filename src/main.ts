import { createApp } from "vue";
import { store } from "./store";
import App from "./App.vue";
import { createMetaManager } from "vue-meta";

const app = createApp(App);
app.use(store);
app.use(createMetaManager());
app.provide("$store", store);
app.mount("#app");
