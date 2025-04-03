<template>
	<div class="c_contents_container Main">

		<!--메인 배너 START-->
		<section class="c_section" id="Home">
			<div class="c_inner">
				<div class="text_wrap">
					<h1 v-fade="{ delay: 150 }">다양한 분야의 업무 간</h1>
					<div class="flex-row-start gap-small">
						<h1 v-fade="{ delay: 650 }">
							<p class="highlight-green highlight-1">
								<span class="text">조화로운 협업</span>
								<span class="effect"></span>
							</p>과
						</h1>
						<h1 v-fade="{ delay: 1150 }">
							<p class="highlight-blue highlight-2">
								<span class="text">최선의 결과</span>
								<span class="effect"></span>
							</p>를 추구하는
						</h1>
					</div>
					<h1 v-fade="{ delay: 1650 }">
						<p class="highlight-purple highlight-3">
							<span class="text">
								프로덕트 디자이너
							</span>
							<span class="effect"></span>
						</p>
						황지환입니다.
					</h1>
				</div>
				<div class="motion_wrap" v-slide.vertical="{ delay: 2150 }">
					<video autoplay muted loop playsinline>
						<source src="@/assets/image/motion/mov_ocean.mp4" alt="" />
					</video>
				</div>
			</div>
		</section>
		<!--메인 배너 END-->

		<!--About START-->
		<section class="c_section About" id="AboutMe">
			<div class="c_inner">
				<div class="profile_wrap" v-slide="{ delay: 150 }">
					<div class="inner">
						<div class="image_wrap">
							<img src="@/assets/image/common/img_profile.jpg" alt="" />
						</div>
						<div class="text_wrap">
							<div class="title1">
								Hwang Jihwan
							</div>
							<ul class="info_wrap">
								<li>
									<div class="icon_wrap">
										<IconBirth viewBox="0 -960 960 960"/>
									</div>
									<p>1998. 07. 14</p>
								</li>
								<li>
									<div class="icon_wrap">
										<IconPhone viewBox="0 -960 960 960"/>
									</div>
									<p>010-6305-2099</p>
								</li>
								<li>
									<div class="icon_wrap">
										<IconMail viewBox="0 -960 960 960"/>
									</div>
									<p>h1998jh@gmail.com</p>
								</li>
							</ul>
							<a href="https://drive.google.com/file/d/13mnp6aTxjcvI0f0Rar_iaTF2sBzYBt6Z/view?usp=drive_link" target="_blank" class="button">
								이력서 확인하기
							</a>
						</div>
					</div>
				</div>
				<div class="detail_wrap">
					<section class="title_wrap">
						<h1 class="headline">
							안녕하세요,<br />
							프로덕트 디자이너 황지환입니다.
						</h1>
						<p class="articleBody">
							사용자 경험과 인터페이스 디자인은 단순한 시각적 요소를 넘어서 사용자와의 감정적 연결과 효율적인 기능을 결합하는 예술입니다. 저는 이러한 예술을 통해 사람들과 상호작용하는
							과정에서 보다 의미 있는 경험을 제공하고자 끊임없이 노력하고 있습니다.
						</p>
						<div class="line"></div>
					</section>
					<section class="education">
						<div class="subtitle">
							<div class="icon_wrap">
								<IconLabel viewBox="0 -960 960 960" />
							</div>
							<h1>Work&Education</h1>
						</div>
						<ul v-slide="{ delay: 150 }">
							<li>
								<div class="circle"></div>
								<div class="content">
									<p class="date">2024. 04 ~ 재직중</p>
									<div class="text">
										<div class="ci_wrap" style="width:auto;height:2rem;">
											<img src="@/assets/image/logo/CI-LiveForward.svg" alt="" />
										</div>
										<p>LiveForward 프로덕트 디자이너 근무</p>
									</div>
									<ol class="subtext">
										<li>- B2C 패브릭 특화 커머스 서비스 런칭</li>
										<li>- B2B 원단 관리, 3D 자동 렌더링 툴 구축</li>
										<li>- 설치형 디스플레이 프로덕트 구축</li>
									</ol>
								</div>
							</li>
							<li>
								<div class="circle"></div>
								<div class="content">
									<p class="date">2021. 09 ~ 2024. 01</p>
									<div class="text">
										<div class="ci_wrap">
											<img src="@/assets/image/logo/logo_dever.svg" alt="" />
										</div>
										<p>DEVER 디자인팀 근무</p>
									</div>
									<ol class="subtext">
										<li>- 웹/앱 서비스 기획 및 UX 디자인</li>
										<li>- 웹사이트 디자인</li>
										<li>- Vue.js 기반 웹 퍼블리싱</li>
									</ol>
								</div>
							</li>
							<li>
								<div class="circle"></div>
								<div class="content">
									<p class="date">2017. 02 ~ 2022.08</p>
									<div class="text">
										<div class="ci_wrap">
											<img src="@/assets/image/logo/logo_ajou.svg" alt="" />
										</div>
										<p>아주대학교 미디어학과 졸업</p>
									</div>
								</div>
							</li>
						</ul>
					</section>
					<section class="software">
						<div class="subtitle">
							<div class="icon_wrap">
								<IconLabel viewBox="0 -960 960 960" />
							</div>
							<h1>Software</h1>
						</div>
						<div class="category">
							<img src="@/assets/image/common/icon_design.svg" alt="" />
							<p>Design</p>
						</div>
						<div class="chart_wrap" v-slide="{ delay: 150 }">
							<div class="chart">
								<div class="image_wrap">
									<img src="@/assets/image/software/chart_figma.svg" alt="" />
								</div>
								<p class="name">Figma</p>
								<p class="percent">90%</p>
							</div>
							<div class="chart">
								<div class="image_wrap">
									<img src="@/assets/image/software/chart_ps.svg" alt="" />
								</div>
								<p class="name">Photoshop</p>
								<p class="percent">90%</p>
							</div>
							<div class="chart">
								<div class="image_wrap">
									<img src="@/assets/image/software/chart_ai.svg" alt="" />
								</div>
								<p class="name">Illustrator</p>
								<p class="percent">90%</p>
							</div>
							<div class="chart">
								<div class="image_wrap">
									<img src="@/assets/image/software/chart_xd.svg" alt="" />
								</div>
								<p class="name">Adobe XD</p>
								<p class="percent">90%</p>
							</div>
							<div class="chart">
								<div class="image_wrap">
									<img src="@/assets/image/software/chart_id.svg" alt="" />
								</div>
								<p class="name">InDesign</p>
								<p class="percent">50%</p>
							</div>
						</div>
						<div class="category">
							<img src="@/assets/image/common/icon_video.svg" alt="" />
							<p>Video</p>
						</div>
						<div class="chart_wrap" v-slide="{ delay: 150 }">
							<div class="chart">
								<div class="image_wrap">
									<img src="@/assets/image/software/chart_ae.svg" alt="" />
								</div>
								<p class="name">After Effect</p>
								<p class="percent">70%</p>
							</div>
							<div class="chart">
								<div class="image_wrap">
									<img src="@/assets/image/software/chart_pr.svg" alt="" />
								</div>
								<p class="name">Premiere</p>
								<p class="percent">70%</p>
							</div>
						</div>
						<div class="category">
							<img src="@/assets/image/common/icon_code.svg" alt="" />
							<p>Web</p>
						</div>
						<div class="chart_wrap" v-slide="{ delay: 150 }">
							<div class="chart">
								<div class="image_wrap">
									<img src="@/assets/image/software/chart_html.svg" alt="" />
								</div>
								<p class="name">HTML5</p>
								<p class="percent">90%</p>
							</div>
							<div class="chart">
								<div class="image_wrap">
									<img src="@/assets/image/software/chart_css.svg" alt="" />
								</div>
								<p class="name">CSS3</p>
								<p class="percent">90%</p>
							</div>
							<div class="chart">
								<div class="image_wrap">
									<img src="@/assets/image/software/chart_js.svg" alt="" />
								</div>
								<p class="name">Java Script</p>
								<p class="percent">25%</p>
							</div>
							<div class="chart">
								<div class="image_wrap">
									<img src="@/assets/image/software/chart_react.svg" alt="" />
								</div>
								<p class="name">React</p>
								<p class="percent">25%</p>
							</div>
							<div class="chart">
								<div class="image_wrap">
									<img src="@/assets/image/software/chart_vue.svg" alt="" />
								</div>
								<p class="name">Vue3</p>
								<p class="percent">25%</p>
							</div>
						</div>
					</section>
					<section class="license">
						<div class="subtitle">
							<div class="icon_wrap">
								<IconLabel viewBox="0 -960 960 960" />
							</div>
							<h1>License</h1>
						</div>
						<ul v-slide="{ delay: 150 }">
							<li>
								<p>
									웹디자인기능사<span>21. 09. 17</span>
								</p>
							</li>
							<li>
								<p>
									컴퓨터그래픽스운용기능사<span>21. 07. 16</span>
								</p>
							</li>
							<li>
								<p>GTQ 그래픽 기술자격 1급<span>19. 06. 14</span></p>
							</li>
							<li>
								<p>GTQ 인디자인 1급<span>19. 06. 14</span></p>
							</li>
							<li>
								<p>GTQ 일러스트 1급<span>19. 03. 15</span></p>
							</li>
						</ul>
					</section>
				</div>
			</div>
		</section>
		<!--About END-->

		<!--Work START-->
		<section class="c_section Work" id="Work">
			<div class="c_inner">
				<Feedback360/>
				<div class="line"></div>
				<Remember />
				<div class="line"></div>
				<Buyko/>
				<div class="line"></div>
				<Sobeit />
			</div>
		</section>
		<!--Work END-->

		<!--Connect START-->
		<section class="c_secton Contact" id="Contact">
			<div class="c_inner">
				<div class="contact_banner">
					<img src="@/assets/image/common/img_contact.jpg" alt="" />
					<div class="text_wrap">
						<h1 class="slogan" v-fade="{ delay: 150 }">
							소통과 협업을 중요시하는 디자이너가 되겠습니다.
						</h1>
						<ul v-fade="{ delay: 450 }">
							<li>
								<a tel="010-6305-2099">
									<img src="@/assets/image/common/icon_phone-w.svg" alt=""/>
									<p>
										010-6305-2099
									</p>
								</a>
							</li>
							<li>
								<a target="_blank" href="mailto:h1998jh@gmail.com">
									<img src="@/assets/image/common/icon_mail-w.svg" alt=""/>
									<p>
										h1998jh@gmail.com
									</p>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
		<!--Connect END-->
	</div>
</template>

<script setup>
// 컴포넌트
import Remember from "@/components/Portfolio/Remember.vue";
import Buyko from "@/components/Portfolio/Buyko.vue";
import Sobeit from "@/components/Portfolio/Sobeit.vue";
import Feedback360 from "@/components/Portfolio/Feedback360.vue";
// import GiveHeart from "@/components/Portfolio/GiveHeart.vue";
// import HumanValue from "@/components/Portfolio/HumanValue.vue";
import IconLabel from '@/components/SVG/IconLabel.vue';
import IconBirth from "@/components/SVG/IconBirth.vue";
import IconPhone from "@/components/SVG/IconPhone.vue";
import IconMail from "@/components/SVG/IconMail.vue";
</script>

<style scoped></style>