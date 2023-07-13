<script lang="ts">
	import { fade } from 'svelte/transition';
	import { page } from '$app/stores';
	import type { LayoutServerData } from './$types';
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
	import { browser } from '$app/environment';

	export let data: LayoutServerData;
	init(data);

	function init(data: LayoutServerData) {
		user.set(null);

		if (data.token && data.customToken) {
			signInWithCustomToken(auth, data.customToken);

			user.set({
				uid: data.token.uid,
				name: data.token.name || 'Anonymous',
				email: data.token.email || ''
			});
		}

		lists.set(data.lists || []);
	}

	$: browser && auth.currentUser && firestoreEntries.scheduleSave($page.params.id, $entries, 200);
</script>

<div class="flex flex-col w-screen min-h-[110vh] overflow-x-hidden bg-zinc-800 text-zinc-200">
	{#key $background}
		<div
			transition:fade
			use:backgroundHandlers.loadImage
			class="fixed w-screen h-screen filter brightness-[0.3]"
		/>
	{/key}
	<div class="relative flex flex-col items-center gap-6 w-full min-h-[110vh]">
		<Header lists={$lists} user={$user} />
		<main class="relative flex justify-center w-4/5 gap-8">
			<slot />
		</main>
		<Footer />
	</div>
</div>
