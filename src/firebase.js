// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBSL2QIMRvgdIk5DHV-ChRDgBWDbrtG6ew",
    authDomain: "yashsharma-portfolio.firebaseapp.com",
    projectId: "yashsharma-portfolio",
    storageBucket: "yashsharma-portfolio.appspot.com",
    messagingSenderId: "1020287258901",
    appId: "1:1020287258901:web:17a9395141c0c44009d91c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore()