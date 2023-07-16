import { error, json, type RequestHandler } from '@sveltejs/kit';

import type { Song, SongDetails } from '$lib/types';
import { spotifyToken } from '$src/hooks.server';

export const GET: RequestHandler = async ({ params }) => {
	if (!spotifyToken) throw error(500, 'Spotify token not found');

	let query = params.query;
	if (!query) throw error(400, 'No query provided');

	query = query.toLowerCase();

	const res = await fetch(`https://api.spotify.com/v1/search?q=track:${query}&type=track`, {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: `Bearer ${spotifyToken.access_token}`
		}
	});

	let songDetails: SongDetails[] = (await res.json()).tracks.items;

	// Filter out unreleased shows
	songDetails = songDetails.filter(
		(songDetails) =>
			new Date(songDetails.album.release_date).getTime() < Date.now() &&
			songDetails.album.images.length
	);

	const songs: Song[] = songDetails.map((songDetails) => ({
		spotify_id: songDetails.id,
		title: songDetails.name,
		release_date: songDetails.album.release_date,
		poster_url: getLowestAcceptableImage(songDetails.album.images).url,
		backdrop_url: songDetails.album.images[0].url,
		artists: songDetails.artists.map((artist) => artist.name)
	}));

	return json(songs);
};

function getLowestAcceptableImage(images: { url: string; height: number | null }[]) {
	const acceptableHeight = 200;

	let lowestAcceptableImage = images[0];

	// Loop backwards
	for (let i = images.length - 1; i >= 0; i--) {
		const image = images[i];

		if (image.height === null) continue;

		if (image.height >= acceptableHeight) {
			lowestAcceptableImage = image;
			break;
		}
	}

	return lowestAcceptableImage;
}
