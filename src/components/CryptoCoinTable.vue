<script setup>
import { ref } from 'vue';
const props = defineProps({
    coins: {
        type: Array,
        required: true
    }
});
</script>

<template>

    <div class="table-wrapper">
        <table class="table">
            <thead class="thead">
                    <tr class="tr">
                        <th class="th">#</th>
                        <th class="th">Coin</th>
                        <th class="th">Current Price</th>
                        <th class="th">Price Change Percentage 24H</th>
                        <th class="th">Market Cap</th>
                    </tr>
            </thead>
            <tbody class="tbody">
                <tr class="tr" v-for="coin in props.coins" :key="coin.id" v-if="!loading">
                    <td class="td">{{ coin.market_cap_rank }}</td>
                    <td class="td coin-container">
                        <img class="coin-image" :src="coin.image" alt="coin-image">
                        <div class="coin-id-symbol">
                            <span class="coin-id">{{ coin.id  }}</span>
                            -
                            <span class="coin-symbol">{{ coin.symbol }}</span>
                        </div>
                    </td>
                    <td class="td">$ {{ coin.current_price }}</td>
                    <td :class="['td', [coin.price_change_percentage_24h>0 ? 'green' : 'red']]">$ {{ Math.floor(coin.price_change_percentage_24h*100)/100 }}</td>
                    <td class="td">$ {{ coin.market_cap }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<style scoped>
.table-wrapper 
{
    width: 100%;
    overflow: auto;
}

.table-wrapper .table
{
    width: 100%;
    text-align: left;
    border-radius: 5px;
    color: rgb(var(--clr-light));
    border-spacing: 0;
}

.table-wrapper .table .thead
{
    border-radius: 5px;
}
.table-wrapper .table .thead .th
{
    padding: 20px;
    border-top: 1px solid rgb(var(--clr-accent), 0.2);
    border-bottom: 1px solid rgb(var(--clr-accent), 0.2);
}

.table-wrapper .table .tbody .td
{
    padding: 20px;
    border-bottom: 1px solid rgb(var(--clr-accent), 0.2);
}

.table-wrapper .table .tbody .coin-container
{
    display: flex;
    align-items: center;
    column-gap: 5px;
}
.table-wrapper .table .tbody .coin-container .coin-image 
{
    width: 30px;
}

.table-wrapper .table .tbody .coin-container .coin-symbol
{
    text-transform: uppercase;
    color: rgb(var(--clr-gray));
}

.table-wrapper .table .tbody .green
{
    color: rgb(var(--clr-success));
}
.table-wrapper .table .tbody .red 
{
    color: rgb(var(--clr-danger));
}
</style>