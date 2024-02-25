<script setup lang="ts">
import MainVideo from "@/features/main/MainBackground.vue";
import MainText from "@/features/main/MainText.vue";

const props = defineProps({
  maxViewWidth: Boolean
});
</script>

<template>
  <MainVideo/>
  <MainText :maxViewWidth="props.maxViewWidth"/>
</template>

<style scoped>

</style>

