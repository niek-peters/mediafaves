import { signInWithPopup, signOut } from 'firebase/auth';
import { writable } from 'svelte/store';
import { auth, provider, usersRef } from '../../hooks.client';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { unloadLists } from './filmLists';
import { goto } from '$app/navigation';

export const user = writable<User | null | undefined>(undefined);

export function setUser(newUser: User) {
	user.set(newUser);
}

export function clearUser() {
	user.set(null);
}

export async function login() {
	try {
		const { user } = await signInWithPopup(auth, provider);
		// console.log(credential.user);
		const userDoc = await getDoc(doc(usersRef, user.uid));
		if (userDoc.exists()) return;

		await setDoc(doc(usersRef, user.uid), {
			name: user.displayName,
			email: user.email
		});
	} catch (error) {
		console.log(error);
	}
}

export async function logout() {
	try {
		await signOut(auth);
		clearUser();
		unloadLists();
		goto('/');
	} catch (error) {
		console.log(error);
	}
}
