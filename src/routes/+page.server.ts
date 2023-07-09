import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ getClientAddress }) => {
	// console.log(getClientAddress());

	throw redirect(302, '/1');
};
