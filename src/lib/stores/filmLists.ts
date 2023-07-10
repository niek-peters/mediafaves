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
import { authStore } from './authStore';
import { filmListsRef } from '$lib/firebase.client';
import type { User } from 'firebase/auth';

export enum ListStyle {
	Column,
	Grid
}

export const loadingFilmLists = writable<boolean>(true);
export const filmLists = writable<FilmList[]>([]);

//FilmList[] functions
export async function loadLists(user: User) {
	const filmListQuery = query(filmListsRef, where('owner_id', '==', user.uid));
	const filmListDocs = await getDocs(filmListQuery);

	const lists: FilmList[] = [];
	filmListDocs.forEach((list) => {
		lists.push({
			id: list.id,
			...list.data()
		} as FilmList);
	});

	filmLists.set(lists);
	loadingFilmLists.set(false);
}

export function unloadLists() {
	filmLists.set([]);
}

export function getList(id: string) {
	return get(filmLists).find((list) => list.id === id);
}

export async function addList(list: Omit<NewFilmList, 'owner_id'>) {
	const { currentUser } = get(authStore);
	if (!currentUser) return;

	const ref = await addDoc(filmListsRef, { ...list, owner_id: currentUser.uid });

	filmLists.update((lists) => [
		...lists,
		{
			...list,
			id: ref.id,
			owner_id: currentUser.uid
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
	if (!list) return;

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
