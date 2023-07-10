import { get, writable } from 'svelte/store';
import { auth, provider, usersRef } from '$lib/firebase.client';
import { signInWithPopup, type User } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { ListStyle, addList, filmLists, loadLists, unloadLists } from './filmLists';
import { goto } from '$app/navigation';
import { page } from '$app/stores';

type Auth = {
	isLoading: boolean;
	currentUser: User | null;
};

export const authStore = writable<Auth>({
	isLoading: true,
	currentUser: null
});

export const authHandlers = {
	login: async () => {
		const { user } = await signInWithPopup(auth, provider);

		const userDoc = await getDoc(doc(usersRef, user.uid));
		if (!userDoc.exists()) {
			await setDoc(doc(usersRef, user.uid), {
				name: user.displayName,
				email: user.email
			});
		}

		await loadLists(user);

		const lists = get(filmLists);
		if (!lists.length) {
			await addList({
				name: 'Favorite Films',
				films: [],
				style: ListStyle.Column
			});
		}

		if (!get(page).params.id) goto(`/${lists[0].id}`);
	},
	logout: async () => {
		await auth.signOut();
		unloadLists();
		await goto('/');
	}
};
