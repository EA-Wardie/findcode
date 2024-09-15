<script lang="ts">
	import '../../app.css';
	import { page } from '$app/stores';
	import { ModeWatcher } from 'mode-watcher';
	import { Separator } from '$lib/components/ui/separator';
	import { setAuthContext } from '$lib/stores/auth.svelte';

	let { children } = $props();

	setAuthContext();
</script>

<svelte:head>
	<title>{$page.data.title} | FindCode</title>
</svelte:head>

<ModeWatcher />

<div class="w-full h-full min-h-dvh flex flex-col">
	<header class="w-full h-10 sticky top-0 grow-0 shrink-0 flex items-center justify-between border-y">
		<nav class="h-full flex items-center">
			<Separator orientation="vertical" />
			<a data-sveltekit-replacestate class="px-4" href="/"><h3>find::<i>CODE</i></h3></a>
			<Separator orientation="vertical" />
		</nav>
	</header>
	<main class="w-full grow flex flex-col justify-center items-center gap-8 md:gap-12 p-4 md:p-12">
		{@render children()}
	</main>
</div>