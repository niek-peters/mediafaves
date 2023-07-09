<script lang="ts">
	import Fa from 'svelte-fa';
	import { faGoogle } from '@fortawesome/free-brands-svg-icons';
	import { Circle } from 'svelte-loading-spinners';

	import { login, user } from '$lib/stores/user';
	import { ListStyle, addList, filmLists } from '$lib/stores/filmLists';
	import { goto } from '$app/navigation';
	import { faPlus } from '@fortawesome/free-solid-svg-icons';

	$: if ($filmLists.length) goto(`/${$filmLists[0].id}`);
</script>

{#if $user === undefined}
	<div class="w-full flex flex-col items-center gap-12 pt-12">
		<p class="text-4xl font-semibold">Logging you in...</p>
		<Circle size="8" unit="rem" color="rgb(161 161 170)" />
	</div>
{:else if $user === null}
	<div class="w-full flex flex-col items-center gap-12 pt-12">
		<p class="text-4xl font-semibold">Log in to create lists</p>
		<button
			on:click={login}
			class="flex items-center gap-4 p-4 bg-zinc-700 hover:bg-zinc-600/70 transition rounded-md shadow-2xl"
		>
			<Fa icon={faGoogle} class="text-3xl text-emerald-500" />
			<p class="text-3xl">Log in</p>
		</button>
	</div>
{:else if !$filmLists.length}
	<div class="w-full flex flex-col items-center gap-12 pt-12">
		<p class="text-4xl font-semibold">Create a list to get started</p>
		<button
			on:click={async () => {
				const id = await addList({
					name: 'New film list',
					films: [],
					style: ListStyle.Column
				});

				goto(`/${id}`);
			}}
			class="flex items-center gap-4 p-4 bg-zinc-700 hover:bg-zinc-600/70 transition rounded-md shadow-2xl"
		>
			<Fa icon={faPlus} class="text-3xl text-sky-500" />
			<p class="text-3xl">New list</p>
		</button>
	</div>
{/if}
