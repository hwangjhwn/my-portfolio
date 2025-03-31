export const modalOpenScrollFix = () => {
	const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
	document.body.style.position = 'fixed';
	document.body.style.top = `-${scrollY}`;
	document.body.style.right = 0;
	document.body.style.left = 0;
};
export const modalCloseScrollRestore = () => {
	// modal창이 내려가는 트랜지션 시간때문인지 setTimeout으로 딜레이를 걸어주지 않으면 스크롤복귀가 안되는 버그가 있음
	const toId = setTimeout(() => {
		const scrollY = document.body.style.top;
		document.body.style.position = '';
		document.body.style.top = '';
		document.body.style.left = '';
		document.body.style.right = '';
		const yPos = parseInt(scrollY || '0') * -1;
		if (yPos > 0) {
			window.scrollTo(0, yPos);
		}
		clearTimeout(toId);
	}, 200);
};
