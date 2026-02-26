import { error, json, type RequestHandler } from '@sveltejs/kit';

import type { ResultData, Song, SongDetails, SpotifyToken } from '$lib/types';

import { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } from '$env/static/private';

async function getSpotifyToken() {
	const res = await fetch('https://accounts.spotify.com/api/token', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: `grant_type=client_credentials&client_id=${SPOTIFY_CLIENT_ID}&client_secret=${SPOTIFY_CLIENT_SECRET}`
	});

	spotifyToken = (await res.json()) as SpotifyToken;

	setTimeout(getSpotifyToken, spotifyToken.expires_in * 1000);
}

let spotifyToken: SpotifyToken | undefined;

export const GET: RequestHandler = async ({ params, url }) => {
	if (!spotifyToken) await getSpotifyToken();

	if (!spotifyToken) throw error(500, 'Spotify token not found');

	const limit = Number(url.searchParams.get('limit')) || 10;
	const offset = Number(url.searchParams.get('offset')) || 0;

	let query = params.query;
	if (!query) throw error(400, 'No query provided');

	query = query.toLowerCase();

	const res = await fetch(
		`https://api.spotify.com/v1/search?q=${query}&type=track&limit=${limit}&offset=${offset}`,
		{
			method: 'GET',
			headers: {
				accept: 'application/json',
				Authorization: `Bearer ${spotifyToken.access_token}`
			}
		}
	);

	const data = await res.json();

	const songDetails: SongDetails[] = data.tracks.items;

	const songs: Song[] = songDetails.map((songDetails) => ({
		spotify_id: songDetails.id,
		title: songDetails.name,
		release_date: songDetails.album.release_date,
		poster_url: songDetails.album.images.length
			? getLowestAcceptableImage(songDetails.album.images).url
			: '/empty_image.png',
		backdrop_url: songDetails.album.images.length
			? songDetails.album.images[0].url
			: '/empty_image.png',
		artists: songDetails.artists.map((artist) => artist.name)
	}));

	const resultData: ResultData = {
		count: data.tracks.total,
		limit,
		offset
	};

	return json({
		results: songs,
		...resultData
	});
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
