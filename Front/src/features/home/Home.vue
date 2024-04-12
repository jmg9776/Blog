<script setup lang="ts">
//@ts-nocheck
import { ref, onMounted } from 'vue';

const htmlFilePath = '/portfolio.html';
const shadowHost = ref(null);

onMounted(async () => {
  if (shadowHost.value) {
    const shadowRoot = shadowHost.value.attachShadow({ mode: 'open' });
    try {
      const response = await fetch(htmlFilePath);
      const htmlContent = await response.text();
      shadowRoot.innerHTML = htmlContent;
    } catch (error) {
      console.error('Error loading HTML content:', error);
    }
  }
});
</script>

<template>
  <div ref="shadowHost" style="margin: 50px auto auto;width: 95%; max-width: 1100px"></div>
</template>
