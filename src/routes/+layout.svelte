<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.scss';
	import { filmLists, loadLists, addList, ListStyle, saveLists } from '$lib/stores/filmLists';
	import { dragFilm } from '$lib/stores/dragFilm';

	function getTopLeft(main: HTMLElement) {
		$dragFilm.measurements.topY = window.scrollY + main.getBoundingClientRect().y;
		$dragFilm.measurements.leftX = main.getBoundingClientRect().x;
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

<div
	class="flex flex-col items-center w-screen min-h-[100vh] overflow-x-hidden bg-zinc-700 text-zinc-200"
>
	<div class="flex flex-col gap-8 w-4/5 min-h-[100vh]">
		<header class="flex items-center w-full border-b border-zinc-800/20 py-4">
			<h1 class="text-4xl font-bold">Rankify</h1>
		</header>
		<main class="relative flex justify-center w-full gap-8" id="main" use:getTopLeft>
			<slot />
		</main>
		<footer class="flex justify-between mt-auto py-8 border-t border-zinc-800/20">
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
		</footer>
	</div>
</div>
