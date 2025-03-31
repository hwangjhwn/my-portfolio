import { autoContactDash, bizDash, contactDash, priceFormat } from '@/composables/format';

const numberonly = (el) => {
	// <input v-numberonly>
	// 숫자만 입력받고, 문자는 입력받지 않음
	el.addEventListener('input', (e) => {
		e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
	});
};

const firstDemical = (el) => {
	// <input v-firstDemical>
	// 숫자만 입력받고, 소수점 첫째 자리까지만 입력받음
	el.addEventListener('input', (e) => {
		const rep = /^[\d]*\.?[\d]{0,1}$/;
		if (!rep.test(e.target.value)) {
			e.target.value = e.target.value.substring(0, e.target.value.length - 1);
		}
		return;
	});
};

const secondDemical = (el) => {
	// <input v-secondDemical>
	// 숫자만 입력받고, 소수점 둘째 자리까지만 입력받음
	el.addEventListener('input', (e) => {
		const rep = /^[\d]*\.?[\d]{0,2}$/;
		if (!rep.test(e.target.value)) {
			e.target.value = e.target.value.substring(0, e.target.value.length - 1);
		}
		return;
	});
};

const price = (el) => {
	// <span v-price>
	// <input v-price>
	// 3자리 단위로 숫자 사이에 ,찍음
	const tagName = el.tagName;
	if (tagName === 'INPUT') {
		el.addEventListener('input', (e) => {
			e.target.value = priceFormat(e.target.value.replaceAll(',', ''));
		});
	} else {
		el.textContent = priceFormat(el.textContent);
	}
};

const contact = (el) => {
	// <input v-contact>
	// <span v-contact>
	// 전화번호 사이에 - 찍음
	const tagName = el.tagName;
	if (tagName === 'INPUT') {
		el.addEventListener('input', (e) => {
			e.target.value = contactDash(e.target.value);
		});
	} else {
		el.textContent = contactDash(el.textContent);
	}
};

const bizNum = (el) => {
	// 사업자번호 3-2-5 자리로 구분
	const tagName = el.tagName;
	if (tagName === 'INPUT') {
		el.addEventListener('input', (e) => {
			e.target.value = bizDash(e.target.value);
		});
	} else {
		el.textContent = bizDash(el.textContent);
	}
};

//const date = (el, binding) => {
//	// <span v-date:"'YMD'">
//	// <span v-date:"'YMDHm'">
//	// <span v-date="'YMDHmS'">
//	// 날짜 형식으로 변환함
//	// el이 'YYYY-MM-DD HH:mm:SS' 형태로 들어올 것이라고 전제함
//	if (el.textContent === '') return; // fetch Delay 동안에 빈 내용 무시
//	const splited = el.textContent.split(' ');
//	let [YMD, HMS] = splited;

//	let res;
//	// prettier-ignore
//	switch (binding.value) {
//			case 'YMD':
//				res =
//					YMD.replace('-', '년 ').replace('-', '월 ').concat('일');
//				break;
//			case 'YMDHm':
//				HMS = HMS.slice(0,6);
//				res =
//					YMD.replace('-', '년 ').replace('-', '월 ').concat('일')
//					+ ' '
//					+ HMS.replace(':', '시 ').replace(':', '분 ');
//					break;
//			case 'YMDHmS':
//				res =
//					YMD.replace('-', '년 ').replace('-', '월 ').concat('일')
//					+ ' '
//					+ HMS.replace(':', '시 ').replace(':', '분 ')
//					+ '초'
//		}
//	el.textContent = res;
//};

export { numberonly, price, contact, bizNum, firstDemical, secondDemical };
