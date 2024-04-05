<script setup lang="ts">
import background from '@/assets/background.png';
</script>

<template>
  <div class="content">
    <img :src="background" alt=""/>
  </div>
</template>

<style scoped>
.content {
  z-index: -1;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
