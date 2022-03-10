// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries - Done below
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByvShbW2P5spLRVHWv3eg2Clf-iXLR-a8",
  authDomain: "house-marketplace-app-13c34.firebaseapp.com",
  projectId: "house-marketplace-app-13c34",
  storageBucket: "house-marketplace-app-13c34.appspot.com",
  messagingSenderId: "964345769863",
  appId: "1:964345769863:web:a8ff4c0d267253c9ceed22"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()