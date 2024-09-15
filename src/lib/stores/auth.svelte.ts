import { pb } from '$lib/pocketbase';
import { getContext, setContext } from 'svelte';
import type { AuthModel } from 'pocketbase';

class Auth {
	isValid = $state<boolean>(false);
	user = $state<AuthModel>(null);

	constructor() {
		$effect(() => {
			this.isValid = pb.authStore.isValid;
			this.user = pb.authStore.model;
		});
	}

	async login(username: string, password: string) {
		try {
			await pb.collection('users').authWithPassword(username, password);

			this.isValid = pb.authStore.isValid;
			this.user = pb.authStore.model;
		} catch (error) {
			console.error(error);
		}
	}

	async register(username: string, password: string) {
		try {
			await pb.collection('users').create({ username, password, passwordConfirm: password });
			await this.login(username, password);
		} catch (error) {
			console.error(error);
		}
	}

	async logout() {
		pb.authStore.clear();
	}
}

const AUTH_STORE_CONTEXT_ID: string = 'store:auth';

export const setAuthContext = function (): void {
	setContext(AUTH_STORE_CONTEXT_ID, new Auth());
};

export const getAuthContext = function (): Auth {
	return getContext<Auth>(AUTH_STORE_CONTEXT_ID);
};
