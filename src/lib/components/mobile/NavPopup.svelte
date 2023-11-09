<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { firestoreLists } from '$src/lib/firestore/lists';
	import { entryHandlers } from '$src/lib/stores/entries';
	import { listHandlers } from '$src/lib/stores/lists';
	import { popup } from '$src/lib/stores/mobile/popup';
	import {
		filteredResults,
		resultData,
		searchFor,
		searchHandlers,
		searchResults,
		searchValue,
		searching
	} from '$src/lib/stores/search';
	import {
		Popups,
		type DBList,
		listData,
		rankData,
		ListStyle,
		type User,
		type ListData,
		ListType,
		RankType,
		type List,
		type Entry
	} from '$src/lib/types';
	import { subtext } from '$src/lib/utils/subtext';
	import {
		faAngleRight,
		faCaretLeft,
		faCaretRight,
		faGripVertical,
		faPlus
	} from '@fortawesome/free-solid-svg-icons';
	import { dragging, DragList, newList } from '@niek-peters/svelte-draggable';

	import Fa from 'svelte-fa';
	import { Circle } from 'svelte-loading-spinners';
	import { fade, fly } from 'svelte/transition';

	export let lists: DBList[];
	export let user: User | null;
	export let list: List | undefined;
	export let entries: Entry[] | undefined;
	export let listUid: string | undefined;

	let selectedListData: ListData | null = null;

	$: if ($popup) {
		selectedListData = null;
	}

	const searchList = newList(crypto.randomUUID(), filteredResults);

	$: list && resetSearch();

	function resetSearch() {
		searchValue.set('');
		searchResults.set([]);
		filteredResults.set([]);
	}

	$: filmsType = list ? list.type === ListType.Films : false;
	$: $searchFor = filmsType && searchForShows ? ListType.Shows : list ? list.type : ListType.Films;

	let searchForShows = false;

	$: pageCount = $resultData ? Math.ceil($resultData.count / $resultData.limit) : 0;
	$: currentPage = $resultData ? Math.floor($resultData.offset / $resultData.limit) + 1 : 0;

	let selectedSearchIndex: number | undefined = undefined;
</script>

{#if $popup !== null}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<section
		on:click|stopPropagation
		transition:fly={{ y: '100vh', duration: 300 }}
		class="fixed md:hidden {$dragging
			? 'opacity-0 overflow-hidden border-transparent pointer-events-none'
			: 'opacity-100 border-zinc-600'} border transition duration-300 bottom-20 top-[4.5rem] left-4 right-4 flex flex-col bg-gradient-to-t from-zinc-800 to-zinc-700 shadow-2xl rounded-md z-10"
	>
		{#key $popup}
			<div
				in:fade={{ duration: 300 }}
				class="flex flex-col relative w-full h-full max-h-full py-2 gap-2"
			>
				{#if $popup === Popups.Lists}
					<div class="flex flex-col relative w-full h-full px-2 gap-2">
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
					</div>
				{:else if $popup === Popups.New}
					<div class="flex flex-col relative w-full h-full px-2 gap-2 overflow-y-auto">
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
					</div>
				{:else if $popup === Popups.Search}
					{#if list !== undefined && listUid !== undefined && entries !== undefined}
						<div class="flex flex-col gap-2 h-full">
							<form autocomplete="off" class="flex gap-1 h-12 px-2">
								<input
									class="px-4 w-full rounded-md bg-zinc-600/30 focus:bg-zinc-600/40 transition outline-none border border-zinc-500/10"
									type="text"
									id="search"
									placeholder="Enter a {!filmsType
										? listHandlers.getSnippet(list.type).replace(/(s)(?!.*\1)/, '')
										: searchForShows
										? 'show'
										: 'film'} title"
									bind:value={$searchValue}
									on:input={async () => {
										if (list === undefined) return;

										if (!$searchValue) {
											searchResults.set([]);
											filteredResults.set([]);
											return;
										}

										await searchHandlers.scheduleSearch(
											!filmsType ? list.type : searchForShows ? ListType.Shows : ListType.Films
										);
									}}
								/>
								{#if filmsType}
									<button
										type="button"
										on:click={async () => {
											searchForShows = !searchForShows;

											if ($searchValue)
												await searchHandlers.scheduleSearch(
													searchForShows ? ListType.Shows : ListType.Films
												);
										}}
										class="text-center border {searchForShows
											? 'bg-indigo-600/20 hover:bg-indigo-600/30 border-indigo-500/10'
											: 'bg-violet-600/20 hover:bg-violet-600/30 border-violet-500/10'} transition px-4 text-sm py-1 text-zinc-200/60 h-full rounded-md"
										>Switch to {!searchForShows ? 'shows' : 'films'}</button
									>
								{/if}
							</form>
							{#if !searchValue}
								<p class="flex px-3 text-zinc-400">Start typing to search</p>
							{:else if $searchResults.length === 0 && !$searching}
								<p class="flex px-3 text-zinc-400">No results found</p>
							{:else if $filteredResults.length === 0 && pageCount <= 1 && !$searching}
								<p class="flex px-3 text-zinc-400">All results are in your list</p>
							{:else}
								<div class="flex flex-col gap-2 min-h-0">
									{#if $resultData && $searchValue && !$searching}
										<div class="flex gap-2 px-3 items-center text-zinc-300">
											<p class="w-fit shrink-0">Results: {$resultData.count}</p>
											<span class="bg-zinc-600 w-px h-4 shrink-0" />
											<div class="flex gap-1 shrink-0">
												<button
													on:click={async () => {
														if (list === undefined) return;

														if (!$resultData.offset) return;

														await searchHandlers.scheduleSearch(
															!filmsType
																? list.type
																: searchForShows
																? ListType.Shows
																: ListType.Films,
															$resultData.limit,
															Math.max(0, $resultData.offset - $resultData.limit)
														);
													}}
													class="{$resultData.offset
														? 'hover:text-zinc-400'
														: 'text-zinc-600 cursor-not-allowed'} transition"
													><Fa icon={faCaretLeft} /></button
												>
												<button
													on:click={async () => {
														if (list === undefined) return;

														if ($resultData.offset + $resultData.limit >= $resultData.count) return;

														await searchHandlers.scheduleSearch(
															!filmsType
																? list.type
																: searchForShows
																? ListType.Shows
																: ListType.Films,
															$resultData.limit,
															$resultData.offset + $resultData.limit
														);
													}}
													class="{$resultData.offset + $resultData.limit < $resultData.count
														? 'hover:text-zinc-400'
														: 'text-zinc-600 cursor-not-allowed'} transition"
												>
													<Fa icon={faCaretRight} />
												</button>
											</div>
											<span class="bg-zinc-600 w-px h-4 shrink-0" />
											<div class="flex gap-1 overflow-hidden items-center">
												{#each new Array(Math.min(5, pageCount)) as _, index}
													{#if (currentPage < 3 ? index + 1 : index + currentPage - 2) <= pageCount}
														<button
															on:click={async () => {
																if (list === undefined) return;

																const offset =
																	(currentPage < 3 ? index + 1 : index + currentPage - 2) *
																		$resultData.limit -
																	$resultData.limit;

																await searchHandlers.scheduleSearch(
																	!filmsType
																		? list.type
																		: searchForShows
																		? ListType.Shows
																		: ListType.Films,
																	$resultData.limit,
																	offset
																);
															}}
														>
															<p
																class="border-b h-[1.4rem] {(currentPage < 3
																	? index + 1
																	: index + currentPage - 2) === currentPage
																	? 'border-zinc-200'
																	: 'border-transparent'}"
															>
																{currentPage < 3 ? index + 1 : index + currentPage - 2}
															</p>
														</button>
													{/if}
												{/each}
												{#if pageCount > 10 && currentPage < pageCount - 2}
													{#if currentPage < pageCount - 3}
														<p>...</p>
													{/if}
													<button
														on:click={async () => {
															if (list === undefined) return;

															const offset = pageCount * $resultData.limit - $resultData.limit;

															await searchHandlers.scheduleSearch(
																!filmsType
																	? list.type
																	: searchForShows
																	? ListType.Shows
																	: ListType.Films,
																$resultData.limit,
																offset
															);
														}}
													>
														<p class="border-b h-[1.4rem] border-transparent">{pageCount}</p>
													</button>
												{/if}
											</div>
										</div>
										{#if $filteredResults.length === 0}
											<p class="flex px-3 pt-3 text-zinc-400">
												All results from this page are in your list
											</p>
										{/if}
									{:else if $searching}
										<div class="flex px-2 gap-2 items-center text-zinc-400">
											<Circle size="1" unit="rem" color="#a1a1aa" />
											<p>Searching...</p>
										</div>
									{/if}
									<DragList
										let:index
										list={searchList}
										targets={[listUid]}
										listClass="flex flex-col overflow-y-scroll w-full"
										inner={false}
									>
										{@const entry = searchList.get(index)}
										<div
											id="results-{index}"
											class="relative flex outline-none gap-3 py-1 px-3 overflow-hidden h-[6.5rem] flex-shrink-0 w-full {index ===
												selectedSearchIndex ||
											($dragging && $dragging.element.id === entry.uid)
												? 'bg-zinc-600/20'
												: ''} transition-[background-color] items-center {$filteredResults.length >
											5
												? 'mr-4'
												: ''}"
											on:click={() => {
												selectedSearchIndex = index;
											}}
										>
											<button name="drag" class="touch-none">
												<Fa icon={faGripVertical} class="text-zinc-400" />
											</button>
											<img
												draggable="false"
												src={entry.poster_url}
												alt=""
												class="h-24 aspect-[2/3] object-cover rounded-sm"
											/>
											<div class="flex flex-col max-h-24 overflow-hidden">
												<h2
													class="text-xl overflow-hidden text-left leading-6 py-1 line-clamp-3 overflow-ellipsis"
												>
													{entry.title}
												</h2>
												<p
													class="text-left text-xs text-zinc-400 overflow-hidden whitespace-nowrap overflow-ellipsis"
												>
													{subtext.get(list, entry)}
												</p>
											</div>

											<button
												class="absolute right-2 top-2 {index === selectedSearchIndex
													? 'block'
													: 'hidden'}"
												on:click={async () => {
													if (list === undefined || entries === undefined) return;

													if (list.rankType === RankType.Ranks) await entryHandlers.add(entry);
													else if (
														list.rankType === RankType.Tiers &&
														list.tiers &&
														list.tiers.length
													)
														await entryHandlers.add({
															...entry,
															tier: list.tiers[list.tiers.length - 1]
														});

													searchHandlers.filter(entries);
												}}><Fa icon={faPlus} class="text-sky-500 text-lg" /></button
											>
										</div>
									</DragList>
								</div>
							{/if}
						</div>
					{/if}
				{/if}
			</div>
		{/key}
	</section>
{/if}
