// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZwWmIvy-mMo8p_tJoufX-wvwW0exoDrQ",
  authDomain: "poke-tienda.firebaseapp.com",
  projectId: "poke-tienda",
  storageBucket: "poke-tienda.appspot.com",
  messagingSenderId: "162594685297",
  appId: "1:162594685297:web:8d722453cee9b1bff236d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);