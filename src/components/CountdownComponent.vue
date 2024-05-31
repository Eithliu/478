<template>
  <p class="texts">{{ sentenceDisplayer }}</p>
  <p class="texts">{{ countdown }}</p>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const duration = [4, 7, 8];
const sentences = [
   "On inspire...",
   "On bloque sa respiration...",
   "Et on expire..."
];
let currentIndex = 0;
const countdown = ref(duration[currentIndex]);
const sentenceDisplayer = ref(sentences[currentIndex]);
let timer;

(function startCountdown() {
  timer = setInterval(() => {
    countdown.value--;
    if (countdown.value === -1) {
      currentIndex = (currentIndex + 1) % duration.length;
      countdown.value = duration[currentIndex];
      sentenceDisplayer.value = sentences[currentIndex];
    }
  }, 1000);
})();

onUnmounted(() => {
  clearInterval(timer);
})

</script>

<style scoped>
.texts {
  display:flex;
  justify-content: center;
  font-weight:bold;
  font-size: 2rem;
}
</style>
