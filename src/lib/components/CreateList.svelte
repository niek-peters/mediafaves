<script lang="ts">
	import { goto } from '$app/navigation';

	import Fa from 'svelte-fa';
	import { faPlus } from '@fortawesome/free-solid-svg-icons';

	import { firestoreLists } from '$firestore/lists';

	import { ListStyle, type User, ListType, listData } from '$lib/types';

	export let user: User | null;
</script>

<div class="w-full flex flex-col items-center gap-12 pt-12">
	<p class="text-4xl font-semibold">Create a list to get started</p>
	<div class="flex flex-col gap-6">
		{#each listData as data}
			<button
				on:click={async () => {
					if (!user) return;

					const id = await firestoreLists.add({
						name: `New ${data.slug} list`,
						owner_id: user.uid,
						style: ListStyle.Column,
						type: data.type
					});

					await goto(`/${id}`);
				}}
				class="flex items-center gap-4 p-4 bg-zinc-700 hover:bg-zinc-600/70 transition rounded-md shadow-2xl"
			>
				<Fa icon={faPlus} class="text-3xl {data.textColor}" />
				<p class="text-3xl">New {data.slug} list</p>
			</button>
		{/each}
	</div>
</div>
