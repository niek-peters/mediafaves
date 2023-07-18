import { get } from 'svelte/store';
import { browser } from '$app/environment';
import type { PageLoad } from './$types';

import { doc, getDoc } from 'firebase/firestore';

import { lists } from '$stores/lists';

import { listsRef } from '$lib/firebase.client';
import type { DBList } from '$lib/types';

export const prerender = false;

export const load: PageLoad = async ({ params }) => {
	if (!browser) return;

	async function getList() {
		const listsStore = get(lists);
		const list = listsStore.find((list) => list.id === params.id);
		if (list) return list;

		const snap = await getDoc(doc(listsRef, params.id));
		if (!snap.exists) return undefined;

		return {
			id: snap.id,
			...snap.data()
		} as DBList;
	}

	return {
		dbList: getList()
	};
};
