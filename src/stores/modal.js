import { defineStore } from 'pinia';
import { modalOpenScrollFix, modalCloseScrollRestore } from '@/composables/useModalScrollControl';

export const useModalStore = defineStore('modal', {
	state: () => {
		return {
			isOpen: false, // 모달 열렸는지 여부
			modal: {
				modalExample: false,
			},
		};
	},
	actions: {
		openModal(modalName) {
			if (this.modal[modalName] !== undefined) {
				this.modal[modalName] = true;
				modalOpenScrollFix();
			} else {
				console.error('no modal', modalName);
			}
		},
		closeModal(modalName) {
			if (this.modal[modalName] !== undefined) {
				this.modal[modalName] = false;
				modalCloseScrollRestore();
			} else {
				console.error(this.modal[modalName], modalName);
			}
		},
		closeAll() {
			modalCloseScrollRestore();
			this.$reset();
		},
	},
});
