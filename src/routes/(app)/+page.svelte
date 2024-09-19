<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	import Search from 'lucide-svelte/icons/search';
	import { getPostStoreContext } from '$lib/stores/posts.svelte';

	const postStore = getPostStoreContext();
</script>

<section class="w-full grow flex flex-col justify-center items-center gap-2">
	<h3>::Enter a term to find some code::</h3>
	<div class="w-full max-w-xl flex gap-2">
		<Input placeholder="Find code..." />
		<Button onclick={() => postStore.search()}>
			<Search class="w-4 h-4" />
		</Button>
	</div>
</section>