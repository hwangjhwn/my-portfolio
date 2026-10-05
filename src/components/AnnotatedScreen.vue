<template>
  <figure class="annotatedScreen">
    <div class="annotatedScreen_stage">
      <a :href="screen.src" target="_blank" rel="noopener noreferrer" :aria-label="screen.alt + ' 크게 보기, 새 탭'"><img :src="screen.src" :alt="screen.alt" loading="lazy" /></a>
      <span v-for="note in screen.annotations" :key="note.number" class="screenMarker" :style="{left: note.x + '%', top: note.y + '%'}" aria-hidden="true">{{ note.number }}</span>
      <div v-for="note in screen.annotations" :key="'arrow-' + note.number" class="desktopAnnotation" :style="{top: note.y + '%'}" aria-hidden="true">
        <svg class="annotationArrow" viewBox="0 0 64 12" fill="none"><path d="M2 6H64M7 1L2 6L7 11" stroke="currentColor" stroke-width="1.4" /></svg>
        <p>{{ note.title }}</p>
      </div>
    </div>
    <figcaption>{{ screen.caption }}</figcaption>
    <ol class="screenNotes" aria-label="화면 상세 설명">
      <li v-for="note in screen.annotations" :key="note.number"><span>{{ note.number }}</span><div><h4>{{ note.title }}</h4><p>{{ note.body }}</p></div></li>
    </ol>
  </figure>
</template>
<script setup>
/* global defineProps */
defineProps({ screen: { type: Object, required: true } });
</script>
