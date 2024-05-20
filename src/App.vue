<script setup>
import BreathPage from "./components/BreathPage.vue";
import { breathStore } from './store.js';

const store = breathStore();
const {
  goToBreathPage
} = store;
</script>

<template>
  <div class="container" v-if="store.currentPage === 'home'">
    <h1>4 7 8</h1>
    <p>Prenez le temps...</p>
    <button @click="goToBreathPage">Démarrer la session de respiration</button>
  </div>
  <BreathPage v-if="store.currentPage === 'breath'" />
</template>

<style scoped>
.logo.vite:hover {
  filter: drop-shadow(0 0 2em #747bff);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #249b73);
}
button {
  width: 50%;
  margin: auto;
}
.btn-duration {
  display: flex;
  gap: 10px;
  margin: 0 10px 20px;
}
</style>
