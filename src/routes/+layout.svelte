<script>
	import '../app.scss';
</script>

<div
	class="flex flex-col items-center w-screen min-h-[100vh] overflow-x-hidden bg-zinc-700 text-zinc-200"
>
	<div class="flex flex-col gap-8 w-4/5 min-h-[100vh]">
		<header class="flex items-center w-full border-b border-zinc-800/20 py-4">
			<h1 class="text-4xl font-bold">MediaLister</h1>
		</header>
		<main class="flex justify-center w-full gap-8">
			<slot />
		</main>
		<footer class="flex justify-between mt-auto py-8 border-t border-zinc-800/20">
			<div class="flex flex-col items-center gap-4">
				<h4 class="text-lg font-semibold">MediaLister is a site made by Niek Peters</h4>
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
