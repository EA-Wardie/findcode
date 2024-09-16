<script lang="ts">
	import { setAuthContext } from '$lib/stores/auth.svelte';

	let { children } = $props();

	setAuthContext();
</script>

{@render children()}