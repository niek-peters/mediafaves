<script lang="ts">
	import Login from '$components/Login.svelte';
	import CreateList from '$components/CreateList.svelte';

	import { authStore } from '$stores/authStore';
	import { lists } from '$stores/lists';
</script>

{#if $authStore === null}
	<Login />
{:else if !$lists.length}
	<CreateList authStore={$authStore} />
{/if}
