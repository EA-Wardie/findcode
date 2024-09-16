<script lang="ts">
	import { getAuthContext } from '$lib/stores/auth.svelte';

	const auth = getAuthContext();
</script>

<section>
	<h1>Account</h1>
</section>

<section>
	<pre>{auth.model?.username}</pre>
</section>