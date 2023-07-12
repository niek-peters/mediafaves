import { doc, getDoc, updateDoc } from 'firebase/firestore';

import { gameListsRef } from '$src/hooks.client';

import type { Game } from '$lib/types';

async function save(listId: string, games: Game[]) {
	if (!listId) return;

	const snap = await getDoc(doc(gameListsRef, listId));
	if (!snap.exists) return;

	try {
		await updateDoc(doc(gameListsRef, listId), { games });
	} catch (e) {
		console.error(e);
	}
}

let timeOut: NodeJS.Timeout;
let firstTime = true;

function scheduleSave(listId: string, games: Game[], time = 200) {
	if (!listId) return;

	if (firstTime) {
		firstTime = false;
		return;
	}
	if (timeOut) clearTimeout(timeOut);

	timeOut = setTimeout(async () => {
		await firestoreGames.save(listId, games);
	}, time);
}

export const firestoreGames = {
	save,
	scheduleSave
};
