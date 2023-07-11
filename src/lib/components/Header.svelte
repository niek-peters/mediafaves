<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	import Fa from 'svelte-fa';
	import { faCaretDown, faCaretRight, faPlus } from '@fortawesome/free-solid-svg-icons';
	import { faGoogle } from '@fortawesome/free-brands-svg-icons';

	import { firestoreLists } from '$firestore/lists';

	import { authHandlers } from '$stores/authStore';

	import { ListStyle, ListType, type AuthStore, type List } from '$lib/types';

	export let lists: List[] = [];
	export let authStore: AuthStore | null;

	onMount(() => {
		document.addEventListener('mousedown', closeDropdown);
	});

	function closeDropdown() {
		filmDropdownOpen = false;
	}

	$: if ($page.params.id) closeDropdown();

	let filmDropdownOpen = false;
</script>

<header class="flex items-center justify-center w-full bg-zinc-800 py-3 shadow-2xl">
	<div class="flex items-center gap-8 w-4/5">
		<div class="flex items-center gap-12 w-3/4 flex-grow-0">
			<h1 class="text-4xl font-bold flex">
				<span class="text-sky-300">Media</span><span class="text-emerald-400">Faves</span>
			</h1>
			{#if lists.length}
				<div
					class="h-8 flex-grow flex items-center whitespace-nowrap py-1 text-sky-500 rounded-md {filmDropdownOpen
						? 'gap-4'
						: ''}"
				>
					<div
						class="relative w-full flex items-center h-8 gap-2 {filmDropdownOpen
							? 'overflow-visible'
							: 'overflow-hidden'}"
					>
						{#if !filmDropdownOpen}
							<div class="absolute flex gap-2 overflow-hidden w-full">
								{#each lists as list, index}
									{#if index !== 0}
										<span class="h-6 w-px shrink-0 bg-zinc-600" />
									{/if}
									<a
										href="/{list.id}"
										class="font-semibold text-lg transition {$page.params.id === list.id
											? 'border-sky-500'
											: 'border-transparent'} border-b">{list.name}</a
									>
								{/each}
								<span class="absolute right-0 h-8 w-4 bg-zinc-800/70" />
							</div>
						{:else}
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<!-- svelte-ignore a11y-no-static-element-interactions -->
							<div on:mousedown|stopPropagation class="absolute w-full h-fit top-0 z-10">
								<div class="dropdown relative flex flex-col h-fit p-2 rounded-md gap-1 shadow-2xl">
									{#each lists as list}
										<a
											href="/{list.id}"
											class="flex gap-2 items-center font-semibold text-lg hover:bg-zinc-700/30 transition rounded-md px-2 py-1"
										>
											{#if $page.params.id === list.id}
												<Fa icon={faCaretRight} class="text-xl" />
											{/if}
											{list.name}</a
										>
									{/each}
								</div>
							</div>
						{/if}
					</div>
					<button
						on:mousedown|stopPropagation={() => {
							filmDropdownOpen = !filmDropdownOpen;
						}}
						class="z-10 flex items-center justify-center h-8 w-8 shrink-0 rounded-md bg-zinc-800/90 hover:bg-zinc-700/90 transition {filmDropdownOpen
							? '-rotate-90'
							: ''}"><Fa icon={faCaretDown} class="rotate-90 text-xl" /></button
					>
				</div>
			{/if}
		</div>
		<div class="flex items-center w-1/4 gap-4">
			<button
				on:click={async () => {
					if (!authStore) return;

					const id = await firestoreLists.add({
						name: 'New list',
						owner_id: authStore.uid,
						style: ListStyle.Column,
						type: ListType.Films
					});

					await goto(`/${id}`);
				}}
				class="w-1/2 flex items-center gap-2 px-4 py-1 text-sky-500 bg-zinc-700/30 hover:bg-zinc-700/50 transition rounded-md"
				><Fa icon={faPlus} />
				<p class="text-lg font-semibold">New list</p></button
			>
			{#if authStore === null}
				<button
					on:click={async () => {
						await authHandlers.login();
					}}
					class="w-1/2 flex items-center gap-2 px-4 py-1 text-emerald-500 bg-zinc-700/30 hover:bg-zinc-700/50 transition rounded-md"
					><Fa icon={faGoogle} />
					<p class="text-lg font-semibold">Log in</p></button
				>
			{:else}
				<button
					on:click={async () => {
						await authHandlers.logout();
					}}
					class="w-1/2 flex items-center gap-2 px-4 py-1 text-rose-500 bg-zinc-700/30 hover:bg-zinc-700/50 transition rounded-md"
					><Fa icon={faGoogle} />
					<p class="text-lg font-semibold">Log out</p></button
				>
			{/if}
		</div>
	</div>
</header>

<style>
	.dropdown {
		background-color: rgb(46, 46, 50);
	}
</style>
