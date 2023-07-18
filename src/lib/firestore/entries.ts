import { doc, getDoc, updateDoc } from 'firebase/firestore';

import { auth, listsRef } from '$lib/firebase.client';

import type { Entry } from '$lib/types';

async function save(id: string, entries: Entry[]) {
	const snap = await getDoc(doc(listsRef, id));
	if (!snap.exists) return;

	if (!auth.currentUser) return;

	try {
		await updateDoc(doc(listsRef, id), { entries });
	} catch (e) {
		console.error(e);
	}
}

let timeOut: NodeJS.Timeout;
let firstTime = true;

function scheduleSave(id: string, entries: Entry[], delay = 200) {
	if (firstTime) {
		firstTime = false;
		return;
	}
	if (timeOut) clearTimeout(timeOut);

	timeOut = setTimeout(async () => {
		await firestoreEntries.save(id, entries);
	}, delay);
}

export const firestoreEntries = {
	save,
	scheduleSave
};
