import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent }) => {
	const data = await parent();

	if (data.lists.length && data.token) throw redirect(302, `/${data.lists[0].id}`);
};
