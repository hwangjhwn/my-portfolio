import useAxios from '@/composables/useAxios';

const { fetchData, postData } = useAxios();

export function editorUpload(params) {
	// 에디터 이미지 업로드
	return new Promise((resolve, reject) => {
		postData(
			`/editorUpload`,
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
