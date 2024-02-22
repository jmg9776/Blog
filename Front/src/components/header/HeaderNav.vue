<script setup lang="ts">
import { ref, computed } from 'vue';
import HamburgerMenu from "@/components/header/HamburgerMenu.vue";
import { useScroll } from "@/composables/Scroll";
import store from "@/store";

const { scrollY } = useScroll();
const viewportHeight = ref<number>(window.innerHeight);

const isScrolledBeyond100vh = computed(() => {
  return scrollY.value > viewportHeight.value - 130;
});

const props = defineProps({
  maxViewWidth: Boolean
});

window.addEventListener('resize', () => {
  viewportHeight.value = window.innerHeight;
});

function toggle() {
  store.dispatch('toggleHamButton');
}

</script>

<template>
  <div class="header-nav-container" :class="{'header-max-view-width':props.maxViewWidth, 'header-width':!props.maxViewWidth}" v-if="!maxViewWidth">
    <nav :class="{'scroll-down': isScrolledBeyond100vh }" @click="toggle">
      <div class="menu-button fx1"><HamburgerMenu/></div>
      <div class="menu-button fx10"></div>
      <div class="menu-button fx1"></div>
    </nav>
  </div>
</template>

<style scoped>

.header-nav-container {
  height: max-content;
  position: fixed;
  z-index: 2;
  display: flex;
  justify-content: center;
  justify-items: center;
}

.header-width {
  width: 100vw;
}

.header-max-view-width {
  width: calc(100vw - 255px);
  left: 255px;
}

nav {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: #CCC5B9;
  padding: 20px;
  transition: background 0.3s;
}

.menu-button {
  font-size: 16px;
  margin: auto;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.fx1 {
  flex: 1;
}

.fx10 {
  flex: 100;
}

.scroll-down {
  box-shadow: 1px 1px 7px rgba(218,219,211, 0.7);
  background: #252422;
  opacity: 0.9;
}

</style>
