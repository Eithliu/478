<script setup>
import BreathPage from "./components/BreathPage.vue";
import { breathStore } from './store';
import { onMounted } from "vue";

const store = breathStore();
const {
  currentPage,
  goToBreathPage
} = store;

onMounted(() => {
    className = 'start';
})
</script>

<template>
  <div class="container" v-if="currentPage === 'home'">
    <h1>4 7 8</h1>
    <p>Prenez le temps...</p>
    <button @click="goToBreathPage">Démarrer la session de respiration</button>
  </div>
  <BreathPage v-if="currentPage === 'breath'" :className="className"/>
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
</style>
