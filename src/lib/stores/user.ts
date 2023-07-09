import { writable } from 'svelte/store';

export const user = writable<User | null>(null);

export function setUser(newUser: User) {
	user.set(newUser);
}

export function clearUser() {
	user.set(null);
}
