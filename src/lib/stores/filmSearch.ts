import { get, writable } from 'svelte/store';

import type { Film } from '$lib/types';

const searchValue = writable<string>('');
const searchResults = writable<Film[]>([]);

async function search() {
	const res = await fetch(`/api/films/search/${get(searchValue)}`);
	const data = await res.json();

	searchResults.set(Array.isArray(data) ? data : []);
}

function filter(films: Film[]) {
	searchResults.update((searchResults: Film[]) => {
		return searchResults.filter((searchedFilm: Film) => {
			return !films.find((film: Film) => {
				return film.title === searchedFilm.title;
			});
		});
	});
}

export const filmSearch = {
	searchValue,
	searchResults,
	search,
	filter
};
