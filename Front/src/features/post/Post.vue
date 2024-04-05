<script setup lang="ts">

import GitMarkdown from "@/shared/components/GitMarkdown.vue";
import {computed, nextTick, onMounted, ref} from "vue";
import {Builder} from "builder-pattern";
import {Post} from "@/features/post/Post.ts";
import {useRoute} from "vue-router";
import {PostService} from "@/features/post/PostService.ts"

const route = useRoute();

const num = computed(() => route.params.postNum as string);
const postService = new PostService();

onMounted(async () => {
  console.log(num.value);
  await getPostList()
  nextTick().then(() => {
    const scrollToPosition = window.innerHeight;
    window.scrollTo({
      top: scrollToPosition,
      behavior: 'smooth',
    });
  });
})

async function getPostList() {
  data.value = await postService.getBoardPost(num.value);
}

const data = ref<Post>( Builder<Post>().content(`
목차
[Toc]
`).createAt(new Date().toString()).title("Content Loading ...").view(7).build());
</script>

<template>
  <template v-if="data">
    <GitMarkdown :data="data"/>
  </template>

</template>

<style scoped>

</style>