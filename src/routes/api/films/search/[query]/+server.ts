import { TMDB_KEY } from '$env/static/private';
import { error, json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ params }) => {
	let query = params.query;
	if (!query) throw error(400, 'No query provided');

	query = query.toLowerCase();

	// Special case for WALL-E
	if (query === 'wall-e') query = 'wall·e';

	const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}`, {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: `Bearer ${TMDB_KEY}`
		}
	});

	let filmsDetails: FilmDetails[] = (await res.json()).results;

	// Filter out unreleased films
	filmsDetails = filmsDetails.filter(
		(filmDetails) =>
			new Date(filmDetails.release_date).getTime() < Date.now() && filmDetails.poster_path !== null
	);

	const films: Film[] = filmsDetails.map((filmDetails) => ({
		id: filmDetails.id,
		// For WALL-E
		title: filmDetails.title.replaceAll('·', '-'),
		release_date: filmDetails.release_date,
		poster_url: `https://image.tmdb.org/t/p/w154${filmDetails.poster_path}`,
		backdrop_url: `https://image.tmdb.org/t/p/w300${filmDetails.backdrop_path}`
	}));

	return json(films);
};
