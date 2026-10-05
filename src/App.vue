<template>
  <a class="skipLink" href="#main">본문으로 건너뛰기</a>
  <Header />
  <router-view />
  <Footer />
</template>
<script setup>
import Header from './components/common/Header.vue';
import Footer from './components/common/Footer.vue';
</script>
<style>
@import './assets/css/common/reset.css';
@import './assets/css/portfolio.css';
</style>
