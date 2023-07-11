import { writable } from 'svelte/store';

export const background = writable<string | null>(null);
