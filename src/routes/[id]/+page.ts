import type { PageLoad } from './$types';

import type { DBList } from '$lib/types';
import { browser } from '$app/environment';
import { get } from 'svelte/store';
import { lists } from '$src/lib/stores/lists';
import { doc, getDoc } from 'firebase/firestore';
import { listsRef } from '$src/lib/firebase.client';

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
