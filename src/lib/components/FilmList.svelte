<script lang="ts">
	import Fa from 'svelte-fa';
	import { faBorderAll, faGripLinesVertical, faTrash } from '@fortawesome/free-solid-svg-icons';

	import { ListStyle, removeFilm, removeList, setName, setStyle } from '$lib/stores/filmLists';
	import { drag, dragEnd, dragFilm, dragOver, startDrag } from '$lib/stores/dragFilm';
	import { filter, search } from '$lib/stores/filmSearch';
	import { goto } from '$app/navigation';

	export let filmList: FilmList;
	$: films = filmList.films;

	let hoverIndex: number | undefined = undefined;
</script>

<section
	class="flex flex-col w-full gap-4 h-fit bg-zinc-700/50 p-4 rounded-md border border-zinc-500/20 shadow-xl backdrop-blur-md"
>
	<div class="flex justify-between gap-2">
		<input
			type="text"
			spellcheck="false"
			class="bg-transparent outline-none border-none text-3xl h-10 w-full px-1 font-bold focus:bg-zinc-600/20 transition rounded-md"
			value={filmList.name}
			on:input={async (e) => {
				// @ts-ignore
				await setName(filmList.id, e.target.value);
			}}
		/>
		<div class="flex gap-2">
			<button
				on:click={async () => {
					await setStyle(filmList.id, ListStyle.Column);
				}}
				class="flex items-center justify-center p-1 w-10 aspect-square hover:bg-zinc-600/20 transition rounded-md"
				><Fa
					icon={faGripLinesVertical}
					class="text-xl {filmList.style === ListStyle.Column ? 'text-white' : 'text-zinc-500'}"
				/></button
			>
			<button
				on:click={async () => {
					await setStyle(filmList.id, ListStyle.Grid);
				}}
				class="flex items-center justify-center p-1 w-10 aspect-square hover:bg-zinc-600/20 transition rounded-md"
				><Fa
					icon={faBorderAll}
					class="text-xl {filmList.style === ListStyle.Grid ? 'text-white' : 'text-zinc-500'}"
				/></button
			>
			<button
				on:click={async () => {
					if (confirm('Are you sure you want to delete this list?')) {
						await removeList(filmList.id);

						goto('/');
					}
				}}
				class="flex items-center justify-center p-1 w-10 aspect-square hover:bg-zinc-600/20 transition rounded-md"
				><Fa icon={faTrash} class="text-xl text-rose-800" /></button
			>
		</div>
	</div>
	{#if films.length === 0}
		<p class="text-zinc-400 px-1 py-2">Click on a searched film to add it to the list</p>
	{:else}
		{@const colCount = Math.min(Math.ceil(films.length / 5), 5)}
		{@const rowCount = Math.min(films.length, 5)}
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="relative {filmList.style === ListStyle.Grid && films.length > 10
				? 'grid grid-flow-row'
				: filmList.style === ListStyle.Grid
				? 'grid grid-flow-col'
				: filmList.style === ListStyle.Column
				? 'flex flex-col'
				: ''}"
			style={films.length > 10
				? `grid-template-columns: repeat(${colCount}, ${100 / colCount}%);`
				: `grid-template-rows: repeat(${rowCount}, minmax(0, 1fr)); 
					grid-template-columns: repeat(${colCount}, ${100 / colCount}%);`}
			on:dragover|preventDefault={(e) => {
				const dataTransfer = e.dataTransfer;
				if (!dataTransfer) return;
				dataTransfer.dropEffect = 'move';
			}}
		>
			{#each films as film, index}
				<div
					on:mouseenter={() => {
						hoverIndex = index;
					}}
					on:mouseleave={() => {
						hoverIndex = undefined;
					}}
					draggable="true"
					class="relative flex items-center {filmList.style !== ListStyle.Grid
						? 'gap-6'
						: films.length > 15
						? 'gap-3'
						: films.length > 10
						? 'gap-4'
						: 'gap-6'} transition-[background-color] cursor-grab p-1 {filmList.style !==
					ListStyle.Grid
						? 'pr-4'
						: films.length > 15
						? 'pr-1'
						: films.length > 10
						? 'pr-2'
						: 'pr-4'} rounded-md {$dragFilm.film?.imdb_id === film.imdb_id
						? 'opacity-0'
						: ''} {hoverIndex === index ? 'bg-zinc-600/20' : ''}"
					on:dragstart={(e) => {
						hoverIndex = undefined;
						startDrag(e, filmList, film);
					}}
					on:drag={(e) => {
						drag(e);
					}}
					on:dragover={() => {
						dragOver(index);
					}}
					on:dragend={dragEnd}
					on:contextmenu|preventDefault={async () => {
						await removeFilm(filmList.id, film.imdb_id);

						// Re-search and filter
						await search();
						filter(filmList);
					}}
				>
					<img
						src={film.poster_url}
						alt=""
						class="h-36 aspect-[2/3] object-cover rounded-sm"
						draggable="false"
					/>
					<div class="flex flex-col gap-1 max-h-36 overflow-hidden">
						<p
							class={filmList.style !== ListStyle.Grid
								? 'text-2xl'
								: films.length > 15
								? 'text-xl'
								: 'text-2xl'}
						>
							#{index + 1}
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
							{film.title}
						</h2>
					</div>
				</div>
			{/each}
		</div>
	{/if}
</section>
