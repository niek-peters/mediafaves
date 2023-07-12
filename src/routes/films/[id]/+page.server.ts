import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

import { db } from '$src/hooks.server';

import type { List, FilmList } from '$lib/types';

export const load: PageServerLoad = async ({ params }) => {
	const list = await db.collection('filmlists').doc(params.id).get();
	if (!list.exists) throw redirect(302, '/');

	const data = list.data() as FilmList;

	return {
		list: {
			id: list.id,
			name: data.name,
			owner_id: data.owner_id,
			style: data.style
		} as List,
		films: data.films
	};
};
