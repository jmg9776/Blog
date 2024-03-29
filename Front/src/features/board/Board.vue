<script setup lang="ts">
import {computed, nextTick, onMounted, ref, watch} from 'vue';
import {useRoute} from 'vue-router';
import {BoardService} from '@/features/board/BoardService.ts'
import noImage from "@/assets/noimage.png";
import Line from "@/assets/line.png";
import {Board} from '@/features/board/Board.ts'
import router from "@/router";
import PageNation from "@/shared/components/Pagenation.vue";

const route = useRoute();
const boardName = computed(() => route.params.boardName as string);
const num = computed(() => route.query.num ? route.query.num as string : "0");

const boardService = new BoardService();

const data = ref<Board | null>(null);
const max = ref(10);

async function getPostList(boardName: string) {
  const response = boardService.getBoardPostList(boardName, num.value);
  data.value = await response;
  max.value = data?.value?.totalPages ?? 0;
  nextTick().then(() => {
    const scrollToPosition = window.innerHeight;
    window.scrollTo({
      top: scrollToPosition,
      behavior: 'smooth',
    });
  });
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
  <div class="container">
    <div class="wrapper">
      <div class="title-container">
        <h1 class="gradiant">{{ boardName }}</h1>
      </div>
      <img :src="Line" alt="" class="line">
      <div v-if="data && data.content.length > 0 && data" class="card" :style="{ 'max-width': data.content.length === 4 ? '700px' : 'initial' }">
        <router-link v-for="value in data.content" :to="'/post/' + value.id" class="card-board">
          <div class="image-container">
            <template v-if="value.primaryImage==null">
              <img :src="noImage" alt="이미지 없음">
            </template>
            <template v-else>
              <img :src="value.primaryImage" alt="이미지">
            </template>
          </div>
          <div class="text-container">
            <div style="display: flex">
              <p class="board-name">
                {{ value.boardName }}
              </p>
              <p class="views">
                조회수 : {{ value.view }}
              </p>
            </div>
            <p class="title">
              {{ value.title }}
            </p>
            <p class="content">
              {{ value.content }}...
            </p>
            <p class="date">
              {{ value.createAt ? value.createAt.split("T")[0] : '' }}
            </p>
          </div>
        </router-link>
      </div>
      <div v-else class="no-content">
        No Content
      </div>
      <PageNation
          :max="max"
          :navigate-to-page="navigateToPage"
          :num="num"
          :surrounding-pages="surroundingPages">
      </PageNation>
    </div>
  </div>
</template>

<style scoped>
.text-container {
  padding: 20px;
  display: flex;
  gap: 12px;
  height: calc(100% - 200px);
  flex-direction: column;
}
.no-content {
  text-align: center;
  font-size: 25px;
  margin-top: 45px;
  font-weight: bolder;
  color: #333333;
}
.container {
  background: white;
  width: 100%;
  display: flex;
  justify-content: center;
}

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
  margin-top: 50px;
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

.title {
  color: #302f2d;
}

.content {
  line-height: 1.3rem;
  min-height: 55px;
  white-space: normal;
  font-size: 14px;
  color: #888888;
}

.date {
  color: #403d39;
  font-size: 15px;
}

.views {
  flex: 1;
  text-align: right;
  color: #4b4748;
  font-size: 14px;
  line-height: 25px;
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
