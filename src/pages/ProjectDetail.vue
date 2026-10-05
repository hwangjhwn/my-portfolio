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
          <div v-if="project.id === 'hrnflex' && index === 0 && hrComparisons[index]" class="hrComparison">
            <div class="hrComparison_grid">
              <article class="hrComparison_side"><p class="eyebrow">AS-IS</p><h4>{{ hrComparisons[index].before.title }}</h4><p>{{ hrComparisons[index].before.body }}</p></article>
              <span class="hrComparison_arrow" aria-hidden="true">→</span>
              <article class="hrComparison_side isAfter"><p class="eyebrow">TO-BE</p><h4>{{ hrComparisons[index].after.title }}</h4><p>{{ hrComparisons[index].after.body }}</p></article>
            </div>
          </div>
          <div v-if="section.comparisons || section.screenFlow" class="hrImageContainer">
            <div v-for="pair in section.comparisons" :key="pair.title" class="hrImagePair">
              <h4>{{ pair.title }}</h4>
              <div class="hrImagePair_grid">
                <div v-for="(screen, side) in { before: pair.before, after: pair.after }" :key="side" class="hrComparisonScreen">
                  <p class="eyebrow" :class="{ isAfter: side === 'after' }">{{ side === 'before' ? 'AS-IS' : 'TO-BE' }}</p>
                  <AnnotatedScreen v-if="screen.annotations" :screen="screen" />
                  <figure v-else class="hrImageScreen"><a :href="screen.src" target="_blank" rel="noopener noreferrer"><img :src="screen.src" :alt="screen.alt" loading="lazy" /></a><figcaption>{{ screen.caption }}</figcaption></figure>
                </div>
              </div>
            </div>
            <div v-if="section.screenFlow" class="hrScreenFlow" :class="{ standalone: !section.comparisons }">
              <AnnotatedScreen v-for="screen in section.screenFlow" :key="screen.src" :screen="screen" />
            </div>
          </div>
          <div v-if="section.guideGallery" class="hrGuideGallery">
            <figure v-for="screen in section.guideGallery" :key="screen.src">
              <a :href="screen.src" target="_blank" rel="noopener noreferrer"><img :src="screen.src" :alt="screen.alt" loading="lazy" /></a>
              <figcaption>{{ screen.caption }}</figcaption>
              <p class="hrGuideDescription">{{ screen.body }}</p>
            </figure>
          </div>
          <div v-if="project.id === 'remember' && section.gallery" class="annotatedGallery" :class="{ threeScreens: section.gallery.length === 3 }"><AnnotatedScreen v-for="screen in section.gallery" :key="screen.src" :screen="screen" /></div>
          <div v-else-if="section.gallery" class="screenGallery" :class="section.galleryType">
            <figure v-for="screen in section.gallery" :key="screen.src">
              <a :href="screen.src" target="_blank" rel="noopener noreferrer" :aria-label="screen.alt + ' 크게 보기, 새 탭'"><img :src="screen.src" :alt="screen.alt" loading="lazy" /></a>
              <figcaption>{{ screen.caption }}</figcaption>
            </figure>
          </div>
          <figure v-else-if="section.image" :class="{ hrScreenOverview: project.id === 'hrnflex' }"><a :href="section.image" target="_blank" rel="noopener noreferrer" :aria-label="section.title + ' 이미지 크게 보기, 새 탭'"><img :src="section.image" :alt="section.alt" loading="lazy" /></a><figcaption>{{ section.title }} <span>이미지를 누르면 크게 볼 수 있어요 ↗</span></figcaption></figure>
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
const hrComparisons = [
  {
    before: { title: '분리된 기록과 근무 조정 정보', body: '출퇴근 기록과 관련 요청이 분리되어 하루의 근무 상태를 한눈에 파악하기 어려웠습니다.' },
    after: { title: '날짜 단위로 통합된 근무 정보', body: '같은 날짜의 기록과 요청을 묶고, 근무 시간과 상태의 중요도에 따라 정보 위계를 정리했습니다.' }
  },
  {
    before: { title: '입력 → 제출', body: '입력한 내용을 검토하는 단계 없이 신청이 완료되고, 요청 현황은 별도로 찾아가야 했습니다.' },
    after: { title: '입력 → 검토 → 요청 현황', body: '제출 전 확인 단계를 추가하고, 신청 완료 후 요청 현황으로 이어지도록 연결했습니다.' }
  }
];
const route = useRoute();
const project = computed(() => projects.find(item => item.id === route.params.id));
const nextProject = computed(() => projects[(projects.findIndex(item => item.id === route.params.id) + 1) % projects.length]);
watch(project, value => { document.title = value ? value.name + ' | 황지환 · Product Designer' : '프로젝트를 찾을 수 없어요 | 황지환'; }, { immediate: true });
</script>
