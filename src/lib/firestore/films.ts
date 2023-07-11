import { doc, getDoc, updateDoc } from 'firebase/firestore';
import type { Film } from '../stores/films';
import { filmListsRef } from '$src/hooks.client';

async function save(listId: string, films: Film[]) {
	const snap = await getDoc(doc(filmListsRef, listId));
	if (!snap.exists) return;

	await updateDoc(doc(filmListsRef, listId), { films });
}

export const firestoreFilms = {
	save
};
