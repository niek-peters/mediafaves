import { doc, getDoc, updateDoc } from 'firebase/firestore';

import { filmListsRef } from '$src/hooks.client';

import type { Film } from '$lib/types';

async function save(listId: string, films: Film[]) {
	const snap = await getDoc(doc(filmListsRef, listId));
	if (!snap.exists) return;

	await updateDoc(doc(filmListsRef, listId), { films });
}

let timeOut: NodeJS.Timeout;
let firstTime = true;

function scheduleSave(listId: string, films: Film[], time = 200) {
	if (firstTime) {
		firstTime = false;
		return;
	}
	if (timeOut) clearTimeout(timeOut);

	timeOut = setTimeout(async () => {
		await firestoreFilms.save(listId, films);
	}, time);
}

export const firestoreFilms = {
	save,
	scheduleSave
};
