<script setup>
import {ref, onMounted, onUnmounted, computed} from 'vue';
import CryptoCoinTable from '../components/CryptoCoinTable.vue';
import ScrollToTopButton from '../components/ScrollToTopButton.vue';
import axios from 'axios';

const coins = ref([]);
const search = ref('');

const api_url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd';

onMounted(async () => {
    try {
        const res = await axios.get(api_url);
        coins.value = res.data;
    } catch (error) {
        console.log('Error fetching data', error);
    }
});

const filteredCoins = computed(() => {
    return coins.value.filter(coin => coin.id.toLowerCase().includes(search.value.toLowerCase()));
});

const hasResults = computed(() => filteredCoins.value.length > 0);

</script>
<template>
    <div class="show-all-coins">
        <div class="show-all-coins-container container">
            <div class="search-container">
                <input class="search" v-model="search" type="text" placeholder="Search Coin by Coin Name...">
            </div>
            <CryptoCoinTable :coins="filteredCoins" v-if="hasResults" />
            <h1 class="no-coins-found" v-if="!hasResults">No Coins Found</h1>
        </div>
    </div>
    <ScrollToTopButton />
</template>

<style>
.show-all-coins
{
    min-height: 100vh;
    padding-block: 20px 80px;
}

.show-all-coins .show-all-coins-container .search
{
    padding: 15px;
    width: 100%;
}

.show-all-coins .show-all-coins-container .search:focus
{
    border: 1px solid rgb(var(--clr-accent));
}

.show-all-coins .show-all-coins-container .no-coins-found
{
    color: rgb(var(--clr-danger));
    margin-top: 20px;
}

</style>