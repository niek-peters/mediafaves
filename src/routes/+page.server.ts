import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent }) => {
	const data = await parent();

	if (data.filmLists.length && data.token) throw redirect(302, `/${data.filmLists[0].id}`);
};
