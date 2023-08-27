<script lang="ts">
	import { popup, popupHandlers } from '$stores/mobile/popup';
	import { Popups, type DBList, type User } from '$src/lib/types';
	import { faList, faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import { onDestroy, onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { navigating } from '$app/stores';

	export let user: User | null;

	onMount(() => {
		if (!browser) return;

		document.addEventListener('click', popupHandlers.close);
	});

	onDestroy(() => {
		if (!browser) return;

		document.removeEventListener('click', popupHandlers.close);
	});

	$: if ($navigating) {
		popupHandlers.close();
	}
</script>

{#if user !== null}
	<section class="fixed bottom-0 w-full h-16 bg-zinc-900 z-20">
		<div class="w-full h-full flex gap-4 justify-center items-center">
			<button
				on:click|stopPropagation={() => popupHandlers.open(Popups.Lists)}
				class="flex items-center justify-center h-12 w-12 text-zinc-200 rounded-full {$popup ===
				Popups.Lists
					? 'bg-cyan-700 border border-cyan-600 -translate-y-4'
					: 'bg-zinc-800'} transition duration-300"
			>
				<Fa icon={faList} class="text-2xl" />
			</button>
			<button
				on:click|stopPropagation={() => popupHandlers.open(Popups.New)}
				class="flex items-center justify-center h-12 w-12 text-zinc-200 rounded-full {$popup ===
				Popups.New
					? 'bg-cyan-700 border border-cyan-600 -translate-y-4'
					: 'bg-zinc-800'} transition duration-300"
			>
				<Fa icon={faPlus} class="text-2xl" />
			</button>
			<button
				on:click|stopPropagation={() => popupHandlers.open(Popups.Search)}
				class="flex items-center justify-center h-12 w-12 text-zinc-200 rounded-full {$popup ===
				Popups.Search
					? 'bg-cyan-700 border border-cyan-600 -translate-y-4'
					: 'bg-zinc-800'} transition duration-300"
			>
				<Fa icon={faMagnifyingGlass} class="text-2xl" />
			</button>
		</div>
	</section>
{/if}
