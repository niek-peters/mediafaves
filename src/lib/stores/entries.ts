import { writable } from 'svelte/store';

import type { Entry } from '$lib/types';

export const entries = writable<Entry[]>([]);

function getId(entry: Entry) {
	return 'imdb_id' in entry ? entry.imdb_id : entry.rawg_id;
}

function add(entry: Entry) {
	return new Promise((res) => {
		entries.update((entries) => {
			res(null);
			return [...entries, entry];
		});
	});
}

function remove(id: number) {
	entries.update((entries) => entries.filter((entry) => getId(entry) !== id));
}

function moveTo(id: number, index: number) {
	entries.update((entries) => {
		const entry = entries.find((entry) => getId(entry) === id);
		if (!entry) return entries;

		const newEntry = entries.filter((entry) => getId(entry) !== id);
		newEntry.splice(index, 0, entry);

		return newEntry;
	});
}

export const entryStore = {
	getId,
	add,
	remove,
	moveTo
};
