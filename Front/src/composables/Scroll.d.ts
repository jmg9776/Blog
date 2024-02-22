import { Ref } from 'vue';

export interface ScrollState {
    scrollY: Ref<number>;
    scrollState: Ref<number>;
}

export function useScroll(): ScrollState;