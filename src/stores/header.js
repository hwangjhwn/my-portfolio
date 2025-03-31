import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useHeaderStore = defineStore('header', () => {
	const isOpen = ref(false);
	const setOpen = (state) => {
		isOpen.value = state;
	};
	const toggle = () => {
		isOpen.value = !isOpen.value;
	};
	return {
		isOpen,
		setOpen,
		toggle,
	};
});
