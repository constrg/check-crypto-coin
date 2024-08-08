<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const navActive = ref(false);

const scrollHandler = () => {
    navActive.value = window.scrollY > 0;
}

onMounted(() => {
    window.addEventListener('scroll', scrollHandler);
});


onUnmounted(() => {
    window.removeEventListener('scroll', scrollHandler);
});
</script>

<template>
    <nav :class="['nav', [navActive ? 'nav-active' : '']]">
        <div class="nav-container container">
            <RouterLink class="nav-logo" :to="{name: 'Home'}">CCC&#10003;</RouterLink>
            <ul class="nav-list">
                <RouterLink class="nav-item" :to="{name: 'Home'}">Home</RouterLink>
                <RouterLink class="nav-item" :to="{name: 'About'}">About</RouterLink>
            </ul>
        </div>
    </nav>
</template>

<style scoped>
.nav 
{
    position: sticky;
    top: 0;
    width: 100%;
    transition: all 0.3s ease;
    padding-block: 40px;
}

.nav.nav-active 
{
    background-color: rgb(var(--clr-accent), 0.1);
    border-bottom: 1px solid rgb(var(--clr-accent), 0.3);
    padding-block: 10px;
    backdrop-filter: blur(7.3px);
    -webkit-backdrop-filter: blur(7.3px);
    z-index: 999;
}

.nav .nav-container 
{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
}

.nav .nav-container .nav-logo
{
    font-size: 2rem;
    color: rgb(var(--clr-accent));
    font-weight: var(--fw-bold);
}

.nav .nav-container .nav-list
{
    display: flex;
    align-items: center;
    gap: 30px;
    color: rgb(var(--clr-light));
}

.nav .nav-container .nav-list .nav-item
{
    cursor: pointer;
}

.nav .nav-container .nav-list .nav-item:hover 
{
    color: rgb(var(--clr-accent));
}

</style>