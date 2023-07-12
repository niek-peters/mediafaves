import { get, writable } from 'svelte/store';

import type { Entry, ListType } from '$lib/types';
import { listStore } from './lists';

const searchValue = writable<string>('');
const searchResults = writable<Entry[]>([]);

async function search(type: ListType) {
	const snippet = listStore.getSnippet(type);

	const res = await fetch(`/api/${snippet}/search/${get(searchValue)}`);
	const data = await res.json();

	searchResults.set(Array.isArray(data) ? data : []);
}

function filter(entries: Entry[]) {
	searchResults.update((searchResults: Entry[]) => {
		return searchResults.filter((searchedEntry: Entry) => {
			return !entries.find((entry: Entry) => {
				return entry.title === searchedEntry.title;
			});
		});
	});
}

export const entrySearch = {
	searchValue,
	searchResults,
	search,
	filter
};
