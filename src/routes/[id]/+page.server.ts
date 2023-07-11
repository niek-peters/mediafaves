import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

import { db } from '$src/hooks.server';

import type { DBList, List } from '$stores/lists';

export const load: PageServerLoad = async ({ params }) => {
	const list = await db.collection('filmlists').doc(params.id).get();
	if (!list.exists) throw redirect(302, '/');

	const data = list.data() as DBList;

	return {
		list: {
			id: list.id,
			name: data.name,
			owner_id: data.owner_id,
			style: data.style,
			type: data.type
		} as List,
		films: data.films
	};
};
