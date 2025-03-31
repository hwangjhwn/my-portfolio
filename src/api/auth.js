import useAxios from '@/composables/useAxios';

const { fetchData, postData } = useAxios();

export function signin(params) {
	// 관리자 로그인
	return new Promise((resolve, reject) => {
		postData(
			`/v1/admin/signin`,
			params,
			(res) => {
				resolve(res);
			},
			(fail) => {
				reject(fail.error);
			},
		);
	});
}
export function requestToken(params) {
	// 관리자 토큰 재발급
	return new Promise((resolve, reject) => {
		postData(
			`/requestToken`,
			params,
			(res) => {
				resolve(res);
			},
			(fail) => {
				reject(fail.error);
			},
		);
	});
}
