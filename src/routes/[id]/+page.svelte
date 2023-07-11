<script lang="ts">
	import FilmList from '$components/FilmList.svelte';
	import FilmSearch from '$components/FilmSearch.svelte';
	import Login from '$components/Login.svelte';
	import DraggedFilm from '$components/DraggedFilm.svelte';

	import { dragFilm } from '$stores/dragFilm';
	import { authStore } from '$stores/authStore';
	import { background } from '$stores/background';
	import { films } from '$stores/films';
	import { lists } from '$stores/lists';

	import type { PageData } from './$types';
	export let data: PageData;

	$: list = data.list;
	$: {
		const foundList = $lists.find((store) => store.id === list.id);
		if (foundList) list = foundList;
	}

	$: films.set(data.films);
	$: background.set($films.length > 0 ? $films[0].backdrop_url : null);
</script>

{#if list}
	<FilmList {list} films={$films} />
	<FilmSearch films={$films} />
	<DraggedFilm films={$films} {list} dragFilm={$dragFilm} />
{:else if $authStore === null}
	<Login />
{/if}
