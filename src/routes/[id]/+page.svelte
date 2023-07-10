<script lang="ts">
	import FilmList from '$lib/components/FilmList.svelte';
	import FilmSearch from '$lib/components/FilmSearch.svelte';

	import { dragFilm, setLastMove } from '$stores/dragFilm';

	import type { PageData } from './$types';
	import { authHandlers, authStore } from '$lib/stores/authStore';
	import { faGoogle } from '@fortawesome/free-brands-svg-icons';
	import Fa from 'svelte-fa';
	import { ListStyle } from '$src/lib/stores/lists';
	import { firestoreFilms } from '$src/lib/firestore/films';
	import { background } from '$stores/background';
	import { films } from '$src/lib/stores/films';
	import { lists } from '$src/lib/stores/lists';

	export let data: PageData;
	$: list = data.list;
	$: {
		const foundList = $lists.find((store) => store.id === list.id);
		if (foundList) list = foundList;
	}
	$: films.set(data.films);

	$: draggedFilm = $dragFilm.film;
	$: filmWidth = $dragFilm.width;
	$: measurements = $dragFilm.measurements;
	$: moveIndex = $dragFilm.moveIndex;
	$: lastMoveIndex = $dragFilm.lastMoveIndex;

	let moving = false;
	$: if (draggedFilm && moveIndex !== undefined && moveIndex !== lastMoveIndex && !moving) {
		moving = true;

		firestoreFilms.moveTo(list.id, draggedFilm.imdb_id, moveIndex).then(() => {
			moving = false;
		});

		// Stop infinite loop
		setLastMove(moveIndex);
	}

	$: if ($films) {
		background.set($films.length > 0 ? $films[0].backdrop_url : null);
	}
</script>

{#if list && $films}
	<div class="flex justify-center w-3/4">
		<FilmList {list} films={$films} />
	</div>
	<FilmSearch {list} films={$films} />

	{#if draggedFilm && filmWidth}
		<div
			class="absolute z-20 flex items-center {list.style !== ListStyle.Grid
				? 'gap-6'
				: $films.length > 15
				? 'gap-3'
				: $films.length > 10
				? 'gap-4'
				: 'gap-6'} transition bg-zinc-600/50 pointer-events-none p-1 {list.style !== ListStyle.Grid
				? 'pr-4'
				: $films.length > 15
				? 'pr-1'
				: $films.length > 10
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
						: $films.length > 15
						? 'text-xl'
						: 'text-2xl'}
				>
					#{$films.indexOf(draggedFilm) + 1}
				</p>
				<h2
					class="font-semibold {list.style !== ListStyle.Grid
						? 'text-2xl line-clamp-3'
						: $films.length > 20
						? 'text-sm line-clamp-4'
						: $films.length > 15
						? 'text-lg line-clamp-4'
						: $films.length > 10
						? 'text-xl line-clamp-3'
						: 'text-2xl line-clamp-3'}"
				>
					{draggedFilm.title}
				</h2>
			</div>
		</div>
	{/if}
{:else if $authStore === null}
	<div class="w-full flex flex-col items-center gap-12 pt-12">
		<p class="text-4xl font-semibold">Log in to create lists</p>
		<button
			on:click={async () => {
				await authHandlers.login();
			}}
			class="flex items-center gap-4 p-4 bg-zinc-700 hover:bg-zinc-600/70 transition rounded-md shadow-2xl"
		>
			<Fa icon={faGoogle} class="text-3xl text-emerald-500" />
			<p class="text-3xl">Log in</p>
		</button>
	</div>
{/if}
