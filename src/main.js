import { createApp } from "vue";
import { createPinia } from "pinia";
import { Vue3Mq } from "vue3-mq";
import "./styles.css";
import App from "./App.vue";

const pinia = createPinia();
createApp(App).use(pinia).use(Vue3Mq, { preset: "devices" }).mount("#app");
