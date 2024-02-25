import {createRouter, createWebHistory} from 'vue-router';
import Home from '@/features/home/Home.vue';
import Board from "@/features/board/Board.vue";
import {nextTick} from "vue";

const routes = [
    {path: '/', component: Home},
    {path: '/board/:boardName', component: Board}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, _, savedPosition) {
        if (savedPosition) {
            return { ...savedPosition, behavior: 'smooth' };
        } else {
            return new Promise((resolve) => {
                nextTick(() => {
                    let scrollPosition = 0;
                    if (to.path !== '/') {
                        scrollPosition = window.innerHeight;
                    }
                    resolve({
                        top: scrollPosition,
                        behavior: 'smooth'
                    });
                });
            });
        }
    },
});


export default router;
