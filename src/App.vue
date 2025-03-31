<template>
	<Header/>
	<router-view @scroll="handleScroll"/>
	<Footer/>
</template>

<script setup>
// 컴포넌트
import Header from './components/common/Header.vue';
import Footer from './components/common/Footer.vue';
// vue 내장 라이브러리
import { onMounted, onUnmounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
// pinia
import { useViewStore } from './stores/view';
import { useUserStore } from './stores/user';

const viewStore = useViewStore();
const userStore = useUserStore();


</script>

<style>
/* 반드시 reset.css 다음에 common.css 순으로 import 할것 */
@import url('./assets/css/common/reset.css');
@import url('./assets/css/common/common.css');
@import url('./assets/css/common/layout.css');
@import url('./assets/css/common/class.css');
.scroll-up {
    border:1px solid red;
}
</style>