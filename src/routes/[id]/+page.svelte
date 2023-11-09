<script lang="ts">
	import { DragRoot } from '@niek-peters/svelte-draggable';

	import RankList from '$components/RankList.svelte';
	import TierList from '$components/TierList.svelte';
	import Search from '$components/Search.svelte';
	import Login from '$components/Login.svelte';
	import SearchDisabled from '$components/SearchDisabled.svelte';

	import { user } from '$stores/user';
	import { background } from '$stores/background';
	import { entries } from '$stores/entries';
	import { lists } from '$stores/lists';

	import { RankType, type List } from '$lib/types';

	import type { PageData } from './$types';
	import { listUid } from '$src/lib/stores/listUid';
	import { isMobile } from '$src/lib/stores/windowWidth';
	export let data: PageData;

	$: list = data.dbList as unknown as List;
	$: tiers = list.tiers || [];
	$: {
		const foundList = $lists.find((store) => store.id === list.id);
		if (foundList) list = foundList;
	}

	$listUid = crypto.randomUUID();

	$: if (data.dbList)
		entries.set(data.dbList.entries.map((entry) => ({ ...entry, uid: crypto.randomUUID() })));

	$: background.set(
		$entries.length > 0 ? ($isMobile ? $entries[0].poster_url : $entries[0].backdrop_url) : null
	);
</script>

{#if list && $user}
	{#if list.rankType === RankType.Ranks}
		<RankList lists={$lists} {list} {entries} listUid={$listUid} />
	{:else if list.rankType === RankType.Tiers && tiers}
		<TierList lists={$lists} {list} {tiers} entries={$entries} />
	{/if}
	{#if $user.uid === list.owner_id && (list.rankType === RankType.Tiers ? !!tiers?.length : true)}
		<Search {list} entries={$entries} listUid={$listUid} />
		<DragRoot />
	{:else if list.rankType !== RankType.Tiers}
		<SearchDisabled reason="ownership" />
	{:else}
		<SearchDisabled reason="notiers" />
	{/if}
{:else if $user === null}
	<Login />
{/if}
