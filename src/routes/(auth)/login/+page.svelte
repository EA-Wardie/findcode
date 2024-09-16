<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	import ArrowRight from 'lucide-svelte/icons/arrow-right';
	import ArrowLeft from 'lucide-svelte/icons/arrow-left';
	import { getAuthContext } from '$lib/stores/auth.svelte';
	import { goto } from '$app/navigation';

	const auth = getAuthContext();

	let username = $state<string>('');
	let password = $state<string>('');

	const attemptLogin = function() {
		auth.login(username, password).then(() => {
			history.back();
		});
	};
</script>

<section>
	<h1>Sign In</h1>
</section>

<section class="w-full flex justify-center">
	<Card.Root class="w-full max-w-md">
		<form onsubmit={attemptLogin}>
			<Card.Header>
				<Card.Title>Sign in to your account</Card.Title>
				<Card.Description>Use the form below to sign in</Card.Description>
			</Card.Header>
			<Card.Content class="flex flex-col gap-6">
				<Label class="flex flex-col gap-1">
					Username
					<Input required placeholder="Enter your username" bind:value={username} />
				</Label>
				<Label class="flex flex-col gap-1">
					Password
					<Input required type="password" placeholder="Enter your password" minlength={8} bind:value={password} />
				</Label>
			</Card.Content>
			<Card.Footer class="flex flex-col gap-4">
				<Button class="w-full gap-2" variant="secondary" onclick={() => history.back()}>
					<ArrowLeft class="w-4 h-4"/>
					Cancel
				</Button>
				<Button class="w-full gap-2" type="submit">
					Sign In
					<ArrowRight class="w-4 h-4" />
				</Button>
			</Card.Footer>
		</form>
	</Card.Root>
</section>
