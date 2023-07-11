import { FIREBASE_ADMIN_PRIVATE_KEY, FIREBASE_ADMIN_CLIENT_EMAIL } from '$env/static/private';
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
