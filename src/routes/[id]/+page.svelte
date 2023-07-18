<script lang="ts">
	import RankList from '$components/RankList.svelte';
	import TierList from '$components/TierList.svelte';
	import Search from '$components/Search.svelte';
	import Login from '$components/Login.svelte';
	import Dragged from '$components/Dragged.svelte';
	import SearchDisabled from '$components/SearchDisabled.svelte';

	import { dragged } from '$stores/dragged';
	import { user } from '$stores/user';
	import { background } from '$stores/background';
	import { entries } from '$stores/entries';
	import { lists } from '$stores/lists';

	import { RankType, type List } from '$lib/types';

	import type { PageData } from './$types';
	export let data: PageData;

	let list: List | undefined;
	let tiers: string[] | undefined;

	$: if (data.dbList) {
		list = data.dbList;
		tiers = list.tiers || [];
		entries.set(data.dbList.entries);
	}

	$: background.set($entries.length > 0 ? $entries[0].backdrop_url : null);
</script>

{#if list && $user}
	{#if list.rankType === RankType.Ranks}
		<RankList lists={$lists} {list} entries={$entries} />
	{:else if list.rankType === RankType.Tiers && tiers}
		<TierList lists={$lists} {list} {tiers} entries={$entries} />
	{/if}
	{#if $user.uid === list.owner_id && (list.rankType === RankType.Tiers ? !!tiers?.length : true)}
		<Search {list} entries={$entries} />
		<Dragged entries={$entries} {list} dragged={$dragged} />
	{:else if list.rankType !== RankType.Tiers}
		<SearchDisabled reason="ownership" />
	{:else}
		<SearchDisabled reason="notiers" />
	{/if}
{:else if $user === null}
	<Login />
{/if}
