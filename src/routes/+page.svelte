<script lang="ts">
	import FilmList from '$lib/components/FilmList.svelte';
	import FilmSearch from '$lib/components/FilmSearch.svelte';
	import {
		ListStyle,
		addList,
		filmLists,
		loadLists,
		removeList,
		saveLists
	} from '$lib/stores/filmLists';
	import { onMount } from 'svelte';

	// addList({
	// 	id: 1,
	// 	name: 'Favorite Films',
	// 	films: [],
	// 	style: ListStyle.Column
	// });

	onMount(() => {
		loadLists();

		// removeList(1);

		if (!$filmLists.length) {
			addList({
				id: 1,
				name: 'Favorite Films',
				films: [],
				style: ListStyle.Column
			});
		}

		window.addEventListener('beforeunload', saveLists);
	});
</script>

{#if $filmLists.length}
	<div class="flex justify-center w-3/4">
		<FilmList filmList={$filmLists[0]} />
	</div>
	<FilmSearch filmList={$filmLists[0]} />
{/if}

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
