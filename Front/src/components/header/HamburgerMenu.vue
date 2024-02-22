<script setup lang="ts">

</script>

<template>
  <div class="hamburger-menu">
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
  </div>
</template>

<style scoped>
.hamburger-menu {
  cursor: pointer;
  height: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.hamburger-menu .bar {
  height: 2px;
  width: 20px;
  background-color: #CCC5B9;
}
</style>