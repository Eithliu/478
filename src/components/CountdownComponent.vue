<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import i18n from 'i18next';

const duration = [4, 7, 8];
const sentences = [
  i18n.t('breathIn'),
  i18n.t('block'),
  i18n.t('breathOut'),
];
const currentIndex = ref(0);
const countdown = ref(duration[0]);
const sentenceDisplayer = computed(() => sentences[currentIndex.value]);
const timer = ref();

function startCountdown() {
  timer.value = setInterval(() => {
    countdown.value -= 1;
    if (countdown.value === 0) {
      currentIndex.value = (currentIndex.value + 1) % duration.length;
      countdown.value = duration[currentIndex.value];
    }
  }, 1000);
}

onMounted(() => {
  startCountdown();
});

onUnmounted(() => {
  clearInterval(timer.value);
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
