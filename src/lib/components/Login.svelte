<script lang="ts">
	import Fa from 'svelte-fa';
	import { faGoogle } from '@fortawesome/free-brands-svg-icons';

	import { authHandlers } from '$src/lib/stores/user';
</script>

<div class="w-full flex flex-col items-center gap-12 pt-12">
	<p class="text-4xl font-semibold">Log in to create lists</p>
	<button
		on:click={async () => {
			await authHandlers.login();
		}}
		class="flex items-center gap-4 p-4 bg-zinc-700 hover:bg-zinc-600/70 transition rounded-md shadow-2xl"
	>
		<Fa icon={faGoogle} class="text-3xl text-emerald-500" />
		<p class="text-3xl">Log in</p>
	</button>
</div>
