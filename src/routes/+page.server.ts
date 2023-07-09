import { addDoc, collection } from 'firebase/firestore';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { db } from '../hooks.server';

export const load: PageServerLoad = async ({ getClientAddress }) => {
	// console.log(getClientAddress());

	// Add a new document in collection "cities"
	await addDoc(collection(db, 'test'), {
		text: getClientAddress()
	});

	throw redirect(302, '/1');
};
