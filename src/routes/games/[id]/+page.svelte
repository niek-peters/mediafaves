<script lang="ts">
	import GameList from '$components/GameList.svelte';
	import GameSearch from '$components/GameSearch.svelte';
	import Login from '$components/Login.svelte';
	import DraggedGame from '$components/DraggedGame.svelte';

	import { dragGame } from '$stores/dragGame';
	import { authStore } from '$stores/authStore';
	import { background } from '$stores/background';
	import { games } from '$stores/games';
	import { lists } from '$stores/lists';

	import type { PageData } from './$types';
	export let data: PageData;

	$: list = data.list;
	$: {
		const foundList = $lists.find((store) => store.id === list.id);
		if (foundList) list = foundList;
	}

	$: games.set(data.games);
	$: background.set($games.length > 0 ? $games[0].backdrop_url : null);
</script>

{#if list}
	<GameList lists={$lists} {list} games={$games} />
	<GameSearch games={$games} />
	<DraggedGame games={$games} {list} dragGame={$dragGame} />
{:else if $authStore === null}
	<Login />
{/if}
