<script lang="ts">
	import { goto } from '$app/navigation';

	import Fa from 'svelte-fa';
	import {
		faBorderAll,
		faGripLinesVertical,
		faPlus,
		faTrash
	} from '@fortawesome/free-solid-svg-icons';

	import { dragged, dragHandlers } from '$stores/dragged';
	import { resultData, searchHandlers, searchResults } from '$stores/search';
	import { entryHandlers } from '$stores/entries';
	import { listHandlers } from '$stores/lists';
	import { breakpoint } from '$stores/windowWidth';
	import { user } from '$stores/user';
	import { colCount } from '$stores/styling';

	import { subtext } from '$utils/subtext';

	import { firestoreLists } from '$firestore/lists';

	import type { List, Entry } from '$lib/types';
	import { browser } from '$app/environment';
	import { onDestroy, onMount } from 'svelte';

	export let lists: List[];
	export let list: List;
	export let entries: Entry[];
	export let tiers: string[];

	$: isYourList = $user && $user.uid === list.owner_id;

	let hoverIndex: number | undefined = undefined;

	let newTierName: string | undefined;

	// Sort entries by tier (high to low)
	$: entries = entries.sort((a, b) => {
		if (!a.tier || !b.tier) return 0;

		const aTier = tiers.findIndex((t) => t === a.tier);
		const bTier = tiers.findIndex((t) => t === b.tier);

		return aTier - bTier;
	});

	$: longestTier = tiers.reduce((a, b) => (a.length > b.length ? a : b), '');
	$: longestTierName = longestTier.length * 1.1;
	// $: if (browser && longestTier && longestTierName) {
	// 	const longestTierEl = document.getElementById(`tier-${longestTier}`);
	// 	console.log(longestTier, longestTierEl);

	// 	if (longestTierEl) {
	// 		longestTierEl.style.width = `${longestTierName}ch`;

	// 		const width = longestTierEl.offsetWidth;
	// 		console.log(width);

	// 		const tierElements = document.querySelectorAll('[id^="tier-"]');
	// 		tierElements.forEach((el) => {
	// 			(el as HTMLElement).style.width = `${width}px`;
	// 		});
	// 	}
	// }

	onMount(() => {
		if (!browser) return;

		document.addEventListener('click', unfocusTierName);
	});

	onDestroy(() => {
		if (!browser) return;

		document.removeEventListener('click', unfocusTierName);
	});

	function unfocusTierName() {
		const tierName = document.querySelector('[contenteditable="true"]:focus');
		if (!tierName) return;

		(tierName as HTMLElement).blur();
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<section
	class="flex flex-col w-full 2xl:w-3/4 gap-4 h-fit bg-zinc-700/50 p-4 rounded-md border border-zinc-500/20 shadow-xl backdrop-blur-sm"
>
	<div class="flex justify-between gap-2">
		{#if isYourList}
			<input
				type="text"
				spellcheck="false"
				class="bg-transparent outline-none border-none text-3xl h-10 w-full px-1 font-bold leading-normal focus:bg-zinc-600/20 transition rounded-md"
				value={list.name}
				on:input={async (e) => {
					// @ts-ignore
					await firestoreLists.updateName(list.id, e.target.value);
				}}
			/>
		{:else}
			<h2 class="text-3xl h-10 w-full px-1 font-bold leading-normal">{list.name}</h2>
		{/if}
		{#if isYourList}
			<div class="flex gap-2">
				<button
					on:click={async () => {
						if (confirm('Are you sure you want to delete this list?')) {
							// Get index of current list
							const index = lists.findIndex((l) => l.id === list.id);
							if (index === -1) return;

							const gotoList = lists.length > 1 ? lists[index - 1] : null;

							await firestoreLists.remove(list.id);

							await goto(gotoList ? `/${gotoList.id}` : '/');
						}
					}}
					class="flex items-center justify-center p-1 w-10 aspect-square hover:bg-zinc-600/20 transition rounded-md"
					><Fa icon={faTrash} class="text-xl text-rose-800" /></button
				>
			</div>
		{/if}
	</div>
	{#if !tiers.length}
		<p class="text-zinc-400 px-1 py-2">
			Create a tier to start adding {listHandlers.getSnippet(list.type)}
		</p>
	{:else}
		{#if entries.length === 0}
			<p
				class="text-zinc-400 px-1 py-2"
				on:dragover={() => {
					dragHandlers.dragOver(entries.length);
				}}
			>
				Click on a searched {listHandlers.getSnippet(list.type)} to add it to the list
			</p>
		{/if}
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div class="relative flex flex-col">
			<div
				class="grid rounded-md overflow-hidden bg-zinc-700/50"
				style="grid-template-columns: 10% 1fr"
			>
				{#each tiers as tier, index}
					<div
						class="flex w-full min-h-[9.5rem] text-3xl {index % 2 === 0 ? 'bg-zinc-600/10' : ''}"
					>
						<div
							id="tier-{tier}"
							class="flex items-center justify-center min-h-[9.5rem] w-full px-2 overflow-hidden bg-rose-600 {tier.length *
								1.1 >
							19
								? 'text-lg'
								: tier.length * 1.1 > 15
								? 'text-xl'
								: tier.length * 1.1 > 9
								? 'text-2xl'
								: 'text-3xl'} font-bold"
							style="filter: hue-rotate({(360 / tiers.length) * index}deg);}"
						>
							{#if isYourList}
								<!-- svelte-ignore a11y-click-events-have-key-events -->
								<div
									contenteditable="true"
									spellcheck="false"
									class="outline-none resize-none border-none w-full h-full bg-transparent flex items-center justify-center overflow-hidden"
									on:click|stopPropagation
									on:input={async (e) => {
										// @ts-ignore
										let newTierName = e.target.innerText;

										if (tier === newTierName) return;

										if (tiers.includes(newTierName)) {
											return;
											// @ts-ignore
											// e.target.innerText = tier;
											// return alert('A tier with that name already exists');
										}

										// @ts-ignore
										await firestoreLists.updateTier(list.id, tier, newTierName);
									}}
									on:focusout={async (e) => {
										// @ts-ignore
										let newTierName = e.target.innerText;

										if (tier === newTierName) return;

										if (tiers.includes(newTierName)) {
											// @ts-ignore
											e.target.innerText = tier;
											return alert('A tier with that name already exists');
										}

										// @ts-ignore
										await firestoreLists.updateTier(list.id, tier, newTierName);
									}}
								>
									<p class="line-clamp-5 overflow-ellipsis leading-normal text-center align-middle">
										{tier}
									</p>
								</div>
							{:else}
								<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
								<!-- svelte-ignore a11y-click-events-have-key-events -->
								<h2
									class="flex items-center justify-center w-full h-full line-clamp-5 overflow-ellipsis leading-normal text-center"
								>
									{tier}
								</h2>
							{/if}
						</div>
					</div>
					<div
						on:dragover|stopPropagation|preventDefault={(e) => {
							const dataTransfer = e.dataTransfer;
							if (!dataTransfer) return;
							dataTransfer.dropEffect = 'move';

							dragHandlers.dragOverTier(tier);

							// Get last index of that tier
							const tierEntries = entries.filter((entry) => entry.tier === tier);
							const lastIndex = entries.indexOf(tierEntries[tierEntries.length - 1]);

							dragHandlers.dragOver(lastIndex + 1);
						}}
						on:dragend={() => {
							dragHandlers.dragEnd();
						}}
						on:contextmenu|preventDefault={async () => {
							if (confirm('Are you sure you want to delete this tier and all its entries?')) {
								// Get all entries in this tier
								const tierEntries = entries.filter((entry) => entry.tier === tier);

								for (const entry of tierEntries) entryHandlers.remove(entryHandlers.getId(entry));

								await firestoreLists.removeTier(list.id, tier);

								// Re-search and filter
								if (!$searchResults.length) return;

								if ($resultData)
									await searchHandlers.scheduleSearch(
										list.type,
										$resultData.limit,
										$resultData.offset
									);
							}
						}}
						class="flex w-full min-h-[9.5rem] text-3xl {index % 2 === 0 ? 'bg-zinc-600/10' : ''}"
					>
						<div class="grid grid-cols-4 w-full">
							{#each entries as entry, entryIndex}
								<div
									on:mouseenter={() => {
										hoverIndex = entryIndex;
									}}
									on:mouseleave={() => {
										hoverIndex = undefined;
									}}
									draggable={isYourList}
									class="{entry.tier === tier
										? 'flex'
										: 'hidden'} relative items-center gap-3 transition-[background-color] {isYourList
										? 'cursor-grab'
										: ''} p-1 pr-4 rounded-md {$dragged.entry &&
									entryHandlers.getId($dragged.entry) === entryHandlers.getId(entry)
										? 'opacity-0'
										: ''} {hoverIndex === entryIndex ? 'bg-zinc-600/20' : ''}"
									on:dragstart={(e) => {
										if (!isYourList) return;

										hoverIndex = undefined;
										dragHandlers.startDrag(e, entry);
									}}
									on:drag|stopPropagation={(e) => {
										dragHandlers.drag(e);
									}}
									on:dragover|stopPropagation|preventDefault={(e) => {
										const dataTransfer = e.dataTransfer;
										if (!dataTransfer) return;
										dataTransfer.dropEffect = 'move';

										if ($dragged.entry && $dragged.entry.tier !== tier)
											dragHandlers.dragOverTier(tier);

										dragHandlers.dragOver(entryIndex);
									}}
									on:dragend={dragHandlers.dragEnd}
									on:contextmenu|preventDefault|stopPropagation={async () => {
										entryHandlers.remove(entryHandlers.getId(entry));

										// Re-search and filter
										if (!$searchResults.length) return;

										if ($resultData)
											await searchHandlers.scheduleSearch(
												list.type,
												$resultData.limit,
												$resultData.offset
											);
									}}
								>
									<img
										src={entry.poster_url}
										alt=""
										class="h-36 aspect-[2/3] object-cover rounded-sm"
										draggable="false"
									/>
									<div class="flex flex-col gap-1 max-h-36 overflow-hidden">
										<h2 class="font-semibold line-clamp-3 text-xl">
											{entry.title}
										</h2>
										<p
											class="text-xs text-zinc-400 overflow-hidden whitespace-nowrap overflow-ellipsis"
										>
											{subtext.get(list, entry)}
										</p>
									</div>
								</div>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</div>
	{/if}
	<form
		on:submit|preventDefault={async () => {
			if (!newTierName) return;

			if (tiers.includes(newTierName)) return alert('A tier with that name already exists');
			await firestoreLists.addTier(list.id, newTierName);

			newTierName = undefined;
		}}
		class="flex items-center w-fit gap-4 p-2 pl-4 bg-zinc-700/80 rounded-md"
	>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="flex gap-4 items-center" on:mousedown|stopPropagation on:click|stopPropagation>
			<h3 class="text-lg font-semibold">Create a new tier:</h3>
			<input
				class="py-2 px-4 rounded-md bg-zinc-600/30 focus:bg-zinc-600/40 transition outline-none border border-zinc-500/10"
				type="text"
				placeholder="The name for your tier"
				bind:value={newTierName}
			/>
		</div>
		<button
			class="flex items-center justify-center w-10 h-10 rounded-md bg-zinc-600/40 hover:bg-zinc-600/60 transition"
		>
			<Fa icon={faPlus} class="text-2xl text-zinc-400" />
		</button>
	</form>
</section>
