import { writable } from 'svelte/store';

import type { List, ListStyle } from '$lib/types';

export const lists = writable<List[]>([]);

function add(list: List) {
	lists.update((lists) => [...lists, list]);
}

function remove(id: string) {
	lists.update((lists) => lists.filter((list) => list.id !== id));
}

function updateName(id: string, name: string) {
	lists.update((lists) => lists.map((list) => (list.id === id ? { ...list, name } : list)));
}

function updateStyle(id: string, style: ListStyle) {
	lists.update((lists) => lists.map((list) => (list.id === id ? { ...list, style } : list)));
}

export const listStore = {
	add,
	remove,
	updateName,
	updateStyle
};
