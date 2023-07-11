import { auth } from '$src/hooks.server';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ cookies }) => {
	const sessionCookie = cookies.get('session');
	cookies.delete('session', { path: '/' });
	if (!sessionCookie) return new Response(null, { status: 204 });

	const decodedClaims = await auth.verifySessionCookie(sessionCookie);
	await auth.revokeRefreshTokens(decodedClaims.sub);

	return new Response(null, { status: 204 });
};
