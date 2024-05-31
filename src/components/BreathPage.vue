<template>
  <div class="banner">
    <button @click="store.goToHomepage">Retour</button>
  </div>
  <p>La méthode 4-7-8 a pour objectif de focaliser son attention sur une seule chose : sa respiration. Cet exercice permet à la fois de calmer le rythme cardiaque, mais aussi de se focaliser sur une unique chose, permettant ainsi des conditions idéales pour se détendre et tomber facilement dans le sommeil.</p>
  <div class="countdown-animation" v-if="sessionInSeconds !== 0">
    <CountdownComponent :timer="timer" />
    <div class="circle-animation"></div>
  </div>
  <p v-if="sessionInSeconds !== 0">Durée de la session {{ prettyTime(sessionInSeconds) }}</p>
  <div class="end-session" v-if="sessionInSeconds === 0">
      <h2>Bravo !</h2>
      <p >{{ addConfettis }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from'vue';
import { breathStore } from '../store';
import CountdownComponent from './CountdownComponent.vue';
import JSConfetti from 'js-confetti'

const jsConfetti = new JSConfetti();

const addConfettis = computed(() => {
    jsConfetti.addConfetti();
})

const store = breathStore();
const timer = ref(0);
const {
    goToBreathPage
} = store;

const props = defineProps({
  sessionDuration: {
    type: String,
    required: true,
  }
})


let currentIndex = 1;
const sessionInSeconds = ref(0);
let duration = props.sessionDuration.split(' ')[0];
sessionInSeconds.value = parseInt(duration * 60);

function prettyTime(time) {
    const minutes = Math.floor(time / 60);
    const minutesString = minutes < 10 ? `0${minutes}` : minutes;
    const seconds = time % 60;
    const secondsString = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutesString}:${secondsString}`;
}

(function startSessionCountdown() {
    timer.value = setInterval(() => {
        sessionInSeconds.value--;
        if (sessionInSeconds.value === -1) {
            currentIndex = (currentIndex + 1) % sessionInSeconds.value.length;
            sessionInSeconds.value = sessionInSeconds.value[currentIndex];
        }
        if (sessionInSeconds.value === 0) {
            clearInterval(timer.value);
        }
    }, 1000);
})();

onUnmounted(() => {
    clearInterval(timer.value);

})
</script>

<style scoped>
.banner {
    display: flex;

}
p {
    display:flex;
    justify-content: center;
    margin: 1rem;
    text-align: center;
}
.end-session > h2 {
    text-align: center;
    font-size: 3rem;
}
.circle-animation {
    margin: 5% auto;
    width: 100px;
    height: 100px;
    border: solid 1px #6694ef;
    border-radius: 50%;
    animation-direction: alternate;
	animation-name: breathe;
	animation-duration: 21s;
	animation-iteration-count : infinite;
	animation-timing-function: ease-in-out;
}
@keyframes breathe {
	0%  { transform: scale(0.5); box-shadow: 0 0 30px #24c8db; }
	22.72% { transform: scale(1); box-shadow: 0 0 80px #24c8db; }
    40.9% { box-shadow: 0 0 40px #249b73; }
    59.09% { transform: scale(1); box-shadow: 0 0 80px #24c8db; }
    100% { transform: scale(0.5); box-shadow: 0 0 30px #24c8db; }
}
</style>
