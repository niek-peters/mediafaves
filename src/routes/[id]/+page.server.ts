import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

import { db } from '$src/hooks.server';

import type { DBList } from '$lib/types';

export const load: PageServerLoad = async ({ params }) => {
	async function getList() {
		const list = await db.collection('lists').doc(params.id).get();
		if (!list.exists) throw redirect(302, '/');

		return {
			id: list.id,
			...list.data()
		} as DBList;
	}

	return {
		dbList: getList()
	};
};
