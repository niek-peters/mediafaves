import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { filmStore, type Film } from '../stores/films';
import { auth, filmListsRef } from '$src/hooks.client';
import type { DBList } from '../stores/lists';

async function getAll(listId: string): Promise<Film[]> {
	const snap = await getDoc(doc(filmListsRef, listId));
	const list = snap.data() as DBList | undefined;

	return list?.films ?? [];
}

async function add(listId: string, film: Film) {
	filmStore.add(film);

	const snap = await getDoc(doc(filmListsRef, listId));
	const list = snap.data() as DBList | undefined;

	if (!list) return;

	await updateDoc(doc(filmListsRef, listId), { films: [...list.films, film] });
}

async function remove(listId: string, imdb_id: number) {
	filmStore.remove(imdb_id);

	const snap = await getDoc(doc(filmListsRef, listId));
	const list = snap.data() as DBList | undefined;

	if (!list) return;

	await updateDoc(doc(filmListsRef, listId), {
		films: list.films.filter((film) => film.imdb_id !== imdb_id)
	});
}

async function moveTo(listId: string, imdb_id: number, index: number) {
	filmStore.moveTo(imdb_id, index);

	const snap = await getDoc(doc(filmListsRef, listId));
	const list = snap.data() as DBList | undefined;

	if (!list) return;

	const film = list.films.find((film) => film.imdb_id === imdb_id);
	if (!film) return;

	const newFilms = list.films.filter((film) => film.imdb_id !== imdb_id);
	newFilms.splice(index, 0, film);

	await updateDoc(doc(filmListsRef, listId), { films: newFilms });
}

export const firestoreFilms = {
	getAll,
	add,
	remove,
	moveTo
};
