<script lang="ts">
	import '../../app.css';
	import { page } from '$app/stores';
	import { getAuthStoreContext } from '$lib/stores/auth.svelte.js';
	import { ModeWatcher } from 'mode-watcher';
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';
	import * as AlertDialog from '$lib/components/ui/alert-dialog';

	let { children } = $props();

	const authStore = getAuthStoreContext();

	const attemptLogout = function() {
		authStore.logout();
	};
</script>

<svelte:head>
	<title>{$page.data.title} | find::CODE</title>
</svelte:head>

<ModeWatcher />

<div class="w-full h-full min-h-dvh flex flex-col">
	<header class="w-full h-10 sticky top-0 grow-0 shrink-0 flex items-center justify-between border-y">
		<nav class="h-full flex items-center">
			<a class="px-4 mt-1" href="/"><h3>find::<i>CODE</i></h3></a>
			<Separator orientation="vertical" />
		</nav>
		{#if !authStore.isValid}
			<nav class="flex">
				<Separator orientation="vertical" />
				<Button variant="ghost" href="/register">Sign Up</Button>
				<Separator orientation="vertical" />
				<Button variant="ghost" href="/login">Sign In</Button>
			</nav>
		{:else}
			<nav class="flex">
				<Separator orientation="vertical" />
				<Button variant="ghost" href="/account">Account</Button>
				<Separator orientation="vertical" />
				<AlertDialog.Root>
					<AlertDialog.Trigger class={buttonVariants({variant: 'ghost'})}>Sign Out</AlertDialog.Trigger>
					<AlertDialog.Content>
						<AlertDialog.Header>
							<AlertDialog.Title>End session?</AlertDialog.Title>
							<AlertDialog.Description>
								Are you sure you'd like to end your current session? You will have to sign in again.
							</AlertDialog.Description>
						</AlertDialog.Header>
						<AlertDialog.Footer>
							<AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
							<AlertDialog.Action class={buttonVariants({variant: 'destructive'})}
												onclick={attemptLogout}>Sign Out
							</AlertDialog.Action>
						</AlertDialog.Footer>
					</AlertDialog.Content>
				</AlertDialog.Root>
				<Separator orientation="vertical" />
			</nav>
		{/if}
	</header>
	<main class="w-full max-w-7xl mx-auto grow flex flex-col gap-8 md:gap-12 p-4 md:p-12">
		{@render children()}
	</main>
	<footer class="w-full sticky bottom-0 grow-0 shrink-0 flex justify-between border-y">
		<nav class="flex">
			<Button variant="ghost" class="flex gap-1.5" href="https://kit.svelte.dev/" target="_blank"><p>Built
				with</p>
				<p class="text-amber-500">SvelteKit</p></Button>
			<Separator orientation="vertical" />
		</nav>
		<nav></nav>
	</footer>
</div>
