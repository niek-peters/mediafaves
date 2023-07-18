// Import the functions you need from the SDKs you need
import { deleteApp, getApp, getApps, initializeApp, type FirebaseOptions } from 'firebase/app';
import { collection, getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider, getAuth, browserLocalPersistence } from 'firebase/auth';

import {
	PUBLIC_FIREBASE_API_KEY,
	PUBLIC_FIREBASE_AUTH_DOMAIN,
	PUBLIC_FIREBASE_PROJECT_ID,
	PUBLIC_FIREBASE_STORAGE_BUCKET,
	PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	PUBLIC_FIREBASE_APP_ID,
	PUBLIC_FIREBASE_MEASUREMENT_ID
} from '$env/static/public';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig: FirebaseOptions = {
	apiKey: PUBLIC_FIREBASE_API_KEY,
	authDomain: PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: PUBLIC_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	appId: PUBLIC_FIREBASE_APP_ID,
	measurementId: PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
function makeApp() {
	if (!getApps().length) return initializeApp(firebaseConfig);

	deleteApp(getApp());
	return initializeApp(firebaseConfig);
}

export const app = makeApp();
export const auth = getAuth(app);
auth.setPersistence(browserLocalPersistence);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();

export const usersRef = collection(db, 'users');
export const listsRef = collection(db, 'lists');
