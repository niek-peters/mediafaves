import { get, writable } from 'svelte/store';

import { listHandlers } from '$stores/lists';
import { entries, entryHandlers } from '$stores/entries';

import { searchLimit } from '$src/hooks.client';

import type { Entry, ListType, ResultData } from '$lib/types';

export const searchValue = writable<string>('');
export const searchResults = writable<Entry[]>([]);
export const filteredResults = writable<Entry[]>([]);
export const resultData = writable<ResultData>();

export const searchFor = writable<ListType>();
export const searching = writable(false);

async function search(type: ListType, limit = searchLimit, offset = 0) {
	searching.set(true);

	const snippet = listHandlers.getSnippet(type);

	const res = await fetch(
		`/api/${snippet}/search/${get(searchValue)}?limit=${limit}&offset=${offset}`
	);
	const data = await res.json();

	const results = data.results.map((result: any) => ({ ...result, uid: crypto.randomUUID() }));

	resultData.set({
		count: data.count,
		limit: data.limit,
		offset: data.offset
	});
	searchResults.set(Array.isArray(results) ? results : []);

	const entryStore = get(entries);
	filteredResults.set(
		results.filter((searchedEntry: Entry) => {
			return !entryStore.find((entry: Entry) => {
				return entryHandlers.getId(entry) === entryHandlers.getId(searchedEntry);
			});
		})
	);
	searching.set(false);
}

let busy = false;
let lastSearch = '';

async function scheduleSearch(type: ListType, limit = searchLimit, offset = 0, interval = 300) {
	searching.set(true);
	const query = get(searchValue);

	if (busy || !query) {
		searching.set(false);
		searchResults.set([]);
		filteredResults.set([]);

		return;
	}

	busy = true;

	lastSearch = query;
	await search(type, limit, offset);

	setTimeout(() => {
		busy = false;

		if (lastSearch !== get(searchValue)) {
			scheduleSearch(type, limit, offset, interval);
		}
	}, interval);
}

function filter(entries: Entry[]) {
	filteredResults.update((filteredResults: Entry[]) => {
		return filteredResults.filter((searchedEntry: Entry) => {
			return !entries.find((entry: Entry) => {
				return entryHandlers.getId(entry) === entryHandlers.getId(searchedEntry);
			});
		});
	});
}

export const searchHandlers = {
	scheduleSearch,
	filter
};
