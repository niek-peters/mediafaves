import { writable } from 'svelte/store';

export type Film = {
	imdb_id: number;
	title: string;
	release_date: string;
	poster_url: string;
	backdrop_url: string | null;
};

export const films = writable<Film[]>([]);

function add(film: Film) {
	films.update((films) => [...films, film]);
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
