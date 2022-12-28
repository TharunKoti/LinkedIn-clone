import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBv8T-QjJJEXVs7x5uhL9387Ark8-X8Bfo",
    authDomain: "linkedin-clone-94fa0.firebaseapp.com",
    projectId: "linkedin-clone-94fa0",
    storageBucket: "linkedin-clone-94fa0.appspot.com",
    messagingSenderId: "50458782279",
    appId: "1:50458782279:web:7871909cb0346175155f62"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };