<template>
    <h1>Coucou !</h1>
    <div class="circle-animation" :class="start">
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const props = defineProps({
    className: {
        type: String,
        default: '',
    }
});
</script>


<style scoped>
.circle-animation {
    margin: auto;
    width: 50px;
    height: 50px;
    border: solid 1px #6694ef;
    border-radius: 50%;
}

.start {
    transform-origin: center;
    transform: scale(2);
    transition: transform 4s ease-in-out;
}
</style>