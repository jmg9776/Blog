import {createRouter, createWebHistory} from 'vue-router';
import Home from '@/features/home/Home.vue';
import Board from "@/features/board/Board.vue";
import {nextTick} from "vue";
import Post from "@/features/post/Post.vue";

const routes = [
    {path: '/', component: Home},
    {path: '/portfolio', component: Home},
    {path: '/board/:boardName', component: Board},
    {path: '/post/:postNum', component: Post},
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
                    if (to.path === '/') {
                        resolve({
                            top: 0,
                            behavior: 'smooth'
                        });
                    }
                    if (to.path === '/portfolio') {
                        const scrollHeight = document.documentElement.scrollHeight;
                        resolve({
                            top: scrollHeight,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        }
    },
});


export default router;
