import { RAWG_API_KEY } from '$env/static/private';
import type { Game, GameDetails, ResultData } from '$src/lib/types';
// import { twitchAuth } from '$src/hooks.server';
import { error, json, type RequestHandler } from '@sveltejs/kit';

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

	const res = await fetch(
		`https://api.rawg.io/api/games?key=${RAWG_API_KEY}&search=${query}&page=${page}`
	);

	const data = await res.json();
	const gamesDetails: GameDetails[] = data.results;

	const games: Game[] = gamesDetails.map((gameDetails) => ({
		rawg_id: gameDetails.id,
		title: gameDetails.name,
		release_date: gameDetails.released,
		poster_url: gameDetails.background_image
			? gameDetails.background_image.replace('/media/games', '/media/resize/200/-/games')
			: '/empty_image.png',
		backdrop_url: gameDetails.background_image ? gameDetails.background_image : '/empty_image.png'
	}));

	const resultData: ResultData = {
		count: data.count,
		limit,
		offset
	};

	return json({
		results: games,
		...resultData
	});
};
