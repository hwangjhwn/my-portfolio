import axios from 'axios';
import router from '@/router';
import { useUserStore } from '@/stores/user';
import { requestToken } from '@/api/auth';
import { useTokenStore } from '@/stores/token';
import { useViewStore } from '@/stores/view';

axios.defaults.baseURL = process.env.VUE_APP_API_URI;
//axios.defaults.timeout = store.state.time.AXIOS_TIMEOUT; // 최대 10초

axios.interceptors.request.use(
	// interceptor를 통해 백엔드 API로부터 받은 값을 먼저 처리함
	(request) => {
		return request;
	},
	(error) => {
		// 2xx 외의 범위에 있는 상태코드는 여기에서 실행됨
		console.log(error.response);
		return error;
	},
);

axios.interceptors.response.use(
	// interceptor를 통해 백엔드 API로부터 받은 값을 먼저 처리함
	(response) => {
		const userStore = useUserStore();
		const tokenStore = useTokenStore();
		const viewStore = useViewStore();
		// 토큰 불일치 시 로그아웃
		if (response.data.error?.code == 91) {
			alert('다른 곳에서 로그인이 감지되어 로그아웃됩니다.');
			userStore.setLogOut();
			viewStore.setLoading(false);
		}
		// 토큰 만료 시 토큰 재발급
		if (response.data.error?.code == 97) {
			return requestToken({ refresh_token: tokenStore.refresh_token })
				.then(async (res) => {
					tokenStore.setAccessToken(res.data.access_token);
					// 중단된 요청을 재요청
					response.config.headers = {
						authorization: res.data.access_token,
						ClientSecret: 'WeroU1wqXZF2zyr8H0U2pDAOOCetxKdJn2SsQpL3PrpkbJ4FWfOu3iEO15VfJNeI',
					};
					const newResponse = await axios.request(response.config);
					viewStore.setLoading(false);
					return newResponse;
				})
				.catch((err) => {
					// refresh token 만료 시 로그아웃
					if (err.code == 87) {
						userStore.setLogOut();
						viewStore.setLoading(false);
						return { data: { success: false, code: 87, message: '세션이 만료되어 로그아웃합니다.' } };
					}
				});
		} else {
			return response;
		}
	},
	(error) => {
		// 2xx 외의 범위에 있는 상태코드는 여기에서 실행됨
		if (error.code === 'ERR_NETWORK') {
			window.alert('네트워크 에러. 잠시 후 시도해주세요');
		} else if (error.code === 'ERR_BAD_RESPONSE') {
			window.alert('서버가 응답하지 않습니다. 잠시 후 시도해주세요');
		} else if (error.code === 'ECONNABORTED') {
			window.alert('요청시간을 초과했습니다. 잠시 후 시도해주세요');
		} else if (error.code === 'ERR_BAD_REQUEST') {
			window.alert('올바르지 않은 요청입니다. 잠시 후 시도해주세요');
			//router.replace({ name: '404' });
		} else {
			window.alert(error.code);
			// store.commit('toast/error', error.code);
		}
		// store.commit('spinnerOff');
		console.log(error);
		return error;
	},
);

export default axios;
