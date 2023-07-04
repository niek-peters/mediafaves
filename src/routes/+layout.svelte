<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.scss';
	import { filmLists, loadLists, addList, ListStyle, saveLists } from '$lib/stores/filmLists';
	import { dragFilm } from '$lib/stores/dragFilm';
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';

	$: filmListId = !isNaN(parseInt($page.params.id)) ? parseInt($page.params.id) : 1;
	$: filmList = $filmLists.find((list) => list.id === filmListId);

	function getTopLeft(main: HTMLElement) {
		$dragFilm.measurements.topY = window.scrollY + main.getBoundingClientRect().y;
		$dragFilm.measurements.leftX = main.getBoundingClientRect().x;
	}

	function loadImage(node: HTMLDivElement) {
		new Promise(() => {
			const img = new Image();
			img.src = $filmLists[0].films[0].backdrop_url;
			img.decode().then(() => node.appendChild(img));
		});
	}

	onMount(() => {
		loadLists();

		// removeList(1);

		if (!$filmLists.length) {
			addList({
				id: 1,
				name: 'Favorite Films',
				films: [],
				style: ListStyle.Column
			});
		}

		window.addEventListener('beforeunload', saveLists);
	});
</script>

<div class="flex flex-col w-screen min-h-[100vh] overflow-x-hidden bg-zinc-900 text-zinc-200">
	{#if filmList && filmList.films.length !== 0}
		{#key filmList.films[0].id}
			<div
				transition:fade
				use:loadImage
				class="fixed w-screen h-screen bg-cover filter brightness-[0.3]"
			/>
		{/key}
	{/if}
	<div class="relative flex flex-col items-center gap-6 w-full min-h-[100vh]">
		<header class="flex items-center justify-center w-full bg-zinc-800 py-3 shadow-2xl">
			<div class="flex items-center w-4/5">
				<h1 class="text-4xl font-bold">Rankify</h1>
			</div>
		</header>
		<main class="relative flex justify-center w-4/5 gap-8" id="main" use:getTopLeft>
			<slot />
		</main>
		<footer class="flex justify-center w-full mt-auto py-6 bg-zinc-900">
			<div class="flex w-4/5 justify-between items-center">
				<div class="flex flex-col items-center gap-4">
					<h4 class="text-lg font-semibold">Rankify is a site made by Niek Peters</h4>
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
