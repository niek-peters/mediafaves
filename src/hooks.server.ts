import {
	FIREBASE_ADMIN_PRIVATE_KEY,
	FIREBASE_ADMIN_CLIENT_EMAIL,
	SPOTIFY_CLIENT_ID,
	SPOTIFY_CLIENT_SECRET
} from '$env/static/private';
import { PUBLIC_FIREBASE_PROJECT_ID } from '$env/static/public';

import {
	cert,
	deleteApp,
	getApp,
	getApps,
	initializeApp,
	type AppOptions
} from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { getAuth } from 'firebase-admin/auth';
import type { SpotifyToken } from './lib/types';

const firebaseConfig: AppOptions = {
	credential: cert({
		privateKey: FIREBASE_ADMIN_PRIVATE_KEY,
		clientEmail: FIREBASE_ADMIN_CLIENT_EMAIL,
		projectId: PUBLIC_FIREBASE_PROJECT_ID
	}),
	databaseURL: `https://${PUBLIC_FIREBASE_PROJECT_ID}.firebaseio.com`
};

// Initialize Firebase
function makeApp() {
	if (!getApps().length) return initializeApp(firebaseConfig);

	deleteApp(getApp());
	return initializeApp(firebaseConfig);
}

export const app = makeApp();
export const auth = getAuth(app);
export const db = getFirestore(app);

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
