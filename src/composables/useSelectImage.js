// import { useStore } from 'vuex';

export default function useSelectImage({ image, images, thumbnail, thumbnails, maxNum = 5 }) {
	// const store = useStore();

	function getImage(event) {
		const maxSize = 5 * 1024 * 1024;
		// 파일이 존재하는지
		if (event.target.files && event.target.files[0]) {
			// 이미지일 때만 this.image에 넣음
			if (event.target.files[0].type.includes('image') && !event.target.files[0].type.includes('gif')) {
				// 2.5MB보다 크면 안받도록
				if (event.target.files[0].size > maxSize) {
					// store.commit('toast/alert', '2.5MB 이하 이미지를 선택해 주세요.');
					window.alert('2.5MB 이하 이미지를 선택해주세요.');
				} else {
					let fileName = event.target.files[0].name;
					image.value = event.target.files[0];
					const reader = new FileReader();
					reader.onload = (event) => {
						thumbnail.value = { src: event.target.result, name: fileName };
					};

					reader.readAsDataURL(event.target.files[0]);
				}
			} else {
				window.alert('이미지를 선택해주세요.(gif 제외)');
				// store.commit('toast/alert', '이미지를 선택해주세요. (.gif 제외)');
			}
		}
		event.target.value = '';
	}
	function getImages(event) {
		// 새로 첨부하는 이미지 존재 & 기존에 가지고 있는 이미지 + 새로 첨부하는 이미지의 개수가 5개 이하
		const key = Date.now().toString();
		const maxSize = 5 * 1024 * 1024;
		//추가 이미지의 개수와 새로 업로드하려는 이미지 개수의 합이 5를 넘어가면 동작 막기
		if (images.value.length + event.target.files.length > maxNum) {
			// store.commit('toast/alert', '추가이미지는 최대 5장까지 업로드 가능합니다.');
			window.alert(`추가이미지는 최대 ${maxNum}장까지 업로드 가능합니다.`);
			return;
		}
		if (
			event.target.files &&
			thumbnails.value.length + event.target.files.length > 0 &&
			thumbnails.value.length + event.target.files.length <= maxNum
		) {
			for (let i = 0; i < event.target.files.length; i++) {
				if (event.target.files[i].size > maxSize) {
					// store.commit('toast/alert', '2.5MB 이하 이미지를 선택해 주세요.');
					window.alert('2.5MB 이하 이미지를 선택해 주세요.');
					break;
				} else {
					images.value.push({ src: event.target.files[i], key: key + `/${i}`, name: event.target.files[i].name });
					let fileName = event.target.files[i].name;
					const reader = new FileReader();
					reader.onload = (event) => {
						thumbnails.value.push({ src: event.target.result, key: key + `/${i}`, name: fileName });
					};
					reader.readAsDataURL(event.target.files[i]);
					console.log(images.value);
				}
			}
		} else if (thumbnails.value.length + event.target.files.length > 9) {
			window.alert(`추가이미지는 ${maxNum}장 초과 등록할 수 없습니다.`);
			// store.commit('toast/alert', '추가이미지는 5장 초과 등록할 수 없습니다.');
		} else {
			window.alert('이미지를 선택해주세요. (.gif 제외)');
			// store.commit('toast/alert', '이미지를 선택해주세요. (.gif 제외)');
		}
		event.target.value = '';
	}
	return {
		getImage,
		getImages,
	};
}
