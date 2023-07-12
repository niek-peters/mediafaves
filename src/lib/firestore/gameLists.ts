import { addDoc, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';

import { gameListsRef } from '$src/hooks.client';
import { listStore } from '$stores/lists';

import type { List, NewList, ListStyle } from '$lib/types';

async function getAll(): Promise<List[]> {
	const docs = await getDocs(gameListsRef);
	const lists = docs.docs.map((doc) => doc.data());

	return lists as List[];
}

async function add(list: NewList): Promise<string> {
	const ref = await addDoc(gameListsRef, {
		...list,
		games: []
	});

	listStore.add({
		...list,
		id: ref.id
	});

	return ref.id;
}

async function remove(id: string) {
	listStore.remove(id);

	await deleteDoc(doc(gameListsRef, id));
}

async function updateName(id: string, name: string) {
	listStore.updateName(id, name);

	await updateDoc(doc(gameListsRef, id), { name });
}

async function updateStyle(id: string, style: ListStyle) {
	listStore.updateStyle(id, style);

	await updateDoc(doc(gameListsRef, id), { style });
}

export const gameLists = {
	getAll,
	add,
	remove,
	updateName,
	updateStyle
};
