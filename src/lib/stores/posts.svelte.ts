import { pb } from '../pb';
import { getContext, setContext } from 'svelte';

class PostStore {
	posts = $state([]);

	constructor() {}

	async search() {
		try {
			const data = await pb.collection('posts').getList();

			console.log(data);
		} catch (error) {
			console.log(error);
		}
	}

	create() {}

	update() {}

	delete() {}
}

const STORE_CONTEXT_ID: string = 'store:posts';

export const setPostStoreContext = function (): void {
	setContext(STORE_CONTEXT_ID, new PostStore());
};

export const getPostStoreContext = function (): PostStore {
	return getContext<PostStore>(STORE_CONTEXT_ID);
};
