import { RAWG_API_KEY } from '$env/static/private';
import type { Game, GameDetails } from '$src/lib/types';
// import { twitchAuth } from '$src/hooks.server';
import { error, json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ params }) => {
	let query = params.query;
	if (!query) throw error(400, 'No query provided');

	query = query.toLowerCase();

	const res = await fetch(`https://api.rawg.io/api/games?key=${RAWG_API_KEY}&search=${query}`);

	let gamesDetails: GameDetails[] = (await res.json()).results;

	// Filter out unreleased films
	gamesDetails = gamesDetails.filter(
		(gameDetails) =>
			new Date(gameDetails.released).getTime() < Date.now() && gameDetails.background_image !== null
	);

	const games: Game[] = gamesDetails.map((gameDetails) => ({
		rawg_id: gameDetails.id,
		title: gameDetails.name,
		release_date: gameDetails.released,
		poster_url: gameDetails.background_image.replace('/media/games', '/media/resize/200/-/games'),
		backdrop_url: gameDetails.background_image
	}));

	return json(games);
};
