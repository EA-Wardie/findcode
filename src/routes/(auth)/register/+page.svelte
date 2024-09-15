<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	import ArrowRight from 'lucide-svelte/icons/arrow-right';
	import { getAuthContext } from '$lib/stores/auth.svelte';
	import { goto } from '$app/navigation';

	const auth = getAuthContext();

	let username = $state<string>('');
	let password = $state<string>('');

	const attemptRegister = function() {
		auth.register(username, password).then(() => {
			goto('/', { replaceState: true });
		});
	};
</script>

<section>
	<h1>Sign Up</h1>
</section>

<section class="w-full flex justify-center">
	<Card.Root class="w-full max-w-md">
		<form onsubmit={attemptRegister}>
			<Card.Header>
				<Card.Title>Sign up for an account</Card.Title>
				<Card.Description>Use the form below to sign up</Card.Description>
			</Card.Header>
			<Card.Content class="flex flex-col gap-6">
				<Label class="flex flex-col gap-1">
					Username
					<Input required placeholder="Enter a username" bind:value={username} />
				</Label>
				<Label class="flex flex-col gap-1">
					Password
					<Input required type="password" placeholder="Enter a password" minlength={8} bind:value={password} />
				</Label>
			</Card.Content>
			<Card.Footer>
				<Button type="submit" class="w-full gap-2">
					Sign Up
					<ArrowRight class="w-4 h-5" />
				</Button>
			</Card.Footer>
		</form>
	</Card.Root>
</section>
