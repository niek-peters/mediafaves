import { error, json, type RequestHandler } from '@sveltejs/kit';

import type { Book, BookDetails } from '$lib/types';

export const GET: RequestHandler = async ({ params }) => {
	let query = params.query;
	if (!query) throw error(400, 'No query provided');

	query = query.toLowerCase();

	const res = await fetch(
		`https://openlibrary.org/search.json?q=${query}&fields=cover_i,title,first_publish_year&limit=10`
	);

	let booksDetails: BookDetails[] = (await res.json()).docs;

	// Filter out unreleased shows
	booksDetails = booksDetails.filter(
		(bookDetails) =>
			new Date(bookDetails.first_publish_year).getTime() < Date.now() && bookDetails.cover_i
	);

	const books: Book[] = booksDetails.map((bookDetails) => ({
		cover_i: bookDetails.cover_i,
		title: bookDetails.title,
		release_date: bookDetails.first_publish_year,
		poster_url: `https://covers.openlibrary.org/b/id/${bookDetails.cover_i}-M.jpg`,
		backdrop_url: `https://covers.openlibrary.org/b/id/${bookDetails.cover_i}-L.jpg`
	}));

	return json(books);
};
