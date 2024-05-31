<script setup>
import BreathPage from "./components/BreathPage.vue";
import { breathStore } from './store.js';
import { ref } from 'vue';

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
      <option v-for="i of 20">{{ i }} {{ i === 1 ? 'minute' : 'minutes' }}</option>
    </select>
    <button :class="sessionDurationInput ? '': 'unavailable'" @click="goToBreathPage">Démarrer la session de respiration</button>
  </div>
  <BreathPage v-if="store.currentPage === 'breath'" :sessionDuration="sessionDurationInput" />
</template>

<style scoped>
button {
  width: 50%;
  margin: auto;
}

#session {
  width: 50%;
  margin: 1rem auto;
}

option {
  padding: 1rem;
}

.unavailable {
  cursor: not-allowed;
}
</style>
