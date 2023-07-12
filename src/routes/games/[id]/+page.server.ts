import { redirect } from '@sveltejs/kit';

import { db } from '$src/hooks.server';

import type { List, GameList } from '$lib/types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const list = await db.collection('gamelists').doc(params.id).get();
	if (!list.exists) throw redirect(302, '/');

	const data = list.data() as GameList;

	return {
		list: {
			id: list.id,
			name: data.name,
			owner_id: data.owner_id,
			style: data.style
		} as List,
		games: data.games
	};
};
