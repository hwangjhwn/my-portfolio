<template>
    <div class="header_container" :class="{'header_off' : isHeaderHidden}">
        <header>
            <div class="left">
                <router-link :to="{name:'Portfolio'}" class="logo_wrap" @click="scrollToSection('Home')">
                    <Logo viewBox="0 0 261 261"/>
                </router-link>
            </div>
            <div class="right">
                <div class="icon_wrap" @click="scrollToSection('AboutMe')">
                    <!-- <p>About</p> -->
                    <IconHeaderUser viewBox="0 0 24 24" />
                </div>
                <div class="icon_wrap" @click="scrollToSection('Work')">
                    <!-- <p>Project</p> -->
                    <IconHeaderWork viewBox="0 0 24 24" />
                </div>
                <div class="icon_wrap" @click="scrollToSection('Contact')">
                    <!-- <p>Contact</p> -->
                    <IconHeaderContact viewBox="0 0 24 24" />
                </div>
                <div class="icon_wrap" @click="toggleTheme">
                    <img src="@/assets/image/common/icon_darkMode.svg" alt="" v-if="!isDarkTheme"/>
                    <img src="@/assets/image/common/icon_lightMode.svg" alt="" v-else/>
                </div>
            </div>
        </header>
    </div>
</template>

<script setup>
// 컴포넌트
import Logo from '@/components/SVG/Logo.vue';
import IconHeaderUser from '@/components/SVG/IconHeaderUser.vue';
import IconHeaderWork from '../SVG/IconHeaderWork.vue';
import IconHeaderContact from '../SVG/IconHeaderContact.vue';

// vue 내장 라이브러리
import { ref, onMounted, onBeforeUnmount, onUnmounted } from 'vue';

const isDarkTheme = ref(false);

const toggleTheme = () => {
  isDarkTheme.value = !isDarkTheme.value;
  document.documentElement.setAttribute('data-theme', isDarkTheme.value ? 'dark' : 'light');
};

// 메뉴 클릭시 화면 이동
const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section){
        section.scrollIntoView({behavior:'smooth'});
    }
}

// 헤더 스크롤시 
const isHeaderHidden = ref(false);
let prevScrollPos = 0;

const handleScroll = () => {
	const currentScrollPos = window.scrollY;
	if(currentScrollPos > prevScrollPos){
		isHeaderHidden.value = true;
	}
	else{
		isHeaderHidden.value = false;
	}
	prevScrollPos = currentScrollPos;
};

onMounted(() => {
	window.addEventListener('scroll', handleScroll);

    window.addEventListener("scroll", () => {
		if (window.scrollY < 60) {
			document
				.querySelector(".header_container")
				.classList.remove("header_scrdown");
		} else {
			document
				.querySelector(".header_container")
				.classList.add("header_scrdown");
		}
	});
})

onBeforeUnmount(() => {
	window.removeEventListener('scroll', handleScroll);
})

onUnmounted(() => {
	window.removeEventListener("scroll", () => { });
})

</script>

<style>
@import url('@/assets/css/components/header.css');
</style>