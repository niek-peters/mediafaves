import { TMDB_KEY } from '$env/static/private';
import { error, json, type RequestHandler } from '@sveltejs/kit';

import type { Show, ShowDetails } from '$lib/types';

export const GET: RequestHandler = async ({ params }) => {
	let query = params.query;
	if (!query) throw error(400, 'No query provided');

	query = query.toLowerCase();

	const res = await fetch(`https://api.themoviedb.org/3/search/tv?query=${query}`, {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: `Bearer ${TMDB_KEY}`
		}
	});

	let showsDetails: ShowDetails[] = (await res.json()).results;

	// Filter out unreleased shows
	showsDetails = showsDetails.filter(
		(showDetails) =>
			new Date(showDetails.first_air_date).getTime() < Date.now() &&
			showDetails.poster_path !== null
	);

	const shows: Show[] = showsDetails.map((showDetails) => ({
		imdb_id: showDetails.id,
		title: showDetails.name,
		release_date: showDetails.first_air_date,
		poster_url: `https://image.tmdb.org/t/p/w154${showDetails.poster_path}`,
		backdrop_url: showDetails.backdrop_path
			? `https://image.tmdb.org/t/p/original${showDetails.backdrop_path}`
			: null
	}));

	return json(shows);
};
