<template>
  <main v-if="project" id="main" class="detail_container page_inner">
    <router-link to="/#Work" class="textLink backLink">← 프로젝트 목록</router-link>
    <div class="detailHeading">
      <p class="eyebrow">{{ project.number }} / {{ project.category }}</p>
      <h1>{{ project.name }}</h1>
      <p class="detailSubtitle">{{ project.title }}</p>
      <p v-if="project.caseStudy" class="detailDescription">{{ project.description }}</p>
    </div>
    <dl class="detailMeta">
      <div><dt>PERIOD</dt><dd>{{ project.date }}</dd></div>
      <div><dt>CONTRIBUTION</dt><dd>{{ project.roles.join(' · ') }}</dd></div>
      <div><dt>TOOLS</dt><dd>{{ project.tools }}</dd></div>
    </dl>
    <img :src="project.image" :alt="project.label + ' 디자인 화면'" v-reveal class="detailCover" :class="{ figmaCover: project.imageOrigin === 'figma' }" width="1200" height="760" />

    <template v-if="project.caseStudy">
      <!-- caseOverview_container START -->
      <section class="caseOverview_container" aria-labelledby="case-context">
        <div v-reveal class="caseOverview_grid">
          <article><p class="eyebrow">01 / CONTEXT</p><h2 id="case-context">해결해야 할 문제</h2><p>{{ project.caseStudy.problem }}</p></article>
          <article><p class="eyebrow">02 / DIRECTION</p><h2>설계의 방향</h2><p>{{ project.caseStudy.approach }}</p></article>
        </div>
        <aside v-if="project.caseStudy.research" v-reveal class="research_wrap" aria-label="사용자 조사 근거">
          <div><strong>{{ project.caseStudy.research.value }}</strong><span>{{ project.caseStudy.research.label }}</span></div>
          <p>{{ project.caseStudy.research.note }}</p>
        </aside>
        <div v-if="project.caseStudy.insights" v-reveal class="researchInsights">
          <h3>{{ project.caseStudy.insightsTitle || '사용자 니즈를 설계 기준으로 연결하기' }}</h3>
          <div class="insightGrid">
            <article v-for="(insight, index) in project.caseStudy.insights" :key="insight.title">
              <span class="insightNumber">{{ String(index + 1).padStart(2, '0') }}</span>
              <h4>{{ insight.title }}</h4><p>{{ insight.body }}</p>
              <p class="insightDirection"><span>설계에 반영한 방향</span>{{ insight.direction }}</p>
            </article>
          </div>
        </div>
        <div v-reveal class="flow_container"><h3 class="eyebrow">CONNECTED EXPERIENCE</h3><ol class="flow_list"><li v-for="(step, index) in project.caseStudy.flow" :key="step"><span>{{ String(index + 1).padStart(2, '0') }}</span><div><p>{{ step }}</p><small v-if="project.caseStudy.flowDetails">{{ project.caseStudy.flowDetails[index] }}</small></div></li></ol></div>
      </section>
      <!-- caseOverview_container END -->

      <!-- design_container START -->
      <section class="design_container" aria-labelledby="design-heading">
        <p class="eyebrow">03 / DESIGN DECISIONS</p><h2 id="design-heading">설계가 화면으로 이어지는 방식.</h2>
        <article v-for="(section, index) in project.caseStudy.sections" :key="section.title" v-reveal class="designSection">
          <div class="designSection_copy"><span class="designNumber">{{ String(index + 1).padStart(2, '0') }}</span><div><h3>{{ section.title }}</h3><p>{{ section.body }}</p></div></div>
          <div v-if="project.id === 'remember' && section.gallery" class="annotatedGallery" :class="{ threeScreens: section.gallery.length === 3 }"><AnnotatedScreen v-for="screen in section.gallery" :key="screen.src" :screen="screen" /></div>
          <div v-else-if="section.gallery" class="screenGallery" :class="section.galleryType">
            <figure v-for="screen in section.gallery" :key="screen.src">
              <a :href="screen.src" target="_blank" rel="noopener noreferrer" :aria-label="screen.alt + ' 크게 보기, 새 탭'"><img :src="screen.src" :alt="screen.alt" loading="lazy" /></a>
              <figcaption>{{ screen.caption }}</figcaption>
            </figure>
          </div>
          <figure v-else-if="section.image"><a :href="section.image" target="_blank" rel="noopener noreferrer" :aria-label="section.title + ' 이미지 크게 보기, 새 탭'"><img :src="section.image" :alt="section.alt" loading="lazy" /></a><figcaption>{{ section.title }} <span>이미지를 누르면 크게 볼 수 있어요 ↗</span></figcaption></figure>
          <ul v-if="section.points" class="designPoints">
            <li v-for="point in section.points" :key="point.title"><h4>{{ point.title }}</h4><p>{{ point.body }}</p></li>
          </ul>
        </article>
      </section>
      <!-- design_container END -->

      <!-- outcome_container START -->
      <section v-reveal class="outcome_container" aria-labelledby="outcome-heading"><p class="eyebrow">04 / OUTCOME</p><h2 id="outcome-heading">이 프로젝트에서 연결한 경험.</h2><ol class="outcome_grid"><li v-for="(outcome, index) in project.caseStudy.outcomes" :key="outcome"><span>{{ String(index + 1).padStart(2, '0') }}</span><p>{{ outcome }}</p></li></ol></section>
      <!-- outcome_container END -->
    </template>
    <section v-else v-reveal class="caseSummary" aria-labelledby="case-summary"><p class="eyebrow">SOLUTION</p><h2 id="case-summary">프로젝트 소개</h2><p class="originalDescription">{{ project.description }}</p></section>

    <div v-reveal class="detailEnd">
      <router-link to="/#Work" class="button primary">프로젝트 목록으로 ←</router-link>
      <router-link :to="'/projects/' + nextProject.id" class="textLink">다음 프로젝트 · {{ nextProject.name }} ↗</router-link>
    </div>
  </main>
  <main v-else id="main" class="notFound page_inner"><p class="eyebrow">PROJECT NOT FOUND</p><h1>프로젝트를 찾을 수 없어요.</h1><router-link to="/#Work" class="button primary">프로젝트 목록으로</router-link></main>
</template>
<script setup>
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import { projects } from '@/data/portfolio';
import AnnotatedScreen from '@/components/AnnotatedScreen.vue';
const route = useRoute();
const project = computed(() => projects.find(item => item.id === route.params.id));
const nextProject = computed(() => projects[(projects.findIndex(item => item.id === route.params.id) + 1) % projects.length]);
watch(project, value => { document.title = value ? value.name + ' | 황지환 · Product Designer' : '프로젝트를 찾을 수 없어요 | 황지환'; }, { immediate: true });
</script>
