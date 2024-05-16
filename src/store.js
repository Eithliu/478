import { defineStore } from 'pinia';
import { ref } from 'vue';

export const breathStore = defineStore('breathStore', () => {
    const currentPage = ref('home');
    
    function goToBreathPage() {
        currentPage.value = 'breath';
    }

    function goToHomepage() {
        currentPage.value = 'home';
    }

    return {
        currentPage,
        goToBreathPage,
        goToHomepage,
    }
});