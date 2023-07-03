import { TMDB_KEY } from '$env/static/private';
import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ params }) => {
	const id = params.id;

	const res = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: `Bearer ${TMDB_KEY}`
		}
	});

	const filmDetails: FilmDetails = await res.json();

	const film: Film = {
		id: filmDetails.id,
		title: filmDetails.title,
		release_date: filmDetails.release_date,
		poster_url: `https://image.tmdb.org/t/p/w154${filmDetails.poster_path}`,
		backdrop_url: `https://image.tmdb.org/t/p/w300${filmDetails.backdrop_path}`
	};

	return json(film);
};
