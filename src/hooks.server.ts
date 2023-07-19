import { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } from '$env/static/private';
import type { SpotifyToken } from './lib/types';

export const config = {
	runtime: 'nodejs18.x'
};

async function getSpotifyToken() {
	const res = await fetch('https://accounts.spotify.com/api/token', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: `grant_type=client_credentials&client_id=${SPOTIFY_CLIENT_ID}&client_secret=${SPOTIFY_CLIENT_SECRET}`
	});

	const token = (await res.json()) as SpotifyToken;
	spotifyToken = token;

	setTimeout(getSpotifyToken, token.expires_in * 1000);
}

getSpotifyToken();
export let spotifyToken: SpotifyToken | undefined;
