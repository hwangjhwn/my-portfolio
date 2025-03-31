// import store from '@/store';
import axios from 'axios';
import router from '../router';
import { useUserStore } from '@/stores/user';
import { useViewStore } from '@/stores/view';

export default function useAxios() {
	function postData(url, payload, callback = () => {}, failCallback = () => {}) {
		const user = useUserStore();
		const viewStore = useViewStore();
		viewStore.setLoading(true);
		axios
			.post(url, payload, {
				headers: {
					authorization: user.userInfo.access_token,
				},
			})
			.then((res) => {
				viewStore.setLoading(false);
				if (res.data.success) {
					if (callback) {
						callback(res.data);
					}
				} else {
					// post에 대한 응답으로 success가 false일 경우 실행할 로직(서버와 통신은 성공한 상태)
					if (failCallback) {
						failCallback(res.data);
					}
				}
			})
			// 서버와 통신자체가 실패한 상태
			.catch((error) => {
				viewStore.setLoading(false);
				//http 에러 시 열려있는 모든 모달 닫기
				// store.commit('modal/closeModalAll');
				console.error(error);
			});
	}

	function fetchData(url, params = {}, callback = () => {}, failCallback = () => {}) {
		const user = useUserStore();
		const viewStore = useViewStore();
		viewStore.setLoading(true);
		axios
			.get(url, {
				headers: {
					authorization: user.userInfo.access_token,
				},
				params: params,
			})
			.then((res) => {
				viewStore.setLoading(false);
				if (res.data?.success) {
					callback(res.data);
				} else {
					if (failCallback) {
						failCallback(res.data);
					}
				}
			})
			.catch((error) => {
				console.log(error);
				viewStore.setLoading(false);
				//http 에러 시 열려있는 모든 모달 닫기
				// store.commit('modal/closeModalAll');
				const status = error?.message.slice(-3);
				if (status === '500') {
					router.push('/404');
				} else {
					if (status === '429') {
						router.push('/');
					} else {
						router.push('/');
					}
				}
			});
	}

	return {
		postData,
		fetchData,
	};
}
