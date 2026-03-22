<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const duration = [4, 7, 8];
const sentences = [
  "On inspire...",
  "On bloque sa respiration...",
  "Et on expire...",
];
let currentIndex = 0;
const countdown = ref(duration[currentIndex]);
const sentenceDisplayer = ref(sentences[currentIndex]);
let timer;

function startCountdown() {
  timer = setInterval(() => {
    countdown.value--;
    if (countdown.value === 0) {
      currentIndex = (currentIndex + 1) % duration.length;
      countdown.value = duration[currentIndex];
      sentenceDisplayer.value = sentences[currentIndex];
    }
  }, 1000);
}

onMounted(() => {
  startCountdown();
});

onUnmounted(() => {
  clearInterval(timer);
});
</script>

<template>
  <p class="texts">{{ sentenceDisplayer }}</p>
  <p class="texts">{{ countdown }}</p>
</template>

<style scoped>
.texts {
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 1.8rem;
  text-align: center;
}
</style>
