<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	import Fa from 'svelte-fa';
	import { faCaretDown, faCaretRight, faPlus } from '@fortawesome/free-solid-svg-icons';
	import { faGoogle } from '@fortawesome/free-brands-svg-icons';

	import { firestoreLists } from '$firestore/lists';

	import { authHandlers } from '$stores/authStore';

	import { type List, type AuthStore, ListStyle, ListType } from '$lib/types';

	export let lists: List[] = [];
	export let authStore: AuthStore | null;

	onMount(() => {
		document.addEventListener('mousedown', closeDropdowns);
	});

	function closeDropdowns() {
		filmDropdownOpen = false;
		newListDropdownOpen = false;
	}

	$: if ($page.params.id) closeDropdowns();

	let filmDropdownOpen = false;
	let newListDropdownOpen = false;

	let parentWidth: number;
	let childWidth: number;
	$: overflow = false;

	$: if (parentWidth && childWidth) {
		overflow = parentWidth < childWidth;
	}

	let navEl: HTMLDivElement;
	$: navWidth = 0;
	$: if (navEl && window) {
		navWidth =
			navEl.clientWidth + parseInt(window.getComputedStyle(navEl).marginRight.replace('px', ''));
	}
</script>

<header class="flex items-center justify-center w-full bg-zinc-800 py-3 shadow-2xl">
	<div class="flex items-center gap-8 w-4/5">
		<div class="flex items-center gap-12 w-3/4 flex-grow-0">
			<h1 class="text-4xl font-bold flex">
				<span class="text-cyan-500">Media</span><span class="text-emerald-500">Faves</span>
			</h1>
			{#if lists.length}
				<div
					class="h-9 flex-grow flex whitespace-nowrap text-sky-500 rounded-md"
					bind:clientWidth={parentWidth}
				>
					<div
						class="z-10 relative w-full flex transition-[background-color,height] gap-2 rounded-md mr-4 {filmDropdownOpen
							? 'shadow-2xl dropdown overflow-hidden'
							: ''}"
						style="height: {filmDropdownOpen ? lists.length * 2.25 : 2.25}rem;"
						bind:this={navEl}
					>
						{#if !filmDropdownOpen}
							<div
								class="absolute flex gap-2 overflow-hidden h-9"
								style="width: {overflow ? `${navWidth}px` : '100%'}"
							>
								<div
									class="relative flex items-center gap-2 px-4 w-fit h-9"
									bind:clientWidth={childWidth}
								>
									{#each lists as list, index}
										{#if index !== 0}
											<span class="h-6 w-px shrink-0 bg-zinc-600" />
										{/if}
										<div class="relative flex flex-col">
											<a href="/{list.id}" class="font-semibold text-lg h-fit">{list.name}</a>
											<span
												class="absolute left-0 bottom-0 h-px transition-[width] {$page.params.id ===
												list.id
													? 'bg-sky-500 w-full'
													: 'bg-transparent w-0'}"
											/>
										</div>
									{/each}
								</div>
								{#if overflow}
									<span
										class="absolute z-20 -right-4 w-32 h-9 bg-gradient-to-r from-transparent to-zinc-800 pointer-events-none"
									/>
								{/if}
							</div>
						{:else}
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<!-- svelte-ignore a11y-no-static-element-interactions -->
							<div on:mousedown|stopPropagation class="absolute w-full h-9 top-0">
								<div class="flex flex-col shadow-2xl overflow-hidden">
									{#each lists as list}
										<a
											href="/{list.id}"
											class="flex flex-col justify-center h-9 w-full px-4 hover:bg-zinc-700/30 transition"
										>
											<p class="relative font-semibold text-lg h-fit w-fit">
												{list.name}
												<span
													class="absolute left-0 bottom-0 h-px w-full {$page.params.id === list.id
														? 'bg-sky-500'
														: 'bg-transparent'}"
												/>
											</p>
										</a>
									{/each}
								</div>
							</div>
						{/if}
					</div>
					{#if overflow}
						<button
							on:mousedown|stopPropagation={() => {
								filmDropdownOpen = !filmDropdownOpen;
							}}
							class="z-10 flex gap-2 overflow-hidden shrink-0 rounded-md dropdown"
						>
							<div class="flex items-center gap-2 px-4 py-1 h-9 hover:bg-zinc-700/20 transition">
								<Fa
									icon={faCaretDown}
									class="flex text-xl transition {filmDropdownOpen ? '' : 'rotate-90'}"
								/>
								<p class="text-lg font-semibold">Show all</p>
							</div>
						</button>
					{/if}
				</div>
			{/if}
		</div>
		<div class="flex w-1/4 gap-4">
			<button
				on:click={() => {
					newListDropdownOpen = !newListDropdownOpen;
				}}
				class="relative w-1/2 h-full flex"
			>
				<div
					class="absolute top-0 left-0 w-full flex transition-[height]"
					style="height: {newListDropdownOpen ? 2 * 2.25 : 2.25}rem"
				>
					{#if !newListDropdownOpen}
						<div class="dropdown flex w-full h-full text-sky-500 rounded-md overflow-hidden">
							<div
								class="flex gap-2 w-full h-fit px-4 py-1 items-center hover:bg-zinc-700/20 transition"
							>
								<Fa icon={faPlus} />
								<p class="text-lg font-semibold">New list</p>
							</div>
						</div>
					{:else}
						<div class="dropdown w-full flex flex-col h-full rounded-md shadow-2xl overflow-hidden">
							<button
								on:mousedown|stopPropagation
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
								class="flex gap-2 items-center px-4 py-1 w-full text-cyan-500 hover:bg-zinc-700/20 transition"
							>
								<Fa icon={faPlus} />
								<p class="text-lg font-semibold">Films list</p>
							</button>
							<button
								on:mousedown|stopPropagation
								on:click={() => {
									alert('Games list');
								}}
								class="flex gap-2 items-center px-4 py-1 w-full text-emerald-500 hover:bg-zinc-700/20 transition"
							>
								<Fa icon={faPlus} />
								<p class="text-lg font-semibold">Games list</p>
							</button>
						</div>
					{/if}
				</div>
			</button>
			{#if authStore === null}
				<button
					on:click={async () => {
						await authHandlers.login();
					}}
					class="w-1/2 h-9 flex items-center gap-2 px-4 py-1 text-emerald-500 dropdown hover:bg-zinc-700/20 transition rounded-md"
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
