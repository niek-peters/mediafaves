import { get, writable } from 'svelte/store';

import { listHandlers } from '$stores/lists';
import { entries, entryHandlers } from '$stores/entries';

import type { Entry, ListType } from '$lib/types';

export const searchValue = writable<string>('');
export const searchResults = writable<Entry[]>([]);
export const filteredResults = writable<Entry[]>([]);
export const searchFor = writable<ListType>();

async function search(type: ListType) {
	const snippet = listHandlers.getSnippet(type);

	const res = await fetch(`/api/${snippet}/search/${get(searchValue)}`);
	const data = await res.json();

	searchResults.set(Array.isArray(data) ? data : []);

	const entryStore = get(entries);
	filteredResults.set(
		data.filter((searchedEntry: Entry) => {
			return !entryStore.find((entry: Entry) => {
				return entry.title === searchedEntry.title;
			});
		})
	);
}

let busy = false;
let lastSearch = '';

async function scheduleSearch(type: ListType, interval = 300) {
	const query = get(searchValue);

	if (busy || !query) return;

	busy = true;

	lastSearch = query;
	await search(type);

	setTimeout(() => {
		busy = false;

		if (lastSearch !== get(searchValue)) {
			scheduleSearch(type, interval);
		}
	}, interval);
}

function filter(entries: Entry[]) {
	filteredResults.update((filteredResults: Entry[]) => {
		return filteredResults.filter((searchedEntry: Entry) => {
			return !entries.find((entry: Entry) => {
				return entry.title === searchedEntry.title;
			});
		});
	});
}

function unFilter(entry: Entry) {
	const type = get(searchFor);
	if (type === undefined) return;

	if (entryHandlers.getType(entry) !== type) return;

	filteredResults.update((filteredResults: Entry[]) => {
		return [entry, ...filteredResults];
	});
}

export const searchHandlers = {
	// search,
	scheduleSearch,
	filter,
	unFilter
};
