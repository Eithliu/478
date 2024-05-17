<template>
  <div class="banner">
    <button @click="store.goToHomepage">Retour</button>
  </div>
  <h1>{{ displaySentence }}</h1>
  <CountdownComponent />
  <div class="circle-animation"></div>
</template>

<script setup>
import { ref, computed } from'vue';
import { breathStore } from '../store';
import CountdownComponent from "./CountdownComponent.vue";

const store = breathStore();

const sentence = ref('');
const displaySentence = computed(() => {
    return sentence.value = 'On inspire...';
});
</script>

<style scoped>
.banner {
    display: flex;

}
.circle-animation {
    margin: 20% auto;
    width: 100px;
    height: 100px;
    border: solid 1px #6694ef;
    border-radius: 50%;
    animation-direction: alternate;
	animation-name: breathe;
	animation-duration: 4s;
	animation-iteration-count : infinite;
	animation-timing-function: ease-in-out;
}
@keyframes breathe {
	0%  { transform: scale(0.5); }
	100% { transform: scale(1); }
}
</style>
