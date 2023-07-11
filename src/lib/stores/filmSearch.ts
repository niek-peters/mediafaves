import { get, writable } from 'svelte/store';

import type { Film } from '$lib/types';

export const searchValue = writable<string>('');
export const searchResults = writable<Film[]>([]);

export async function search() {
	const res = await fetch(`api/films/search/${get(searchValue)}`);
	const data = await res.json();

	searchResults.set(Array.isArray(data) ? data : []);
}

export function filter(films: Film[]) {
	searchResults.update((searchResults: Film[]) => {
		return searchResults.filter((searchedFilm: Film) => {
			return !films.find((film: Film) => {
				return film.title === searchedFilm.title;
			});
		});
	});
}
