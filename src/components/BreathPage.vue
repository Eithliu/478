<template>
    <div class="banner">
        <button @click="store.goToHomepage">Retour</button>
    </div>
    <h1>On inspire ...</h1>
    <p v-if="countdown > 0" class="timer">{{ countdown }}</p>
    <div class="circle-animation">
    </div>
</template>

<script setup>
import { onMounted, ref, watch } from'vue';
import { breathStore } from '../store';

const store = breathStore();
const {
  currentPage,
  goToHomepage
} = store;

const sentence = ref('');
const displaySentence = () => {    
    sentence.value = 'On inspire...';

}
const props = defineProps({
    duration: {
        type: Number,
        required: true,
    }
});

const countdown = ref(props.duration);

const startCountdown = () => {
    const timer = setInterval(() => {
        countdown.value--;
        if (countdown.value === 0) {
          clearInterval(timer);
        }
      }, 1000);
};

onMounted(() => {
    startCountdown();
});

watch(() => props.duration, () => {
      countdown.value = props.duration;
      startCountdown();
    });

</script>


<style scoped>
.timer {
    display: flex;
    justify-content: center;
    font-size: 2rem;
}
.banner {
    display: flex;

}
.circle-animation {
    margin: 25% auto;
    width: 50px;
    height: 50px;
    border: solid 1px #6694ef;
    border-radius: 50%;
    animation-direction: alternate;
	animation-name: breathe;
	animation-duration: 4s;
	animation-iteration-count : infinite;
	animation-timing-function: ease-in-out;
}
@keyframes breathe {
	0%  { transform: scale(1); }
	100% { transform: scale(2); }
}
</style>