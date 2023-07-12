import { doc, getDoc, updateDoc } from 'firebase/firestore';

import { listsRef } from '$src/hooks.client';

import type { Entry } from '$lib/types';

async function save(id: string, entries: Entry[]) {
	const snap = await getDoc(doc(listsRef, id));
	if (!snap.exists) return;

	try {
		await updateDoc(doc(listsRef, id), { entries });
	} catch (e) {
		console.error(e);
	}
}

let timeOut: NodeJS.Timeout;
let firstTime = true;

function scheduleSave(id: string, entries: Entry[], time = 200) {
	if (firstTime) {
		firstTime = false;
		return;
	}
	if (timeOut) clearTimeout(timeOut);

	timeOut = setTimeout(async () => {
		await firestoreEntries.save(id, entries);
	}, time);
}

export const firestoreEntries = {
	save,
	scheduleSave
};
