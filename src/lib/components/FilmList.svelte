<script lang="ts">
	import Fa from 'svelte-fa';
	import { faBorderAll, faGripLinesVertical } from '@fortawesome/free-solid-svg-icons';

	import { ListStyle, moveFilmTo, removeFilm, saveLists, setStyle } from '$lib/stores/filmLists';

	export let filmList: FilmList;
	$: films = filmList.films;

	let measurements = {
		mouseY: 0,
		mouseX: 0,
		topY: 0,
		leftX: 0,
		topDistance: 0,
		leftDistance: 0
	};

	let dragFilm: Film | undefined = undefined;
	let dragFilmWidth: number | undefined = undefined;

	function getTopLeft(_: HTMLDivElement | undefined = undefined) {
		const film = document.getElementById(`film-${filmList.id}-1`);

		if (film) {
			measurements.topY = window.scrollY + film.getBoundingClientRect().y;
			measurements.leftX = film.getBoundingClientRect().x;
		}
	}

	let moveIndex: number | undefined = undefined;
	let lastMoveIndex: number | undefined = undefined;
	$: {
		if (films.length) {
			getTopLeft();
		}

		if (dragFilm && moveIndex !== undefined && moveIndex !== lastMoveIndex) {
			moveFilmTo(filmList.id, dragFilm, moveIndex);

			lastMoveIndex = moveIndex;
		}
	}

	let hoverIndex: number | undefined = undefined;
	function startDrag(e: DragEvent, film: Film) {
		hoverIndex = undefined;

		measurements.mouseY = e.clientY;
		measurements.mouseX = e.clientX;

		const rect = (e.target as HTMLDivElement).getBoundingClientRect();

		measurements.topDistance = window.scrollY + rect.y - measurements.mouseY;
		measurements.leftDistance = rect.x - measurements.mouseX;

		dragFilm = film;
		dragFilmWidth = rect.width;

		const canvas = document.createElement('canvas');

		const dataTransfer = e.dataTransfer;
		if (!dataTransfer) return;

		dataTransfer.setDragImage(canvas, 0, 0);

		canvas.remove();
	}
</script>

<section class="flex flex-col gap-8 h-fit bg-zinc-600/50 p-4 rounded-md border border-zinc-500/20">
	<div class="relative flex justify-center">
		<h2 class="text-4xl px-8 font-bold text-center">{filmList.name}</h2>
		<div class="absolute flex gap-2 top-0 right-0">
			<button
				on:click={() => {
					setStyle(filmList.id, ListStyle.Column);
				}}
				class="flex items-center justify-center p-1 w-10 aspect-square hover:bg-zinc-500/20 transition rounded-md"
				><Fa
					icon={faGripLinesVertical}
					class="text-xl {filmList.style === ListStyle.Column ? 'text-white' : 'text-zinc-500'}"
				/></button
			>
			<button
				on:click={() => {
					setStyle(filmList.id, ListStyle.Grid);
				}}
				class="flex items-center justify-center p-1 w-10 aspect-square hover:bg-zinc-500/20 transition rounded-md"
				><Fa
					icon={faBorderAll}
					class="text-xl {filmList.style === ListStyle.Grid ? 'text-white' : 'text-zinc-500'}"
				/></button
			>
		</div>
	</div>
	{#if films.length === 0}
		<p class="text-zinc-300 py-4 text-center">Click on a searched film to add it to the list</p>
	{:else}
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			use:getTopLeft
			class="relative {filmList.style === ListStyle.Grid
				? 'grid grid-rows-5 grid-flow-col'
				: filmList.style === ListStyle.Column
				? 'flex flex-col'
				: ''} gap-1"
			on:dragover|preventDefault={(e) => {
				const dataTransfer = e.dataTransfer;
				if (!dataTransfer) return;
				dataTransfer.dropEffect = 'move';
			}}
		>
			{#if dragFilm && dragFilmWidth}
				<div
					class="absolute z-20 flex items-center gap-8 transition bg-zinc-600/50 pointer-events-none p-1 pr-8 rounded-md"
					style="width: {dragFilmWidth}px; 
                        top: {measurements.topDistance +
						measurements.mouseY -
						measurements.topY}px; 
                        left: {measurements.leftDistance +
						measurements.mouseX -
						measurements.leftX}px;"
				>
					<img src={dragFilm.poster_url} alt="" class="h-36 aspect-[2/3] object-cover rounded-sm" />
					<div class="flex flex-col gap-1 max-h-36 overflow-hidden">
						<p class="text-2xl">#{films.indexOf(dragFilm) + 1}</p>
						<h2 class="text-2xl font-semibold">{dragFilm.title}</h2>
					</div>
				</div>
			{/if}
			{#each films as film, index}
				<div
					id="film-{filmList.id}-{index + 1}"
					on:mouseenter={() => {
						hoverIndex = index;
					}}
					on:mouseleave={() => {
						hoverIndex = undefined;
					}}
					draggable="true"
					class="relative flex items-center gap-8 transition-[background-color] cursor-grab p-1 pr-8 rounded-md {dragFilm?.id ===
					film.id
						? 'opacity-0'
						: ''} {hoverIndex === index ? 'bg-zinc-600/50' : ''}"
					on:dragstart={(e) => {
						startDrag(e, film);
					}}
					on:drag={(e) => {
						measurements.mouseY = e.clientY;
						measurements.mouseX = e.clientX;
					}}
					on:dragover={() => {
						moveIndex = index;
					}}
					on:dragend={() => {
						dragFilm = undefined;

						moveIndex = undefined;
					}}
					on:contextmenu|preventDefault={() => {
						removeFilm(filmList.id, film.id);
					}}
				>
					<img
						src={film.poster_url}
						alt=""
						class="h-36 aspect-[2/3] object-cover rounded-sm"
						draggable="false"
					/>
					<div class="flex flex-col gap-1 max-h-36 overflow-hidden">
						<p class="text-2xl">#{index + 1}</p>
						<h2 class="text-2xl font-semibold">{film.title}</h2>
					</div>
				</div>
			{/each}
		</div>
	{/if}
</section>
