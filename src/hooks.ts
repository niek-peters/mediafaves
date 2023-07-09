// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { collection, getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider, getAuth, onAuthStateChanged } from 'firebase/auth';
import { clearUser, setUser } from '$lib/stores/user';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyA-5h0j1_2ncIvkkRxtRjpzzNB7FsbApyg',
	authDomain: 'mediafaves.firebaseapp.com',
	projectId: 'mediafaves',
	storageBucket: 'mediafaves.appspot.com',
	messagingSenderId: '975423208962',
	appId: '1:975423208962:web:f566ae93457d77a2e9711b',
	measurementId: 'G-5JVEJ1XQKE'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
export const auth = getAuth();

export const usersRef = collection(db, 'users');
export const filmListsRef = collection(db, 'filmlists');

onAuthStateChanged(auth, (user) => {
	if (user) {
		if (!user.displayName || !user.email) throw new Error('User has no display name or email');

		setUser({
			id: user.uid,
			name: user.displayName,
			email: user.email
		});
	} else {
		clearUser();
	}
});
