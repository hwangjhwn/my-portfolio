<template>
  <main id="main" class="notFound page_inner"><p class="eyebrow">404 / PAGE NOT FOUND</p><h1>페이지를 찾을 수 없어요.</h1><p>주소를 확인하거나 포트폴리오 홈으로 이동해 주세요.</p><router-link to="/" class="button primary">포트폴리오 홈으로 →</router-link></main>
</template>
<script setup>
import { onMounted } from 'vue';
onMounted(() => { document.title = '페이지를 찾을 수 없어요 | 황지환'; });
</script>
