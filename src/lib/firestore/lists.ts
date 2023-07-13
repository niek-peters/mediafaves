import { addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';

import { listsRef } from '$src/hooks.client';

import { listHandlers } from '$stores/lists';

import type { NewList, ListStyle } from '$lib/types';

async function add(list: NewList): Promise<string> {
	const ref = await addDoc(listsRef, {
		...list,
		entries: []
	});

	listHandlers.add({
		...list,
		id: ref.id
	});

	return ref.id;
}

async function remove(id: string) {
	listHandlers.remove(id);

	await deleteDoc(doc(listsRef, id));
}

async function updateName(id: string, name: string) {
	listHandlers.updateName(id, name);

	await updateDoc(doc(listsRef, id), { name });
}

async function updateStyle(id: string, style: ListStyle) {
	listHandlers.updateStyle(id, style);

	await updateDoc(doc(listsRef, id), { style });
}

export const firestoreLists = {
	add,
	remove,
	updateName,
	updateStyle
};