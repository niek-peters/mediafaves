<script lang="ts">
	let favoriteFilms: Film[] = [];

	let searchValue = '';
	let searchResults: Film[] = [];

	async function search() {
		const res = await fetch(`api/films/search/${searchValue}`);
		const data = await res.json();

		if (Array.isArray(data)) {
			searchResults = data.filter((film: Film) => {
				return !favoriteFilms.find((favoriteFilm: Film) => {
					return favoriteFilm.id === film.id;
				});
			});
		} else {
			searchResults = [];
		}
	}

	function addFilm(film: Film) {
		favoriteFilms = [...favoriteFilms, film];
		searchResults = searchResults.filter((film: Film) => {
			return !favoriteFilms.find((favoriteFilm: Film) => {
				return favoriteFilm.id === film.id;
			});
		});
	}
</script>

<div class="flex justify-center w-4/5">
	<section
		class="flex flex-col max-w-[50%] gap-8 h-fit bg-zinc-600/50 p-8 rounded-md border border-zinc-500/20"
	>
		<h2 class="text-4xl px-8 font-bold text-center">My Favourite Films</h2>
		{#if favoriteFilms.length === 0}
			<p class="text-zinc-300 py-4 text-center">Click on a searched film to add it to the list</p>
		{:else}
			<div class="flex flex-col gap-4">
				{#each favoriteFilms as film}
					<div class="flex items-center gap-8">
						<img src={film.image_url} alt="" class="h-36 aspect-[2/3] object-cover rounded-sm" />
						<h2 class="text-3xl font-semibold">{film.title}</h2>
					</div>
				{/each}
			</div>
		{/if}
	</section>
</div>
<section
	class="flex flex-col gap-4 w-1/5 h-fit bg-zinc-600 p-4 rounded-md border border-zinc-500/40"
>
	<input
		class="py-2 px-4 rounded-md bg-zinc-500/50 focus:bg-zinc-500/80 outline-none border border-zinc-400/20"
		type="text"
		id="search"
		placeholder="Search..."
		bind:value={searchValue}
		on:input={search}
	/>
	{#if !searchValue}
		<p class="flex justify-center items-center py-4 text-zinc-300">Start typing to search</p>
	{:else if searchResults.length === 0}
		<p class="flex justify-center items-center py-4 text-zinc-300">No results found</p>
	{:else}
		<div class="flex flex-col gap-4 max-h-[58vh] overflow-y-auto">
			{#each searchResults as film}
				<button
					class="flex gap-4 items-center {searchResults.length > 5 ? 'mr-4' : ''}"
					on:click={() => addFilm(film)}
				>
					<img src={film.image_url} alt="" class="h-24 aspect-[2/3] object-cover rounded-sm" />

					<h2 class="text-xl max-h-24 overflow-hidden text-left leading-6">{film.title}</h2>
				</button>
			{/each}
		</div>
	{/if}
</section>

<style lang="scss">
	/* width */
	::-webkit-scrollbar {
		width: 0.5rem;
	}

	/* Track */
	::-webkit-scrollbar-track {
		background-color: #27272a20;
		border-radius: 1rem;
		overflow: hidden;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background-color: #27272a40;
		border-radius: 1rem;

		&:hover {
			background-color: #27272a60;
		}
	}
</style>
