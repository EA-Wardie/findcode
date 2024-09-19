<script lang="ts">
	import { setAuthStoreContext } from '$lib/stores/auth.svelte';
	import { setPostStoreContext } from '$lib/stores/posts.svelte';

	let { children } = $props();

	setAuthStoreContext();
	setPostStoreContext();
</script>

{@render children()}