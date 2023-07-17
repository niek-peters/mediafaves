<script lang="ts">
	export let reason: 'ownership' | 'notiers' = 'ownership';
</script>

<section
	class="hidden 2xl:visible 2xl:flex flex-col gap-4 w-1/4 h-fit bg-zinc-700/50 p-4 rounded-md border border-zinc-500/20 shadow-xl backdrop-blur-sm"
>
	<p class="text-3xl font-bold h-10">Hint:</p>
	<h2 class="text-2xl px-1">
		{reason === 'ownership'
			? "You're looking at someone else's list"
			: 'Create a tier to start searching'}
	</h2>
</section>
