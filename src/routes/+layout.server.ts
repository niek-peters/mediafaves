import type { LayoutServerLoad } from './$types';

import { auth, db } from '$src/hooks.server';

import { ListType, type List } from '$lib/types';

export const load: LayoutServerLoad = async ({ cookies }) => {
	const sessionCookie = cookies.get('session');

	if (!sessionCookie)
		return {
			token: null,
			customToken: null,
			filmLists: [] as List[]
		};

	try {
		const decodedIdToken = await auth.verifySessionCookie(sessionCookie);
		const customToken = await auth.createCustomToken(decodedIdToken.uid);

		const snap = await db
			.collection('filmlists')
			.where('owner_id', '==', decodedIdToken.uid)
			.select('name', 'style')
			.get();
		const filmLists = snap.docs.map((doc) => {
			return {
				...doc.data(),
				id: doc.id,
				owner_id: decodedIdToken.uid,
				type: ListType.Films
			} as List;
		});

		return {
			token: decodedIdToken,
			customToken: customToken,
			filmLists
		};
	} catch {
		return {
			token: null,
			customToken: null,
			filmLists: [] as List[]
		};
	}
};
