import {
	addDoc,
	arrayUnion,
	deleteDoc,
	doc,
	getDocs,
	query,
	updateDoc,
	where
} from 'firebase/firestore';
import { get, writable } from 'svelte/store';
import { filmListsRef } from '../../hooks';
import { user } from './user';

export enum ListStyle {
	Column,
	Grid
}

export const filmLists = writable<FilmList[]>([]);

//FilmList[] functions
export async function loadLists() {
	const currentUser = get(user);
	if (!currentUser) return;

	const filmListQuery = query(filmListsRef, where('owner_id', '==', currentUser.id));
	const filmListDocs = await getDocs(filmListQuery);

	const lists: FilmList[] = [];
	filmListDocs.forEach((list) => {
		lists.push({
			id: list.id,
			...list.data()
		} as FilmList);
	});

	filmLists.set(lists);
}

export function unloadLists() {
	filmLists.set([]);
}

export function getList(id: string) {
	return get(filmLists).find((list) => list.id === id);
}

export async function addList(list: Omit<NewFilmList, 'owner_id'>) {
	const currentUser = get(user);
	if (!currentUser) return;

	const ref = await addDoc(filmListsRef, { ...list, owner_id: currentUser.id });

	filmLists.update((lists) => [
		...lists,
		{
			...list,
			id: ref.id,
			owner_id: currentUser.id
		}
	]);

	return ref.id;
}

export async function removeList(id: string) {
	await deleteDoc(doc(filmListsRef, id));

	filmLists.update((lists) => lists.filter((list) => list.id !== id));
}

// FilmList functions (ids are for the list the film is in)
export function getFilm(id: string, filmId: number) {
	const list = getList(id);
	if (!list) return undefined;

	return list.films.find((film) => film.imdb_id === filmId);
}

export async function addFilm(id: string, film: Film) {
	await updateDoc(doc(filmListsRef, id), { films: arrayUnion(film) });

	filmLists.update((lists) => {
		const list = lists.find((list) => list.id === id);
		if (!list) return lists;

		list.films = [...list.films, film];
		return lists;
	});
}

// export function updateFilm(id: number, film: Film) {
// 	filmLists.update((lists) => {
// 		const list = lists.find((list) => list.id === id);

// 		if (!list) return lists;
// 		list.films = list.films.map((f) => (f.id === film.id ? film : f));
// 		return lists;
// 	});
// }

export async function moveFilmTo(id: string, film: Film, index: number) {
	const lists = get(filmLists);

	const listIndex = lists.findIndex((list) => list.id === id);
	if (listIndex === -1) return;

	lists[listIndex].films.splice(lists[listIndex].films.indexOf(film), 1);
	lists[listIndex].films.splice(index, 0, film);

	filmLists.set(lists);

	await updateDoc(doc(filmListsRef, id), { films: lists[listIndex].films });
}

export async function removeFilm(id: string, filmId: number) {
	const lists = get(filmLists);

	const listIndex = lists.findIndex((list) => list.id === id);
	if (listIndex === -1) return;

	lists[listIndex].films = lists[listIndex].films.filter((film) => film.imdb_id !== filmId);

	await updateDoc(doc(filmListsRef, id), { films: lists[listIndex].films });

	filmLists.set(lists);

	// filmLists.update((lists) => {
	// 	const list = lists.find((list) => list.id === id);

	// 	if (!list) return lists;
	// 	list.films = list.films.filter((film) => film.id !== filmId);
	// 	return lists;
	// });
}

export async function setName(id: string, name: string) {
	await updateDoc(doc(filmListsRef, id), { name });

	filmLists.update((lists) => {
		const list = lists.find((list) => list.id === id);

		if (!list) return lists;
		list.name = name;
		return lists;
	});
}

export async function setStyle(id: string, style: ListStyle) {
	await updateDoc(doc(filmListsRef, id), { style });

	filmLists.update((lists) => {
		const list = lists.find((list) => list.id === id);

		if (!list) return lists;
		list.style = style;
		return lists;
	});
}
