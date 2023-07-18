import { TMDB_KEY } from '$env/static/private';
import { error, json, type RequestHandler } from '@sveltejs/kit';

import type { Film, FilmDetails, ResultData } from '$lib/types';

export const config = {
	runtime: 'edge'
};

export const GET: RequestHandler = async ({ params, url }) => {
	let query = params.query;

	const limit = Number(url.searchParams.get('limit')) || 20;
	// Always rounded up to a multiple of 20
	const offset = 20 * Math.ceil(Number(url.searchParams.get('offset')) / 20) || 0;
	const page = Math.floor(offset / limit) + 1;

	if (!query) throw error(400, 'No query provided');
	query = query.toLowerCase();

	// Special case for WALL-E
	if (query === 'wall-e') query = 'wall·e';

	const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&page=${page}`, {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: `Bearer ${TMDB_KEY}`
		}
	});

	const data = await res.json();
	const filmsDetails: FilmDetails[] = data.results;

	const films: Film[] = filmsDetails.map((filmDetails) => ({
		imdb_id: filmDetails.id,
		// For WALL-E
		title: filmDetails.title.replaceAll('·', '-'),
		release_date: filmDetails.release_date || null,
		poster_url: filmDetails.poster_path
			? `https://image.tmdb.org/t/p/w154${filmDetails.poster_path}`
			: '/empty_image.png',
		backdrop_url: filmDetails.backdrop_path
			? `https://image.tmdb.org/t/p/original${filmDetails.backdrop_path}`
			: '/empty_image.png'
	}));

	const resultData: ResultData = {
		count: data.total_results,
		limit,
		offset
	};

	return json({
		results: films,
		...resultData
	});
};
