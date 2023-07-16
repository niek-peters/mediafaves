import { writable } from 'svelte/store';

import { ListType, type Entry } from '$lib/types';

export const entries = writable<Entry[]>([]);

function getId(entry: Entry): number | string {
	return 'imdb_id' in entry
		? entry.imdb_id
		: 'imdb_show_id' in entry
		? entry.imdb_show_id
		: 'spotify_id' in entry
		? entry.spotify_id
		: 'cover_i' in entry
		? entry.cover_i
		: entry.rawg_id;
}

function getType(entry: Entry): ListType {
	return 'imdb_id' in entry
		? ListType.Films
		: 'imdb_show_id' in entry
		? ListType.Shows
		: 'game_id' in entry
		? ListType.Games
		: 'song_id' in entry
		? ListType.Songs
		: ListType.Books;
}

function add(entry: Entry) {
	return new Promise((res) => {
		entries.update((entries) => {
			res(null);
			return [...entries, entry];
		});
	});
}

function remove(id: number | string) {
	entries.update((entries) => entries.filter((entry) => getId(entry) !== id));
}

function moveTo(id: number | string, index: number) {
	entries.update((entries) => {
		const entry = entries.find((entry) => getId(entry) === id);
		if (!entry) return entries;

		const newEntry = entries.filter((entry) => getId(entry) !== id);
		newEntry.splice(index, 0, entry);

		return newEntry;
	});
}

export const entryHandlers = {
	getId,
	getType,
	add,
	remove,
	moveTo
};
