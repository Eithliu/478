<script setup>
import BreathPage from "./components/BreathPage.vue";
import { breathStore } from './store.js';
import { ref, computed } from 'vue';

const store = breathStore();
const {
  goToBreathPage
} = store;

const sessionDurationInput = ref('');

</script>

<template>
  <div class="container" v-if="store.currentPage === 'home'">
    <h1>4 7 8</h1>
    <p>Prenez le temps...</p>
    <label for="session">Choisissez la durée de votre session de respiration</label>
    <select name="session-duration" id="session" v-model="sessionDurationInput">
      <option v-for="i of 20">{{ i }} minutes</option>
    </select>
    <button @click="goToBreathPage">Démarrer la session de respiration</button>
  </div>
  <BreathPage v-if="store.currentPage === 'breath'" :sessionDuration="sessionDurationInput" />
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

#session {
  width: 50%;
  margin: 1rem auto;
}
</style>
