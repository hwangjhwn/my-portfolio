<template>
  <main id="main">
    <!-- hero_container START -->
    <section id="Home" class="hero_container page_inner">
      <div class="heroMeta">
		<span>HWANG JIHWAN · PRODUCT DESIGNER</span><span>PORTFOLIO / 2026</span>
	</div>
      <h1 class="font-manrope">Complexity<br />
		<span class="heroBridge"><i>into</i> <span>Clarity</span></span>
	</h1>
      <div class="heroBottom">
        <p>복잡한 요구를 구조화하고,<br />명확한 제품 경험을 설계합니다.</p>
        <div class="heroActions"><a class="button primary" href="#Work">프로젝트 살펴보기<span aria-hidden="true">↓</span></a><a class="textLink" :href="portfolioUrl" target="_blank" rel="noopener noreferrer">포트폴리오 PDF <span aria-hidden="true">↗</span><span class="screenReader"> 새 탭</span></a></div>
      </div>
      <div class="heroGraphic" aria-hidden="true"><span class="graphicLines"></span><span class="graphicArrow">→</span><span class="graphicCircle"></span></div>
      <!-- <div class="heroCaption"><span>FROM UNDERSTANDING TO MAKING</span><span>UX STRATEGY / PRODUCT DESIGN / DESIGN SYSTEM</span></div> -->
    </section>
    <!-- hero_container END -->

    <!-- about_container START -->
    <section id="AboutMe" class="about_container">
      <div class="page_inner">
        <div v-reveal class="sectionHeading"><div><p class="eyebrow">01 / ABOUT</p><h2>설계가 실제 제품으로<br />이어질 때까지<span class="headingDot">.</span></h2></div><img class="aboutSymbol" src="@/assets/image/common/symbol.svg" alt="" aria-hidden="true" /></div>
        <div v-reveal class="aboutIntro">
          <img class="aboutProfile" src="@/assets/image/common/profile.jpg" alt="프로덕트 디자이너 황지환" width="689" height="886" loading="lazy" />
          <div class="aboutCopy">
            <p class="introLead">안녕하세요.<br />
              <span>프로덕트 디자이너 황지환입니다.</span>
            </p>
            <div class="aboutDescription">
              <p>사용자가 마주하는 화면만이 아니라, 그 경험을 가능하게 하는 서비스 구조와 사용자 흐름까지 함께 고려하여 설계합니다. 커머스, 선물하기, SaaS를 다루며 사용자용 웹·앱부터 운영·관리 시스템까지 다양한 제품 경험을 만들어 왔습니다.</p>
              <p>여러 요구가 얽힌 문제를 만나면 먼저 사용자 맥락과 비즈니스 목적, 운영 방식과 기술적 제약을 함께 살펴, 복잡한 기능과 정보는 서비스 구조와 User Flow로 정리하고, 사용자가 자연스럽게 이해하고 행동할 수 있는 UX로 풀어내왔습니다.</p>
              <p>기획과 UX/UI 설계에서 끝내지 않고 개발 협업과 UI QA까지 이어지는 과정에도 직접 참여해왔습니다. HTML·CSS·Vue.js 기반의 구현 경험을 바탕으로 개발자와 소통하고, 설계한 의도가 실제 제품에서도 흐트러지지 않도록 끝까지 확인하고자 합니다.</p>
            </div>
            <a class="textLink" :href="resumeUrl" target="_blank" rel="noopener noreferrer">이력서 자세히 보기 <span aria-hidden="true">↗</span><span class="screenReader"> PDF, 새 탭</span></a>
          </div>
        </div>
        <ol v-reveal class="expertise_grid" aria-label="디자인 역량">
          <li>
            <div class="expertiseHeading">
              <span class="expertiseNumber" aria-hidden="true">01</span>
              <span class="expertiseLabel">Interpret</span>
            </div>
            <h3>문제의 맥락을 이해합니다.</h3>
            <p>사용자·비즈니스·운영 요구와 기술적 제약을 살피고, 핵심 문제와 우선순위를 정의합니다.</p>
          </li>
          <li>
            <div class="expertiseHeading">
              <span class="expertiseNumber" aria-hidden="true">02</span>
              <span class="expertiseLabel">Structure</span>
            </div>
            <h3>복잡함을 구조로 바꿉니다.</h3>
            <p>정보 구조, 정책, 사용자 흐름을 정리해 기능과 업무가 자연스럽게 이어지는 제품을 설계합니다.</p>
          </li>
          <li>
            <div class="expertiseHeading">
              <span class="expertiseNumber" aria-hidden="true">03</span>
              <span class="expertiseLabel">Design</span>
            </div>
            <h3>일관된 경험으로 만듭니다.</h3>
            <p>공통 컴포넌트와 인터랙션 기준을 정의하고, 개발 협업과 UI QA로 구현 품질을 확인합니다.</p>
          </li>
        </ol>
        <div v-reveal class="career_container">
          <h3 class="eyebrow">EXPERIENCE</h3>
          <div class="career_list">
            <article v-for="career in careers" :key="career.company" class="careerItem">
              <div class="careerIdentity">
                <div class="careerLogoSlot" aria-hidden="true">
                  <img v-if="careerLogos[career.company]" :src="careerLogos[career.company]" class="careerLogo" alt="" loading="lazy" />
                </div>
                <div class="careerInfo">
                  <h4>{{ career.company }}</h4>
                  <p>{{ career.role }}</p>
                  <span class="careerDate">{{ career.date }}</span>
                </div>
              </div>
              <p>{{ career.description }}</p>
            </article>
          </div>
        </div>
        <div v-reveal class="career_container">
          <h3 class="eyebrow">ACTIVITY</h3>
          <div class="career_list">
            <article class="careerItem">
              <div class="careerIdentity">
                <div class="careerLogoSlot" aria-hidden="true">
                  <img class="careerLogo" src="@/assets/image/logo/logo_bluetiger.png" alt="" loading="lazy" />
                </div>
                <div class="careerInfo">
                  <h4>Blue Tiger</h4>
                  <p>UI/UX 멘토</p>
                  <span class="careerDate">2026.03 — 2026.09</span>
                </div>
              </div>
              <div class="careerDescription">
                <p>UI/UX 취업 준비생을 대상으로 1:1 프로젝트 멘토링을 진행했습니다. 각자의 프로젝트를 중심으로 UX 설계와 UI 디자인을 함께 검토하며, 설계 의도가 화면에 어떻게 반영되는지 살펴보고 개선 방향을 피드백했습니다.</p>
                <p>Figma 실무 활용에 대한 피드백도 함께 제공했습니다. 도구 사용과 디자인 작업을 연결해, 멘티가 피드백을 자신의 프로젝트에 적용하고 다음 작업으로 이어갈 수 있도록 도왔습니다.</p>
              </div>
            </article>
          </div>
        </div>
        <div v-reveal class="career_container">
          <h3 class="eyebrow">EDUCATION</h3>
          <div class="career_list">
            <article class="careerItem">
              <div class="careerIdentity">
                <div class="careerLogoSlot" aria-hidden="true">
                  <img class="careerLogo schoolLogo" src="@/assets/image/logo/logo_ajou.svg" alt="" loading="lazy" />
                </div>
                <div class="careerInfo">
                  <h4>아주대학교</h4>
                  <p>디지털 미디어 학사</p>
                  <span class="careerDate">2017.02 — 2022.08</span>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div v-reveal class="career_container">
          <h3 class="eyebrow">TOOLS & SKILLS</h3>
          <div class="career_list">
            <article class="careerItem">
              <div><h4>Design</h4></div>
              <ul class="toolList" aria-label="디자인 도구">
                <li v-for="tool in designTools" :key="tool.name"><img v-if="tool.logo" :src="tool.logo" alt="" loading="lazy" /><span>{{ tool.name }}</span></li>
              </ul>
            </article>
            <article class="careerItem">
              <div><h4>Build</h4></div>
              <ul class="toolList" aria-label="개발 도구">
                <li v-for="tool in buildTools" :key="tool.name"><img v-if="tool.logo" :src="tool.logo" :class="{ toolLogoCompact: tool.compact }" alt="" loading="lazy" /><span>{{ tool.name }}</span></li>
              </ul>
            </article>
            <article class="careerItem">
              <div><h4>Collaboration</h4></div>
              <ul class="toolList" aria-label="협업 도구">
                <li v-for="tool in collaborationTools" :key="tool.name"><img v-if="tool.logo" :src="tool.logo" :class="{ toolLogoCompact: tool.compact }" alt="" loading="lazy" /><span>{{ tool.name }}</span></li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
    <!-- about_container END -->

    <!-- work_container START -->
    <section id="Work" class="work_container page_inner">
      <div v-reveal class="sectionHeading"><div><p class="eyebrow">02 / SELECTED WORK</p><h2>복잡함을 풀어낸<br />프로젝트 이야기<span class="headingDot">.</span></h2></div><p class="sectionNote">기획과 디자인, 구현으로 이어진<br />프로젝트를 소개합니다.</p></div>
      <article v-for="project in projects" :key="project.id" v-reveal class="projectCard">
        <router-link :to="'/projects/' + project.id" class="projectImage_link" :class="{ figmaCover_link: project.imageOrigin === 'figma' }" :aria-label="project.name + ' 프로젝트 자세히 보기'">
          <img :src="project.image" :alt="project.label + ' 디자인 화면'" loading="lazy" width="1200" height="760" />
          <span class="imageAction" aria-hidden="true">프로젝트 보기 ↗</span>
        </router-link>
        <div class="projectCopy">
          <div class="projectIndex"><span>{{ project.number }} / PROJECT</span><span>{{ project.category }}</span></div>
          <router-link :to="'/projects/' + project.id"><h3>{{ project.name }}</h3></router-link>
          <p class="projectTitle">{{ project.title }}</p>
          <p class="projectDescription">{{ project.description }}</p>
          <div class="projectMeta"><span>{{ project.date }}</span><span>{{ project.roles.join(' · ') }}</span></div>
          <router-link :to="'/projects/' + project.id" class="textLink">프로젝트 자세히 보기 <span aria-hidden="true">↗</span></router-link>
        </div>
      </article>
      <div v-reveal class="allWork"><p>웹에서 핵심을 살펴보고, 전체 자료가 필요하다면 PDF로 확인하세요.</p><a class="textLink" :href="portfolioUrl" target="_blank" rel="noopener noreferrer">전체 포트폴리오 PDF <span aria-hidden="true">↗</span><span class="screenReader"> 새 탭</span></a></div>
    </section>
    <!-- work_container END -->

    <!-- contact_container START -->
    <section id="Contact" class="contact_container">
      <div v-reveal class="page_inner"><p class="eyebrow">03 / CONTACT</p><h2>제품의 다음 단계를<br />함께 설계하겠습니다<span class="headingDot">.</span></h2><a :href="'mailto:' + email" class="contactEmail">{{ email }} <span aria-hidden="true">↗</span></a><div class="contactLinks"><a href="tel:+821063052099">010-6305-2099</a><a :href="resumeUrl" target="_blank" rel="noopener noreferrer">이력서 PDF ↗<span class="screenReader"> 새 탭</span></a><a :href="portfolioUrl" target="_blank" rel="noopener noreferrer">포트폴리오 PDF ↗<span class="screenReader"> 새 탭</span></a></div></div>
    </section>
    <!-- contact_container END -->
  </main>
</template>
<script setup>
import { projects, careers, portfolioUrl, resumeUrl, email } from '@/data/portfolio';
import { onMounted } from 'vue';
import shareTreatsLogo from '@/assets/image/logo/BI-ShareTreats.svg';
import liveForwardLogo from '@/assets/image/logo/CI-LiveForward.svg';
import deverLogo from '@/assets/image/logo/logo_dever.svg';
import figmaLogo from '@/assets/image/logo/logo_figma.svg';
import photoshopLogo from '@/assets/image/logo/logo_ps.svg';
import afterEffectsLogo from '@/assets/image/logo/logo_ae.svg';
import xdLogo from '@/assets/image/logo/logo_xd.svg';
import vueLogo from '@/assets/image/logo/logo_vue.svg';
import jiraLogo from '@/assets/image/logo/logo_jira.svg';
import aiLogo from '@/assets/image/logo/logo_ai.svg';
import htmlLogo from '@/assets/image/logo/logo_html.svg';
import cssLogo from '@/assets/image/logo/logo_css.svg';
import reactLogo from '@/assets/image/logo/logo_react.svg';
import slackLogo from '@/assets/image/logo/logo_slack.svg';
import notionLogo from '@/assets/image/logo/logo_notion.svg';
const careerLogos = { ShareTreats: shareTreatsLogo, LiveForward: liveForwardLogo, DEVER: deverLogo };
const designTools = [
  { name: 'Figma', logo: figmaLogo },
  { name: 'Photoshop', logo: photoshopLogo },
  { name: 'Illustrator', logo: aiLogo },
  { name: 'After Effects', logo: afterEffectsLogo },
  { name: 'Adobe XD', logo: xdLogo },
];
const buildTools = [
  { name: 'HTML', logo: htmlLogo, compact: true },
  { name: 'CSS', logo: cssLogo, compact: true },
  { name: 'Vue.js', logo: vueLogo },
  { name: 'React', logo: reactLogo, compact: true },
];
const collaborationTools = [
  { name: 'Jira', logo: jiraLogo },
  { name: 'Slack', logo: slackLogo, compact: true },
  { name: 'Notion', logo: notionLogo, compact: true },
];
onMounted(() => { document.title = '황지환 · Product Designer | Complexity into Clarity'; });
</script>
