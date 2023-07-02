<script lang="ts">
	import { onMount } from 'svelte';
	import Fa from 'svelte-fa';
	import { faTrash } from '@fortawesome/free-solid-svg-icons';

	let favoriteFilms: Film[] = [];
	$: {
		if (favoriteFilms.length) {
			localStorage.setItem('favoriteFilms', JSON.stringify(favoriteFilms));
		}
	}

	onMount(() => {
		const favoriteFilmsString = localStorage.getItem('favoriteFilms');
		if (favoriteFilmsString) {
			favoriteFilms = JSON.parse(favoriteFilmsString);
		}
	});

	let searchValue = '';
	let searchResults: Film[] = [];
	let hoveredFilmIndex: number | null = null;

	let mouseY: number | null = null;
	let topY: number | null = null;
	let topDistance: number | null = null;
	let draggingFilm: Film | null = null;

	let draggingFilmIndex: number | null = null;
	let hoveredFilmIndexDrag: number | null = null;

	function getTopY(filmCard: HTMLDivElement) {
		if (topY) return;
		topY = window.scrollY + filmCard.getBoundingClientRect().y;
	}

	$: {
		if (
			draggingFilm &&
			draggingFilmIndex !== null &&
			hoveredFilmIndexDrag !== null &&
			draggingFilmIndex !== hoveredFilmIndexDrag
		) {
			// Swap films
			const temp = favoriteFilms[draggingFilmIndex];
			favoriteFilms[draggingFilmIndex] = favoriteFilms[hoveredFilmIndexDrag];
			favoriteFilms[hoveredFilmIndexDrag] = temp;

			draggingFilmIndex = hoveredFilmIndexDrag;
		}
	}

	async function search() {
		const res = await fetch(`api/films/search/${searchValue}`);
		const data = await res.json();

		if (Array.isArray(data)) {
			searchResults = data.filter((film: Film) => {
				return !favoriteFilms.find((favoriteFilm: Film) => {
					return favoriteFilm.id === film.id;
				});
			});
		} else {
			searchResults = [];
		}
	}

	function addFilm(film: Film) {
		favoriteFilms = [...favoriteFilms, film];
		searchResults = searchResults.filter((film: Film) => {
			return !favoriteFilms.find((favoriteFilm: Film) => {
				return favoriteFilm.id === film.id;
			});
		});
	}
</script>

<div class="flex justify-center w-4/5">
	<section
		class="flex flex-col max-w-[50%] gap-8 h-fit bg-zinc-600/50 p-8 rounded-md border border-zinc-500/20"
	>
		<h2 class="text-4xl px-8 font-bold text-center">My Favourite Films</h2>
		{#if favoriteFilms.length === 0}
			<p class="text-zinc-300 py-4 text-center">Click on a searched film to add it to the list</p>
		{:else}
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div
				class="relative flex flex-col gap-1"
				id="favoriteFilmRankedList"
				on:dragover|preventDefault={(e) => {
					const dataTransfer = e.dataTransfer;
					if (!dataTransfer) return;
					dataTransfer.dropEffect = 'move';
				}}
			>
				{#if draggingFilm && draggingFilmIndex !== null && mouseY && topDistance && topY}
					<div
						class="absolute z-20 flex items-center gap-8 transition hover:bg-zinc-600/50 pointer-events-none p-1 rounded-md"
						style="top: {topDistance + mouseY - topY}px"
					>
						<img
							src={draggingFilm.image_url}
							alt=""
							class="h-36 aspect-[2/3] object-cover rounded-sm"
						/>
						<div class="flex flex-col gap-1">
							<p class="text-3xl">#{draggingFilmIndex + 1}</p>
							<h2 class="text-3xl font-semibold">{draggingFilm.title}</h2>
						</div>
					</div>
				{/if}
				{#each favoriteFilms as favoriteFilm, index}
					<!-- svelte-ignore a11y-no-static-element-interactions -->
					<div
						use:getTopY
						on:mouseenter={() => {
							hoveredFilmIndex = index;
						}}
						on:mouseleave={() => {
							hoveredFilmIndex = null;
						}}
						draggable="true"
						class="relative flex items-center gap-8 transition-[background-color] hover:bg-zinc-600/50 cursor-grab p-1 rounded-md {draggingFilm?.id ===
						favoriteFilm.id
							? 'opacity-0'
							: ''}"
						on:dragstart={(e) => {
							mouseY = e.clientY;
							//@ts-ignore
							topDistance = window.scrollY + e.target.getBoundingClientRect().y - mouseY;
							draggingFilm = favoriteFilm;
							draggingFilmIndex = index;

							const canvas = document.createElement('canvas');

							const dataTransfer = e.dataTransfer;
							if (!dataTransfer) return;

							dataTransfer.setDragImage(canvas, 0, 0);

							canvas.remove();
						}}
						on:drag={(e) => {
							mouseY = e.clientY;
						}}
						on:dragover={() => {
							hoveredFilmIndexDrag = index;
						}}
						on:dragend={() => {
							mouseY = null;
							draggingFilm = null;

							draggingFilmIndex = null;
							hoveredFilmIndexDrag = null;
						}}
					>
						<img
							src={favoriteFilm.image_url}
							alt=""
							class="h-36 aspect-[2/3] object-cover rounded-sm"
						/>
						<div class="flex flex-col gap-1">
							<p class="text-3xl">#{index + 1}</p>
							<h2 class="text-3xl font-semibold">{favoriteFilm.title}</h2>
						</div>

						<button
							on:click={() => {
								favoriteFilms.splice(index, 1);
								favoriteFilms = favoriteFilms;
							}}
							class="absolute top-2 right-2 cursor-pointer text-red-600 transition {hoveredFilmIndex ===
							index
								? 'opacity-100'
								: 'opacity-0'}"
						>
							<Fa icon={faTrash} />
						</button>
					</div>
				{/each}
			</div>
		{/if}
	</section>
</div>
<section
	class="flex flex-col gap-4 w-1/5 h-fit bg-zinc-600 p-4 rounded-md border border-zinc-500/40"
>
	<input
		class="py-2 px-4 rounded-md bg-zinc-500/50 focus:bg-zinc-500/80 outline-none border border-zinc-400/20"
		type="text"
		id="search"
		placeholder="Search..."
		bind:value={searchValue}
		on:input={search}
	/>
	{#if !searchValue}
		<p class="flex justify-center items-center py-4 text-zinc-300">Start typing to search</p>
	{:else if searchResults.length === 0}
		<p class="flex justify-center items-center py-4 text-zinc-300">No results found</p>
	{:else}
		<div class="flex flex-col gap-2 max-h-[58vh] overflow-y-auto">
			{#each searchResults as film}
				<button
					class="flex gap-4 items-center {searchResults.length > 5 ? 'mr-4' : ''}"
					on:click={() => addFilm(film)}
				>
					<img src={film.image_url} alt="" class="h-24 aspect-[2/3] object-cover rounded-sm" />

					<h2 class="text-xl max-h-24 overflow-hidden text-left leading-6">{film.title}</h2>
				</button>
			{/each}
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
		background-color: #27272a20;
		border-radius: 1rem;
		overflow: hidden;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background-color: #27272a40;
		border-radius: 1rem;

		&:hover {
			background-color: #27272a60;
		}
	}
</style>
