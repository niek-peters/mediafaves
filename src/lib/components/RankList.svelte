<script lang="ts">
	import { goto } from '$app/navigation';

	import Fa from 'svelte-fa';
	import { faBorderAll, faGripLinesVertical, faTrash } from '@fortawesome/free-solid-svg-icons';
	import { DragList, dragging, isDragged, newList } from '@niek-peters/svelte-draggable';

	import { listHandlers } from '$stores/lists';
	import { breakpoint } from '$stores/windowWidth';
	import { user } from '$stores/user';
	import { colCount } from '$stores/styling';

	import { subtext } from '$utils/subtext';

	import { firestoreLists } from '$firestore/lists';

	import { ListStyle, type List, type Entry, Breakpoints } from '$lib/types';
	import type { Writable } from 'svelte/store';
	import { browser } from '$app/environment';

	export let lists: List[];
	export let list: List;
	export let entries: Writable<Entry[]>;
	export let listUid: string;

	const dragList = newList(listUid, entries);

	$: isYourList = $user && $user.uid === list.owner_id;

	$: cols = Math.min(Math.ceil($entries.length / 5), 5);
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
	$: rowCount = Math.max(Math.ceil($entries.length / $colCount), Math.min($entries.length, 5));

	let entryWidth = 0;
	$: if ($colCount && browser) {
		const grid = document.getElementById(list.id);
		if (grid) {
			const gridWidth = grid.clientWidth;
			entryWidth = gridWidth / $colCount;
		}
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<section
	class="flex flex-col w-full 2xl:w-3/4 gap-2 lg:gap-4 h-fit bg-zinc-700/50 px-4 py-2 lg:py-4 md:rounded-md md:border md:border-zinc-500/20 md:shadow-xl backdrop-blur-sm"
>
	<div class="flex justify-between gap-2">
		{#if isYourList}
			<input
				type="text"
				spellcheck="false"
				class="bg-transparent outline-none border-none text-2xl lg:text-3xl h-10 w-full px-1 font-bold leading-normal focus:bg-zinc-600/20 transition rounded-md"
				value={list.name}
				on:input={async (e) => {
					// @ts-ignore
					await firestoreLists.updateName(list.id, e.target.value);
				}}
			/>
		{:else}
			<h2 class="text-2xl lg:text-3xl h-10 w-full px-1 font-bold leading-normal">{list.name}</h2>
		{/if}
		{#if isYourList}
			<div class="hidden md:flex gap-2">
				<button
					on:click={async () => {
						await firestoreLists.updateStyle(list.id, ListStyle.Column);
					}}
					class="hidden md:flex items-center justify-center p-1 w-10 aspect-square hover:bg-zinc-600/20 transition rounded-md"
					><Fa
						icon={faGripLinesVertical}
						class="text-xl {list.style === ListStyle.Column ? 'text-white' : 'text-zinc-500'}"
					/></button
				>
				<button
					on:click={async () => {
						await firestoreLists.updateStyle(list.id, ListStyle.Grid);
					}}
					class="hidden md:flex items-center justify-center p-1 w-10 aspect-square hover:bg-zinc-600/20 transition rounded-md"
					><Fa
						icon={faBorderAll}
						class="text-xl {list.style === ListStyle.Grid ? 'text-white' : 'text-zinc-500'}"
					/></button
				>
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
	{#if $entries.length === 0}
		<p class="text-zinc-400 px-1 py-2">
			Click on a searched {listHandlers.getSnippet(list.type)} to add it to the list
		</p>
	{:else}
		<DragList
			let:index
			list={dragList}
			listClass="relative w-full {list.style === ListStyle.Grid && $colCount > 2
				? 'grid grid-flow-row grid-auto-cols'
				: list.style === ListStyle.Grid
				? 'grid grid-flow-col'
				: list.style === ListStyle.Column
				? 'flex flex-col'
				: ''}"
			listStyle={$colCount > 2
				? `grid-template-columns: repeat(${$colCount}, ${100 / $colCount}%);`
				: `grid-template-rows: repeat(${rowCount}, minmax(0, 1fr)); 
					grid-template-columns: repeat(${$colCount}, ${100 / $colCount}%);`}
		>
			{@const entry = dragList.get(index)}
			<div
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
					: 'pr-4'} rounded-md {!$dragging ? 'hover:bg-zinc-600/20' : ''} {$dragging &&
				$dragging.element.id === entry.uid
					? 'bg-zinc-600/20'
					: ''}"
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
						class="font-semibold line-clamp-3 text-xl {list.style !== ListStyle.Grid
							? 'md:text-3xl'
							: $colCount > 4
							? 'md:text-sm'
							: $colCount > 3
							? 'md:text-lg'
							: $colCount > 2
							? 'md:text-xl'
							: 'md:text-3xl'}"
					>
						{entry.title}
					</h2>
					<p class="text-xs text-zinc-400 overflow-hidden whitespace-nowrap overflow-ellipsis">
						{subtext.get(list, entry)}
					</p>
				</div>
			</div>
		</DragList>
	{/if}
</section>
