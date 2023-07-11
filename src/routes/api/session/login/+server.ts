import { error, json, type RequestHandler } from '@sveltejs/kit';

import { auth, db } from '$src/hooks.server';

import { ListType, type AuthStore, type List } from '$lib/types';

export const POST: RequestHandler = async ({ request, cookies }) => {
	const body = await request.json();
	if (!body.idToken) throw error(400, 'Missing idToken');

	// Set session expiration to 5 days
	const expiresIn = 60 * 60 * 24 * 5 * 1000;

	try {
		const sessionCookie = await auth.createSessionCookie(body.idToken, { expiresIn });
		cookies.set('session', sessionCookie, {
			maxAge: expiresIn,
			httpOnly: true,
			secure: true,
			path: '/'
		});

		const decodedIdToken = await auth.verifySessionCookie(sessionCookie);
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

		return json({
			auth: {
				uid: decodedIdToken.uid,
				name: decodedIdToken.name || 'Anonymous',
				email: decodedIdToken.email || ''
			} as AuthStore,
			filmLists: filmLists
		});
	} catch (err) {
		throw error(401, 'Invalid idToken');
	}
};
