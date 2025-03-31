import { defineStore } from 'pinia';
export const useTokenStore = defineStore('token', {
	state: () => {
		return {
			access_token: '',
			refresh_token: '',
			remember_token: '',
		};
	},
	actions: {
		setAccessToken(accessToken) {
			this.access_token = accessToken;
		},
		setRefreshToken(refreshToken) {
			this.refresh_token = refreshToken;
		},
	},
	persist: true,
});
