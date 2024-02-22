<script setup lang="ts">
import MainVideo from "@/components/main/MainBackground.vue";
import MainText from "@/components/main/MainText.vue";

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

