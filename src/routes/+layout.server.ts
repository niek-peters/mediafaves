import type { LayoutServerLoad } from './$types';

import type { DecodedIdToken } from 'firebase-admin/auth';

import { auth, db } from '$src/hooks.server';

import type { List } from '$lib/types';

export const load: LayoutServerLoad = async ({ cookies }) => {
	const sessionCookie = cookies.get('session');

	if (!sessionCookie)
		return {
			token: null,
			customToken: null,
			lists: [] as List[]
		};

	async function getLists(decodedIdToken: DecodedIdToken) {
		const snapLists = await db
			.collection('lists')
			.where('owner_id', '==', decodedIdToken.uid)
			.select('name', 'style', 'type')
			.get();

		return snapLists.docs.map((doc) => ({
			...doc.data(),
			id: doc.id,
			owner_id: decodedIdToken.uid
		})) as List[];
	}

	try {
		const decodedIdToken = await auth.verifySessionCookie(sessionCookie);

		return {
			token: decodedIdToken,
			customToken: auth.createCustomToken(decodedIdToken.uid),
			lists: getLists(decodedIdToken)
		};
	} catch {
		return {
			token: null,
			customToken: null,
			lists: [] as List[]
		};
	}
};
