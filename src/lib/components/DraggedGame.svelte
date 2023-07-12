<script lang="ts">
	import { setLastMove } from '$stores/dragGame';
	import { gameStore } from '$stores/games';

	import { type List, type Game, type DragGame, ListStyle } from '$lib/types';

	export let games: Game[];
	export let list: List;
	export let dragGame: DragGame;

	$: draggedGame = dragGame.game;
	$: gameWidth = dragGame.width;
	$: measurements = dragGame.measurements;
	$: moveIndex = dragGame.moveIndex;
	$: lastMoveIndex = dragGame.lastMoveIndex;

	let moving = false;
	$: if (draggedGame && moveIndex !== undefined && moveIndex !== lastMoveIndex && !moving) {
		moving = true;

		gameStore.moveTo(draggedGame.rawg_id, moveIndex);

		// Stop infinite loop
		setLastMove(moveIndex);

		moving = false;
	}
</script>

{#if draggedGame && gameWidth}
	<div
		class="absolute z-20 flex items-center {list.style !== ListStyle.Grid
			? 'gap-6'
			: games.length > 15
			? 'gap-3'
			: games.length > 10
			? 'gap-4'
			: 'gap-6'} transition bg-zinc-600/50 pointer-events-none p-1 {list.style !== ListStyle.Grid
			? 'pr-4'
			: games.length > 15
			? 'pr-1'
			: games.length > 10
			? 'pr-2'
			: 'pr-4'} rounded-md"
		style="width: {gameWidth}px; 
                        top: {measurements.topDistance +
			measurements.mouseY -
			measurements.topY}px; 
                        left: {measurements.leftDistance +
			measurements.mouseX -
			measurements.leftX}px;"
	>
		<img src={draggedGame.backdrop_url} alt="" class="h-36 aspect-[2/3] object-cover rounded-sm" />
		<div class="flex flex-col gap-1 max-h-36 overflow-hidden">
			<p
				class={list.style !== ListStyle.Grid
					? 'text-2xl'
					: games.length > 15
					? 'text-xl'
					: 'text-2xl'}
			>
				#{games.indexOf(draggedGame) + 1}
			</p>
			<h2
				class="font-semibold {list.style !== ListStyle.Grid
					? 'text-2xl line-clamp-3'
					: games.length > 20
					? 'text-sm line-clamp-4'
					: games.length > 15
					? 'text-lg line-clamp-4'
					: games.length > 10
					? 'text-xl line-clamp-3'
					: 'text-2xl line-clamp-3'}"
			>
				{draggedGame.title}
			</h2>
		</div>
	</div>
{/if}
