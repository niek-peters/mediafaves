import { writable } from 'svelte/store';

import type { Film } from '$lib/types';

export const films = writable<Film[]>([]);

function add(film: Film) {
	return new Promise((res) => {
		films.update((films) => {
			res(null);
			return [...films, film];
		});
	});
}

function remove(imdb_id: number) {
	films.update((films) => films.filter((film) => film.imdb_id !== imdb_id));
}

function moveTo(imdb_id: number, index: number) {
	films.update((films) => {
		const film = films.find((film) => film.imdb_id === imdb_id);
		if (!film) return films;

		const newFilms = films.filter((film) => film.imdb_id !== imdb_id);
		newFilms.splice(index, 0, film);

		return newFilms;
	});
}

export const filmStore = {
	add,
	remove,
	moveTo
};
