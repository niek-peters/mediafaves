<script lang="ts">
	import { fade } from 'svelte/transition';
	import { page } from '$app/stores';
	import type { LayoutData, LayoutServerData } from './$types';
	import '../app.scss';

	import Header from '$src/lib/components/Header.svelte';
	import Footer from '$src/lib/components/Footer.svelte';

	import { signInWithCustomToken } from 'firebase/auth';

	import { auth } from '$src/hooks.client';

	import { firestoreEntries } from '$firestore/entries';

	import { user } from '$src/lib/stores/user';
	import { background, backgroundHandlers } from '$stores/background';
	import { lists } from '$stores/lists';
	import { entries } from '$stores/entries';
	import { windowWidth } from '$stores/windowWidth';
	import { browser } from '$app/environment';
	import { onDestroy, onMount } from 'svelte';

	export let data: LayoutServerData;
	init(data);

	let retries = 0;
	function init(data: LayoutServerData) {
		user.set(null);

		if (data.token && data.customToken) {
			signInWithCustomToken(auth, data.customToken)
				.then(() => (retries = 0))
				.catch((error) => {
					retries++;

					if (retries < 5) init(data);
					else console.error(error);
				});

			user.set({
				uid: data.token.uid,
				name: data.token.name || 'Anonymous',
				email: data.token.email || ''
			});
		}

		lists.set(data.lists || []);
	}

	onMount(() => {
		if (!browser) return;

		// windowHandlers.init();
	});

	onDestroy(() => {
		if (!browser) return;

		// windowHandlers.destroy();
	});

	$: browser && auth.currentUser && firestoreEntries.scheduleSave($page.params.id, $entries, 200);
</script>

<svelte:window bind:innerWidth={$windowWidth} />

<div
	class="flex flex-col w-screen min-h-[110vh] overflow-x-hidden bg-gradient-to-tr from-zinc-800 to-zinc-700 text-zinc-200"
>
	{#key $background}
		<div
			transition:fade
			use:backgroundHandlers.loadImage
			class="fixed w-screen h-screen filter brightness-[0.3]"
		/>
	{/key}
	<div class="relative flex flex-col items-center gap-6 w-full min-h-[110vh]">
		<Header lists={$lists} user={$user} />
		<main class="relative flex justify-center w-11/12 xl:w-4/5 gap-8">
			<slot />
		</main>
		<Footer />
	</div>
</div>
