import { type List, type NewList, listStore, ListStyle } from '$lib/stores/lists';
import { filmListsRef } from '$src/hooks.client';
import { addDoc, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';

async function getAll(): Promise<List[]> {
	const docs = await getDocs(filmListsRef);
	const lists = docs.docs.map((doc) => doc.data());

	return lists as List[];
}

async function add(list: NewList): Promise<string> {
	const ref = await addDoc(filmListsRef, {
		...list,
		films: []
	});

	listStore.add({
		...list,
		id: ref.id
	});

	return ref.id;
}

async function remove(id: string) {
	listStore.remove(id);

	await deleteDoc(doc(filmListsRef, id));
}

async function updateName(id: string, name: string) {
	listStore.updateName(id, name);

	await updateDoc(doc(filmListsRef, id), { name });
}

async function updateStyle(id: string, style: ListStyle) {
	listStore.updateStyle(id, style);

	await updateDoc(doc(filmListsRef, id), { style });
}

export const firestoreLists = {
	getAll,
	add,
	remove,
	updateName,
	updateStyle
};
