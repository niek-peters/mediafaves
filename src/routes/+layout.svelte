<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import '../app.scss';

	import Header from '$components/Header.svelte';
	import Footer from '$components/Footer.svelte';
	import Loading from '$components/Loading.svelte';

	import MobileHeader from '$components/mobile/Header.svelte';
	import MobileNavbar from '$components/mobile/Navbar.svelte';

	import { firestoreEntries } from '$firestore/entries';

	import { user } from '$stores/user';
	import { background, backgroundHandlers } from '$stores/background';
	import { lists } from '$stores/lists';
	import { entries } from '$stores/entries';
	import { windowWidth } from '$stores/windowWidth';
	import { loading } from '$stores/loading';

	import type { DBList, List } from '$lib/types';
	import NavPopup from '$src/lib/components/mobile/NavPopup.svelte';
	import { listUid } from '$src/lib/stores/listUid';

	onMount(async () => {
		if (!browser) return;

		const { auth, listsRef } = await import('$lib/firebase.client');

		auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				// Fetch lists
				const { getDocs, query, where } = await import('firebase/firestore');

				const listsQuery = query(listsRef, where('owner_id', '==', userAuth.uid));
				const listsSnapshot = await getDocs(listsQuery);
				const listsData = listsSnapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data()
				})) as DBList[];

				// Sort the lists by index
				listsData.sort((a, b) => a.index - b.index);

				lists.set(listsData);

				user.set({
					uid: userAuth.uid,
					name: userAuth.displayName || 'Anonymous',
					email: userAuth.email || ''
				});
			} else {
				user.set(null);
			}

			loading.set(false);
		});
	});

	$: browser && $user && firestoreEntries.scheduleSave($page.params.id, $entries, 200);

	$: list = $lists.find((list) => list.id === $page.params.id) as List | undefined;
</script>

<svelte:window bind:innerWidth={$windowWidth} />

<div
	class="flex flex-col w-full min-h-[110vh] bg-gradient-to-tr from-zinc-800 to-zinc-700 text-zinc-200 mt-14 md:mt-0 {$user
		? 'mb-16 md:mb-0'
		: ''}"
>
	{#key $background}
		<div
			transition:fade
			use:backgroundHandlers.loadImage
			class="fixed w-screen h-screen filter brightness-[0.3] top-8 md:top-0"
		/>
	{/key}
	<div class="relative flex flex-col items-center md:gap-6 w-full min-h-[110vh]">
		<MobileHeader user={$user} />
		<MobileNavbar user={$user} />
		<NavPopup lists={$lists} user={$user} {list} listUid={$listUid} entries={$entries} />

		<Header lists={$lists} user={$user} />
		<main class="relative flex justify-center w-full md:w-11/12 xl:w-4/5 gap-8">
			{#if $loading !== false}
				<Loading />
			{:else}
				<slot />
			{/if}
		</main>
		<Footer />
	</div>
</div>
