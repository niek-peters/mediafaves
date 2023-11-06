<script lang="ts">
	import Fa from 'svelte-fa';
	import { faGoogle } from '@fortawesome/free-brands-svg-icons';
	import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

	import type { User } from '$src/lib/types';
	import { authHandlers } from '$src/lib/stores/user';

	export let user: User | null;
</script>

<header
	class="flex md:hidden w-full px-4 h-14 items-center justify-between bg-zinc-800 fixed top-0 z-10"
>
	<a href="/" class="text-3xl font-bold flex">
		<span class="text-cyan-500">Media</span><span class="text-emerald-500">Faves</span>
	</a>

	{#if user !== null}
		<button
			class="flex items-center justify-center h-10 w-10 bg-zinc-700/50 rounded-full"
			on:click={async () => {
				await authHandlers.logout();
			}}
		>
			<Fa icon={faRightFromBracket} class="text-rose-500 text-lg" />
		</button>
	{:else}
		<button
			class="flex items-center justify-center h-10 w-10 bg-zinc-700/50 rounded-full"
			on:click={async () => {
				await authHandlers.login();
			}}
		>
			<Fa icon={faGoogle} class="text-emerald-500 text-lg" />
		</button>{/if}
</header>
