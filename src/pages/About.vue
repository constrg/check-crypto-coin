<script setup>
import ScrollToTopButton from '../components/ScrollToTopButton.vue';
</script>
<template>
    <div class="about">
        <div class="about-container container">
            <h1 class="about-title">About Check Crypto Coin</h1>
            <p class="about-desc">
                Check Crypto Coin is a powerful, easy-to-use tool designed to keep you updated with the latest prices of your favorite cryptocurrencies. Whether you're a seasoned trader, an investor, or simply curious about the market, Check Crypto Coin provides accurate, real-time data to help you stay informed and make better decisions.
            </p>
            <p class="developer">
                Developer: Ricardo L. Garcia
            </p>
            <p class="api-source">
                API Source: <a href="https://www.coingecko.com/en/api">https://www.coingecko.com/en/api</a>
            </p>
            <button class="show-all-coins-button"><RouterLink :to="{name: 'ShowAllCoins'}">Show All Coins</RouterLink></button>
        </div>
    </div>
    <ScrollToTopButton />
</template>

<style>
.about {
    min-height: 100vh;
    padding-block: 20px 80px;
}

.about .about-container
{
    text-align: center;
}

.about .about-container .about-title 
{ 
    font-size: 6rem;
    margin-bottom: 20px;
    color: rgb(var(--clr-accent));
    background: linear-gradient(to right, rgb(var(--clr-accent)), rgb(var(--clr-light)));
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
}

.about .about-container .about-desc
{
    color: rgb(var(--clr-gray));
    margin-bottom: 20px;
}

.about .about-container .developer
{
    color: rgb(var(--clr-accent));
    margin-bottom: 10px;
}

.about .about-container .api-source 
{
    color: rgb(var(--clr-accent));
    margin-bottom: 40px;
}

.about .about-container .show-all-coins-button
{
    background-color: rgb(var(--clr-accent));
    color: rgb(var(--clr-dark));
    padding: 10px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    font-weight: var(--fw-medium);
    margin-bottom: 20px;

}

</style>