// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6-lkvQn5cNMKkWBYT3BX1gEwu6U3KmXg",
  authDomain: "platemakrs.firebaseapp.com",
  projectId: "platemakrs",
  storageBucket: "platemakrs.appspot.com",
  messagingSenderId: "649289838009",
  appId: "1:649289838009:web:2710f9fc6d268222955a68"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const storage = getStorage(app);