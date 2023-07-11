<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import type { LayoutServerData } from './$types';
	import '../app.scss';

	import Fa from 'svelte-fa';
	import { faCaretDown, faCaretRight, faPlus } from '@fortawesome/free-solid-svg-icons';
	import { faGoogle } from '@fortawesome/free-brands-svg-icons';

	import { signInWithCustomToken } from 'firebase/auth';

	import { auth } from '$src/hooks.client';

	import { firestoreLists } from '$firestore/lists';
	import { firestoreFilms } from '$firestore/films';

	import { dragFilm } from '$stores/dragFilm';
	import { authHandlers, authStore } from '$stores/authStore';
	import { background } from '$stores/background';
	import { ListStyle, ListType, lists } from '$stores/lists';
	import { films } from '$stores/films';

	authStore.set(null);

	export let data: LayoutServerData;
	if (data.token && data.customToken) {
		signInWithCustomToken(auth, data.customToken);

		authStore.set({
			uid: data.token.uid,
			name: data.token.name || 'Anonymous',
			email: data.token.email || ''
		});
	}
	lists.set(data.filmLists);

	function getTopLeft(main: HTMLElement) {
		$dragFilm.measurements.topY = window.scrollY + main.getBoundingClientRect().y;
		$dragFilm.measurements.leftX = main.getBoundingClientRect().x;
	}

	function loadImage(node: HTMLDivElement) {
		new Promise(() => {
			if (!$background) return;

			const img = new Image();
			img.style.minWidth = '100vw';
			img.style.minHeight = '100vh';
			img.src = $background;
			img.decode().then(() => node.appendChild(img));
		});
	}

	// beforeNavigate(async ({ to, from, cancel }) => {
	// 	if (
	// 		!$lists.find((list) => list.id === $page.params.id) ||
	// 		!from ||
	// 		!from.params ||
	// 		!from.params.id
	// 	)
	// 		return;

	// 	if (!to) to = structuredClone(from);

	// 	if (to.url.searchParams.has('wait')) {
	// 		to.url.searchParams.delete('wait');
	// 		return false;
	// 	}

	// 	cancel();

	// 	await firestoreFilms.save(from.params.id, $films);
	// 	console.log('saved from nav');

	// 	to.url.searchParams.append('wait', '');

	// 	await goto(to.url);
	// });

	onMount(() => {
		document.addEventListener('mousedown', closeDropdown);
	});

	function closeDropdown() {
		filmDropdownOpen = false;
	}

	$: if ($page.params.id) closeDropdown();

	let filmDropdownOpen = false;

	$: $films && auth.currentUser && resetTimer();

	let timeOut: NodeJS.Timeout;
	let firstTime = true;
	function resetTimer() {
		if (firstTime) {
			firstTime = false;
			return;
		}
		if (timeOut) clearTimeout(timeOut);

		timeOut = setTimeout(async () => {
			await firestoreFilms.save($page.params.id, $films);
		}, 200);
	}
</script>

<div class="flex flex-col w-screen min-h-[100vh] overflow-x-hidden bg-zinc-800 text-zinc-200">
	{#key $background}
		<div
			transition:fade
			use:loadImage
			class="fixed w-screen h-screen bg-cover filter brightness-[0.3]"
		/>
	{/key}
	<div class="relative flex flex-col items-center gap-6 w-full min-h-[100vh]">
		<header class="flex items-center justify-center w-full bg-zinc-800 py-3 shadow-2xl">
			<div class="flex items-center gap-8 w-4/5">
				<div class="flex items-center gap-12 w-3/4 flex-grow-0">
					<h1 class="text-4xl font-bold flex">
						<span class="text-sky-300">Media</span><span class="text-emerald-400">Faves</span>
					</h1>
					{#if $lists.length}
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
										{#each $lists as list, index}
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
										<div
											class="dropdown relative flex flex-col h-fit p-2 rounded-md gap-1 shadow-2xl"
										>
											{#each $lists as list}
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
							if (!$authStore) return;

							const id = await firestoreLists.add({
								name: 'New list',
								owner_id: $authStore.uid,
								style: ListStyle.Column,
								type: ListType.Films
							});

							await goto(`/${id}`);
						}}
						class="w-1/2 flex items-center gap-2 px-4 py-1 text-sky-500 bg-zinc-700/30 hover:bg-zinc-700/50 transition rounded-md"
						><Fa icon={faPlus} />
						<p class="text-lg font-semibold">New list</p></button
					>
					{#if $authStore === null}
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
		<main class="relative flex justify-center w-4/5 gap-8" id="main" use:getTopLeft>
			<slot />
		</main>
		<footer class="flex justify-center w-full mt-auto py-6 bg-zinc-900">
			<div class="flex w-4/5 justify-between items-center">
				<div class="flex flex-col items-center gap-4">
					<h4 class="text-lg font-semibold">MediaFaves is a site made by Niek Peters</h4>
					<p class="text-zinc-300">Copyright &copy; Niek Peters 2023</p>
				</div>
				<div class="flex flex-col items-center gap-4">
					<h4 class="text-lg font-semibold">Film search made possible thanks to the TMDB API</h4>
					<div class="flex gap-4">
						<img src="/tmdb.svg" alt="TMDB" class="h-12" />
						<p>This product uses the TMDB API but <br /> is not endorsed or certified by TMDB</p>
					</div>
				</div>
			</div>
		</footer>
	</div>
</div>

<style>
	.dropdown {
		background-color: rgb(46, 46, 50);
	}
</style>
