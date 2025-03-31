<template>
    <div class="work_container">
        <div class="title_container">
            <div class="title_wrap">
                <span class="flag">
                    App UX/UI
                </span>
                <h1 class="headline">리멤버 선물하기</h1>
                <h2 class="articleBody">종합 비즈니스 플랫폼 ‘리멤버’의 신규 서비스 ‘비즈니스 선물하기’</h2>
            </div>
            <div class="btn_wrap">
                <a href="https://drive.google.com/file/d/1K8KsnhiboHO49UBGkDBwTUx8WzmknV6t/view?usp=drive_link"
                    target="_blank">
                    <p>View Detail</p>
                </a>
            </div>
        </div>
        <div class="text_wrap" v-fade="{ delay: 150 }">
            <div class="detail_wrap">
                <div class="type">
                    <div class="index">Date</div>
                    <div class="content">
                        <p>2023. 03 ~ 2023. 10</p>
                    </div>
                </div>
                <div class="position">
                    <div class="index">Position</div>
                    <div class="content">
                        <p>기획</p>
                        <p>디자인</p>
                        <p>퍼블리싱</p>
                    </div>
                </div>
                <div class="tools">
                    <div class="index">Tools</div>
                    <div class="content">
                        <p>
                            <span>
                                <img src="@/assets/image/logo/logo_figma.svg" alt="" />
                            </span>
                        </p>
                        <p>
                            <span>
                                <img src="@/assets/image/logo/logo_vue.svg" alt="" />
                            </span>
                        </p>

                    </div>
                </div>
                <div class="solution">
                    <div class="index">Solution</div>
                    <div class="content">
                        <p>
                            "리멤버" 플랫폼의 새로운 선물 서비스는 "비지니스 선물하기"를 핵심 키워드로 삼아
                            개발된 신규 프로젝트입니다. 법인카드로 간편 결제가 가능하며, 정중한 감사와 거절
                            메시지 처리를 강조하여 차별화된 서비스를 기획 및 디자인하였습니다. 이와 더불어,
                            관리자 화면도 전반적인 기획과 디자인 작업을 주도하였습니다.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="image_wrap" v-slide="{ delay: 300 }">
            <img src="@/assets/image/portfolio/mockup_remember.png" alt="" />
        </div>
    </div>
</template>

<script setup>
import LogoRemember from '../SVG/LogoRemember.vue';
</script>

<style></style>