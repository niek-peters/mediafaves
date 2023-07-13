<script lang="ts">
	import { dragged, dragHandlers } from '$stores/dragged';
	import { searchHandlers, searchValue, searchResults, filteredResults } from '$stores/search';
	import { entryHandlers } from '$stores/entries';

	import type { Entry, List } from '$lib/types';
	import { onDestroy, onMount } from 'svelte';
	import { browser } from '$app/environment';

	export let list: List;
	export let entries: Entry[];

	$: list && resetSearch();

	function resetSearch() {
		searchValue.set('');
		searchResults.set([]);
		filteredResults.set([]);
		hoverIndex = undefined;
	}

	let hoverIndex: number | undefined = undefined;
	$: selectedIndex = 0;

	let searchEl: HTMLInputElement;
	let resultsEl: HTMLDivElement;

	onMount(() => {
		if (!browser) return;
		document.addEventListener('keypress', focusSearch);

		document.addEventListener('keydown', (e) => navigateResults(e));
	});

	onDestroy(() => {
		if (!browser) return;
		document.removeEventListener('keypress', focusSearch);

		document.removeEventListener('keydown', (e) => navigateResults(e));
	});

	function focusSearch() {
		if (!searchEl || document.activeElement === searchEl) return;

		searchEl.focus();
	}

	function navigateResults(e: KeyboardEvent) {
		// If arrow down is pressed
		if (e.key === 'ArrowDown') {
			if (selectedIndex < $filteredResults.length - 1) selectedIndex++;
			else selectedIndex = 0;

			const firstResult = document.getElementById('results-0');
			if (!firstResult) return;

			resultsEl.scrollTo({
				top: Math.max(0, selectedIndex * firstResult.offsetHeight),
				behavior: 'smooth'
			});
		}

		// If arrow up is pressed
		if (e.key === 'ArrowUp') {
			if (selectedIndex > 0) selectedIndex--;
			else selectedIndex = $filteredResults.length - 1;

			const firstResult = document.getElementById('results-0');
			if (!firstResult) return;

			resultsEl.scrollTo({
				top: Math.max(0, selectedIndex * firstResult.offsetHeight),
				behavior: 'smooth'
			});
		}
	}
</script>

<section
	class="flex flex-col gap-4 w-1/4 h-fit bg-zinc-700/50 p-4 rounded-md border border-zinc-500/20 shadow-xl backdrop-blur-sm"
>
	<h2 class="text-3xl px-1 font-bold">Search</h2>
	<form
		autocomplete="off"
		class="flex flex-col"
		on:submit|preventDefault={async () => {
			if (!$filteredResults.length || $filteredResults.length <= selectedIndex) return;
			entryHandlers.add($filteredResults[selectedIndex]);

			resetSearch();
		}}
	>
		<input
			bind:this={searchEl}
			class="py-2 px-4 rounded-md bg-zinc-600/30 focus:bg-zinc-600/40 transition outline-none border border-zinc-500/10"
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
		<div class="flex flex-col max-h-[58vh] overflow-y-auto" bind:this={resultsEl}>
			{#each $filteredResults as entry, index}
				<button
					id="results-{index}"
					draggable="true"
					class="flex outline-none gap-4 p-1 rounded-md {hoverIndex === index
						? 'bg-zinc-600/20'
						: selectedIndex === index
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
