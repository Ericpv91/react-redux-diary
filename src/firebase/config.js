import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite'



const firebaseConfig = {
  apiKey: "AIzaSyBv-5xNcrAxzP81Cmus0gMWoaT52trea2I",
  authDomain: "react-app-40e5a.firebaseapp.com",
  projectId: "react-app-40e5a",
  storageBucket: "react-app-40e5a.firebasestorage.app",
  messagingSenderId: "544901714219",
  appId: "1:544901714219:web:ef3d7ef575a297aeb6f56e"
};


export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)