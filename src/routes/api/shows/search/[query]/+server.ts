import { TMDB_KEY } from '$env/static/private';
import { error, json, type RequestHandler } from '@sveltejs/kit';

import type { ResultData, Show, ShowDetails } from '$lib/types';

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

	const res = await fetch(`https://api.themoviedb.org/3/search/tv?query=${query}&page=${page}`, {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: `Bearer ${TMDB_KEY}`
		}
	});

	const data = await res.json();
	const showsDetails: ShowDetails[] = data.results;

	const shows: Show[] = showsDetails.map((showDetails) => ({
		imdb_show_id: showDetails.id,
		title: showDetails.name,
		release_date: showDetails.first_air_date,
		poster_url: showDetails.poster_path
			? `https://image.tmdb.org/t/p/w154${showDetails.poster_path}`
			: '/empty_image.png',
		backdrop_url: showDetails.backdrop_path
			? `https://image.tmdb.org/t/p/original${showDetails.backdrop_path}`
			: '/empty_image.png'
	}));

	const resultData: ResultData = {
		count: data.total_results,
		limit,
		offset
	};

	return json({
		results: shows,
		...resultData
	});
};
