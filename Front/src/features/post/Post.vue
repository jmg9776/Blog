<script setup lang="ts">

import GitMarkdown from "@/shared/components/GitMarkdown.vue";
import {nextTick, onMounted, ref} from "vue";
import {Builder} from "builder-pattern";
import {Post} from "@/features/post/Post.ts";
import {computed} from "vue";
import {useRoute} from "vue-router";
const route = useRoute();
import {PostService} from "@/features/post/PostService.ts"

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
  const response:Post = await postService.getBoardPost(num.value);
  response.content =`
목차
[Toc]
${response.content}
`
  data.value = response;
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