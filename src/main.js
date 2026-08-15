import { createApp } from "vue";
import { createPinia } from "pinia";
import { Vue3Mq } from "vue3-mq";
import "./styles.css";
import App from "./App.vue";

import i18next from 'i18next';
import I18NextVue from 'i18next-vue';
import frJson from './locales/fr.json';
import enJson from './locales/en.json';

i18next.init({
  lng: navigator.language,
  interpolation: {
    escapeValue: false
  },
  fallbackLng: 'fr',
  resources: {
    fr: { translation: frJson },
    en: { translation: enJson }
  }
});

const pinia = createPinia();
createApp(App)
  .use(pinia)
  .use(Vue3Mq, { preset: "devices" })
  .use(I18NextVue, { i18next })
  .mount("#app");
