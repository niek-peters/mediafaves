import { get, writable } from 'svelte/store';
import { page } from '$app/stores';
import { goto } from '$app/navigation';

import { signInWithPopup } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';

import { auth, provider, usersRef } from '$src/hooks.client';

import { background } from '$stores/background';
import { lists } from '$stores/lists';

import type { AuthStore, List } from '$lib/types';

export const authStore = writable<AuthStore | null>(null);

export const authHandlers = {
	login: async () => {
		const { user } = await signInWithPopup(auth, provider);

		// Create user doc if it doesn't exist
		const userDoc = await getDoc(doc(usersRef, user.uid));
		if (!userDoc.exists()) {
			await setDoc(doc(usersRef, user.uid), {
				name: user.displayName,
				email: user.email
			});
		}

		const pageId = get(page).params.id;

		try {
			// Create session cookie on the server
			const idToken = await user.getIdToken();
			const res = await fetch('/api/session/login', {
				method: 'POST',
				body: JSON.stringify({ idToken })
			});
			const data = await res.json();
			lists.set(data.filmLists as List[]);

			authStore.set({
				uid: user.uid,
				name: user.displayName || 'Anonymous',
				email: user.email || ''
			});

			const listStore = get(lists);
			if (!pageId && !listStore.length) return await goto('/');
			else if (listStore.length) return await goto(`/films/${listStore[0].id}`);
		} catch (err) {
			console.error(err);
		}

		await goto(`/films/${pageId}`);
	},
	logout: async () => {
		lists.set([]);
		authStore.set(null);
		background.set(null);
		await fetch('/api/session/logout');
		await auth.signOut();
		await goto('/');
	}
};
