import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDDVOK3wVWlhyY2bb658-sYd4ehv_dP-9s",
    authDomain: "netflix-clone-2d696.firebaseapp.com",
    projectId: "netflix-clone-2d696",
    storageBucket: "netflix-clone-2d696.appspot.com",
    messagingSenderId: "877467373327",
    appId: "1:877467373327:web:050f6f458d89bf49e4387a"
};

export const firebase = Firebase.initializeApp(firebaseConfig);

