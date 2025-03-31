import { defineStore } from 'pinia';

export const useToastStore = defineStore('toast', {
	state: () => {
		return {
			alertContent: '', // 알림창 내용
			confirmContent: '', // 질문창 내용
			confirmCallback: null,
			errorContent: '', // 에러창 내용
		};
	},
	actions: {
		// 알림창
		alert(content) {
			this.alertContent = content;
			this.alertTimeout = setTimeout(() => {
				this.alertContent = '';
			}, 4000);
		},
		closeAlert() {
			this.alertContent = '';
			clearTimeout(this.alertTimeout);
		},

		// 확인(confirm)창
		confirm(content, callback) {
			this.confirmContent = content;
			this.confirmCallback = callback;
		},
		confirmContinue() {
			this.confirmContent = '';
			this.confirmCallback();
		},
		confirmCancel() {
			this.confirmContent = '';
			this.confirmCallback = null;
		},

		// 에러창
		error(content) {
			this.errorContent = content;
		},
		closeError() {
			this.errorContent = '';
		},
	},
});
