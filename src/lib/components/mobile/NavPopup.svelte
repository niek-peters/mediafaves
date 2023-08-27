<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { firestoreLists } from '$src/lib/firestore/lists';
	import { popup } from '$src/lib/stores/mobile/popup';
	import {
		Popups,
		type DBList,
		listData,
		rankData,
		ListStyle,
		type User,
		type ListData
	} from '$src/lib/types';
	import {
		faAngleDown,
		faAngleRight,
		faCaretDown,
		faPlus
	} from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import { fade, fly } from 'svelte/transition';

	export let lists: DBList[];
	export let user: User | null;

	let selectedListData: ListData | null = null;

	$: if ($popup) {
		selectedListData = null;
	}
</script>

{#if $popup !== null}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<section
		on:click|stopPropagation
		transition:fly={{ y: '100vh', duration: 300 }}
		class="fixed bottom-20 top-[4.5rem] left-4 right-4 flex flex-col bg-gradient-to-t from-zinc-800 to-zinc-700 border border-zinc-600 shadow-2xl rounded-md z-10"
	>
		{#key $popup}
			<div in:fade={{ duration: 300 }} class="flex flex-col w-full h-full p-2 gap-2">
				{#if $popup === Popups.Lists}
					{#each lists as list}
						<button
							on:click={async () => {
								await goto(`/${list.id}`);
							}}
							class="w-full bg-zinc-600/30 px-2 py-1 rounded-sm transition {listData[list.type]
								.textColor}"
						>
							<p class="relative font-semibold text-lg text-left">
								{list.name}
								<span
									class="absolute left-0 bottom-0 h-px w-full {$page.params.id === list.id
										? `${listData[list.type].bgColor}`
										: 'bg-transparent'}"
								/>
							</p>
						</button>
					{/each}
				{:else if $popup === Popups.New}
					{#each listData as data}
						<div
							class="w-full flex flex-col items-center bg-zinc-600/30 rounded-sm transition overflow-hidden {data.textColor}"
						>
							<button
								on:click={() => {
									if (selectedListData === data) selectedListData = null;
									else selectedListData = data;
								}}
								class="w-full flex gap-2 items-center px-2 py-1 transition {selectedListData ===
								data
									? 'bg-zinc-600/30'
									: ''} {data.textColor}"
							>
								<Fa
									icon={faAngleRight}
									class="text-xl {selectedListData === data
										? 'rotate-90'
										: ''} transition duration-300"
								/>
								<p class="font-semibold text-lg">{data.name} list</p>
							</button>
							{#if selectedListData !== undefined && selectedListData === data}
								<div class="flex flex-col gap-2 px-2 py-1 w-full" in:fade>
									{#each rankData as data}
										<button
											on:click={async () => {
												if (!user || !selectedListData) return;

												const id = await firestoreLists.add({
													name: `New ${selectedListData.slug} ${data.slug}`,
													owner_id: user.uid,
													style: ListStyle.Column,
													type: selectedListData.type,
													rankType: data.type
												});

												await goto(`/${id}`);
											}}
											class="flex gap-2 pl-2 items-center w-full {selectedListData.textColor} filter {data.filter} hover:bg-zinc-700/20 transition-[background-color]"
										>
											<Fa icon={faPlus} />
											<p class="text-lg font-semibold">{data.name} list</p>
										</button>
									{/each}
								</div>
							{/if}
						</div>
					{/each}
				{:else if $popup === Popups.Search}
					Search popup coming soon!
				{/if}
			</div>
		{/key}
	</section>
{/if}
