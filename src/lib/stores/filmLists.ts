import { get, writable } from 'svelte/store';

export enum ListStyle {
	Column,
	Grid
}

export const filmLists = writable<FilmList[]>([]);

//FilmList[] functions
export function loadLists() {
	const filmListsString = localStorage.getItem('filmLists');

	if (filmListsString) filmLists.set(JSON.parse(filmListsString));
}

export function saveLists() {
	localStorage.setItem('filmLists', JSON.stringify(get(filmLists)));
}

export function getList(id: number) {
	return get(filmLists).find((list) => list.id === id);
}

export function addList(list: FilmList) {
	filmLists.update((lists) => [...lists, list]);
}

export function removeList(id: number) {
	filmLists.update((lists) => lists.filter((list) => list.id !== id));
}

// FilmList functions (ids are for the list the film is in)
export function getFilm(id: number, filmId: number) {
	const list = getList(id);
	if (!list) return undefined;

	return list.films.find((film) => film.id === filmId);
}

export function addFilm(id: number, film: Film) {
	filmLists.update((lists) => {
		const list = lists.find((list) => list.id === id);

		if (!list) return lists;
		list.films = [...list.films, film];
		return lists;
	});
}

export function updateFilm(id: number, film: Film) {
	filmLists.update((lists) => {
		const list = lists.find((list) => list.id === id);

		if (!list) return lists;
		list.films = list.films.map((f) => (f.id === film.id ? film : f));
		return lists;
	});
}

export function moveFilmTo(id: number, film: Film, index: number) {
	filmLists.update((lists) => {
		const list = lists.find((list) => list.id === id);
		if (!list) return lists;

		list.films.splice(list.films.indexOf(film), 1);
		list.films.splice(index, 0, film);

		return lists;
	});
}

export function removeFilm(id: number, filmId: number) {
	filmLists.update((lists) => {
		const list = lists.find((list) => list.id === id);

		if (!list) return lists;
		list.films = list.films.filter((film) => film.id !== filmId);
		return lists;
	});
}

export function setName(id: number, name: string) {
	filmLists.update((lists) => {
		const list = lists.find((list) => list.id === id);

		if (!list) return lists;
		list.name = name;
		return lists;
	});
}

export function setStyle(id: number, style: ListStyle) {
	filmLists.update((lists) => {
		const list = lists.find((list) => list.id === id);

		if (!list) return lists;
		list.style = style;
		return lists;
	});
}
