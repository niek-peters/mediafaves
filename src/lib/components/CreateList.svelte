<script lang="ts">
	import { goto } from '$app/navigation';

	import Fa from 'svelte-fa';
	import { faPlus } from '@fortawesome/free-solid-svg-icons';

	import { filmLists } from '$src/lib/firestore/filmLists';

	import { ListStyle, type AuthStore, ListType } from '$lib/types';
	import { gameLists } from '../firestore/gameLists';

	export let authStore: AuthStore | null;
</script>

<div class="w-full flex flex-col items-center gap-12 pt-12">
	<p class="text-4xl font-semibold">Create a list to get started</p>
	<button
		on:click={async () => {
			if (!authStore) return;

			const id = await filmLists.add({
				name: 'New list',
				owner_id: authStore.uid,
				style: ListStyle.Column,
				type: ListType.Films
			});

			await goto(`/films/${id}`);
		}}
		class="flex items-center gap-4 p-4 bg-zinc-700 hover:bg-zinc-600/70 transition rounded-md shadow-2xl"
	>
		<Fa icon={faPlus} class="text-3xl text-cyan-500" />
		<p class="text-3xl">New films list</p>
	</button>
	<button
		on:click={async () => {
			if (!authStore) return;

			const id = await gameLists.add({
				name: 'New list',
				owner_id: authStore.uid,
				style: ListStyle.Column,
				type: ListType.Games
			});

			await goto(`/games/${id}`);
		}}
		class="flex items-center gap-4 p-4 bg-zinc-700 hover:bg-zinc-600/70 transition rounded-md shadow-2xl"
	>
		<Fa icon={faPlus} class="text-3xl text-emerald-500" />
		<p class="text-3xl">New games list</p>
	</button>
</div>
