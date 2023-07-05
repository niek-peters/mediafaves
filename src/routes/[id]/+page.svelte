<script lang="ts">
	import FilmList from '$lib/components/FilmList.svelte';
	import FilmSearch from '$lib/components/FilmSearch.svelte';

	import { ListStyle, filmLists, moveFilmTo, saveLists, updateFilm } from '$lib/stores/filmLists';
	import { dragFilm, setLastMove } from '$lib/stores/dragFilm';

	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	export let data: PageData;

	$: filmList = $filmLists.find((list) => list.id === data.id);
	$: films = filmList?.films;

	onMount(async () => {
		if (!filmList || !films) return;

		for (const film of films) {
			const res = await fetch(`api/films/${film.id}`);
			const filmData = await res.json();

			updateFilm(filmList.id, filmData);
		}
	});

	$: draggedFilm = $dragFilm.film;
	$: filmWidth = $dragFilm.width;
	$: measurements = $dragFilm.measurements;
	$: moveIndex = $dragFilm.moveIndex;
	$: lastMoveIndex = $dragFilm.lastMoveIndex;

	$: if (filmList && draggedFilm && moveIndex !== undefined && moveIndex !== lastMoveIndex) {
		moveFilmTo(filmList.id, draggedFilm, moveIndex);

		// Stop infinite loop
		setLastMove(moveIndex);
		saveLists();

		// Trigger Svelte reactivity
		filmList = filmList;
	}
</script>

{#if filmList && films}
	<div class="flex justify-center w-3/4">
		<FilmList {filmList} />
	</div>
	<FilmSearch {filmList} />

	{#if draggedFilm && filmWidth}
		<div
			class="absolute z-20 flex items-center {filmList.style !== ListStyle.Grid
				? 'gap-6'
				: films.length > 15
				? 'gap-3'
				: films.length > 10
				? 'gap-4'
				: 'gap-6'} transition bg-zinc-600/50 pointer-events-none p-1 {filmList.style !==
			ListStyle.Grid
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
					class={filmList.style !== ListStyle.Grid
						? 'text-2xl'
						: films.length > 15
						? 'text-xl'
						: 'text-2xl'}
				>
					#{films.indexOf(draggedFilm) + 1}
				</p>
				<h2
					class="font-semibold {filmList.style !== ListStyle.Grid
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
{/if}
