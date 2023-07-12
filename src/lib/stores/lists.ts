import { writable } from 'svelte/store';

import { ListType, type List, type ListStyle } from '$lib/types';

export const lists = writable<List[]>([]);

function getSnippet(type: ListType): 'films' | 'games' {
	return type === ListType.Films ? 'films' : 'games';
}

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

export const listHandlers = {
	getSnippet,
	add,
	remove,
	updateName,
	updateStyle
};
