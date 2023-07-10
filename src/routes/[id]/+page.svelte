<script lang="ts">
	import FilmList from '$lib/components/FilmList.svelte';
	import FilmSearch from '$lib/components/FilmSearch.svelte';

	import { ListStyle, filmLists, loadingFilmLists, moveFilmTo } from '$lib/stores/filmLists';
	import { dragFilm, setLastMove } from '$lib/stores/dragFilm';

	import type { PageData } from './$types';
	import { Circle } from 'svelte-loading-spinners';
	import { authHandlers, authStore } from '$lib/stores/authStore';
	import { faGoogle } from '@fortawesome/free-brands-svg-icons';
	import Fa from 'svelte-fa';
	export let data: PageData;

	$: filmList = $filmLists.find((list) => list.id === data.id);
	$: films = filmList?.films;

	$: draggedFilm = $dragFilm.film;
	$: filmWidth = $dragFilm.width;
	$: measurements = $dragFilm.measurements;
	$: moveIndex = $dragFilm.moveIndex;
	$: lastMoveIndex = $dragFilm.lastMoveIndex;

	let moving = false;
	$: if (
		filmList &&
		draggedFilm &&
		moveIndex !== undefined &&
		moveIndex !== lastMoveIndex &&
		!moving
	) {
		moving = true;

		moveFilmTo(filmList.id, draggedFilm, moveIndex).then(() => {
			moving = false;
		});

		// Stop infinite loop
		setLastMove(moveIndex);

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
{:else if $authStore.isLoading}
	<div class="w-full flex flex-col items-center gap-12 pt-12">
		<p class="text-4xl font-semibold">Logging you in...</p>
		<Circle size="8" unit="rem" color="rgb(161 161 170)" />
	</div>
{:else if $authStore.currentUser === null}
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
{:else if $loadingFilmLists}
	<div class="w-full flex flex-col items-center gap-12 pt-12">
		<p class="text-4xl font-semibold">Loading list...</p>
		<Circle size="8" unit="rem" color="rgb(161 161 170)" />
	</div>
{/if}
