<script lang="ts">
	import { fade } from 'svelte/transition';
	import { page } from '$app/stores';
	import type { LayoutServerData } from './$types';
	import '../app.scss';

	import Header from '$src/lib/components/Header.svelte';
	import Footer from '$src/lib/components/Footer.svelte';

	import { signInWithCustomToken } from 'firebase/auth';

	import { auth } from '$src/hooks.client';

	import { firestoreFilms } from '$firestore/films';

	import { getTopLeft } from '$stores/dragFilm';
	import { authStore } from '$stores/authStore';
	import { background, loadImage } from '$stores/background';
	import { lists } from '$stores/lists';
	import { films } from '$stores/films';

	export let data: LayoutServerData;
	init(data);

	function init(data: LayoutServerData) {
		authStore.set(null);

		if (data.token && data.customToken) {
			signInWithCustomToken(auth, data.customToken);

			authStore.set({
				uid: data.token.uid,
				name: data.token.name || 'Anonymous',
				email: data.token.email || ''
			});
		}

		lists.set(data.filmLists);
	}

	$: auth.currentUser && firestoreFilms.scheduleSave($page.params.id, $films, 200);
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
		<Header lists={$lists} authStore={$authStore} />
		<main class="relative flex justify-center w-4/5 gap-8" id="main" use:getTopLeft>
			<slot />
		</main>
		<Footer />
	</div>
</div>
