<template>
  <header class="siteHeader">
    <div class="header_inner">
      <router-link to="/" class="wordmark" aria-label="황지환 포트폴리오 홈">
        <img class="headerSymbol" src="@/assets/image/common/symbol.svg" alt="" aria-hidden="true" />
      </router-link>
      <nav aria-label="주요 메뉴">
        <router-link to="/#AboutMe" :class="{ active: activeSection === 'AboutMe' }">ABOUT</router-link>
        <router-link to="/#Work" :class="{ active: activeSection === 'Work' }">WORK</router-link>
        <router-link to="/#Contact" :class="{ active: activeSection === 'Contact' }">CONTACT</router-link>
        <a :href="resumeUrl" target="_blank" rel="noopener noreferrer" class="resumeLink">이력서 <span aria-hidden="true">↗</span><span class="screenReader"> PDF, 새 탭</span></a>
      </nav>
    </div>
  </header>
</template>
<script setup>
import { ref, watch, nextTick, onMounted, onBeforeUnmount } from 'vue';
import { useRoute } from 'vue-router';
import { resumeUrl } from '@/data/portfolio';
const route = useRoute();
const activeSection = ref('');
let observer;
let generation = 0;
const observeSections = async () => {
  const current = ++generation;
  observer?.disconnect();
  activeSection.value = '';
  await nextTick();
  if (current !== generation || route.path !== '/') return;
  observer = new IntersectionObserver(entries => {
    for (const entry of entries) if (entry.isIntersecting) activeSection.value = entry.target.id;
  }, { rootMargin: '-15% 0px -60% 0px' });
  ['Home', 'AboutMe', 'Work', 'Contact'].forEach(id => {
    const section = document.getElementById(id);
    if (section) observer.observe(section);
  });
};
onMounted(observeSections);
watch(() => route.path, observeSections);
onBeforeUnmount(() => { generation++; observer?.disconnect(); });
</script>
