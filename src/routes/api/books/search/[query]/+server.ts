import { error, json, type RequestHandler } from '@sveltejs/kit';

import type { Book, BookDetails, ResultData } from '$lib/types';

export const config = {
	runtime: 'edge'
};

export const GET: RequestHandler = async ({ params, url }) => {
	let query = params.query;

	const limit = Number(url.searchParams.get('limit')) || 20;
	const offset = Number(url.searchParams.get('offset')) || 0;

	if (!query) throw error(400, 'No query provided');
	query = query.toLowerCase();

	const res = await fetch(
		`https://openlibrary.org/search.json?q=${query}&fields=cover_i,title,first_publish_year,author_name&limit=${limit}&offset=${offset}`
	);

	const data = await res.json();
	const booksDetails: BookDetails[] = data.docs;

	const books: Book[] = booksDetails.map((bookDetails) => ({
		cover_i: bookDetails.cover_i || crypto.randomUUID(),
		title: bookDetails.title,
		release_date: bookDetails.first_publish_year,
		poster_url: bookDetails.cover_i
			? `https://covers.openlibrary.org/b/id/${bookDetails.cover_i}-M.jpg`
			: '/empty_image.png',
		backdrop_url: bookDetails.cover_i
			? `https://covers.openlibrary.org/b/id/${bookDetails.cover_i}-L.jpg`
			: '/empty_image.png',
		authors: bookDetails.author_name
	}));

	const resultData: ResultData = {
		count: data.numFound,
		limit,
		offset
	};

	return json({
		results: books,
		...resultData
	});
};
