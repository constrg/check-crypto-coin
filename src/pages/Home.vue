<script setup>
import { ref, onMounted } from 'vue';
import GemImg from '../assets/image/gem-img.png';
import { RouterLink } from 'vue-router'
import CryptoCoinTable from '../components/CryptoCoinTable.vue';
import ScrollToTopButton from '../components/ScrollToTopButton.vue';
import axios from 'axios';

const coins = ref([]);

const api_url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd';

onMounted(async () => {
    try {
        const res = await axios.get(api_url);
        coins.value = res.data.slice(0, 10);
    } catch (error) {
        console.log('Error fetching data', error);
    } 
});
</script>

<template>
    <div class="home">
        <div class="home-container container">
            <div class="hero">
                <h1 class="hero-title">Check Crypto Coin</h1>
                <h2 class="hero-sub-title">Your Real-Time Cryptocurrency Price Tracker</h2>
                <img class="gem-img" :src="GemImg" alt="gem-img">
            </div>
            <CryptoCoinTable :coins="coins" />
            <button class="show-all-coins-button"><RouterLink :to="{name: 'ShowAllCoins'}">Show All Coins</RouterLink></button>
        </div>
    </div>
    <ScrollToTopButton />
</template>

<style scoped>

.home 
{
    min-height: 100vh;
    padding-block: 40px 80px;
}

.home .home-container .hero 
{
    color: rgb(var(--clr-light));
    text-align: center;
    position: relative;
}

.home .home-container .hero .hero-title
{
    font-size: 8rem;
    margin-bottom: 10px;
    color: rgb(var(--clr-accent));
    background: linear-gradient(to right, rgb(var(--clr-accent)), rgb(var(--clr-light)));
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
}

.home .home-container .hero .hero-sub-title
{
    margin-bottom: 20px;
    color: rgb(var(--clr-warning));
}

.home .home-container .hero .gem-img 
{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    transform: rotate(20deg);
    width: 100px;
    opacity: 0.8;
    animation: float 20s infinite;
    filter: drop-shadow(15px 10px 10px rgb(var(--clr-dark)));
}

@keyframes float {
    0%, 100% {
        transform: translateY(20px) rotate(20deg);
    }
    50% {
        transform: translateY(-50px) rotate(-10deg);
    }
}
.home .home-container .hero .hero-p
{
    margin-bottom: 20px;
    color: rgb(var(--clr-gray));
}

.home .home-container .show-all-coins-button
{
    background-color: rgb(var(--clr-accent));
    color: rgb(var(--clr-dark));
    padding: 10px;
    margin: 20px auto;
    display: flex;
    justify-content: center;
    font-weight: var(--fw-medium);

}

@media (max-width: 834px)
{
    .home .home-container .hero .hero-title
    {
        font-size: 6rem;
    }
}

</style>