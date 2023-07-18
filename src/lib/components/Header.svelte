<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	import Fa from 'svelte-fa';
	import { faCaretDown, faCaretRight, faPlus } from '@fortawesome/free-solid-svg-icons';
	import { faGoogle } from '@fortawesome/free-brands-svg-icons';

	import { firestoreLists } from '$firestore/lists';

	import { authHandlers } from '$src/lib/stores/user';

	import { type List, type User, ListStyle, listData, rankData, type ListData } from '$lib/types';
	import { browser } from '$app/environment';
	import { loading } from '../stores/loading';

	export let lists: List[] = [];
	export let user: User | null;

	onMount(() => {
		document.addEventListener('mousedown', closeDropdowns);
	});

	$: if (browser && $page.params.id) closeDropdowns();

	let dropDownOpen = false;
	let newListDropdownOpen = false;

	$: parentWidth = 0;
	$: childWidth = 0;
	$: overflow = false;

	$: if (parentWidth && childWidth) {
		overflow = parentWidth < childWidth;
	}

	let navEl: HTMLDivElement;
	$: navWidth = 0;
	$: navEl && overflow && updateNavWidth();

	function updateNavWidth(_?: HTMLButtonElement) {
		if (!navEl || !window) return;

		navWidth =
			navEl.clientWidth + parseInt(window.getComputedStyle(navEl).marginRight.replace('px', ''));
	}

	let menuWidth: number;
	let lastHoveredListData: ListData | undefined;

	function closeDropdowns() {
		dropDownOpen = false;
		newListDropdownOpen = false;
		lastHoveredListData = undefined;
	}

	$: console.log(dropDownOpen);
</script>

<header class="flex items-center justify-center w-full h-16 bg-zinc-800 py-3 shadow-2xl">
	<div class="flex items-center gap-8 w-11/12 xl:w-4/5">
		<div class="flex items-center gap-12 w-2/3 2xl:w-3/4 flex-grow-0">
			<a href="/" class="text-4xl font-bold flex">
				<span class="text-cyan-500">Media</span><span class="text-emerald-500">Faves</span>
			</a>
			{#if lists.length}
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div
					on:mouseleave|stopPropagation={closeDropdowns}
					class="h-9 flex-grow flex whitespace-nowrap rounded-md"
					bind:clientWidth={parentWidth}
				>
					<div
						class="z-10 relative w-full flex transition-[background-color,height] gap-2 rounded-md mr-4 {dropDownOpen
							? 'shadow-2xl dropdown overflow-hidden'
							: ''}"
						style="height: {dropDownOpen ? lists.length * 2.25 : 2.25}rem;"
						bind:this={navEl}
					>
						{#if !dropDownOpen}
							<div
								class="absolute flex gap-2 overflow-hidden h-9 border border-transparent"
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
											<a
												href="/{list.id}"
												class="font-semibold text-lg h-fit {listData[list.type]
													.textColor} hover:opacity-75 transition">{list.name}</a
											>
											<span
												class="absolute left-0 bottom-0 h-px transition-[width] {$page.params.id ===
												list.id
													? `${listData[list.type].bgColor} w-full`
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
								<div class="flex flex-col shadow-2xl border border-zinc-700/80 overflow-hidden">
									{#each lists as list}
										<a
											href="/{list.id}"
											class="flex flex-col justify-center h-9 w-full px-4 hover:bg-zinc-700/30 transition {listData[
												list.type
											].textColor}"
										>
											<p class="relative font-semibold text-lg h-fit w-fit">
												{list.name}
												<span
													class="absolute left-0 bottom-0 h-px w-full {$page.params.id === list.id
														? `${listData[list.type].bgColor}`
														: 'bg-transparent'}"
												/>
											</p>
										</a>
									{/each}
								</div>
							</div>
						{/if}
					</div>
					{#if overflow && !dropDownOpen}
						<button
							use:updateNavWidth
							on:mousedown|stopPropagation={() => (dropDownOpen = true)}
							on:mouseenter|stopPropagation={() => (dropDownOpen = true)}
							class="z-10 flex gap-2 overflow-hidden shrink-0 rounded-md dropdown"
						>
							<div
								class="flex items-center gap-2 px-4 py-1 h-9 hover:bg-zinc-700/20 text-sky-500 transition"
							>
								<Fa
									icon={faCaretDown}
									class="flex text-xl transition {dropDownOpen ? '' : 'rotate-90'}"
								/>
								<p class="text-lg font-semibold">Show all</p>
							</div>
						</button>
					{/if}
				</div>
			{/if}
		</div>
		<div class="flex w-1/3 2xl:w-1/4 gap-4" bind:offsetWidth={menuWidth}>
			{#if !$loading}
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div class="relative w-1/2 flex" on:mouseleave={() => (newListDropdownOpen = false)}>
					<div
						class="absolute top-0 left-0 w-full flex transition-[height] z-10"
						style="height: {newListDropdownOpen ? listData.length * 2.25 : 2.25}rem"
					>
						{#if !newListDropdownOpen}
							<!-- svelte-ignore a11y-mouse-events-have-key-events -->
							<button
								on:click={() => (newListDropdownOpen = true)}
								on:mouseover={() => (newListDropdownOpen = true)}
								class="dropdown flex w-full h-full text-sky-500 rounded-md border border-transparent overflow-hidden"
							>
								<div
									class="flex gap-2 w-full h-fit px-4 py-1 items-center hover:bg-zinc-700/20 transition"
								>
									<Fa icon={faPlus} />
									<p class="text-lg font-semibold">New list</p>
								</div>
							</button>
						{:else}
							<div
								class="absolute z-20 left-0 top-0 w-full h-full flex gap-4"
								style="width: {menuWidth}px;"
							>
								<div
									class="relative dropdown w-1/2 flex flex-col h-full rounded-md box-content border border-zinc-700/80 shadow-2xl overflow-hidden"
								>
									{#each listData as data}
										<button
											on:mouseenter={() => {
												lastHoveredListData = data;
											}}
											on:mousedown|stopPropagation
											class="flex gap-2 items-center justify-between px-4 py-1 w-full {data.textColor} {lastHoveredListData ===
											data
												? 'bg-zinc-700/20'
												: 's'} transition"
										>
											<p class="text-lg font-semibold">{data.name} list</p>
											{#if data === lastHoveredListData}
												<Fa icon={faCaretRight} />
											{/if}
										</button>
									{/each}
								</div>
								<div class="relative w-1/2 h-full">
									{#if lastHoveredListData}
										<div
											class="absolute z-20 right-0 dropdown w-full flex flex-col rounded-md box-content border border-zinc-700/80 shadow-2xl overflow-hidden"
											style="height: {rankData.length * 2.25}rem; top: {lastHoveredListData
												? lastHoveredListData.type * 2.25
												: 0}rem;"
										>
											{#each rankData as data}
												<button
													on:mousedown|stopPropagation
													on:click={async () => {
														if (!user || !lastHoveredListData) return;

														const id = await firestoreLists.add({
															name: `New ${lastHoveredListData.slug} ${data.slug}`,
															owner_id: user.uid,
															style: ListStyle.Column,
															type: lastHoveredListData.type,
															rankType: data.type
														});

														await goto(`/${id}`);
													}}
													class="flex gap-2 items-center px-4 py-1 w-full {lastHoveredListData.textColor} filter {data.filter} hover:bg-zinc-700/20 transition-[background-color]"
												>
													<Fa icon={faPlus} />
													<p class="text-lg font-semibold">{data.name} list</p>
												</button>
											{/each}
										</div>
									{/if}
								</div>
							</div>
							<span
								class="absolute z-10 h-7 left-[5px] dropdown box-content border border-zinc-700/80"
								style="width: {menuWidth - 10}px; top: {lastHoveredListData
									? lastHoveredListData.type * 2.26 + 0.25
									: 0}rem;"
							/>
						{/if}
					</div>
				</div>
				{#if user === null}
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
			{/if}
		</div>
	</div>
</header>

<style>
	.dropdown {
		background-color: rgb(46, 46, 50);
	}
</style>
