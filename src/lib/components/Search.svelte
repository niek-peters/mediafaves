<script lang="ts">
	import { dragged, dragHandlers } from '$stores/dragged';
	import {
		searchHandlers,
		searchValue,
		searchResults,
		filteredResults,
		searchFor,
		resultData
	} from '$stores/search';
	import { entryHandlers } from '$stores/entries';

	import { ListType, type Entry, type List, RankType } from '$lib/types';
	import { onDestroy, onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { listHandlers } from '../stores/lists';
	import Fa from 'svelte-fa';
	import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
	import { subtext } from '../utils/subtext';

	export let list: List;
	export let entries: Entry[];

	$: list && resetSearch();

	function resetSearch() {
		searchValue.set('');
		searchResults.set([]);
		filteredResults.set([]);
		hoverIndex = undefined;
		selectedIndex = 0;
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
		if (!searchEl || (document.activeElement !== null && document.activeElement !== document.body))
			return;

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

	$: filmsType = list.type === ListType.Films;
	$: $searchFor = filmsType && searchForShows ? ListType.Shows : list.type;

	let searchForShows = false;

	$: pageCount = $resultData ? Math.ceil($resultData.count / $resultData.limit) : 0;
	$: currentPage = $resultData ? Math.floor($resultData.offset / $resultData.limit) + 1 : 0;
</script>

<section
	class="hidden 2xl:visible 2xl:flex sticky top-12 flex-col gap-4 w-1/4 h-fit bg-zinc-700/50 p-4 rounded-md border border-zinc-500/20 shadow-xl backdrop-blur-sm"
>
	<h2 class="text-3xl px-1 h-10 font-bold">Search</h2>
	<form
		autocomplete="off"
		class="flex flex-col gap-1"
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
			placeholder="Enter a {!filmsType
				? listHandlers.getSnippet(list.type).replace(/(s)(?!.*\1)/, '')
				: searchForShows
				? 'show'
				: 'film'} title"
			bind:value={$searchValue}
			on:input={async () => {
				if (!$searchValue) {
					searchResults.set([]);
					filteredResults.set([]);
					return;
				}

				await searchHandlers.scheduleSearch(
					!filmsType ? list.type : searchForShows ? ListType.Shows : ListType.Films
				);
			}}
		/>
		{#if filmsType}
			<button
				type="button"
				on:click={async () => {
					searchForShows = !searchForShows;

					if ($searchValue)
						await searchHandlers.scheduleSearch(searchForShows ? ListType.Shows : ListType.Films);
				}}
				class="text-left w-1/2 border {searchForShows
					? 'bg-indigo-600/20 hover:bg-indigo-600/30 border-indigo-500/10'
					: 'bg-violet-600/20 hover:bg-violet-600/30 border-violet-500/10'} transition px-4 text-sm py-1 text-zinc-200/60 h-full rounded-md"
				>Switch to {!searchForShows ? 'shows' : 'films'}</button
			>
		{/if}
	</form>
	{#if !searchValue}
		<p class="flex px-1 text-zinc-400">Start typing to search</p>
	{:else if $searchResults.length === 0}
		<p class="flex px-1 text-zinc-400">No results found</p>
	{:else if $filteredResults.length === 0 && pageCount <= 1}
		<p class="flex px-1 text-zinc-400">All results are in your list</p>
	{:else}
		<div class="flex flex-col gap-2">
			{#if $resultData && $searchValue}
				<div class="flex gap-2 px-1 items-center text-zinc-300">
					<p class="w-fit shrink-0">Results: {$resultData.count}</p>
					<span class="bg-zinc-600 w-px h-4 shrink-0" />
					<div class="flex gap-1 shrink-0">
						<button
							on:click={async () => {
								if (!$resultData.offset) return;

								await searchHandlers.scheduleSearch(
									!filmsType ? list.type : searchForShows ? ListType.Shows : ListType.Films,
									$resultData.limit,
									Math.max(0, $resultData.offset - $resultData.limit)
								);
							}}
							class="{$resultData.offset
								? 'hover:text-zinc-400'
								: 'text-zinc-600 cursor-not-allowed'} transition"><Fa icon={faCaretLeft} /></button
						>
						<button
							on:click={async () => {
								if ($resultData.offset + $resultData.limit >= $resultData.count) return;

								await searchHandlers.scheduleSearch(
									!filmsType ? list.type : searchForShows ? ListType.Shows : ListType.Films,
									$resultData.limit,
									$resultData.offset + $resultData.limit
								);
							}}
							class="{$resultData.offset + $resultData.limit < $resultData.count
								? 'hover:text-zinc-400'
								: 'text-zinc-600 cursor-not-allowed'} transition"
						>
							<Fa icon={faCaretRight} />
						</button>
					</div>
					<span class="bg-zinc-600 w-px h-4 shrink-0" />
					<div class="flex gap-1 overflow-hidden items-center">
						{#each new Array(Math.min(5, pageCount)) as _, index}
							{#if (currentPage < 3 ? index + 1 : index + currentPage - 2) <= pageCount}
								<button
									on:click={async () => {
										const offset =
											(currentPage < 3 ? index + 1 : index + currentPage - 2) * $resultData.limit -
											$resultData.limit;

										await searchHandlers.scheduleSearch(
											!filmsType ? list.type : searchForShows ? ListType.Shows : ListType.Films,
											$resultData.limit,
											offset
										);
									}}
								>
									<p
										class="border-b h-[1.4rem] {(currentPage < 3
											? index + 1
											: index + currentPage - 2) === currentPage
											? 'border-zinc-200'
											: 'border-transparent'}"
									>
										{currentPage < 3 ? index + 1 : index + currentPage - 2}
									</p>
								</button>
							{/if}
						{/each}
						{#if pageCount > 10 && currentPage < pageCount - 2}
							{#if currentPage < pageCount - 3}
								<p>...</p>
							{/if}
							<button
								on:click={async () => {
									const offset = pageCount * $resultData.limit - $resultData.limit;

									await searchHandlers.scheduleSearch(
										!filmsType ? list.type : searchForShows ? ListType.Shows : ListType.Films,
										$resultData.limit,
										offset
									);
								}}
							>
								<p class="border-b h-[1.4rem] border-transparent">{pageCount}</p>
							</button>
						{/if}
					</div>
				</div>
				{#if $filteredResults.length === 0}
					<p class="flex px-1 pt-3 text-zinc-400">All results from this page are in your list</p>
				{/if}
			{/if}
			<div class="flex flex-col max-h-[58vh] overflow-y-auto" bind:this={resultsEl}>
				{#each $filteredResults as entry, index}
					<button
						id="results-{index}"
						draggable="true"
						class="flex outline-none gap-4 p-1 rounded-md overflow-hidden h-[6.5rem] flex-shrink-0 {hoverIndex ===
						index
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
							if (list.rankType === RankType.Ranks) await entryHandlers.add(entry);
							else if (list.rankType === RankType.Tiers && list.tiers && list.tiers.length)
								await entryHandlers.add({
									...entry,
									tier: list.tiers[list.tiers.length - 1]
								});

							selectedIndex = 0;
							searchHandlers.filter(entries);
						}}
						on:dragstart={(e) => {
							hoverIndex = undefined;
							selectedIndex = 0;
							dragHandlers.startDrag(e, entry, true);
						}}
						on:drag={(e) => {
							dragHandlers.drag(e);
						}}
						on:dragend={() => {
							dragHandlers.dragEnd();

							if ($filteredResults.length === 1) {
								searchValue.set('');
								filteredResults.set([]);
							} else searchHandlers.filter(entries);

							dragHandlers.setLastMove(undefined);
						}}
					>
						<img
							draggable="false"
							src={entry.poster_url}
							alt=""
							class="h-24 aspect-[2/3] object-cover rounded-sm"
						/>
						<div class="flex flex-col max-h-24 overflow-hidden">
							<h2
								class="text-xl overflow-hidden text-left leading-6 py-1 line-clamp-3 overflow-ellipsis"
							>
								{entry.title}
							</h2>
							<p
								class="text-left text-xs text-zinc-400 overflow-hidden whitespace-nowrap overflow-ellipsis"
							>
								{subtext.get(list, entry)}
							</p>
						</div>
					</button>
				{/each}
			</div>
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
		background-color: #11111240;
		border-radius: 1rem;
		overflow: hidden;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background-color: #0d0d0e60;
		border-radius: 1rem;

		&:hover {
			background-color: #08080980;
		}
	}
</style>
