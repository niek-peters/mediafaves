import type { LayoutServerLoad } from './$types';

import { auth, db } from '$src/hooks.server';

import { ListType, type List } from '$lib/types';

export const load: LayoutServerLoad = async ({ cookies }) => {
	const sessionCookie = cookies.get('session');

	console.log('reload');

	if (!sessionCookie)
		return {
			token: null,
			customToken: null,
			lists: [] as List[]
		};

	try {
		const decodedIdToken = await auth.verifySessionCookie(sessionCookie);
		const customToken = await auth.createCustomToken(decodedIdToken.uid);

		const snapFilmLists = await db
			.collection('filmlists')
			.where('owner_id', '==', decodedIdToken.uid)
			.select('name', 'style')
			.get();
		const filmLists = snapFilmLists.docs.map((doc) => {
			return {
				...doc.data(),
				id: doc.id,
				owner_id: decodedIdToken.uid,
				type: ListType.Films
			} as List;
		});

		const snapGameLists = await db
			.collection('gamelists')
			.where('owner_id', '==', decodedIdToken.uid)
			.select('name', 'style')
			.get();
		const gameLists = snapGameLists.docs.map((doc) => {
			return {
				...doc.data(),
				id: doc.id,
				owner_id: decodedIdToken.uid,
				type: ListType.Games
			} as List;
		});

		return {
			token: decodedIdToken,
			customToken: customToken,
			lists: filmLists.concat(gameLists)
		};
	} catch {
		return {
			token: null,
			customToken: null,
			lists: [] as List[]
		};
	}
};
