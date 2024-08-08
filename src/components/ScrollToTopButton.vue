<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const scrollTop = ref(false);
const scrollTopHandler = () => {
    scrollTop.value = window.scrollY > 400;
}

onMounted(() => {
    window.addEventListener('scroll', scrollTopHandler);
});


onUnmounted(() => {
    window.removeEventListener('scroll', scrollTopHandler);
});

const scrollTopButtonHandler = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
</script>

<template>
    <button :class="['scroll-top', [scrollTop ? 'scroll-top-active' : '']]" @click="scrollTopButtonHandler">
        Top
    </button>
</template>

<style scoped>
.scroll-top
{
    position: fixed;
    right: 20px;
    bottom: 0;
    padding: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transform: translateY(100%);
    transition-duration: 0.3s;
}

.scroll-top.scroll-top-active 
{
    bottom: 20px;
    transform: translateY(0%);
}
</style>