<script lang="ts">
	import { setLastMove } from '$stores/dragFilm';
	import { filmStore } from '$stores/films';

	import { type List, type Film, type DragFilm, ListStyle } from '$lib/types';

	export let films: Film[];
	export let list: List;
	export let dragFilm: DragFilm;

	$: draggedFilm = dragFilm.film;
	$: filmWidth = dragFilm.width;
	$: measurements = dragFilm.measurements;
	$: moveIndex = dragFilm.moveIndex;
	$: lastMoveIndex = dragFilm.lastMoveIndex;

	let moving = false;
	$: if (draggedFilm && moveIndex !== undefined && moveIndex !== lastMoveIndex && !moving) {
		moving = true;

		filmStore.moveTo(draggedFilm.imdb_id, moveIndex);

		// Stop infinite loop
		setLastMove(moveIndex);

		moving = false;
	}
</script>

{#if draggedFilm && filmWidth}
	<div
		class="absolute z-20 flex items-center {list.style !== ListStyle.Grid
			? 'gap-6'
			: films.length > 15
			? 'gap-3'
			: films.length > 10
			? 'gap-4'
			: 'gap-6'} transition bg-zinc-600/50 pointer-events-none p-1 {list.style !== ListStyle.Grid
			? 'pr-4'
			: films.length > 15
			? 'pr-1'
			: films.length > 10
			? 'pr-2'
			: 'pr-4'} rounded-md"
		style="width: {filmWidth}px; 
                        top: {measurements.topDistance +
			measurements.mouseY -
			measurements.topY}px; 
                        left: {measurements.leftDistance +
			measurements.mouseX -
			measurements.leftX}px;"
	>
		<img src={draggedFilm.poster_url} alt="" class="h-36 aspect-[2/3] object-cover rounded-sm" />
		<div class="flex flex-col gap-1 max-h-36 overflow-hidden">
			<p
				class={list.style !== ListStyle.Grid
					? 'text-2xl'
					: films.length > 15
					? 'text-xl'
					: 'text-2xl'}
			>
				#{films.indexOf(draggedFilm) + 1}
			</p>
			<h2
				class="font-semibold {list.style !== ListStyle.Grid
					? 'text-2xl line-clamp-3'
					: films.length > 20
					? 'text-sm line-clamp-4'
					: films.length > 15
					? 'text-lg line-clamp-4'
					: films.length > 10
					? 'text-xl line-clamp-3'
					: 'text-2xl line-clamp-3'}"
			>
				{draggedFilm.title}
			</h2>
		</div>
	</div>
{/if}
