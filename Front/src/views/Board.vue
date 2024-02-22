<script setup lang="ts">
import {computed, onMounted, watch} from 'vue';
import {useRoute} from 'vue-router';
import {ApiService} from '@/api/board.ts'
import {ref} from "vue";
import noImage from "@/assets/noimage.png";
import Line from "@/assets/line.png";
import {PostList} from '@/interface/post.ts'
import router from "@/router";
import PageNation from "@/components/PageNation.vue";

const route = useRoute();
const boardName = computed(() => route.params.boardName as string);
const num = computed(() => route.query.num ? route.query.num as string : "0");

const apiService = new ApiService();

const data = ref<PostList | null>(null);
const max = ref(10);

function getPostList(boardName: string) {
  apiService.getBoardPostList(
      (response) => {
        data.value = response.data;
        max.value = data?.value?.totalPages ?? 0;
      },
      boardName,
      num.value
  )
}

onMounted(() => {
  getPostList(boardName.value)
})

watch(boardName, (newBoardName, _) => {
  getPostList(newBoardName)
})

watch(num, () => {
  getPostList(boardName.value)
})

const navigateToPage = (pageNum: number) => {
  router.push({path: `./${boardName.value}`, query: {num: pageNum.toString()}});
};

const surroundingPages = computed(() => {
  const currentPage = +num.value;
  const startPage = Math.max(currentPage - 2, 1);
  const endPage = Math.min(startPage + 4, max.value);
  const pages = [];

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return pages;
});

</script>

<template>
  <div class="wrapper">
    <div class="title-container">
      <h1 class="gradiant">{{ boardName }}</h1>
    </div>
    <img class="line" :src="Line" alt="">
    <div class="card" v-if="data != null && data.content.length > 0 && data">
      <router-link :to="'/post/' + value.id" class="card-board" v-for="value in data.content">
        <div class="image-container">
          <template v-if="value.primaryImage==null">
            <img :src="noImage" alt="">
          </template>
          <template v-else>
            <img :src="value.primaryImage" alt="">
          </template>
        </div>
        <p class="board-name">
          {{ value.boardName }}
        </p>
        <p class="title">
          {{ value.title }}
        </p>
        <p class="content">
          {{ value.content }}...
        </p>
        <p class="date">
          {{ value.createAt ? value.createAt.split("T")[0] : '' }}
        </p>
        <p class="views">
          조회수 : {{ value.view }}
        </p>
      </router-link>
    </div>
    <PageNation
        :surrounding-pages="surroundingPages"
        :max="max"
        :num="num"
        :navigate-to-page="navigateToPage">
    </PageNation>
  </div>
</template>

<style scoped>
.wrapper {
  max-width: 1200px;
  width: 100%;
  overflow: hidden;
}

.title-container {
  display: flex;
  justify-content: center;
}

.gradiant {
  margin-top: 95px;
  color: rgb(75, 71, 72);
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  background-clip: text;
  display: inline-block;
  animation: textGradient 2s linear infinite;
}

.line {
  margin-top: 35px;
  height: max-content;
  filter: sepia(80%) saturate(30%) brightness(50%) contrast(90%) hue-rotate(-30deg);
}

.board-name {
  margin-top: 20px;
  margin-left: 15px;
  border-radius: 10px;
  background: #302f2d;
  padding: 6px 10px;
  width: max-content;
  color: white
}

.card {

  margin-top: 55px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  text-align: left;
  justify-content: center;
  gap: 28px;
}

.card-board:hover {
  transform: scale(1.02);
}

.title, .content, .date, .views {
  margin-top: 10px;
  margin-left: 20px;
}

.title {
  color: #302f2d;
}

.content {
  width: 90%;
  white-space: normal;
  font-size: 14px;
  margin: 12px 20px;
  color: #888888;
}

.date {
  color: #403d39;
  font-size: 15px;
}

.views {
  color: #302f2d;
  font-size: 15px;
}

.card-board {
  border: solid #CCC5B9 1px;
  border-radius: 10px;
  overflow: hidden;
  max-width: 300px;
  min-width: 300px;
  height: 390px;
  transition: transform 0.2s ease;
}

img {
  height: 100%;
  display: block;
  margin: 0 auto;
}

.image-container {
  height: 200px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
