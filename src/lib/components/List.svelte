<script lang="ts">
	import { goto } from '$app/navigation';

	import Fa from 'svelte-fa';
	import { faBorderAll, faGripLinesVertical, faTrash } from '@fortawesome/free-solid-svg-icons';

	import { dragged, dragHandlers } from '$stores/dragged';
	import { searchHandlers, searchResults } from '$stores/search';
	import { entryHandlers } from '$stores/entries';
	import { listHandlers } from '$stores/lists';
	import { windowWidth, breakpoint } from '$stores/windowWidth';
	import { user } from '$stores/user';

	import { firestoreLists } from '$firestore/lists';

	import { ListStyle, type List, type Entry, Breakpoints, ListType } from '$lib/types';
	import { colCount } from '../stores/styling';
	import { dates } from '../utils/dates';

	export let lists: List[];
	export let list: List;
	export let entries: Entry[];

	$: isYourList = $user && $user.uid === list.owner_id;

	let hoverIndex: number | undefined = undefined;

	$: cols = Math.min(Math.ceil(entries.length / 5), 5);
	$: $colCount =
		$breakpoint === Breakpoints['2xl']
			? cols
			: $breakpoint === Breakpoints.xl
			? Math.min(cols, 4)
			: $breakpoint === Breakpoints.lg
			? Math.min(cols, 3)
			: $breakpoint === Breakpoints.md
			? Math.min(cols, 2)
			: 1;
	$: rowCount = $colCount > 2 ? Math.min(entries.length, 5) : Math.ceil(entries.length / $colCount);
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
				class="bg-transparent outline-none border-none text-3xl h-10 w-full px-1 font-bold focus:bg-zinc-600/20 transition rounded-md"
				value={list.name}
				on:input={async (e) => {
					// @ts-ignore
					await firestoreLists.updateName(list.id, e.target.value);
				}}
			/>
		{:else}
			<h2 class="text-3xl h-10 w-full px-1 font-bold">{list.name}</h2>
		{/if}
		{#if isYourList}
			<div class="flex gap-2">
				{#if $breakpoint && $breakpoint > Breakpoints.sm}
					<button
						on:click={async () => {
							await firestoreLists.updateStyle(list.id, ListStyle.Column);
						}}
						class="flex items-center justify-center p-1 w-10 aspect-square hover:bg-zinc-600/20 transition rounded-md"
						><Fa
							icon={faGripLinesVertical}
							class="text-xl {list.style === ListStyle.Column ? 'text-white' : 'text-zinc-500'}"
						/></button
					>
					<button
						on:click={async () => {
							await firestoreLists.updateStyle(list.id, ListStyle.Grid);
						}}
						class="flex items-center justify-center p-1 w-10 aspect-square hover:bg-zinc-600/20 transition rounded-md"
						><Fa
							icon={faBorderAll}
							class="text-xl {list.style === ListStyle.Grid ? 'text-white' : 'text-zinc-500'}"
						/></button
					>
				{/if}
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
	{#if entries.length === 0}
		<p
			class="text-zinc-400 px-1 py-2"
			on:dragover={() => {
				// Check if dragged entry is in this list
				// if ($dragged.entry && entries.includes($dragged.entry)) return;

				dragHandlers.dragOver(entries.length);
			}}
		>
			Click on a searched {listHandlers.getSnippet(list.type)} to add it to the list
		</p>
	{:else}
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="relative {list.style === ListStyle.Grid && $colCount > 2
				? 'grid grid-flow-row'
				: list.style === ListStyle.Grid
				? 'grid grid-flow-col'
				: list.style === ListStyle.Column
				? 'flex flex-col'
				: ''}"
			style={$colCount > 2
				? `grid-template-columns: repeat(${$colCount}, ${100 / $colCount}%);`
				: `grid-template-rows: repeat(${rowCount}, minmax(0, 1fr)); 
					grid-template-columns: repeat(${$colCount}, ${100 / $colCount}%);`}
			on:dragover|preventDefault={(e) => {
				const dataTransfer = e.dataTransfer;
				if (!dataTransfer) return;
				dataTransfer.dropEffect = 'move';

				dragHandlers.dragOver(entries.length);
			}}
		>
			{#each entries as entry, index}
				<div
					on:mouseenter={() => {
						hoverIndex = index;
					}}
					on:mouseleave={() => {
						hoverIndex = undefined;
					}}
					draggable={isYourList}
					class="relative flex items-center {list.style !== ListStyle.Grid
						? 'gap-6'
						: $colCount > 3
						? 'gap-3'
						: $colCount > 2
						? 'gap-4'
						: 'gap-6'} transition-[background-color] {isYourList
						? 'cursor-grab'
						: ''} p-1 {list.style !== ListStyle.Grid
						? 'pr-4'
						: $colCount > 3
						? 'pr-1'
						: $colCount > 2
						? 'pr-2'
						: 'pr-4'} rounded-md {$dragged.entry &&
					entryHandlers.getId($dragged.entry) === entryHandlers.getId(entry)
						? 'opacity-0'
						: ''} {hoverIndex === index ? 'bg-zinc-600/20' : ''}"
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

						dragHandlers.dragOver(index);
					}}
					on:dragend={dragHandlers.dragEnd}
					on:contextmenu|preventDefault={async () => {
						entryHandlers.remove(entryHandlers.getId(entry));

						// Re-search and filter
						if (!$searchResults.length) return;

						searchHandlers.unFilter(entry);
					}}
				>
					<img
						src={entry.poster_url}
						alt=""
						class="h-36 aspect-[2/3] object-cover rounded-sm"
						draggable="false"
					/>
					<div class="flex flex-col gap-1 max-h-36 overflow-hidden">
						<p
							class={list.style !== ListStyle.Grid
								? 'text-2xl'
								: $colCount > 3
								? 'text-xl'
								: 'text-2xl'}
						>
							#{index + 1}
						</p>
						<h2
							class="font-semibold {list.style !== ListStyle.Grid
								? 'text-3xl line-clamp-3'
								: $colCount > 4
								? 'text-sm line-clamp-4'
								: $colCount > 3
								? 'text-lg line-clamp-4'
								: $colCount > 2
								? 'text-xl line-clamp-3'
								: 'text-3xl line-clamp-3'}"
						>
							{entry.title}
						</h2>
						<p class="text-xs text-zinc-400 overflow-hidden whitespace-nowrap overflow-ellipsis">
							{dates.getYear(entry.release_date) +
								('authors' in entry
									? ' - ' + entry.authors.join(', ')
									: 'artists' in entry
									? ' - ' + entry.artists.join(', ')
									: '')}
						</p>
					</div>
				</div>
			{/each}
		</div>
	{/if}
</section>
