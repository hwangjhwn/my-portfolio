import { useModalStore } from '@/stores/modal';
import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from '@/stores/user';

// 로그인 여부 확인
const checkLogin = (to, from, next) => {
	const store = useUserStore();
	const isLogin = store.isLogin;
	if (!isLogin) {
		window.alert('로그인이 필요한 페이지입니다.');
		router.push('/Auth/Signin');
	} else {
		next();
	}
};

const routes = [
	{
		// 예시 페이지
		path: '/',
		name: 'Portfolio',
		component: () => import('@/pages/Portfolio.vue'),
	},
	{
		// 404 페이지
		path: '/404',
		name: '404',
		component: () => import('@/pages/404.vue'),
	},
	{
		// 존재하지 않는 페이지 404로 리다이렉트
		path: '/:pathMatch(.*)*',
		redirect: '/404',
	},
];

const router = createRouter({
	mode: 'history',
	history: createWebHistory(),
	routes,
	scrollBehavior() {
		return window.scrollTo(0, 0);
	},
});

// 페이지 변경시 로딩 시작
router.beforeEach(() => {
	// 페이지 변경할 때마다 모달창 닫기
	const modalStore = useModalStore();
	modalStore.closeAll();
});

export default router;
