<script lang="ts">
	import { goto } from '$app/navigation';

	import Fa from 'svelte-fa';
	import { faBorderAll, faGripLinesVertical, faTrash } from '@fortawesome/free-solid-svg-icons';

	import { drag, dragEnd, dragFilm, dragOver, startDrag } from '$stores/dragFilm';
	import { filter, search } from '$stores/filmSearch';
	import { filmStore } from '$stores/films';

	import { firestoreLists } from '$firestore/lists';

	import { ListStyle, type Film, type List } from '$lib/types';

	export let list: List;
	export let films: Film[];

	let hoverIndex: number | undefined = undefined;
</script>

<section
	class="flex flex-col w-3/4 gap-4 h-fit bg-zinc-700/50 p-4 rounded-md border border-zinc-500/20 shadow-xl backdrop-blur-md"
>
	<div class="flex justify-between gap-2">
		<input
			type="text"
			spellcheck="false"
			class="bg-transparent outline-none border-none text-3xl h-10 w-full px-1 font-bold focus:bg-zinc-600/20 transition rounded-md"
			value={list.name}
			on:input={async (e) => {
				// @ts-ignore
				await firestoreLists.updateName(list.id, e.target.value);
			}}
		/>
		<div class="flex gap-2">
			<button
				on:click={async () => {
					await firestoreLists.updateStyle(list.id, ListStyle.Column);
				}}
				class="flex items-center justify-center p-1 w-10 aspect-square hover:bg-zinc-600/20 transition rounded-md"
				><Fa
					icon={faGripLinesVertical}
					class="text-xl {list.style === ListStyle.Column ? 'text-white' : 'text-zinc-500'}"
				/></button
			>
			<button
				on:click={async () => {
					await firestoreLists.updateStyle(list.id, ListStyle.Grid);
				}}
				class="flex items-center justify-center p-1 w-10 aspect-square hover:bg-zinc-600/20 transition rounded-md"
				><Fa
					icon={faBorderAll}
					class="text-xl {list.style === ListStyle.Grid ? 'text-white' : 'text-zinc-500'}"
				/></button
			>
			<button
				on:click={async () => {
					if (confirm('Are you sure you want to delete this list?')) {
						await firestoreLists.remove(list.id);

						await goto('/');
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
			class="relative {list.style === ListStyle.Grid && films.length > 10
				? 'grid grid-flow-row'
				: list.style === ListStyle.Grid
				? 'grid grid-flow-col'
				: list.style === ListStyle.Column
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
					class="relative flex items-center {list.style !== ListStyle.Grid
						? 'gap-6'
						: films.length > 15
						? 'gap-3'
						: films.length > 10
						? 'gap-4'
						: 'gap-6'} transition-[background-color] cursor-grab p-1 {list.style !== ListStyle.Grid
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
						startDrag(e, film);
					}}
					on:drag={(e) => {
						drag(e);
					}}
					on:dragover={() => {
						dragOver(index);
					}}
					on:dragend={dragEnd}
					on:contextmenu|preventDefault={async () => {
						filmStore.remove(film.imdb_id);

						// Re-search and filter
						await search();
						filter(films);
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
							class={list.style !== ListStyle.Grid
								? 'text-2xl'
								: films.length > 15
								? 'text-xl'
								: 'text-2xl'}
						>
							#{index + 1}
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
							{film.title}
						</h2>
					</div>
				</div>
			{/each}
		</div>
	{/if}
</section>
