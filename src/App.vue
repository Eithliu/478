<script setup>
import { computed, ref } from "vue";

import { breathStore } from "./store.js";
import BreathPage from "./components/BreathPage.vue";

import triangleIcon from "/triangle.svg";
import soundOnIcon from "/sound-on.svg";
import soundOffIcon from "/sound-off.svg";

const store = breathStore();
const { goToBreathPage } = store;

const sessionDurationInput = ref("");
const showExplanation = ref(false);
const sound = ref(true);

const toggleSound = computed(() => {
  sound.value = !sound.value;
});
</script>

<template>
  <div class="container" v-if="store.currentPage === 'home'">
    <h1>4 7 8</h1>
    <div class="take-time">
      <button @click="toggleSound" class="sound-toggle">
        <span class="sr-only">{{
          sound ? "Désactiver le son" : "Activer le son"
        }}</span>
        <img
          v-if="sound === true"
          :src="soundOnIcon"
          alt=""
          width="50"
          height="50"
        />
        <img
          v-if="sound === false"
          :src="soundOffIcon"
          alt=""
          width="50"
          height="50"
        />
      </button>
      <div class="up">
        <button class="arrow-icon" @click="showExplanation = !showExplanation">
          <img
            :src="triangleIcon"
            alt=""
            width="20"
            height="20"
            :class="showExplanation ? 'rotate' : 'unrotate'"
          />
        </button>
        <p class="take-a-moment">Prenez le temps...</p>
      </div>
      <p v-if="showExplanation" class="explanation">
        La méthode 4-7-8 a pour objectif de focaliser son attention sur une
        seule chose : sa respiration. Cet exercice permet à la fois de calmer le
        rythme cardiaque, mais aussi de se focaliser sur une unique chose,
        permettant ainsi des conditions idéales pour se détendre et tomber
        facilement dans le sommeil.
      </p>
    </div>
    <label for="session"
      >Choisissez la durée de votre session de respiration</label
    >
    <select
      name="session-duration"
      id="session"
      class="session"
      v-model="sessionDurationInput"
    >
      <option v-for="i of 20">
        {{ i }} {{ i === 1 ? "minute" : "minutes" }}
      </option>
    </select>
    <button
      :disabled="!sessionDurationInput"
      :class="sessionDurationInput ? '' : 'unavailable'"
      @click="goToBreathPage"
    >
      Démarrer la session de respiration
    </button>
  </div>
  <BreathPage
    v-if="store.currentPage === 'breath'"
    :sessionDuration="sessionDurationInput"
    :sound
  />
</template>

<style scoped>
.rotate {
  transition: transform 0.2s ease;
  transform: rotate(90deg);
}

.unrotate {
  transition: transform 0.2s ease;
  transform: rotate(0deg);
}

p {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

button {
  width: 50%;
  margin: auto;
}

.take-time {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.explanation {
  width: 50%;
  margin: auto;
  text-align: justify;
  font-size: 14px;
  padding-bottom: 15px;
}

.up {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-bottom: 1px solid #e8e8e8;
  margin: 0.8rem 0.5rem;
  padding-bottom: 8px;
}

.arrow-icon {
  background: transparent;
  border: none;
  cursor: pointer;
  box-shadow: none;
  margin: 0;
  padding: 0;
  width: 20px;
}

.session {
  padding: 0.8rem;
  width: 50%;
  margin: 1rem auto;
}

option {
  padding: 1rem;
}

.unavailable {
  cursor: not-allowed;
}

.sound-toggle {
  border: none;
  box-shadow: none;
  background: transparent;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
}

@media screen and (max-width: 768px) {
  .session,
  button,
  .explanation {
    width: 90%;
  }
}
</style>
