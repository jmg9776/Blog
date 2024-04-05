import {onBeforeUnmount, onMounted, ref, Ref} from 'vue';

export const useScroll = (): { scrollState: Ref<number>; scrollY: Ref<number> } => {
    const scrollY: Ref<number> = ref(0);
    const beforeY: Ref<number> = ref(0);
    const scrollState: Ref<number> = ref(0);

    const handleScroll = () => {
        beforeY.value = scrollY.value;
        scrollY.value = window.scrollY;
        scrollState.value = scrollY.value - beforeY.value;
    };

    onMounted(() => {
        window.addEventListener('scroll', handleScroll);
    });

    onBeforeUnmount(() => {
        window.removeEventListener('scroll', handleScroll);
    });

    return {
        scrollY, scrollState,
    };
};
