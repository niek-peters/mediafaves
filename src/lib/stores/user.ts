import { get, writable } from 'svelte/store';
import { page } from '$app/stores';
import { goto } from '$app/navigation';

import { signInWithPopup } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';

import { auth, provider, usersRef } from '$src/hooks.client';

import { background } from '$stores/background';
import { lists } from '$stores/lists';

import type { User, List } from '$lib/types';

export const user = writable<User | null>(null);

async function login() {
	const { user: currentUser } = await signInWithPopup(auth, provider);

	// Create user doc if it doesn't exist
	const userDoc = await getDoc(doc(usersRef, currentUser.uid));
	if (!userDoc.exists()) {
		await setDoc(doc(usersRef, currentUser.uid), {
			name: currentUser.displayName,
			email: currentUser.email
		});
	}

	const pageId = get(page).params.id;

	try {
		// Create session cookie on the server
		const idToken = await currentUser.getIdToken();
		const res = await fetch('/api/session/login', {
			method: 'POST',
			body: JSON.stringify({ idToken })
		});
		const data = await res.json();
		lists.set(data.filmLists as List[]);

		user.set({
			uid: currentUser.uid,
			name: currentUser.displayName || 'Anonymous',
			email: currentUser.email || ''
		});

		const listStore = get(lists);
		if (!pageId && !listStore.length) return await goto('/');
		else if (listStore.length) return await goto(`/${listStore[0].id}`);
	} catch (err) {
		console.error(err);
	}

	await goto(`/${pageId}`);
}

async function logout() {
	lists.set([]);
	user.set(null);
	background.set(null);
	await fetch('/api/session/logout');
	await auth.signOut();
	await goto('/');
}

export const authHandlers = {
	login,
	logout
};
