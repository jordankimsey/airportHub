
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDFZPV8umWjpabO2GwJB4w9W2hvcXDVDsw',
  authDomain: 'airporthub-48576.firebaseapp.com',
  projectId: 'airporthub-48576',
  storageBucket: 'airporthub-48576.appspot.com',
  messagingSenderId: '760537295943',
  appId: '1:760537295943:web:bf08ed60cb8ca859885562',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };