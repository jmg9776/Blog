<script setup lang="ts">

import profileBack from "@/assets/profileback.png";
import profileImg from "@/assets/profile.png";
import MenuDock from "@/features/nav/side/menu/dock/MenuDock.vue";
import TitleMenu from "@/features/nav/side/menu/title/TitleMenu.vue";
import {computed, onMounted, ref} from "vue";
import Search from "@/features/nav/side/menu/Search.vue";
import {ApiService} from "@/features/nav/side/SidebarService.ts"
import store from "@/store";

const data = ref<Board>({boardCategoryInfoResponseList: [], count: 0})
const apiService = new ApiService();

interface Board {
  count: number;
  boardCategoryInfoResponseList: any[];
}

onMounted(async () => {
  data.value = await apiService.getBardCategoryInfoAll();
});


const props = defineProps({
  maxViewWidth: Boolean
});

const hamButtonClick = computed(() => store.state.hamButtonClick);

</script>

<template>
  <div class="sidebar" :class="{ 'expanded': props.maxViewWidth, 'collapsed': !props.maxViewWidth&&!hamButtonClick }">
    <img :src="profileBack" class="profile-background">
    <div class="profile-image-container">
      <img :src="profileImg" alt="Profile Image" class="profile-image">
    </div>
    <div class="profile-info">
      <h1 class="profile-name">Jo MinGyun</h1>
      <h2 class="profile-role">BackEnd Developer</h2>
    </div>
    <menu-dock/>
    <search></search>
    <RouterLink to="/board/All" :key="data.count" class="content-link">CONTENT ({{ data.count }})</RouterLink>

    <div v-for="category in data.boardCategoryInfoResponseList" :key="category.categoryName">
      <title-menu :value="category"/>
    </div>
    <div class="iphone-ux"></div>
  </div>
</template>

<style scoped>
.iphone-ux {
  margin: 20px;
  height: 70px;
  background: none;
  width: 100%;
}

.sidebar {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  overflow: scroll;
  position: fixed;
  background-color: #252422;
  width: 255px;
  height: 100vh;
  transition: left 0.2s;
  z-index: 999;
  box-shadow: 1px 1px 7px rgba(0, 0, 0, 0.4);
  scrollbar-width: none;
  -ms-overflow-style: none;
  overflow-x: hidden;
}

.sidebar::-webkit-scrollbar {
  display: none;
}

.expanded {
  left: 0;
}


.collapsed {
  left: -255px;
}

.profile-background {
  opacity: 0.502;
  position: absolute;
  left: -452px;
  top: -196px;
  width: 862px;
  height: 426px;
  z-index: -1;
}


.profile-image-container {
  width: 91px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  overflow: hidden;
  margin: 41px auto 0;
}


.profile-image {
  width: 100%;
  height: 100%;
}

.profile-info {
  color: white;
  text-align: center;
  margin-top: 20px;
}

.profile-name {
  font-size: 17px;
}

.profile-role {
  font-size: 14px;
  margin-top: 10px;
  color: #CCC5B9;
}

.content-link {
  margin-left: 25px;
  margin-top: 39px;
  margin-bottom: 28px;
  line-height: 1.2;
  font-size: 16px;
  background: linear-gradient(to right, #9966ff, #de79fb);
  background-clip: text;
  color: transparent;
  display: inline-block;
  animation: textGradient 5s linear infinite;
  background-size: 300% 100%;
  font-weight: bold;
}

@keyframes textGradient {
  0%, 100% {
    background-position: 100% 0;
  }
  50% {
    background-position: 0 0;
  }
}

</style>
