<script lang="ts">
	import EntryList from '$components/List.svelte';
	import Search from '$components/Search.svelte';
	import Login from '$components/Login.svelte';
	import Dragged from '$components/Dragged.svelte';

	import { dragged } from '$stores/dragged';
	import { user } from '$src/lib/stores/user';
	import { background } from '$stores/background';
	import { entries } from '$stores/entries';
	import { lists } from '$stores/lists';

	import type { List } from '$lib/types';

	import type { PageData } from './$types';
	export let data: PageData;

	$: list = data.dbList as unknown as List;
	$: {
		const foundList = $lists.find((store) => store.id === list.id);
		if (foundList) list = foundList;
	}

	$: entries.set(data.dbList.entries);
	$: background.set($entries.length > 0 ? $entries[0].backdrop_url : null);
</script>

{#if list}
	<EntryList lists={$lists} {list} entries={$entries} />
	<Search {list} entries={$entries} />
	<Dragged entries={$entries} {list} dragged={$dragged} />
{:else if $user === null}
	<Login />
{/if}
