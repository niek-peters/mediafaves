<script lang="ts">
	import Login from '$components/Login.svelte';
	import CreateList from '$components/CreateList.svelte';

	import { user } from '$src/lib/stores/user';
	import { lists } from '$stores/lists';
	import { goto } from '$app/navigation';

	$: $user && $lists.length && goto(`/${$lists[0].id}`);
</script>

{#if $user === null}
	<Login />
{:else if !$lists.length}
	<CreateList user={$user} />
{/if}
