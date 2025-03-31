import dayjs from 'dayjs';

// input 에 전화번호 입력할 때 자동으로 하이픈(-)넣어주는 기능
export const autoContactDash = (e) => {
	//e.target.value = e.target.value
	//	.replace(/[^0-9]/g, '') // 숫자만 입력 받기
	//	.replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3') // 3자리,4자리,4자리로 끊고 -로 구분하기
	//	.replace(/(\-{1,2})$/g, ''); //eslint-disable-line
	//const val = e.target.value.replace(/[^0-9]*/s, ''); //숫자이외 제거
	//if (val.substring(0, 2) == '02') {
	//	e.target.value = e.target.value.replace(/[^0-9]/g, '').replace(/([0-9]{2})([0-9]{3,4})([0-9]{4})$/g, '$1-$2-$3');
	//} else if (
	//	val.substring(0, 2) == '8' ||
	//	val.substring(0, 2) == '15' ||
	//	val.substring(0, 2) == '16' ||
	//	val.substring(0, 2) == '18'
	//) {
	//	e.target.value = e.target.value.replace(/[^0-9]/g, '').replace(/([0-9]{4})([0-9]{4})$/g, '$1-$2');
	//} else {
	//	e.target.value = e.target.value
	//		.replace(/[^0-9]/g, '')
	//		.replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
	//		.replace(/(\-{1,2})$/g, ''); //eslint-disable-line
	//}
};

// 전화번호 사이에 -(dash) 넣어주는 유틸 함수
export const contactDash = (phoneNum) => {
	if (typeof phoneNum !== 'string') return;

	const val = phoneNum.replace(/[^0-9]*/s, ''); //숫자이외 제거
	if (val.substring(0, 2) == '02') {
		return phoneNum.replace(/[^0-9]/g, '').replace(/([0-9]{2})([0-9]{3,4})([0-9]{4})$/g, '$1-$2-$3');
	} else if (
		val.substring(0, 2) == '8' ||
		val.substring(0, 2) == '15' ||
		val.substring(0, 2) == '16' ||
		val.substring(0, 2) == '18'
	) {
		return phoneNum.replace(/[^0-9]/g, '').replace(/([0-9]{4})([0-9]{4})$/g, '$1-$2');
	} else {
		return phoneNum
			.replace(/[^0-9]/g, '')
			.replace(/([0-9]{3})([0-9]{3,4})([0-9]{4})$/g, '$1-$2-$3')
			.replace(/(\-{1,2})$/g, ''); //eslint-disable-line
	}
};

export const bizDash = (bizNumber) => {
	if (typeof bizNumber !== 'string') return;

	{
		return bizNumber
			.replace(/[^0-9]/g, '')
			.replace(/([0-9]{3})([0-9]{2})([0-9]{5})$/g, '$1-$2-$3')
			.replace(/(\-{1,2})$/g, ''); //eslint-disable-line
	}
};

export const priceFormat = (num) => {
	if (typeof num === 'number') {
		return new Intl.NumberFormat().format(num);
	} else if (typeof num === 'string') {
		return num;
	} else {
		return '-';
	}
};

export const dateFormat = (date, type = undefined, lang = 'KOR') => {
	// type : 'HHmm' | 'HHmmss'
	if (!date) {
		return '-';
	}

	if (type === 'HHmm') {
		if (lang === 'KOR') {
			return dayjs(date).format('YYYY년 M월 D일 H시 m분');
		}
		return dayjs(date).format('YYYY. MM. DD HH:mm');
	} else if (type === 'HHmmss') {
		return dayjs(date).format('YYYY. MM. DD HH:mm:ss');
	} else {
		if (lang === 'KOR') {
			return dayjs(date).format('YYYY년 M월 D일');
		}
		return dayjs(date).format('YYYY. MM. DD');
	}
};
