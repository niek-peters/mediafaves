<script lang="ts">
	import { dragged, dragHandlers } from '$stores/dragged';
	import { searchHandlers, searchValue, searchResults, filteredResults } from '$stores/search';
	import { entryHandlers } from '$stores/entries';

	import type { Entry, List } from '$lib/types';

	export let list: List;
	export let entries: Entry[];

	$: list && resetSearch();

	function resetSearch() {
		searchValue.set('');
		searchResults.set([]);
		filteredResults.set([]);
	}

	let hoverIndex: number | undefined = undefined;
</script>

<section
	class="flex flex-col gap-4 w-1/4 h-fit bg-zinc-700/50 p-4 rounded-md border border-zinc-500/20 shadow-xl backdrop-blur-sm"
>
	<h2 class="text-3xl px-1 font-bold">Search</h2>
	<form
		class="flex flex-col"
		on:submit|preventDefault={async () => {
			if ($filteredResults.length === 0) return;
			entryHandlers.add($filteredResults[0]);

			resetSearch();
		}}
	>
		<input
			class="py-2 px-4 rounded-md bg-zinc-600/30 focus:bg-zinc-600/60 transition outline-none border border-zinc-500/10"
			type="text"
			id="search"
			placeholder="Enter a game title"
			bind:value={$searchValue}
			on:input={async () => {
				if (!$searchValue) {
					searchResults.set([]);
					filteredResults.set([]);
					return;
				}

				await searchHandlers.scheduleSearch(list.type);
			}}
		/>
	</form>
	{#if !searchValue}
		<p class="flex px-1 text-zinc-400">Start typing to search</p>
	{:else if $filteredResults.length === 0}
		<p class="flex px-1 text-zinc-400">No results found</p>
	{:else}
		<div class="flex flex-col max-h-[58vh] overflow-y-auto">
			{#each $filteredResults as entry, index}
				<button
					draggable="true"
					class="flex outline-none gap-4 p-1 rounded-md {hoverIndex === index
						? 'bg-zinc-500/20'
						: ''} transition-[background-color] items-center {$dragged.entry &&
					entryHandlers.getId($dragged.entry) === entryHandlers.getId(entry)
						? 'opacity-0'
						: ''} {$filteredResults.length > 5 ? 'mr-4' : ''}"
					on:mouseenter={() => {
						hoverIndex = index;
					}}
					on:mouseleave={() => {
						hoverIndex = undefined;
					}}
					on:click={async () => {
						await entryHandlers.add(entry);

						searchHandlers.filter(entries);
					}}
					on:dragstart={(e) => {
						entryHandlers.add(entry);

						hoverIndex = undefined;
						dragHandlers.startDrag(e, entry);
					}}
					on:drag={(e) => {
						dragHandlers.drag(e);
					}}
					on:dragend={() => {
						dragHandlers.dragEnd();

						if ($filteredResults.length === 1) searchValue.set('');
						else searchHandlers.filter(entries);

						dragHandlers.setLastMove(undefined);
					}}
				>
					<img
						draggable="false"
						src={entry.poster_url}
						alt=""
						class="h-24 aspect-[2/3] object-cover rounded-sm"
					/>
					<h2 class="text-xl max-h-24 overflow-hidden text-left leading-6">{entry.title}</h2>
				</button>
			{/each}
		</div>
	{/if}
</section>

<style lang="scss">
	/* width */
	::-webkit-scrollbar {
		width: 0.5rem;
	}

	/* Track */
	::-webkit-scrollbar-track {
		background-color: #27272a20;
		border-radius: 1rem;
		overflow: hidden;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background-color: #27272a40;
		border-radius: 1rem;

		&:hover {
			background-color: #27272a60;
		}
	}
</style>
