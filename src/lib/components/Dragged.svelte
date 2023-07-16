<script lang="ts">
	import { dragHandlers } from '$stores/dragged';

	import { type List, type Entry, type Dragged, ListStyle, ListType } from '$lib/types';
	import { entryHandlers } from '$stores/entries';
	import { colCount } from '../stores/styling';
	import { dates } from '../utils/dates';
	import { subtext } from '../utils/subtext';

	export let entries: Entry[];
	export let list: List;
	export let dragged: Dragged;

	$: entry = dragged.entry;
	$: entryWidth = dragged.width;
	$: measurements = dragged.measurements;
	$: moveIndex = dragged.moveIndex;
	$: lastMoveIndex = dragged.lastMoveIndex;

	let moving = false;
	$: if (entry && moveIndex !== undefined && moveIndex !== lastMoveIndex && !moving) {
		moving = true;

		// Add the entry to the list if it isn't on there yet
		if (!entries.includes(entry)) {
			entryHandlers.add(entry);
		}

		entryHandlers.moveTo(entryHandlers.getId(entry), moveIndex);

		// Stop infinite loop
		dragHandlers.setLastMove(moveIndex);

		moving = false;
	}
</script>

{#if entry && entryWidth}
	{#if !dragged.fromSearch}
		<div
			class="fixed z-20 flex items-center {list.style !== ListStyle.Grid
				? 'gap-6'
				: $colCount > 3
				? 'gap-3'
				: $colCount > 2
				? 'gap-4'
				: 'gap-6'} transition bg-zinc-600/50 pointer-events-none p-1 {list.style !== ListStyle.Grid
				? 'pr-4'
				: $colCount > 3
				? 'pr-1'
				: $colCount > 2
				? 'pr-2'
				: 'pr-4'} rounded-md"
			style="width: {entryWidth}px; 
                        top: {measurements.topDistance + measurements.mouseY}px; 
                        left: {measurements.leftDistance + measurements.mouseX}px;"
		>
			<img src={entry.poster_url} alt="" class="h-36 aspect-[2/3] object-cover rounded-sm" />
			<div class="flex flex-col gap-1 max-h-36 overflow-hidden">
				<p
					class={list.style !== ListStyle.Grid
						? 'text-2xl'
						: $colCount > 3
						? 'text-xl'
						: 'text-2xl'}
				>
					#{entries.indexOf(entry) + 1}
				</p>
				<h2
					class="font-semibold line-clamp-3 {list.style !== ListStyle.Grid
						? 'text-3xl'
						: $colCount > 4
						? 'text-sm'
						: $colCount > 3
						? 'text-lg'
						: $colCount > 2
						? 'text-xl'
						: 'text-3xl'}"
				>
					{entry.title}
				</h2>
				<p class="text-xs text-zinc-400 overflow-hidden whitespace-nowrap overflow-ellipsis">
					{subtext.get(list, entry)}
				</p>
			</div>
		</div>
	{:else}
		<div
			class="fixed z-20 flex outline-none gap-4 p-1 rounded-md overflow-hidden h-[6.5rem] flex-shrink-0 transition bg-zinc-600/50 pointer-events-none items-center"
			style="width: {entryWidth}px; 
                        top: {measurements.topDistance + measurements.mouseY}px; 
                        left: {measurements.leftDistance + measurements.mouseX}px;"
		>
			<img src={entry.poster_url} alt="" class="h-24 aspect-[2/3] object-cover rounded-sm" />
			<div class="flex flex-col max-h-24 overflow-hidden">
				<h2 class="text-xl overflow-hidden text-left leading-6 py-1 line-clamp-3 overflow-ellipsis">
					{entry.title}
				</h2>
				<p
					class="text-left text-xs text-zinc-400 overflow-hidden whitespace-nowrap overflow-ellipsis"
				>
					{subtext.get(list, entry)}
				</p>
			</div>
		</div>
	{/if}
{/if}
