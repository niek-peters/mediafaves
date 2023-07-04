<script lang="ts">
	import { drag, dragEnd, dragFilm, setLastMove, startDrag } from '$lib/stores/dragFilm';
	import { addFilm } from '$lib/stores/filmLists';
	import { filter, search, searchResults, searchValue } from '$lib/stores/filmSearch';

	export let filmList: FilmList;

	let hoverIndex: number | undefined = undefined;
</script>

<section
	class="flex flex-col gap-4 w-1/4 h-fit bg-zinc-700/50 p-4 rounded-md border border-zinc-500/20 shadow-xl backdrop-blur-md"
>
	<h2 class="text-3xl px-1 font-bold">Search</h2>
	<form
		class="flex flex-col"
		on:submit|preventDefault={() => {
			if ($searchResults.length === 0) return;
			addFilm(filmList.id, $searchResults[0]);

			$searchValue = '';
			search();

			// if ($searchResults.length === 1) $searchValue = '';
			// else filter(filmList);
		}}
	>
		<input
			class="py-2 px-4 rounded-md bg-zinc-600/30 focus:bg-zinc-600/60 transition outline-none border border-zinc-500/10"
			type="text"
			id="search"
			placeholder="Enter a film title"
			bind:value={$searchValue}
			on:input={async () => {
				await search();
				filter(filmList);
			}}
		/>
	</form>
	{#if !searchValue}
		<p class="flex px-1 text-zinc-400">Start typing to search</p>
	{:else if $searchResults.length === 0}
		<p class="flex px-1 text-zinc-400">No results found</p>
	{:else}
		<div class="flex flex-col max-h-[58vh] overflow-y-auto">
			{#each $searchResults as film, index}
				<button
					draggable="true"
					class="flex outline-none gap-4 p-1 rounded-md {hoverIndex === index
						? 'bg-zinc-500/20'
						: ''} transition-[background-color] items-center {$dragFilm.film?.id === film.id
						? 'opacity-0'
						: ''} {$searchResults.length > 5 ? 'mr-4' : ''}"
					on:mouseenter={() => {
						hoverIndex = index;
					}}
					on:mouseleave={() => {
						hoverIndex = undefined;
					}}
					on:click={() => {
						addFilm(filmList.id, film);

						filter(filmList);
					}}
					on:dragstart={(e) => {
						addFilm(filmList.id, film);
						hoverIndex = undefined;
						startDrag(e, film);
					}}
					on:drag={(e) => {
						drag(e);
					}}
					on:dragend={() => {
						dragEnd();

						if ($searchResults.length === 1) $searchValue = '';
						else filter(filmList);

						setLastMove(undefined);
					}}
				>
					<img
						draggable="false"
						src={film.poster_url}
						alt=""
						class="h-24 aspect-[2/3] object-cover rounded-sm"
					/>
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
