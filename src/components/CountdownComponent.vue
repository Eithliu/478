<template>
  <p class="timer">{{ countdown }}</p>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const duration = [4, 7, 8];
let currentIndex = 0;
const countdown = ref(duration[currentIndex]);
let timer;

const startCountdown = () => {
  timer = setInterval(() => {
    countdown.value--;
    if (countdown.value === -1) {
      currentIndex = (currentIndex + 1) % duration.length;
      countdown.value = duration[currentIndex];
    }
  }, 1000);

}
onMounted(() => {
  startCountdown();
})

</script>

<style scoped>
.timer {
  display: flex;
  justify-content: center;
  font-size: 2rem;
}
</style>
