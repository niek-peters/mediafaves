import { get, writable } from 'svelte/store';
import { app, auth, provider, usersRef } from '../../hooks.client';
import {
	signInWithCredential,
	signInWithCustomToken,
	signInWithPopup,
	type User
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { goto } from '$app/navigation';
import { page } from '$app/stores';
import { ListStyle, ListType, lists, type List } from './lists';
import { firestoreLists } from '../firestore/lists';
import { background } from './background';

export type AuthStore = {
	uid: string;
	name: string;
	email: string;
};

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
			else if (listStore.length) return await goto(`/${listStore[0].id}`);
		} catch (err) {
			console.error(err);
		}

		await goto(`/${pageId}`);
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
