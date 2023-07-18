import { getApps, initializeApp, deleteApp, getApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { getAuth, browserLocalPersistence, GoogleAuthProvider } from "firebase/auth";
const PUBLIC_FIREBASE_API_KEY = "AIzaSyA-5h0j1_2ncIvkkRxtRjpzzNB7FsbApyg";
const PUBLIC_FIREBASE_AUTH_DOMAIN = "mediafaves.firebaseapp.com";
const PUBLIC_FIREBASE_PROJECT_ID = "mediafaves";
const PUBLIC_FIREBASE_STORAGE_BUCKET = "mediafaves.appspot.com";
const PUBLIC_FIREBASE_MESSAGING_SENDER_ID = "975423208962";
const PUBLIC_FIREBASE_APP_ID = "1:975423208962:web:f566ae93457d77a2e9711b";
const PUBLIC_FIREBASE_MEASUREMENT_ID = "G-5JVEJ1XQKE";
const firebaseConfig = {
  apiKey: PUBLIC_FIREBASE_API_KEY,
  authDomain: PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: PUBLIC_FIREBASE_APP_ID,
  measurementId: PUBLIC_FIREBASE_MEASUREMENT_ID
};
function makeApp() {
  if (!getApps().length)
    return initializeApp(firebaseConfig);
  deleteApp(getApp());
  return initializeApp(firebaseConfig);
}
const app = makeApp();
const auth = getAuth(app);
auth.setPersistence(browserLocalPersistence);
const db = getFirestore(app);
new GoogleAuthProvider();
collection(db, "users");
collection(db, "lists");
