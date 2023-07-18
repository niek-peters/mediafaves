import { get, writable } from 'svelte/store';
import { page } from '$app/stores';
import { goto } from '$app/navigation';

import { signInWithPopup } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';

import { auth, provider, usersRef } from '$lib/firebase.client';

import { background } from '$stores/background';
import { lists } from '$stores/lists';

import type { User } from '$lib/types';

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
	background.set(null);
	await auth.signOut();
	await goto('/');
}

export const authHandlers = {
	login,
	logout
};
