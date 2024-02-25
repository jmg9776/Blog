<script setup lang="ts">
const props = defineProps<{
  num: string;
  max: number;
  surroundingPages: number[];
  navigateToPage: (pageNum: number) => void;
}>();

</script>

<template>
  <div class="pagination-container">
    <span v-if="+props.num > 0" @click="navigateToPage(+props.num - 1)" class="page-item">Prv</span>
    <span v-for="page in surroundingPages" :key="page" :class="['page-item', { active: +props.num + 1 === page }]" @click="navigateToPage(page - 1)">
      {{ page }}
    </span>
    <span v-if="+props.num < props.max - 1" class="page-item" @click="navigateToPage(+props.num + 1)">Nxt</span>
  </div>
</template>

<style scoped>
* {
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

.pagination-container {
  text-align: center;
  margin: 40px auto 0;
  font-family: 'Arial', sans-serif;
}

.page-item {
  display: inline-block;
  margin: 0 5px;
  padding: 8px 12px;
  color: #555;
  border-radius: 5px;
  border: 1px solid #d6cde0;
  background-color: #f8f8f8;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.page-item:hover {
  background-color: #eae4f2;
  color: #333;
}

.active {
  color: white;
  background-color: #b19cd9;
  border-color: #b19cd9;
}

.disabled {
  color: #ccc;
  cursor: not-allowed;
}


@media (max-width: 600px) {
  .page-item {
    padding: 5px 8px;
  }
}
</style>
