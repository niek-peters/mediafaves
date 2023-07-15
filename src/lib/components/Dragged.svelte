<script lang="ts">
	import { dragHandlers } from '$stores/dragged';

	import { type List, type Entry, type Dragged, ListStyle } from '$lib/types';
	import { entryHandlers } from '$stores/entries';
	import { colCount } from '../stores/styling';

	export let entries: Entry[];
	export let list: List;
	export let dragged: Dragged;

	$: draggedEntry = dragged.entry;
	$: entryWidth = dragged.width;
	$: measurements = dragged.measurements;
	$: moveIndex = dragged.moveIndex;
	$: lastMoveIndex = dragged.lastMoveIndex;

	let moving = false;
	$: if (draggedEntry && moveIndex !== undefined && moveIndex !== lastMoveIndex && !moving) {
		moving = true;

		entryHandlers.moveTo(entryHandlers.getId(draggedEntry), moveIndex);

		// Stop infinite loop
		dragHandlers.setLastMove(moveIndex);

		moving = false;
	}
</script>

{#if draggedEntry && entryWidth}
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
		<img src={draggedEntry.poster_url} alt="" class="h-36 aspect-[2/3] object-cover rounded-sm" />
		<div class="flex flex-col gap-1 max-h-36 overflow-hidden">
			<p
				class={list.style !== ListStyle.Grid ? 'text-2xl' : $colCount > 3 ? 'text-xl' : 'text-2xl'}
			>
				#{entries.indexOf(draggedEntry) + 1}
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
				{draggedEntry.title}
			</h2>
		</div>
	</div>
{/if}
