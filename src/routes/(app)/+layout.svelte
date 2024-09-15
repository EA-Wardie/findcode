<script lang="ts">
	import '../../app.css';
	import { page } from '$app/stores';
	import { getAuthContext, setAuthContext } from '$lib/stores/auth.svelte.js';
	import { ModeWatcher } from 'mode-watcher';
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';

	let { children } = $props();

	setAuthContext();

	const auth = getAuthContext();
</script>

<svelte:head>
	<title>{$page.data.title} | FindCode</title>
</svelte:head>

<ModeWatcher />

<div class="w-full h-full min-h-dvh flex flex-col">
	<header class="w-full h-10 sticky top-0 grow-0 shrink-0 flex items-center justify-between border-y">
		<nav class="h-full flex items-center">
			<Separator orientation="vertical" />
			<a class="px-4" href="/"><h3>find::<i>CODE</i></h3></a>
			<Separator orientation="vertical" />
		</nav>
		{#if !auth.isValid}
			<nav class="flex">
				<Separator orientation="vertical" />
				<Button data-sveltekit-replacestate variant="ghost" href="/login">Sign In</Button>
				<Separator orientation="vertical" />
				<Button data-sveltekit-replacestate variant="ghost" href="/register">Sign Up</Button>
				<Separator orientation="vertical" />
			</nav>
		{:else}
			<nav class="flex">
				<Separator orientation="vertical" />
				<Button variant="ghost" href="/account">Account</Button>
				<Separator orientation="vertical" />
			</nav>
		{/if}
	</header>
	<main class="w-full grow flex flex-col gap-8 md:gap-12 p-4 md:p-12">
		{@render children()}
	</main>
	<footer class="w-full h-12 sticky bottom-0 grow-0 shrink-0 border-y"></footer>
</div>
