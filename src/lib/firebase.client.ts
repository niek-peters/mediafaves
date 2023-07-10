// Import the functions you need from the SDKs you need
import { deleteApp, getApp, getApps, initializeApp } from 'firebase/app';
import { collection, getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider, getAuth, browserLocalPersistence } from 'firebase/auth';

import {
	PUBLIC_FIREBASE_APIKEY,
	PUBLIC_FIREBASE_AUTHDOMAIN,
	PUBLIC_FIREBASE_PROJECTID,
	PUBLIC_FIREBASE_STORAGEBUCKET,
	PUBLIC_FIREBASE_MESSAGINGSENDERID,
	PUBLIC_FIREBASE_APPID,
	PUBLIC_FIREBASE_MEASUREMENTID
} from '$env/static/public';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: PUBLIC_FIREBASE_APIKEY,
	authDomain: PUBLIC_FIREBASE_AUTHDOMAIN,
	projectId: PUBLIC_FIREBASE_PROJECTID,
	storageBucket: PUBLIC_FIREBASE_STORAGEBUCKET,
	messagingSenderId: PUBLIC_FIREBASE_MESSAGINGSENDERID,
	appId: PUBLIC_FIREBASE_APPID,
	measurementId: PUBLIC_FIREBASE_MEASUREMENTID
};

// Initialize Firebase
let firebaseApp;
if (!getApps().length) {
	firebaseApp = initializeApp(firebaseConfig);
} else {
	firebaseApp = getApp();
	deleteApp(firebaseApp);

	firebaseApp = initializeApp(firebaseConfig);
}

export const app = firebaseApp;
export const auth = getAuth(firebaseApp);
await auth.setPersistence(browserLocalPersistence);
export const db = getFirestore(firebaseApp);
export const provider = new GoogleAuthProvider();

export const usersRef = collection(db, 'users');
export const filmListsRef = collection(db, 'filmlists');
