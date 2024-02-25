import {createRouter, createWebHistory} from 'vue-router';
import Home from '@/features/home/Home.vue';
import Board from "@/features/board/Board.vue";

const routes = [
    {path: '/', component: Home},
    {path: '/board/:boardName', component: Board}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
