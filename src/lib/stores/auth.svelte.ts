import { pb } from '../pb';
import { getContext, setContext } from 'svelte';

class AuthStore {
	constructor() {}

	get isValid() {
		return pb.authStore.isValid;
	}

	get model() {
		return pb.authStore.model;
	}

	async login(username: string, password: string) {
		try {
			await pb.collection('users').authWithPassword(username, password);
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

const STORE_CONTEXT_ID: string = 'store:auth';

export const setAuthStoreContext = function (): void {
	setContext(STORE_CONTEXT_ID, new AuthStore());
};

export const getAuthStoreContext = function (): AuthStore {
	return getContext<AuthStore>(STORE_CONTEXT_ID);
};
