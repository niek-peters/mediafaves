<script lang="ts">
	import FilmList from '$lib/components/FilmList.svelte';
	import FilmSearch from '$lib/components/FilmSearch.svelte';

	import { filmLists } from '$lib/stores/filmLists';
	import type { PageData } from './$types';

	export let data: PageData;
	$: filmList = $filmLists.find((list) => list.id === data.id);
</script>

{#if filmList}
	<div class="flex justify-center w-3/4">
		<FilmList {filmList} />
	</div>
	<FilmSearch {filmList} />
{/if}
