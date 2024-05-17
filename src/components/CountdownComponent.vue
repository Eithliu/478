<template>
    <p v-if="countdown > 0" class="timer">{{ countdown }}</p>
</template>


<script setup>
import { ref, onMounted } from 'vue';

const countdown = ref(4);

const startCountdown = () => {
    const timer = setInterval(() => {
    countdown.value--;
    if (countdown.value === 0) {
        clearInterval(timer);
    }
}, 1000);

  onMounted(() => {
      startCountdown();
  })
}

</script>
