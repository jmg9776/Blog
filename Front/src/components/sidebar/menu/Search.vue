<script setup lang="ts">
import SearchButton from '@/assets/searchbutton.png';
</script>

<template>
  <div style="position: relative;">
    <input type="text" class="search-bar" placeholder="Search me">
    <img :src="SearchButton" class="search-button" alt=""/>
  </div>

</template>

<style scoped>
.search-bar {
  display: block;
  padding-left: 19px;
  width: 213px;
  height: 36px;
  border-radius: 100px;
  background: #302f2d;
  border-style: none;
  margin: auto;
  color: #888888;
}

.search-button {
  position: absolute;
  top: 50%;
  right: 35px;
  transform: translateY(-50%);
}

.search-bar:focus {
  outline: solid #9966ff;
}

</style>