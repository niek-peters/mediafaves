import { addDoc, arrayRemove, arrayUnion, deleteDoc, doc, updateDoc } from 'firebase/firestore';

import { listsRef } from '$lib/firebase.client';

import { listHandlers, lists } from '$stores/lists';

import { type NewList, type ListStyle, RankType } from '$lib/types';
import { get } from 'svelte/store';
import { entries, entryHandlers } from '../stores/entries';

async function add(list: NewList): Promise<string> {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	if (list.rankType === RankType.Tiers) list.tiers = [];

	const ref = await addDoc(listsRef, {
		...list,
		index: get(lists).length,
		entries: []
	});

	listHandlers.add({
		...list,
		id: ref.id,
		index: get(lists).length,
		entries: []
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

async function addTier(id: string, tierName: string) {
	listHandlers.addTier(id, tierName);

	await updateDoc(doc(listsRef, id), { tiers: arrayUnion(tierName) });
}

async function updateTier(id: string, tierName: string, newName: string) {
	listHandlers.updateTier(id, tierName, newName);

	// Get all entries in that tier
	const entriesInTier = get(entries).filter((entry) => entry.tier === tierName);
	if (!entriesInTier) return;

	// Update all entries in that tier
	entriesInTier.forEach((entry) => {
		entryHandlers.moveToTier(entryHandlers.getId(entry), newName);
	});

	const listsStore = get(lists);
	const list = listsStore.find((list) => list.id === id);
	if (!list) return;

	const tiers = list.tiers?.map((tier) => tier);
	if (!tiers) return;

	await updateDoc(doc(listsRef, id), { tiers });
}

async function removeTier(id: string, tierName: string) {
	listHandlers.removeTier(id, tierName);

	await updateDoc(doc(listsRef, id), { tiers: arrayRemove(tierName) });
}

export const firestoreLists = {
	add,
	remove,
	updateName,
	updateStyle,
	addTier,
	updateTier,
	removeTier
};
