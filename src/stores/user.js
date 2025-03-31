import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
	state: () => {
		return {
			isLogin: false,
			userInfo: {},
		};
	},
	actions: {
		setLogin() {
			this.isLogin = true;
		},
		setLogOut() {
			this.isLogin = false;
			this.userInfo = {};
		},
		setUserInfo(payload) {
			this.userInfo = payload;
		},
	},
	persist: true,
});
