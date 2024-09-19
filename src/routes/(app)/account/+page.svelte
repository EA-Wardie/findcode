<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { getAuthStoreContext } from '$lib/stores/auth.svelte';
	import { Button } from '$lib/components/ui/button';

	const authStore = getAuthStoreContext();
</script>

<section>
	<h1>Account</h1>
</section>

<section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
	<Card.Root class="flex flex-col">
		<Card.Header class="grow">
			<Card.Title>My Posts</Card.Title>
			<Card.Description>Your code posts. Add new posts or edit existing ones.</Card.Description>
		</Card.Header>
		<Card.Footer class="justify-end">
			<Button>Manage Posts</Button>
		</Card.Footer>
	</Card.Root>

	<Card.Root class="flex flex-col">
		<Card.Header class="grow">
			<Card.Title>My Profile</Card.Title>
			<Card.Description>Your profile. Update your details as needed.</Card.Description>
		</Card.Header>
		<Card.Footer class="justify-end">
			<Button>View Profile</Button>
		</Card.Footer>
	</Card.Root>

	<Card.Root class="flex flex-col border-destructive">
		<Card.Header class="grow">
			<Card.Title>Danger Zone</Card.Title>
			<Card.Description>Destructive actions such as maintenance mode and deleting your account.</Card.Description>
		</Card.Header>
		<Card.Footer class="justify-end">
			<Button variant="destructive">See Actions</Button>
		</Card.Footer>
	</Card.Root>
</section>