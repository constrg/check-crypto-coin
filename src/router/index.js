import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import ShowAllCoins from '../pages/ShowAllCoins.vue';
import PageNotFound from '../pages/PageNotFound.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/ShowAllCoins',
            name: 'ShowAllCoins',
            component: ShowAllCoins
        },
        {
            path: '/About',
            name: 'About',
            component: About
        },
        {
            path: '/:PathMatch(.*)*',
            name: 'PageNotFound',
            component: PageNotFound
        }
    ]
});

export default router;